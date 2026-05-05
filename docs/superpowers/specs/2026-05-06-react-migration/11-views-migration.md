# 11 · Views Migration

**Date**: 2026-05-06
**Owner spec**: [00-roadmap.md](./00-roadmap.md)
**Phase**: P3 (six batches) + P4 (write views) + P5 (debug / dev)
**Depends on**: 03 (full primitives), 04 (atoms), 05 (data hooks), 06 (routes), 07 (layouts), 08 (forms), 09 (editors), 10 (charts / kbar / markdown), 12 (table — placeholder OK for P3)
**Feeds**: nothing — terminal spec

Defines the porting plan per view. This spec does **not** carry per-view implementation detail in code; it carries: each view's preconditions, the upstream features it touches, and the per-batch acceptance bar. Implementation per view is one PR per batch, scoped against this spec.

---

## Scope

- **In**: per-view dependency declaration, batch composition for P3, P4, P5, batch-level acceptance, parallelism strategy, sequencing notes.
- **Out**: implementation code, design adjustments per view (those happen during port and become open questions back to spec 02 if tokens shift).

---

## Decisions

- **One view = one folder under `src/pages/<area>/`.** Deeper structure only when more than 5 sibling files emerge.
- **Each batch is a PR group.** Inside a batch, individual views can ship as separate PRs as long as they don't break each other.
- **Placeholder Table is enough for P3.** Switch to real Table from spec 12 in P5 (or earlier if track delivers).
- **No view-side fetching outside `~/hooks/queries`.** All `useQuery` / `useMutation` calls live in the queries hook layer (spec 05). Views consume hooks; views never call `request` directly.
- **No view-side global state outside `~/stores` and `~/atoms`.** Views consume; never `create()` in-line.

---

## Per-view dependency table

| View | Path | Layout | Heavy upstream | Editor | Form | Chart | Realtime |
|---|---|---|---|---|---|---|---|
| login | `/login` | SetupLayout | — | — | static | — | — |
| setup | `/setup` | SetupLayout | — | — | static (multi-step) | — | — |
| setup-api | `/setup-api` | SetupLayout | — | — | static | — | — |
| dashboard | `/dashboard` | AppShell | G2 | — | — | yes | yes |
| posts list | `/posts/view` | AppShell | placeholder Table | — | filters | — | yes |
| posts write | `/posts/edit` | AppShell | haklex + agent + draft | RichEditor | metadata drawer | — | — |
| posts category | `/posts/category` | AppShell | — | — | tree-form (deep) | — | — |
| notes list | `/notes/view` | AppShell | placeholder Table | — | filters | — | yes |
| notes write | `/notes/edit` | AppShell | haklex + agent + draft | RichEditor | metadata drawer | — | — |
| notes topic | `/notes/topic` | AppShell + MasterDetail | — | — | static | — | — |
| comments | `/comments` | AppShell + MasterDetail | placeholder Table | — | inline reply | — | yes |
| drafts | `/drafts` | AppShell | Monaco diff | — | — | — | — |
| pages list | `/pages/list` | AppShell | placeholder Table | — | filters | — | — |
| pages write | `/pages/edit` | AppShell | haklex + agent + draft | RichEditor | metadata drawer | — | — |
| readers | `/readers` | AppShell + MasterDetail | infinite list | — | — | — | — |
| files list | `/files/list` | AppShell | upload | — | — | — | — |
| files orphans | `/files/orphans` | AppShell | bulk delete | — | — | — | — |
| files comment-images | `/files/comment-images` | AppShell | upload | — | — | — | — |
| says | `/says` | AppShell | — | — | inline create | — | yes |
| shorthand | `/recently` | AppShell | infinite scroll | — | inline create | — | — |
| projects | `/projects` | AppShell + MasterDetail | — | — | static | — | — |
| friends | `/friends` | AppShell + MasterDetail | — | — | static | — | yes |
| ai/* (6 views) | `/ai/*` | AppShell + MasterDetail | TQ persistence | — | filters | — | — |
| analyze | `/analyze` | AppShell | G2 + placeholder Table | — | filters | yes | — |
| setting | `/setting/:tab` | AppShell + MasterDetail | ConfigForm DSL | — | dynamic | — | — |
| extra-features/snippets | `/extra-features/snippets` | AppShell | Monaco + xterm | Monaco | metadata | — | — |
| extra-features/template | `/extra-features/assets/template` | AppShell | Monaco | Monaco | static | — | — |
| extra-features/webhooks | `/extra-features/webhooks` | AppShell | KV editor (form array) | — | static | — | — |
| extra-features/subscribe | `/extra-features/subscribe` | AppShell | — | — | static | — | — |
| extra-features/markdown | `/extra-features/markdown` | AppShell | upload + placeholder Table | — | static | — | — |
| maintenance/cron | `/maintenance/cron` | AppShell + MasterDetail | log view (ansi) | — | static | — | — |
| maintenance/backup | `/maintenance/backup` | AppShell | — | — | static | — | — |
| debug/* | `/debug/*` | AppShell | dev-only | varies | varies | — | — |
| dev/* | `/dev/*` | AppShell | dev-only | varies | varies | — | — |

---

## P3 batches (parallelizable)

### Batch 3a — list-read

**Views**: posts list, notes list, pages list, says, shorthand, manage-friends (list pane), manage-project (list pane), readers.

**Preconditions**:

- All P2 primitives.
- MasterDetailLayout (spec 07).
- `useDataTableState` (spec 04 / 05).
- placeholder Table renderer (spec 12 P0).

**Acceptance**:

1. Each view loads, paginates, sorts, filters.
2. Bulk-select bulk-delete works on at least one view (`comments` deferred to 3a-late if Table placeholder is rough).
3. Mobile drawer overlay works for master-detail variants.

### Batch 3b — comments + AI

**Views**: comments, ai/summary, ai/insights, ai/translation, ai/translation-entries, ai/tasks, ai/slug-backfill.

**Preconditions**:

- 3a-late (Comments depends on filter chips + bulk actions).
- TanStack Query persistence config working for `['ai']` keys.
- Polling hook (`useAiTaskPolling`).

**Acceptance**:

1. Comment filter (pending / marked / trash) preserves state across navigation.
2. Inline reply roundtrips and invalidates the right query.
3. AI task progress reflects in real time via polling; Float button badge counts active.
4. AI summary / insights / translation views render their respective master-detail panes.

### Batch 3c — analytics + dashboard polish

**Views**: dashboard (deepens beyond P1 stub), analyze.

**Preconditions**:

- `useG2Chart` (spec 10).
- placeholder Table for analyze tables.

**Acceptance**:

1. All dashboard widgets (`TopArticles`, `TagCloud`, `CommentActivity`, `PublicationTrend`, `CategoryPie`, `TrafficSource`, `ChartCard`) render with live data.
2. Analyze period switch (day / week / month) changes data without flicker (`keepPreviousData`).
3. Theme switch flips chart colors.

### Batch 3d — files

**Views**: files list, files orphans, files comment-images.

**Preconditions**:

- Upload component (P2 final or this batch).
- Image preview using blurhash if present.

**Acceptance**:

1. Drag-and-drop and click-pick upload with progress.
2. Bulk-delete orphans with confirmation.
3. Image grid lazy-loads with blurhash placeholders.

### Batch 3e — extras + setting

**Views**: setting (user / account / meta-preset tabs), extra-features/snippets, extra-features/template, extra-features/webhooks, extra-features/subscribe, extra-features/markdown.

**Preconditions**:

- ConfigForm DSL (spec 08).
- Monaco wrapper (spec 09).
- xterm wrapper (spec 09).

**Acceptance**:

1. Setting tabs render; field-level autosave works.
2. Snippets list + create + edit (Monaco) + log drawer (xterm) round-trips.
3. Template editor (Monaco) saves and previews.
4. Webhooks form array (KV editor) creates / removes rows.
5. Subscribe + markdown helper views work end-to-end.

### Batch 3f — small CRUD master-details

**Views**: notes/topic, manage-project (full incl. detail form), manage-friends (full incl. approval), maintenance/cron, maintenance/backup.

**Preconditions**:

- ConfigForm or static forms (spec 08).
- Log view for cron (spec 10 ansi).

**Acceptance**:

1. CRUD round-trips for each.
2. Friends approval workflow updates state correctly.
3. Cron view shows logs with correct ANSI rendering.
4. Backup view triggers + downloads correctly.

### Parallelism

3a → 3b is sequential (comments depends on patterns from 3a). 3c, 3d, 3e, 3f can run in any order after 3a finishes. Realistic pipeline (assuming 2 engineers):

```
week 1: 3a
week 2: 3a + 3b start (comments)
week 3: 3b finish + 3c start
week 4: 3c finish + 3d
week 5: 3e
week 6: 3f
```

---

## P4 batch — write views

**Views**: posts/edit, notes/edit, pages/edit, posts/category.

**Preconditions**:

- `<RichEditor>` direct-mount (spec 09).
- Draft system (spec 09).
- `<AgentChatPanel>` (spec 09).
- ConfigForm renderer + metadata drawer.
- `useBlocker(isDirty)` (spec 08).

**Acceptance**:

1. Posts edit: full create / load / save with metadata (slug, summary, category, tags, hidden, allowComment, copyright, customCreated).
2. Notes edit: full with note-specific metadata (mood, weather, location, music links, password, allowComment, hide, topicId, fm, count down, secret).
3. Pages edit: simpler metadata (title, slug, content).
4. Posts category: tree create / edit / delete with confirmation modals.
5. Draft recovery prompt fires on returning to a stale draft.
6. Agent chat applies suggestions back to the editor; re-apply works per the 2026-04-05 spec.
7. Block-navigation prompt fires on unsaved changes.

---

## P5 batch — debug, dev, polish

**Views**: debug/*, dev/* (auto-registered glob); plus first-paint optimization, bundle split, smoke E2E.

**Preconditions**:

- Vite glob import working (`import.meta.glob`).

**Acceptance**:

1. Debug routes auto-register from `src/pages/debug/**/*.tsx` (mirrors source).
2. Dev routes auto-register similarly.
3. First-paint LCP under 2 s on dev backend.
4. Largest JS chunk under ~400 KB gzipped (snapshot baseline; tighten in P5).
5. Smoke E2E: login → dashboard → create a post → save draft → publish → logout. One linear flow, Playwright preferred.

---

## Sequencing notes

- **Don't write a view before its preconditions land.** If a P3 view starts before P2 ships the primitive it needs, the view code paints itself into a corner — abort and switch to another view.
- **Don't refactor primitives mid-batch.** If a primitive turns out to be wrong while a view is being ported, file it back to spec 03 and ship the view with a stop-gap; clean up after the batch.
- **Don't merge a view PR without acceptance.** Each view's acceptance bar is the smallest checkable surface — don't drop it.

---

## Acceptance for spec 11

Per-batch acceptance above. Spec-level acceptance: by end of P5, every route in spec 06's topology renders the right view, with its acceptance bar met, on the new repo.

---

## Open questions

- **Setup multi-step UX.** Source repo's `setup` view is a single page with conditional sections. Decide during port whether to break into a stepped wizard with `<Tabs>`-style navigation or keep monolithic.
- **AI task queue button placement.** Float button (current source) or sidebar header item. Default float; move if visual review prefers.
- **Posts/category tree UI.** Source uses naive-ui tree; React equivalent is hand-rolled or `@tanstack/react-virtual`-backed. Decide during 3f port; small enough for hand-roll.
- **Per-view i18n.** Out of scope for migration. Strings stay Chinese-only.
- **Animation polish per view.** Default to `motion`'s `AnimatePresence` for list-item enter/exit. Detailed polish in P5.
