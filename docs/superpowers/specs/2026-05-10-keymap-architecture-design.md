# Keymap Architecture Design

**Date**: 2026-05-10
**Owner**: this file
**Phase**: P2 (infra, prerequisite to P3 list-view shortcuts)
**Depends on**: spec 03 (Modal / Popover / Drawer primitives), 06 (routing)
**Feeds**: 2026-05-10-posts-list-design.md, all subsequent P3 views with keyboard navigation, kbar (`mod+k`)

A scoped keyboard-shortcut runtime. Replaces the current ad-hoc `KbarProvider` listener with a unified registry, scope stack, and overlay-aware resolution model that any page or component can register against.

---

## Scope

- **In**: scope model, registration API, resolution algorithm, overlay integration with Modal/Popover/Drawer primitives, input-element suppression rule, integration with kbar (`mod+k`).
- **Out**: per-view chord lists (those live in each view's design), help/discovery UI (explicitly cut), key remapping, multi-platform parity layer beyond `mod` (= ⌘ on macOS, Ctrl elsewhere).

---

## Goals

1. A page can register chords (`j`, `k`, `x`, `mod+enter`) without leaking into other pages.
2. Opening a Modal / Popover / Drawer **suppresses** all underlying chords by default — inside the overlay only its own chords plus explicitly-`passthrough` chords fire.
3. Typing in `<input>`, `<textarea>`, or `[contenteditable]` does **not** trigger letter-class chords (single letter, optionally with `shift`); chords with `mod` / `ctrl` / `alt` (e.g., `mod+k`, `mod+enter`) still fire.
4. Zero third-party deps. ~200 LOC including chord parser.
5. Composable with existing `KbarProvider` — `mod+k` becomes a global passthrough chord.

## Non-goals

- **No help / discovery panel.** `?` is not reserved. The `description` field on registered chords stays in the API for future use (debugging, command-palette listing) but no rendered UI consumes it in this iteration.
- **No focus-bound sub-scopes inside a page.** Page = single scope. If posts-list right pane needs different bindings, those are gated by application state (e.g., `if (rightPaneFocus) ...`) inside the same page scope, not via a separate sub-scope.
- **No remapping.** Chords are coded; users cannot rebind.
- **No chord sequences in this iteration.** `g g` style two-step chords are out — single-press only. The parser will reject sequence input so we don't accidentally introduce ambiguity later.

---

## Three-layer scope model

```
┌─────────────────────┐
│  overlay-N          │  most recently opened modal / popover / drawer
│  ...                │
│  overlay-1          │
├─────────────────────┤
│  page (active)      │  registered by the route-level page component
├─────────────────────┤
│  global             │  always present; mod+k, navigation chords
└─────────────────────┘
```

- Exactly one `page` scope is active at a time. The route-level page component pushes its own scope on mount and pops on unmount. Switching routes pops the old page scope before pushing the new one.
- Multiple `overlay` scopes can stack. Each open Modal / Popover / Drawer pushes its own scope; closing pops it.
- `global` is created once at app bootstrap and never popped.

## Resolution algorithm

On `keydown`:

1. Short-circuit on IME composition (`event.isComposing === true`).
2. Parse `event` into a canonical chord string (using `event.key` plus modifier flags).
3. Apply editable suppression for letter-class chords (see Input-element suppression).
4. Apply `allowRepeat` filter (drop if `event.repeat === true` and binding does not opt in).
5. Walk the stack top-down. For each scope, look up the chord:
   - **If the topmost scope is an overlay** and the candidate binding is in `page` or `global` and is **not** marked `passthrough: true`, skip it (occlusion rule).
   - Otherwise, fire the handler. Call `event.preventDefault()` if the binding has `preventDefault !== false`. **Stop**.
6. If no scope binds the chord, do nothing.

Pseudocode:

```ts
function resolve(event: KeyboardEvent): void {
  if (event.isComposing || event.keyCode === 229) return

  const parsed = parse(event)         // throws on unrecognized event; caught & ignored
  if (!parsed) return

  if (isEditableTarget(event) && isLetterClass(parsed)) return

  const stack = manager.stack         // [global, page, ...overlays]
  const hasOverlay = stack.some(s => s.kind === 'overlay')

  for (let i = stack.length - 1; i >= 0; i--) {
    const scope = stack[i]
    const binding = scope.bindings.get(parsed.canonical)
    if (!binding) continue

    if (event.repeat && !binding.allowRepeat) return  // repeat-suppress wins over walk

    const isUnderlying = scope.kind !== 'overlay'
    if (hasOverlay && isUnderlying && !binding.passthrough) continue

    binding.handler(event)
    if (binding.preventDefault) event.preventDefault()
    return
  }
}
```

## Input-element suppression & IME

Implemented inside `resolve` before stack walk. Two gates:

**Gate 1 — IME composition.** While the user is composing CJK / Hangul / accented input, browsers fire `keydown` with `event.isComposing === true` (and the legacy `keyCode === 229`). Skip the manager entirely:

```ts
if (event.isComposing || event.keyCode === 229) return
```

This is critical for Chinese users — pressing `j` to start "ji"-pinyin must not move the cursor.

**Gate 2 — editable target.** Letter-class chords (single letter, optionally with `shift`; symbol/digit keys without `mod`/`ctrl`/`alt`) are suppressed when the key event originates inside an editable region:

```ts
const target = event.target as HTMLElement | null
const isEditable = !!(
  target?.closest('input, textarea, [contenteditable], [contenteditable="true"], [contenteditable="plaintext-only"]')
  ?? target?.isContentEditable
)

const isLetterClass =
  // chord has at most {shift} as a modifier and the key is a single character
  // (e.g., 'j', 'shift+d', '/', '?'). 'mod+k', 'alt+k', 'ctrl+k', 'enter',
  // 'escape', 'arrowdown' are NOT letter-class.
  chordIsLetterClass(parsedChord)

if (isEditable && isLetterClass) return    // native typing wins
```

`closest()` (rather than `matches()`) handles nested editables and Slate/CodeMirror-style hosts where the actual `event.target` is a descendant. `isContentEditable` covers `contenteditable="plaintext-only"` and inherited cases.

Modifier chords with `mod` / `ctrl` / `alt` always proceed regardless of focus target. `shift+letter` is **letter-class** (suppressed in editables) — this prevents `shift+d` from triggering "delete" while a user types capital `D` in the search bar. Reserved bindings that need to fire while editing should use a non-letter modifier, e.g., `mod+backspace` to delete.

This is the framework-level rule — individual handlers do not need to defend.

## Chord syntax

```
chord     := token ( '+' token )*
token     := modifier | key
modifier  := 'mod' | 'ctrl' | 'shift' | 'alt' | 'meta'
key       := letter | digit | symbol | named
letter    := 'a' .. 'z'
digit     := '0' .. '9'
symbol    := one of: / \ . , ; ' ` [ ] - = ? !
named     := 'enter' | 'escape' | 'space' | 'tab' | 'backspace' | 'delete' |
             'arrowup' | 'arrowdown' | 'arrowleft' | 'arrowright'
```

- `mod` = ⌘ on macOS, Ctrl elsewhere (detected via `navigator.platform` once at module init).
- `meta` is the literal Meta/⌘ key — use only when you need to differentiate from `mod`.
- The parser matches against `event.key` (not `event.code`). Letter chords are case-insensitive at registration; at runtime, `event.key` is lowercased before comparison. **Caveat**: `event.key` reports the layout-aware key. Users on Dvorak/AZERTY/Cyrillic typing `j` get whatever character their layout maps to QWERTY-`J`'s position — this is intentional (the *labelled* key wins, not the position). Symbols whose typing requires `shift` (e.g., `?` = `shift+/` on US QWERTY) are normalized: `?` and `shift+/` register as the same chord.
- Order of modifiers in the registered chord is normalized at registration time (canonical order: `mod ctrl alt shift key`); the parser produces the same canonical key for any equivalent input.
- Case-insensitive at parse time; canonical form is lowercase.

Examples:

```
'j'              letter
'shift+d'        letter-class (suppressed in editables)
'/'              symbol; equivalent to 'shift+/' on US QWERTY
'?'              symbol; equivalent to 'shift+/' on US QWERTY
'mod+k'          ⌘K on macOS, Ctrl+K elsewhere
'mod+enter'      ⌘↵ on macOS, Ctrl+↵ elsewhere
'arrowdown'      named key
```

Reject at registration time: empty string, sequences (`'g g'`), unknown tokens, and `tab` (reserved for native focus traversal — see Edge cases). Throw a clear error so violations are caught at module load, not at keypress.

---

## Public API

The model is **provider + hook**, not "hook returns nothing." A scope is a React Context boundary; `useShortcut` reads that context to decide where to register.

### Components

```tsx
// Mounts a scope on the stack while rendered. id is informational.
// kind defaults to 'page'; overlay primitives pass kind="overlay".
<ShortcutScope id="posts.list" kind="page">
  …children that may call useShortcut…
</ShortcutScope>
```

### Hooks

```ts
// Register a single chord into the nearest enclosing <ShortcutScope>.
// If `scope: 'global'`, register against the global scope regardless of
// where the call site lives in the tree.
function useShortcut(
  chord: string,
  handler: (e: KeyboardEvent) => void,
  opts?: {
    scope?: 'auto' | 'global'   // default 'auto' (= nearest enclosing scope)
    passthrough?: boolean       // default false; only meaningful for global chords
    preventDefault?: boolean    // default true; set false to let the browser also act
    allowRepeat?: boolean       // default false; if false, ignore event.repeat === true
    allowConflict?: boolean     // default false; see Conflict policy below
    description?: string        // future-use; no UI consumes it now
  },
): void
```

`useShortcut` calling **outside** any `<ShortcutScope>` and without `scope: 'global'` is a registration error (throws in dev, no-ops in prod).

### Internals (not exported)

```ts
type ScopeKind = 'global' | 'page' | 'overlay'
interface Scope {
  id: string
  kind: ScopeKind
  bindings: Map<string, Binding>
}
interface Binding {
  handler: (e: KeyboardEvent) => void
  passthrough: boolean
  preventDefault: boolean
  allowRepeat: boolean
  description?: string
}

class KeymapManager {
  stack: Scope[]                      // bottom (global) → top
  pushScope(s: Scope): void
  popScope(id: string): void
  register(scopeId: string, chord: string, b: Binding): () => void  // unregister
  attach(): void                      // installs single window keydown listener
}
```

A single `keydown` listener is attached on `window` once at app boot. Per-component listeners are not used; everything routes through the manager.

### Conflict policy

- A page or overlay scope may **shadow** a global non-passthrough chord without warning. The topmost wins (consistent with the resolution stack).
- A page or overlay scope **must not shadow** a global `passthrough: true` chord. Attempting to register the same chord at a non-global scope throws in dev unless the registration sets `allowConflict: true`. Production silently keeps the global passthrough (it stays reachable; the lower binding is dropped).
- Within the same scope, the same chord may not be registered twice. Throws in dev (asserts at module load); in production, last registration wins (matches StrictMode rebind semantics — see Edge cases).

### File layout

```
src/lib/keymap/
  index.ts                  // public API re-exports
  manager.ts                // KeymapManager singleton, attach()
  parse.ts                  // chord parser; throws on malformed input
  ShortcutScope.tsx         // Provider component + Context
src/hooks/
  useShortcut.ts            // reads ShortcutScope context; registers binding
```

`ShortcutScope.tsx` exports both the provider component and the context, plus a small `useScopeId()` hook used internally by `useShortcut`.

---

## Overlay integration

The Modal, Popover, and Drawer primitives in `src/components/ui/` are namespace exports — `Modal.Root`, `Modal.Trigger`, `Modal.Portal`, `Modal.Backdrop`, `Modal.Content`, `Modal.Body`, etc. The overlay scope is pushed by wrapping the children of the **content** part (which corresponds to BaseDialog's `Popup`):

```tsx
// inside src/components/ui/Modal/index.tsx — current shape:
//   const Content = forwardRef(({ size = 'md', className, ...rest }, ref) =>
//     <BaseDialog.Popup ref={ref} className={...} {...rest} />)
//
// patched to wrap with ShortcutScope:
const Content = forwardRef<HTMLDivElement, ModalContentProps>(function Content(
  { size = 'md', className, children, ...rest }, ref,
) {
  const id = useId()
  return (
    <BaseDialog.Popup ref={ref} className={cx(popupRecipe({ size }), className)} {...rest}>
      <ShortcutScope id={`modal:${id}`} kind="overlay">
        {children}
      </ShortcutScope>
    </BaseDialog.Popup>
  )
})
```

The same patch applies to `Drawer.Content` and `Popover.Popup` — wrap the children in a `<ShortcutScope kind="overlay">`. `BaseDialog.Popup` only mounts when the dialog is open, so the scope's lifecycle matches the visual state automatically (no extra `open` gating needed inside the wrapper).

This means inside a Modal:

```tsx
<Modal.Root open={open}>
  <Modal.Portal>
    <Modal.Backdrop />
    <Modal.Content>
      <Modal.Body>…</Modal.Body>
    </Modal.Content>
  </Modal.Portal>
</Modal.Root>
```

— any `useShortcut` calls in descendants of `Modal.Content` register into the modal's overlay scope. No explicit scope plumbing required at the consumer site. A popover that opens *over* a modal pushes a third scope; the manager handles arbitrary stacking.

**`Popover` ergonomics caveat.** Tooltips and short-lived popovers are also overlays; their scope pushes/pops on every open/close. This is correct but cheap (push/pop are O(1)).

## Integration with kbar (mod+k)

Current `KbarProvider` (`src/components/kbar/KbarProvider.tsx`) attaches its own `keydown` listener for `mod+k`, and `CommandPalette.tsx` (`src/components/kbar/CommandPalette.tsx:157+`) renders directly against `BaseDialog.*` (not the local `Modal.*` namespace). Two changes:

1. **Toggle binding**: replace KbarProvider's manual listener with
   ```tsx
   useShortcut('mod+k', () => setOpen(true), {
     scope: 'global',
     passthrough: true,
     description: '命令面板',
   })
   ```

2. **Overlay scope around the palette popup**: because `CommandPalette` uses raw `BaseDialog.*` (and not `Modal.Content` from our primitive), the auto-wrap above does not reach it. Add an explicit wrap inside the palette's popup:
   ```tsx
   <BaseDialog.Popup …>
     <ShortcutScope id="kbar" kind="overlay">
       …existing palette content…
     </ShortcutScope>
   </BaseDialog.Popup>
   ```
   This makes `j` / `k` / `x` chords from the underlying page correctly suppressed when the palette is open. ESC and ↵ register inside the palette's scope (or via Base UI's built-in dialog handlers).

Either solution — wrap or refactor `CommandPalette` to use `Modal.*` — is acceptable; the wrap is the smaller diff and ships with this spec.

---

## Worked example: posts list page

```tsx
function PostsListPage() {
  return (
    <ShortcutScope id="posts.list" kind="page">
      <PostsListBody />
    </ShortcutScope>
  )
}

function PostsListBody() {
  useShortcut('j', moveCursorDown, { description: '下一行' })
  useShortcut('k', moveCursorUp, { description: '上一行' })
  useShortcut('x', toggleSelectCurrent, { description: '选择当前' })
  useShortcut('mod+backspace', deleteSelected, { description: '删除所选' })
  useShortcut('p', togglePinCurrent, { description: '置顶切换', allowRepeat: false })
  useShortcut('mod+enter', openCurrentInEditor, { description: '编辑当前' })
  useShortcut('mod+a', selectAll, { description: '全选' })
  useShortcut('escape', clearSelectionOrCloseRightPane, { description: '清选 / 关右栏' })
  return <FullPage>…</FullPage>
}
```

- Navigating away from `/posts/view` unmounts the page; `<ShortcutScope>` unmount pops the scope. The next page renders its own.
- Opening kbar via ⌘K — kbar's overlay scope hides `j` / `k` etc.; only kbar's own bindings + `mod+k` (passthrough) fire.
- Clicking into the search input — letter-class chords (`j`, `x`, `p`) fall through to native typing; `mod+backspace`, `mod+enter`, `escape`, and `mod+a` still route to the page handler. Note `mod+a` may collide with the browser's "select all" — set `preventDefault: true` (the default) to claim it for our handler, or `false` to let the native behaviour also fire.

---

## Edge cases

| Case | Behaviour |
|---|---|
| Two scopes register the same chord | Topmost wins (resolution stops at first match). The lower scope's handler is shadowed until the upper scope is popped. |
| Same scope registers same chord twice | Throws in dev (assertion at module load); in production, last registration wins to avoid crashes. |
| Page scope mounts, then a deeper page mounts (nested routes) | Out of scope: this codebase uses flat routing. If nesting is introduced later, the deeper scope shadows the outer one — consistent with the stack model. |
| Page unmount during overlay open | Page scope pops while overlay stays on stack. Once the overlay closes and pops, the page slot is empty; chords with no page binding are silently dropped (correct). |
| App boot: no page scope yet | Only `global` chords fire (e.g., `mod+k`). Correct. |
| Autorepeat (key held) | `event.repeat === true` is dropped unless the binding declared `allowRepeat: true`. Default is **off** to prevent accidental destructive repeats (`mod+backspace` should not delete twice from a held key). Navigation chords like `j`/`k`/arrows that benefit from repeat must opt in (`allowRepeat: true`). |
| React StrictMode double-mount in dev | `<ShortcutScope>` and `useShortcut` lifecycles are idempotent: re-pushing the same scope id replaces (not duplicates); re-registering the same chord rebinds rather than throwing. Production registration still asserts. |
| IME / composition | `event.isComposing === true` (or legacy `keyCode === 229`) short-circuits the manager. No handlers fire while composing — Chinese / Japanese / Korean input never trips letter chords. |
| Focus restoration when overlay closes | Out of the manager's responsibility. `BaseDialog` already returns focus to its trigger; programmatic mounts must pass their own restore strategy. The keymap manager only re-enables underlying chord resolution; it does not move focus. |
| Tab / arrow accessibility | `tab` is reserved at the parser level — it cannot be registered. The browser's native focus traversal always wins. Arrow keys (`arrowup` / `arrowdown` / `arrowleft` / `arrowright`) are registrable, but each binding **must** check `event.target` and **call `event.preventDefault()` only when the binding is intended to consume the arrow** — page handlers should bail when target is inside a native scrollable container, `<select>`, or any element with role `listbox` / `menu` / `tree` whose internal arrow handling should win. The `<input>` / `<textarea>` / `[contenteditable]` cases are already covered by editable suppression for letter-class chords; arrows in those contexts must also defer to native (handler should early-return). Pre-empting Tab and arrows wholesale would break screen-reader / keyboard-only navigation, so the manager errs on the conservative side and asks each binding to opt in to consumption. |
| Modifier-only key (e.g., user presses Shift alone) | Not a chord; ignored — the parser requires a non-modifier key. |
| Browser shortcut collisions (`mod+t`, `mod+w`, `mod+r`, `mod+q`) | Out of our control on web. We do not register these. Pages that need `mod+t`-class bindings should use a different chord. |

## Testing

- `parse.ts` — unit tests on chord normalization, modifier ordering, rejection of malformed input.
- `manager.ts` — unit tests on push/pop/register, occlusion rule, input-element suppression.
- One integration test in `useShortcut.test.tsx` (vitest + happy-dom + Testing Library): register a chord in a page scope, simulate keydown, assert handler called; mount a Modal, assert page chord no longer fires; close Modal, assert page chord fires again.
- Estimated 8–12 cases.

## Acceptance

1. `useShortcut('j', cb)` inside a `<ShortcutScope id="..." kind="page">` fires on `j` keydown; the same hook in an unmounted tree does not fire.
2. Opening a Modal (any consumer of `Modal.Content`) suppresses all underlying chords except those marked `passthrough: true`. The same holds for Drawer and Popover.
3. Typing `j` into an `<input>` does not fire a registered `'j'` chord; typing `Shift+D` (capital `D`) into the same input does not fire a registered `'shift+d'` chord; typing `Cmd+K` does fire its global passthrough chord.
4. While composing CJK input (`event.isComposing === true`), no handlers fire.
5. Holding `mod+backspace` (`event.repeat === true`) fires the handler exactly once; holding `j` (registered with `allowRepeat: true`) fires repeatedly.
6. Closing the modal restores underlying chord behaviour. Reopening a different modal pushes a new scope; opening a popover inside a modal stacks correctly.
7. KbarProvider migrated to `useShortcut('mod+k', …, { scope: 'global', passthrough: true })`; CommandPalette wraps its popup in `<ShortcutScope kind="overlay">`. Opening kbar from inside a Modal works (passthrough fires); list-page chords are correctly suppressed while kbar is open.
8. `tab` cannot be registered (parser throws). Native Tab focus traversal is unaffected by the manager.
9. typecheck + oxlint clean on changed files; vitest cases above all green.

## Out-of-scope follow-ups (deferred, not blockers)

- Help panel listing all active chords with their descriptions.
- Chord sequences (`g g`).
- Per-platform key labels for mocks/tooltips (`⌘K` vs `Ctrl+K` rendering).
- User remapping.
