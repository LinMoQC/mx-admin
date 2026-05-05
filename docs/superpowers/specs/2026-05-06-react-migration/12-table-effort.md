# 12 · Table Effort

**Date**: 2026-05-06
**Owner spec**: [00-roadmap.md](./00-roadmap.md)
**Phase**: parallel track from end of P2 → lands in P5 (or earlier)
**Depends on**: 03 (primitives), 04 (`tableStateAtomFamily`), 05 (`useDataTableState`)
**Feeds**: 11 (every list view)

Defines the dedicated Table effort. Tables are the single most reused complex component in the admin (12+ heavy uses, every list view) and the only component the user singled out for separate attention. This spec captures the contract decision (build vs. wrap), the API, and the migration of source's `useDataTable` consumers.

---

## Scope

- **In**: build-vs-wrap decision, public API contract, column definition system, sorting / filtering / pagination / selection, virtualization decision, mobile rendering, integration with `useDataTableState`, placeholder API for P3, real implementation acceptance.
- **Out**: per-view column lists (those live with the views in spec 11).

---

## Decisions

- **TanStack Table v8** under the hood. Headless, framework-agnostic, well-supported, and pairs naturally with `react-hook-form` styling philosophy. Source uses naive-ui's all-in-one DataTable; we trade an opinionated component for headless + custom rendering and gain control of every visual detail.
- **One public component**: `<DataTable>`. Internally composes TanStack Table's hooks with our own row / cell / pagination / filter primitives.
- **State lives in `tableStateAtomFamily`** (spec 04). The component is controlled — no internal state. This keeps tables composable with deep linking (URL sync) without a refactor.
- **Mobile renders as cards**, not rows. The component switches strategy at the viewport breakpoint.
- **Virtualization is opt-in**, not default. Most admin lists fit on one page; `<DataTable virtualized>` enables `@tanstack/react-virtual` only when the data set warrants.
- **Server-side pagination is the default.** Client-side pagination is supported but flagged as the exception.

---

## Build vs. wrap

| Option | Pros | Cons |
|---|---|---|
| TanStack Table v8 + custom render | Full control of visual; small bundle; no opinion conflicts | More code to write |
| Wrap an existing styled lib (Mantine Table, AntD, MUI) | Faster start | Fights Linear design system; visual divergence inevitable |
| Hand-roll | Maximum freedom | Reinventing column / filter / sort / row-pinning gracelessly |

Decision: **TanStack Table v8 + custom render**. Aligns with Base UI / css.ts / kbar / motion philosophy of headless cores + our visuals.

---

## Public API

```tsx
// src/components/table/DataTable.tsx
export interface DataTableProps<T> {
  data: T[]
  columns: ColumnDef<T>[]
  totalCount: number               // server-side total
  state: TableState                // from useDataTableState
  setState: TableStateSetter
  loading?: boolean
  empty?: ReactNode
  onRowClick?: (row: T) => void
  rowKey: (row: T) => string
  selectable?: boolean
  bulkActions?: BulkAction<T>[]
  virtualized?: boolean
  density?: 'compact' | 'comfortable'
}

export function DataTable<T>(props: DataTableProps<T>): JSX.Element
```

### Column definition

```ts
import { type ColumnDef } from '@tanstack/react-table'

const columns: ColumnDef<Post>[] = [
  {
    id: 'select',
    header: ({ table }) => <Checkbox checked={table.getIsAllRowsSelected()} onChange={table.getToggleAllRowsSelectedHandler()} />,
    cell: ({ row }) => <Checkbox checked={row.getIsSelected()} onChange={row.getToggleSelectedHandler()} />,
    size: 40,
  },
  {
    id: 'title',
    header: '标题',
    accessorKey: 'title',
    cell: ({ row }) => <TitleCell post={row.original} />,
    enableSorting: true,
  },
  {
    id: 'category',
    header: '分类',
    accessorFn: (row) => row.category?.name,
    cell: ({ getValue }) => <Tag>{getValue() as string}</Tag>,
    meta: { filter: { kind: 'select', options: categoryOptions } },
  },
  {
    id: 'created',
    header: '创建时间',
    accessorKey: 'created',
    cell: ({ getValue }) => <RelativeTime date={getValue() as string} />,
    enableSorting: true,
    size: 160,
  },
  {
    id: 'actions',
    header: '',
    cell: ({ row }) => <RowActions post={row.original} />,
    size: 80,
  },
]
```

The `meta` field carries our extensions (filter kind, hide-on-mobile, alignment). Type-augmented via:

```ts
declare module '@tanstack/react-table' {
  interface ColumnMeta<TData, TValue> {
    filter?: { kind: 'select' | 'text' | 'date'; options?: SelectOption[] }
    hideOnMobile?: boolean
    align?: 'start' | 'center' | 'end'
  }
}
```

---

## Sub-components

```
src/components/table/
├── DataTable.tsx               # public component
├── DataTable.css.ts
├── parts/
│   ├── TableHeader.tsx         # column headers + sort + filter trigger
│   ├── TableRow.tsx            # row renderer (desktop)
│   ├── TableCard.tsx           # card renderer (mobile)
│   ├── TableEmpty.tsx
│   ├── TableLoading.tsx
│   ├── TablePagination.tsx
│   ├── TableBulkBar.tsx        # bulk actions floating bar when rows selected
│   ├── TableFilter/
│   │   ├── SelectFilter.tsx
│   │   ├── TextFilter.tsx
│   │   └── DateFilter.tsx
│   └── TableDensityToggle.tsx
└── hooks/
    ├── useDataTable.ts         # internal — wires TanStack with our props
    └── useColumnVisibility.ts  # auto-hide on mobile
```

---

## Mobile strategy

Below 768 px, `<DataTable>` switches:

- **Header collapses** into a sort/filter chip row.
- **Each row renders as a `<TableCard>`** containing the column cells stacked vertically with their column header as a label.
- **Columns with `meta.hideOnMobile`** drop on mobile.
- **Bulk actions** become a sticky footer bar instead of a floating top bar.

A view typically does not configure two column sets — the same column array drives both layouts. Cell renderers should be presentation-agnostic.

---

## Sort / filter / pagination

### Sort

Single-column sort. Click header toggles asc → desc → none. Sorting is **server-side** by default — the `setState` writes `sortBy` / `sortOrder` and the consumer's `useQuery` re-fires with the new params.

```ts
function onSortChange(columnId: string) {
  if (state.sortBy !== columnId) setState({ ...state, sortBy: columnId, sortOrder: 'asc' })
  else if (state.sortOrder === 'asc') setState({ ...state, sortOrder: 'desc' })
  else setState({ ...state, sortBy: null, sortOrder: null })
}
```

### Filter

Per-column filter via `meta.filter`. The header opens a Popover with the appropriate filter UI; values write to `state.filters[columnId]`. The consumer's `useQuery` consumes `state.filters` and pushes them as API params.

### Pagination

`<TablePagination>` shows page nav + page-size dropdown. Writes `page` and `pageSize` to state. Total comes from `totalCount` prop.

### Selection

Selection lives in `state.selectedRows: string[]`. `rowKey` extracts the unique id; `<DataTable>` passes the array to TanStack Table's `rowSelection` state.

Bulk actions appear when `state.selectedRows.length > 0`. Each `BulkAction` is `{ label: string, onRun: (rows: T[]) => Promise<void>, danger?: boolean, confirm?: string }`.

---

## URL sync

Optional. Views opt in:

```tsx
const [tableState, setTableState] = useUrlSyncedTableState('posts', {
  page: 1, pageSize: 20, sortBy: null, sortOrder: null, filters: {}, selectedRows: []
})
```

`useUrlSyncedTableState` reads / writes `useSearchParams`. Selection is **not** synced (avoids polluting URL with row-id arrays).

---

## Placeholder for P3

While the real `<DataTable>` is in flight, P3 views opt in via the same API but with a minimal renderer:

```tsx
// src/components/table/DataTable.placeholder.tsx
export function DataTable<T>({ data, columns, ...rest }: DataTableProps<T>) {
  // naive: render <table> with <thead>/<tbody>, no virtualization, no filter UI, basic pagination
  return <table>...</table>
}
```

The placeholder honors **the API**, not the visual polish. P3 views written against the placeholder need zero changes when the real component lands.

---

## `useDataTable` source migration

Source repo's `useDataTable` hook (`src/hooks/use-table.ts`) wraps a query + naive-ui DataTable + state. The new repo splits this:

- State → `useDataTableState(key)` (spec 05).
- Query → per-view `useXxxList(state)` query hook.
- View → composes `<DataTable state={...} setState={...} data={query.data} totalCount={...} columns={...} />`.

A small migration helper `useTableQuery({ key, queryFn })` combines `useDataTableState` + `useQuery` for views that don't need any custom plumbing.

---

## Virtualization

When opted in (`virtualized` prop), use `@tanstack/react-virtual` with a row-height estimator. Useful for `/files/orphans` (potentially thousands of orphan rows). For typical CRUD list views (50-200 rows), virtualization is unnecessary overhead.

---

## Density toggle

Two density tiers: `compact` (smaller padding, denser type) vs. `comfortable` (default). Stored per-table in the table state atom. Useful for power users.

---

## Acceptance for spec 12

### Placeholder acceptance (early P3)

1. `<DataTable>` placeholder renders columns, basic pagination, basic sort (no filter UI).
2. P3 batch 3a views work against the placeholder.

### Real implementation acceptance (P5 or earlier)

1. `<DataTable>` ships with sort / filter / pagination / selection / bulk actions / mobile cards.
2. All P3 views that consumed the placeholder render correctly without changes.
3. Filter Popovers render `select`, `text`, `date` filter kinds.
4. Bulk-action confirmation flows work (via Modal).
5. Mobile breakpoint switches to card rendering.
6. Density toggle persists per table.
7. `virtualized` prop renders 5,000 rows without jank (a Vitest + happy-dom or in-browser smoke test).
8. URL sync helper round-trips state through `?page=...&sort=...&filter[...]=...`.

---

## Open questions

- **Server vs client filters.** Default server-side; allow `meta.filterFn` to opt into client-side. Decide per filter case.
- **Column resize.** Source has it. New version: defer; revisit if real users complain.
- **Column visibility menu.** Toggle which columns to show. Useful for wide tables; defer unless a P3 view demands it.
- **Tree / nested rows.** Source comments view doesn't need it; categories use a separate tree view. No tree-table needed.
- **Sticky header / sticky first column.** Default sticky header; sticky first column off — turn on per-table only when needed.
