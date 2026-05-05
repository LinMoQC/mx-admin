# 05 · Data Layer

**Date**: 2026-05-06
**Owner spec**: [00-roadmap.md](./00-roadmap.md)
**Phase**: P0 (request, query client, auth-aware fetch) → P1 (full hook patterns + socket) → P3 (per-view hooks land progressively)
**Depends on**: 01 (deps), 04 (auth store mirror)
**Feeds**: 06 (auth uses request), 11 (per-view query hooks)

Defines the request layer, server-state layer, and realtime layer. The source repo's request stack is framework-agnostic and ports nearly unchanged; this spec captures the porting contract, the TanStack Query patterns, and the socket→cache wiring that replaces `window.bus`.

---

## Scope

- **In**: `request.ts` port, error class hierarchy, response transform, base URL resolution, `query-client.ts` config, persistence policy, queryKey convention, hook patterns (list / detail / paginated / mutation), `useDataTableState`, `useSocketIO` hook, socket-to-cache invalidation routing, port plan for `src/api/` modules.
- **Out**: Auth flow (→ 06), forms (→ 08), per-view hooks (→ 11 — they reference patterns defined here).

---

## Decisions

- **Keep the request stack.** `ofetch` + `BusinessError` / `SystemError` + `simpleCamelcaseKeys` + auto-unwrap of `{ data: [...] }` ports as-is. The source layer has zero Vue dependencies.
- **One QueryClient instance.** Lives in `src/lib/query-client.ts`. Provided to React via `<QueryClientProvider>` in `App.tsx`.
- **Persist only `['ai']`.** Mirrors source policy. Other queries are session-only.
- **QueryKey convention is hierarchical** matching source `src/hooks/queries/keys.ts` exactly. Renaming would invalidate the persisted cache during cutover (irrelevant on greenfield, but cheap to keep).
- **No `select` for response unwrap** — the request layer already unwraps `{ data: [...] }`. `select` is reserved for component-side projection (e.g. mapping to a smaller shape).
- **Mutations carry their own toasts and invalidations.** A `useMutation` hook attaches `toast.success(...)` and `queryClient.invalidateQueries(...)` in `onSuccess`. No global mutation observer.
- **Socket events drive cache invalidation, not bus emits.** A `useSocketIO` hook provides typed event subscriptions; admin-shell wires global topics into invalidations. Per-view subscriptions are local.

---

## Request layer

### `src/lib/request.ts`

Direct port of source `src/utils/request.ts`. Shape:

```ts
import { ofetch, type FetchOptions } from 'ofetch'
import { simpleCamelcaseKeys } from '@mx-space/api-client'
import { resolveBaseUrl } from '~/constants/env'

export class BusinessError extends Error {
  constructor(public code: number, message: string, public raw?: unknown) {
    super(message)
    this.name = 'BusinessError'
  }
}

export class SystemError extends Error {
  constructor(message: string, public status?: number, public raw?: unknown) {
    super(message)
    this.name = 'SystemError'
  }
}

export const request = ofetch.create({
  baseURL: resolveBaseUrl(),
  credentials: 'include',
  retry: 0,
  onRequest({ options }) {
    options.headers = new Headers(options.headers)
    options.headers.set('x-uuid', getOrCreateClientUUID())
    if ((options.method ?? 'GET').toUpperCase() === 'GET') {
      const url = new URL(options.url as string, location.origin)
      url.searchParams.set('_t', String(Date.now()))
      options.url = url.toString()
    }
  },
  onResponse({ response }) {
    response._data = transformResponse(response._data)
  },
  onResponseError({ response }) {
    const data = response._data
    if (response.status >= 500 || !data) {
      throw new SystemError(data?.message ?? 'Network error', response.status, data)
    }
    throw new BusinessError(data.code ?? response.status, data.message ?? 'Unknown error', data)
  },
})

function transformResponse<T>(input: unknown): T {
  if (input == null) return input as T
  const camelized = simpleCamelcaseKeys(input)
  if (camelized && typeof camelized === 'object' && 'data' in camelized && Array.isArray((camelized as any).data)) {
    return (camelized as any).data as T
  }
  return camelized as T
}
```

Notes:

- `getOrCreateClientUUID()` reads / writes a `uuid` localStorage key — same as source.
- `resolveBaseUrl()` in `src/constants/env.ts` reproduces the chain `sessionStorage → localStorage → window.injectData → import.meta.env.VITE_APP_BASE_API`.
- The `_t` cache-buster on GET is a source-repo behavior; preserve unless backend changes mandate otherwise.

### Error consumption pattern

- `BusinessError`: thrown for `< 500` with a structured backend payload. Components / hooks may inspect `code` and decide UX (e.g. specific 403 → redirect to login; specific 4xx → inline form error).
- `SystemError`: thrown for network failures and `>= 500`. Triggers a generic error toast in the global error handler.

A global TanStack Query error handler in `query-client.ts` maps `SystemError` → toast error, leaves `BusinessError` to the caller.

---

## QueryClient config

### `src/lib/query-client.ts`

```ts
import { QueryClient } from '@tanstack/react-query'
import { persistQueryClient } from '@tanstack/query-persist-client-core'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'
import { BusinessError } from './request'
import { toast } from 'sonner'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      gcTime: 10 * 60_000,
      retry: (failureCount, error) =>
        error instanceof BusinessError ? false : failureCount < 2,
      refetchOnWindowFocus: false,
      refetchOnMount: true,
    },
    mutations: {
      retry: false,
    },
  },
  // global error notifier — only for SystemError
  // BusinessError is callsite-handled
})

const persister = createAsyncStoragePersister({
  storage: window.localStorage,
  key: 'mx-admin-query-cache',
  throttleTime: 1000,
  serialize: JSON.stringify,
  deserialize: JSON.parse,
})

export function bootPersistence() {
  persistQueryClient({
    queryClient,
    persister,
    maxAge: 24 * 60 * 60_000,
    dehydrateOptions: {
      shouldDehydrateQuery: (q) => Array.isArray(q.queryKey) && q.queryKey[0] === 'ai',
    },
  })
}
```

`bootPersistence()` is called once from `main.tsx` after the `QueryClient` is constructed.

---

## queryKey convention

```
['<resource>', '<action>'?, ...args]

posts.all                     -> ['posts']
posts.list(params)            -> ['posts', 'list', params]
posts.detail(id)              -> ['posts', 'detail', id]
comments.list(state, params)  -> ['comments', 'list', { state, ...params }]
ai.summariesGrouped(params)   -> ['ai', 'summaries', 'grouped', params]
auth.session()                -> ['auth', 'session']
```

Implemented as a single `queryKeys` constant in `src/hooks/queries/keys.ts`:

```ts
export const queryKeys = {
  posts: {
    all: ['posts'] as const,
    list: (params: PostsListParams) => ['posts', 'list', params] as const,
    detail: (id: string) => ['posts', 'detail', id] as const,
  },
  // ... 35+ resource groups
}
```

Direct port from source `src/hooks/queries/keys.ts`. No structural changes; only ts-specific tweaks (drop `MaybeRefOrGetter`).

---

## Hook patterns

### List query

```ts
// src/hooks/queries/use-projects.ts
export function useProjectsList(params: ProjectsListParams) {
  return useQuery({
    queryKey: queryKeys.projects.list(params),
    queryFn: () => projectsApi.getList(params),
  })
}
```

- No `computed`, no `toValue`. Pass plain values; React re-renders re-call the hook with new args.
- Keep params primitive-stable when possible (memoize at the call site if shape changes).

### Detail query

```ts
export function useProject(id: string | undefined) {
  return useQuery({
    queryKey: queryKeys.projects.detail(id ?? ''),
    queryFn: () => projectsApi.getById(id!),
    enabled: Boolean(id),
  })
}
```

### Paginated list with placeholder

```ts
export function usePostsPage(page: number, size: number, filters: PostsFilters) {
  return useQuery({
    queryKey: queryKeys.posts.list({ page, size, ...filters }),
    queryFn: () => postsApi.getList({ page, size, ...filters }),
    placeholderData: keepPreviousData,
  })
}
```

`keepPreviousData` is the v5 helper — same UX as source's `keepPreviousData: true`.

### Mutation

```ts
export function useCreateProject() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: CreateProjectInput) => projectsApi.create(data),
    onSuccess: () => {
      toast.success('创建成功')
      queryClient.invalidateQueries({ queryKey: queryKeys.projects.all })
    },
    onError: (e) => {
      if (e instanceof BusinessError) toast.error(e.message)
    },
  })
}
```

### Optimistic mutation

Pattern reserved for high-frequency UX (comment status updates). Use `onMutate` to snapshot, `onError` to rollback. Document per-hook when used; not blanket policy.

### `useDataTableState`

```ts
// src/hooks/useDataTableState.ts
import { useAtom } from 'jotai'
import { tableStateAtomFamily } from '~/atoms/table'

export function useDataTableState(key: string) {
  const [state, setState] = useAtom(tableStateAtomFamily(key))

  return {
    page: state.page,
    pageSize: state.pageSize,
    sortBy: state.sortBy,
    sortOrder: state.sortOrder,
    filters: state.filters,
    selectedRows: state.selectedRows,

    setPage: (page: number) => setState((s) => ({ ...s, page })),
    setPageSize: (pageSize: number) => setState((s) => ({ ...s, pageSize, page: 1 })),
    setSort: (sortBy: string | null, sortOrder: 'asc' | 'desc' | null) =>
      setState((s) => ({ ...s, sortBy, sortOrder })),
    setFilter: (key: string, value: unknown) =>
      setState((s) => ({ ...s, filters: { ...s.filters, [key]: value }, page: 1 })),
    setSelectedRows: (selectedRows: string[]) =>
      setState((s) => ({ ...s, selectedRows })),
    reset: () => setState({ /* initial */ } as any),
  }
}
```

Used by P3 list views before spec 12's Table ships. Real Table replaces internals; the public API stays the same.

---

## API service modules

Source `src/api/` has 36 service modules — pure JS, no framework imports. Port unchanged into `src/api/`. Each module imports `request` and exposes typed functions.

| Source module | Notes for port |
|---|---|
| `posts.ts` | unchanged |
| `notes.ts` | unchanged |
| `comments.ts` | unchanged |
| `auth.ts` | mixed REST + better-auth client; better-auth client moves to `lib/auth-client.ts` (spec 06) |
| `categories.ts`, `pages.ts`, `drafts.ts`, `topics.ts`, `says.ts`, `links.ts`, `projects.ts`, `options.ts`, `ai.ts` | unchanged |
| `system.ts`, `analyze.ts`, `helper.ts`, `markdown.ts`, `tools.ts`, `webhook.ts`, `subscribe.ts`, `cron.ts`, `backup.ts`, `template.ts`, `snippets.ts`, `friends.ts`, `reader.ts`, `file.ts`, `linkApply.ts` | unchanged |
| `index.ts` | re-export barrel; trim if any modules drop |

A "no-op" port pass copies files verbatim, swaps `import { request } from '@/utils/request'` → `from '~/lib/request'`, runs `tsc --noEmit`, fixes any path-only diffs.

---

## Realtime — `useSocketIO`

### `src/lib/socket-client.ts`

Singleton socket client. Class-based like source, but exports a plain instance plus a typed event emitter.

```ts
import { io, type Socket } from 'socket.io-client'
import { resolveGatewayUrl } from '~/constants/env'

let socket: Socket | null = null

export function getSocket(): Socket {
  if (!socket) {
    socket = io(`${resolveGatewayUrl()}/admin`, {
      transports: ['websocket'],
      withCredentials: true,
      autoConnect: false,
    })
  }
  return socket
}

export function connectSocket() {
  const s = getSocket()
  if (!s.connected) s.connect()
}

export function disconnectSocket() {
  socket?.disconnect()
}
```

### Event topics (port from source)

```ts
// src/lib/socket-events.ts
export const SocketEvent = {
  GATEWAY_CONNECT: 'GATEWAY_CONNECT',
  GATEWAY_DISCONNECT: 'GATEWAY_DISCONNECT',
  AUTH_FAILED: 'AUTH_FAILED',
  COMMENT_CREATE: 'COMMENT_CREATE',
  POST_CREATE: 'POST_CREATE',
  POST_UPDATE: 'POST_UPDATE',
  POST_DELETE: 'POST_DELETE',
  NOTE_CREATE: 'NOTE_CREATE',
  NOTE_UPDATE: 'NOTE_UPDATE',
  NOTE_DELETE: 'NOTE_DELETE',
  PAGE_UPDATED: 'PAGE_UPDATED',
  SAY_CREATE: 'SAY_CREATE',
  SAY_UPDATE: 'SAY_UPDATE',
  SAY_DELETE: 'SAY_DELETE',
  LINK_APPLY: 'LINK_APPLY',
  CONTENT_REFRESH: 'CONTENT_REFRESH',
  ADMIN_NOTIFICATION: 'ADMIN_NOTIFICATION',
} as const
```

### `useSocketIO` hook

```ts
// src/hooks/useSocketIO.ts
export function useSocketEvent<E extends SocketEventName>(
  event: E,
  handler: (payload: SocketEventPayload<E>) => void
) {
  useEffect(() => {
    const s = getSocket()
    s.on(event, handler)
    return () => { s.off(event, handler) }
  }, [event, handler])
}
```

For multiple subscriptions in one component:

```ts
const handlers = useMemo(() => ({
  [SocketEvent.COMMENT_CREATE]: onCommentCreate,
  [SocketEvent.POST_UPDATE]: onPostUpdate,
}), [onCommentCreate, onPostUpdate])

useSocketEvents(handlers)
```

### Socket → cache invalidation

The `AppShell` (spec 07) mounts a `<SocketBridge />` component that subscribes to global events and invalidates queries:

```ts
// src/components/shared/SocketBridge.tsx (sketch)
useSocketEvent(SocketEvent.COMMENT_CREATE, () => {
  queryClient.invalidateQueries({ queryKey: queryKeys.comments.all })
  toast.info('新评论')
})
useSocketEvent(SocketEvent.POST_UPDATE, () => {
  queryClient.invalidateQueries({ queryKey: queryKeys.posts.all })
})
useSocketEvent(SocketEvent.CONTENT_REFRESH, () => {
  // source repo full-page-reloads; new repo invalidates all instead
  queryClient.invalidateQueries()
})
useSocketEvent(SocketEvent.AUTH_FAILED, () => {
  // delegated to auth flow in spec 06
  authClient.signOut()
})
```

Per-view ad-hoc subscriptions are allowed (e.g. analyze view subscribing to live counters), but the global invalidation table above is the default route.

`window.bus` is **not** instantiated. The migration audit step (spec 04) lists every `bus.emit` in source and routes each to:

1. `queryClient.invalidateQueries(...)` — most cases.
2. `toast.*(...)` — direct UX.
3. an explicit Zustand action — rare.

---

## Auth-aware fetch behaviors

When the request layer detects `BusinessError` with `code === 401` or socket emits `AUTH_FAILED`:

1. Reset `useAuthStore`.
2. `queryClient.clear()` — drop session-scoped data.
3. `navigate('/login', { replace: true })`.
4. Toast "Session expired" once (debounced — multiple parallel 401s should not spam).

Spec 06 owns the implementation; this spec defines the contract.

---

## Acceptance for spec 05

### P0 acceptance

1. `src/lib/request.ts` ports cleanly. `BusinessError` and `SystemError` are exported.
2. `src/lib/query-client.ts` constructs a `QueryClient` with the documented config; `bootPersistence()` runs from `main.tsx`.
3. `src/hooks/queries/keys.ts` defines the full `queryKeys` constant.
4. A smoke test fetches `appInfo` via `useAppInfoQuery()` and renders the result.
5. The 401 flow: a forced 401 from the dev server clears the auth store, calls `queryClient.clear()`, navigates to `/login`, and shows a single toast.

### P1 acceptance

1. `useSocketIO` hook subscribes to dev-emitted events without leaking listeners on unmount.
2. The global `<SocketBridge />` invalidates the right query key for `COMMENT_CREATE` (smoke test with mocked event).
3. `useDataTableState('comments')` round-trips page / sort / filter / selectedRows.
4. `[ai]`-prefixed query results survive a full page reload (persistence works).

### Per-view P3 acceptance (delegated to 11)

Each view exposes its own hooks under `src/hooks/queries/use-<resource>.ts` following the patterns above. No view-side fetch outside this layer.

---

## Open questions

- **Mutation invalidation breadth.** Some source mutations invalidate `posts.all` (broad) versus `posts.list(specificParams)` (narrow). Default to broad invalidation; tighten only if a view shows visible flicker. Track per-view in 11.
- **Optimistic updates inventory.** Source repo has a few optimistic patches (comment state). Decide per-view in 11.
- **Socket reconnect / backoff.** Use socket.io-client defaults until P1 reveals a need to tune.
- **Devtools.** `@tanstack/react-query-devtools` enabled in dev only via `import.meta.env.DEV`. Mount in `App.tsx`.
