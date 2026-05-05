# 03 · UI Primitives

**Date**: 2026-05-06
**Owner spec**: [00-roadmap.md](./00-roadmap.md)
**Phase**: P0 (5 primitives) → P2 (full set)
**Depends on**: 02 (theme contract, recipe conventions)
**Feeds**: 07 (layouts), 08 (form system), 11 (views)

Defines the headless-primitive layer wrapping `@base-ui-components/react` (Base UI) with Linear-styled css.ts recipes. Establishes the wrapper API contract so every primitive composes the same way and feels like one library to consumers.

---

## Scope

- **In**: file structure, wrapper API contract, P0 batch (Button, Input, Card, Modal, Toast), P2 batch (~20 more), motion-default policy, a11y rules, the policy for primitives Base UI does not provide (Scrollbar, Skeleton, Empty, Ellipsis, Space).
- **Out**: form binding (→ 08), table (→ 12), command palette (→ 10), editor surfaces (→ 09).

---

## Decisions

- **Wrap, don't re-export.** Every primitive is a thin component in `src/components/ui/<Name>/index.tsx` that composes a Base UI primitive with css.ts recipes. We never re-export Base UI directly. Reasons: lockable styling contract, escape hatches for future swaps, single point for default props (size, intent), and a stable API even if Base UI renames.
- **`forwardRef` everywhere.** Required for menus / popovers / floating positioning to compose.
- **`asChild` pattern via Base UI's `render` prop** when composing — no custom Slot. Base UI's primitives accept `render={(props) => <SomeChild {...props} />}` for slot polymorphism; we surface that one-to-one.
- **Recipes own variants.** Components own props. The component maps prop → recipe variant; never inlines style.
- **Motion is opt-in.** Primitives ship with sensible enter/exit animations via `motion` for overlays (Modal, Drawer, Tooltip, Popover, Toast). Buttons / inputs / cards animate on hover/focus via CSS transitions only.
- **One props philosophy: `intent | size | tone`.** Intent describes *purpose* (primary, secondary, danger). Size scales padding / type. Tone is rare — reserved for cases where a primitive needs a chromatic accent (e.g. Tag).
- **Class-merge via a tiny `cx` helper** in `src/utils/cx.ts`. No `clsx` dependency unless conditional logic explodes.

---

## File structure

```
src/components/ui/
├── Button/
│   ├── index.tsx              # exports Button + types
│   ├── Button.css.ts          # buttonRecipe
│   └── Button.test.tsx        # smoke + a11y
├── Input/
│   ├── index.tsx
│   ├── Input.css.ts
│   └── Input.test.tsx
├── Card/
│   ├── index.tsx
│   ├── Card.css.ts
│   └── Card.test.tsx
├── Modal/
│   ├── index.tsx              # Root, Trigger, Portal, Backdrop, Content, Close, Title, Description
│   ├── Modal.css.ts
│   └── Modal.test.tsx
├── Toast/
│   └── index.tsx              # re-exports `sonner` + a Toaster preset matching tokens
└── ...
```

Conventions:

- `index.tsx` exports the primitive plus its prop types (`ButtonProps`, `ModalRootProps`, etc.).
- A dedicated `<Name>.css.ts` colocated with the component owns the recipe(s).
- Tests are colocated; minimum: render, default props, a11y role assertion, one variant.
- A barrel `src/components/ui/index.ts` re-exports the curated public surface.

---

## Wrapper API contract

```ts
// pseudo-shape every primitive follows
type SizeProp = 'sm' | 'md' | 'lg'

interface PrimitiveProps {
  size?: SizeProp
  intent?: string
  tone?: string                  // optional, only when chromatic
  asChild?: never                // we use Base UI's `render` prop instead
  className?: string
  children?: React.ReactNode
}
```

Derived rules:

1. **`size` defaults to `'md'`.** Components without natural size variation omit the prop entirely.
2. **`intent` defaults vary per component.** Documented inline.
3. **`className` is appended after recipe classes**, allowing one-off escape hatches without breaking variant predictability.
4. **No `style` prop forwarding for primitives** — except for layout primitives where inline style is genuinely useful (positioning, dynamic z-index). Override styling goes through `className` + css.ts.
5. **Polymorphic primitives use Base UI's `render`.** Example: `<Button render={<Link to="/foo" />}>` swaps the underlying element to a router Link without losing styles or a11y.

---

## P0 batch — five primitives

These ship in P0 so the vertical slice in P1 can render `/login` and `/dashboard`.

### Button

```tsx
// src/components/ui/Button/index.tsx
import { forwardRef } from 'react'
import * as React from 'react'
import { buttonRecipe, type ButtonVariants } from './Button.css'
import { cx } from '~/utils/cx'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  loading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ intent = 'secondary', size = 'md', loading, className, children, disabled, ...rest }, ref) => (
    <button
      ref={ref}
      className={cx(buttonRecipe({ intent, size, state: disabled || loading ? 'disabled' : undefined }), className)}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? <Spinner size="sm" /> : children}
    </button>
  )
)

Button.displayName = 'Button'
```

- Recipe variants: `intent` ∈ {primary, secondary, tertiary, inverse, danger}; `size` ∈ {sm, md, lg}.
- Loading state shows a `<Spinner size="sm" />` (Spinner is also a primitive — defined in P2 batch but a simple inline SVG for P0).
- Hover, active, focus-visible all live in the recipe; no inline pseudo-class JS.
- a11y: native `<button>` semantics. `aria-busy={loading}` automatic.

### Input

- Wraps `<input>` directly (Base UI does not provide a TextField primitive — the headless approach is to wire your own).
- Variants: `size` ∈ {sm, md, lg}; `intent` ∈ {default, danger} for invalid state.
- States: `disabled`, `readonly`, `invalid`.
- Slot for prefix / suffix icons via `<InputRoot>` + `<InputField>` decomposition (used by 08-form-system).
- a11y: `aria-invalid`, `aria-describedby` for error messages.

### Card

- Pure layout primitive. Recipe variants: `elevation` ∈ {flat, raised, raisedStrong, popover} mapping to tokens from spec 02.
- `padding` prop ∈ {sm, md, lg, none} maps to spacing tokens.
- `radius` ∈ {md, lg, xl}.
- Sub-components: `<Card.Header>`, `<Card.Body>`, `<Card.Footer>` — each is just a styled `<div>`. They exist for spacing consistency, not interaction.

### Modal

Wraps `@base-ui-components/react/dialog`.

```tsx
// public surface
<Modal.Root open={open} onOpenChange={setOpen}>
  <Modal.Trigger render={<Button>Open</Button>} />
  <Modal.Portal>
    <Modal.Backdrop />
    <Modal.Content size="md">
      <Modal.Header>
        <Modal.Title>Title</Modal.Title>
        <Modal.Close render={<Button intent="tertiary" size="sm" />} />
      </Modal.Header>
      <Modal.Body>...</Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button intent="primary">Save</Button>
      </Modal.Footer>
    </Modal.Content>
  </Modal.Portal>
</Modal.Root>
```

- `Modal.Content` accepts `size` ∈ {sm, md, lg, xl, full} — maps to width tokens.
- Animation: `motion.div` wraps `<Modal.Content>`. Enter: opacity + scale 0.96 → 1 over `motion.duration.enter`. Exit: reverse over `motion.duration.exit`. Backdrop fades.
- Escape closes; click-outside closes (overridable).
- Focus trap: handled by Base UI; first focusable inside `Modal.Content` receives focus on open.
- Body scroll lock: handled by Base UI.

### Toast

```tsx
// src/components/ui/Toast/index.tsx
import { Toaster, toast } from 'sonner'

export const ToastViewport = () => (
  <Toaster
    position="top-center"
    theme="dark"
    toastOptions={{
      style: { /* token-driven */ },
      className: toastRecipe(),
    }}
  />
)

export { toast }
```

- One `<ToastViewport />` mounts at app root in `App.tsx`.
- The token-styled `toastRecipe` matches Card raised + hairline.
- Variants on call site: `toast.success(...)`, `toast.error(...)`, `toast.warning(...)`. The styling for each maps to admin semantic colors (success, danger, warning).
- a11y: sonner ships proper aria-live regions; we don't reimplement.

---

## P2 batch — full primitive set

Ships in P2 (after P1 calibrates tokens). Rough order of dependence so blockers come first:

| Primitive | Base UI source | Notes |
|---|---|---|
| **Drawer** | `dialog` (positioned) | Slide-in panel; reuses Modal animation kit. Variants: `placement` ∈ {right, left, bottom, top}. |
| **Tooltip** | `tooltip` | Default delay 300 ms. Hover + focus trigger. |
| **Popover** | `popover` | Floating-UI under the hood. Used heavily in editor toolbars. |
| **Tabs** | `tabs` | Accessible roving tabindex, controlled + uncontrolled. |
| **Select** | `select` | Headless dropdown; multi-select supported via `multiple` prop. Search-in-list deferred to a `Combobox` if needed. |
| **Switch** | `switch` | On/off toggle. |
| **Checkbox** | `checkbox` | Tri-state via `indeterminate`. |
| **Radio** | `radio-group` | Group + Item pattern. |
| **Tag** | own | Plain styled `<span>`. Variants: `tone` ∈ {neutral, primary, success, danger, warning, info}; `size` ∈ {sm, md}; `closable`. |
| **Avatar** | own | Variants: `size` ∈ {sm, md, lg, xl}; `shape` ∈ {circle, rounded}. Image fallback to initials. |
| **Badge** | own | Numeric or dot indicator on top-right of a slot. |
| **Pagination** | own | Page list + size dropdown. Internal state lifted to `useDataTableState` for tables. |
| **Skeleton** | own | Pulse animation via `motion`. Variants: `text`, `circle`, `rect`. |
| **Empty** | own | Centered empty-state composition: icon slot + title + description + optional CTA. |
| **Spinner** | own | Inline SVG; sizes match button sizes. |
| **Progress** | `progress` | Indeterminate + determinate. |
| **Ellipsis** | own | Pure CSS `text-overflow: ellipsis`. With Tooltip when overflowing — overflow detection via `useResizeObserver`. |
| **Scroll** | own | Compose-only — applies overflow + custom scrollbar styling on the children's root. No Base UI primitive needed. |
| **Space** | own | Layout-only flex/gap utility. Variants: `direction` ∈ {row, column}; `gap` ∈ spacing tokens; `align`, `justify`. |

### Primitives Base UI does not provide

These are pure markup + css.ts:

- **Skeleton** — animated background gradient via `motion.div`'s `animate` cycling opacity.
- **Empty** — composition of `<Card>` + icon + text. No interactive logic.
- **Ellipsis** — `useEffect` measures `scrollWidth > offsetWidth` and conditionally wraps in Tooltip.
- **Scroll** — wrapper `<div>` with overflow + WebKit scrollbar styles. Optional `simplebar-react` only if the cross-browser custom scrollbar story matters; default skip and use native styled scrollbar.
- **Space** — `<div>` with `display: flex` + `gap: theme.spacing[size]`.
- **Spinner** — inline SVG with `motion` rotation.

### Lookup-only primitives

These exist as exports from third-party libs without admin wrappers (decision made in 00):

- `lucide-react` icons — imported per-icon, no wrapper.
- `sonner` `toast()` function — used directly through the Toast index re-export.
- `kbar` — full app integration in spec 10, not a primitive.

---

## Motion defaults

| Primitive | Enter | Exit | Driver |
|---|---|---|---|
| Modal.Content | opacity 0→1, scale 0.96→1, `duration.enter` | reverse, `duration.exit` | motion |
| Modal.Backdrop | opacity 0→1, `duration.enter` | reverse, `duration.exit` | motion |
| Drawer | translate from edge 100%→0, `duration.enter` | reverse, `duration.exit` | motion |
| Tooltip | opacity 0→1, scale 0.95→1, delay 200ms | opacity → 0, instant | CSS transition |
| Popover | opacity 0→1, translate origin 4px→0, `duration.fast` | reverse, `duration.fast` | motion |
| Toast | sonner default | sonner default | sonner |
| Tabs indicator | translate via `motion.layout` | — | motion |
| Skeleton | continuous opacity 0.6 ↔ 1 | — | motion |
| Spinner | continuous rotate 0→360 | — | motion |
| Hover transitions | background-color, border-color, opacity over `duration.fast` | reverse | CSS transition |

`motion`'s `AnimatePresence` wraps overlay primitives. CSS transitions handle micro-interactions (hover, focus); motion handles entrances and gestures.

---

## a11y baseline

Mandatory across primitives:

- Focus-visible outlines from spec 02's `elevation.focusRing`. No `outline: none` without a visible replacement.
- Keyboard nav: Tab, Shift+Tab, Esc, Enter, Space match WAI-ARIA Authoring Practices for the role.
- All overlays trap focus (Modal, Drawer); transient overlays (Tooltip, Popover) do not.
- All form primitives accept `aria-label` or `aria-labelledby`. The form system in 08 wires labels automatically.
- Color contrast: ink on canvas / surface meets WCAG AA (≥ 4.5:1 for body, ≥ 3:1 for ≥ 18 px). Verify against the Linear palette during 02 calibration.
- Reduced-motion: `motion` honors `prefers-reduced-motion`; primitives explicitly opt into the system value via `useReducedMotion()`.

---

## Naming and barrel exports

```ts
// src/components/ui/index.ts
export { Button, type ButtonProps } from './Button'
export { Input, type InputProps } from './Input'
export { Card } from './Card'
export { Modal } from './Modal'
export { ToastViewport, toast } from './Toast'
// ... P2 additions
```

Consumers import via the barrel: `import { Button, Modal } from '~/components/ui'`.

---

## Acceptance for spec 03

### P0 acceptance

1. `Button` ships with all five intents (primary, secondary, tertiary, inverse, danger), three sizes, loading state.
2. `Input` ships with default and danger intents, three sizes, prefix/suffix slots.
3. `Card` ships with four elevations and four padding sizes.
4. `Modal` ships with all sub-components and motion defaults.
5. `ToastViewport` mounted in `App.tsx` shows the four semantic toasts via `toast.success/error/warning/info`.
6. All P0 primitives pass keyboard-only navigation smoke test.
7. Each P0 primitive has at least one Vitest spec covering render + one variant.

### P2 acceptance

1. All P2 primitives listed above ship with documented variants.
2. Drawer reuses Modal animation primitives (no separate drift).
3. Tabs, Select, Switch, Checkbox, Radio integrate cleanly with `react-hook-form` (verified by spec 08).
4. Skeleton, Empty, Ellipsis, Scroll, Space exist and are used in at least one P3 view to validate the API.
5. The barrel `~/components/ui` exports the full primitive set and is documented in `src/components/ui/README.md`.

---

## Open questions

- **Drawer vs sheet naming.** Source repo uses Drawer; Base UI uses dialog with positioning. Stick with Drawer. Decided.
- **DatePicker / TimePicker.** Not in P2 batch. Defer until first view that needs it (notes/edit metadata drawer in P4); decide between `react-day-picker` and a hand-rolled Base UI `popover` + custom calendar. Tracked as 03b.
- **Combobox vs Select-with-search.** If a P3 view needs search inside a select, build `Combobox` as a P2 follow-up. Default: ship Select first, observe.
- **Color picker.** One use site. Defer.
