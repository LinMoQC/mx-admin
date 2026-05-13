---
name: admin-page-layout
description: Mandatory layout convention for admin-vue3 pages. Apply when creating any new admin view, refactoring a page that uses tabs/full-width tables, or designing UI for new admin features. Triggers on "new admin page", "admin UI", "admin view", "管理面板新页面", "build dashboard page", "admin layout", or any task adding a screen under apps/admin/src/views/.
---

# admin-vue3 Page Layout (MUST)

**Default layout for every new admin page is `MasterDetailLayout`.** Tabs are forbidden as the top-level structural device. Pick a different option ONLY if the page has no list-like collection at all (e.g. setup wizard, login).

## Why

Sidebar is already deep; adding tabs inside a page doubles the navigation cost. Master-detail mirrors how every CMS-style admin screen in this project is already shaped — projects, comments, drafts, snippets, ai/*, settings, maintenance/cron, maintenance/backup, post categories, note topics, webhooks. Consistency is the feature; do not reinvent.

## The contract

```tsx
import { MasterDetailLayout, useMasterDetailLayout } from '~/components/layout'

<MasterDetailLayout
  showDetailOnMobile={showDetailOnMobile.value}
  defaultSize={0.3}   // list pane proportion
  min={0.2}
  max={0.4}
>
  {{
    list:   () => <YourListPane ... />,
    detail: () => selected ? <YourDetailPane ... /> : null,
    empty:  () => <YourEmptyState />,
  }}
</MasterDetailLayout>
```

**Pane responsibilities:**

| slot | what it owns |
|---|---|
| `list` | header strip (title + count), filter chips, the scrollable list/grid, paginator |
| `detail` | header strip (back btn on mobile, title, primary actions), scrollable body, footer actions |
| `empty` | rendered automatically when `detail` returns `null` — placeholder card with icon + hint |

**Selection state lives in the page setup**, NOT inside list / detail. Page selects `selectedId` ref, syncs to `route.query.id` via `watch`, mobile back via `showDetailOnMobile.value = false`.

**Header actions** (top-right) use `setActions(...)` from `useLayout()` inside `watchEffect` — never render action buttons inside the list pane.

## Building blocks (use these, do not roll your own)

- `MasterDetailLayout` + `useMasterDetailLayout()` from `~/components/layout`
- `useDataTable<T>` from `~/hooks/use-data-table` for paginated lists
- `useLayout` from `~/layouts/content` for `setActions` / `setHeaderClass`
- `HeaderActionButton` from `~/components/button/header-action-button`
- `RelativeTime`, `NScrollbar`, `NPagination`, `NButton`, `NPopconfirm` from naive-ui
- List item style: see `views/manage-project/components/project-list.tsx`
- Detail pane shell: see `views/manage-project/components/project-detail-panel.tsx`

## When the page has MULTIPLE entity kinds

(e.g. enrichment screen needs to manage cache rows AND screenshot blobs AND a URL probe console)

**Do not add tabs.** Choose ONE of:

1. **Sidebar sub-routes** — each entity is its own route under the section. Sidebar grows but each page stays master-detail. Best when entities are big.
2. **Source switcher inside `list` pane header** — segmented control in the list pane top strip swaps the data source, detail pane re-binds to selected item. Good when entities share the same detail shape.
3. **Dedicated detail pane modes** — list pane stays homogeneous (one entity kind), secondary entities surface as embedded sections inside the detail pane.

If forced to pick one without context, pick (1).

## Forbidden patterns

- Top-level `NTabs` inside a view component
- Full-width table-only pages (use list-pane + detail-pane instead)
- Action buttons rendered inside the list (use `setActions` for the top bar; row-scoped actions go on hover inside the row)
- Selection state stored inside the list component (must live in the page setup so URL/back/mobile flows work)
- Separate components for desktop/mobile — `MasterDetailLayout` already collapses on mobile via `useMasterDetailLayout().isMobile`

## Reference views

Read one before writing a new page:

- `views/manage-project/index.tsx` — canonical list + create-or-edit detail
- `views/comments/index.tsx` — list + filter strip + detail viewer
- `views/extra-features/snippets/index.tsx` — list + create + edit
- `views/ai/tasks.tsx` — read-only list + read-only detail
- `views/maintenance/cron.tsx` — actions-heavy detail
