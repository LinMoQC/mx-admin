# 02 · Design Tokens

**Date**: 2026-05-06
**Owner spec**: [00-roadmap.md](./00-roadmap.md)
**Phase**: P0 (v0) → calibrated end of P1
**Depends on**: 01 (vanilla-extract plugin wired)
**Feeds**: 03 (primitives consume tokens), 07 (layouts), 09/10 (editors and charts theme)

Defines the design-token system for `admin-react`. Source of truth: the Linear dark-canvas DESIGN.md the user supplied during brainstorming. This spec maps that DESIGN into `@vanilla-extract/css` exports, lays down theme contracts, and locks the contract that primitives in spec 03 will consume.

---

## Scope

- **In**: token namespaces (color, typography, spacing, radius, elevation, motion), theme contract, dark theme implementation, font-stack policy, runtime theme switching mechanism, recipe shape conventions.
- **Out**: actual primitive components (→ 03), per-page layouts (→ 07), animation variants (→ 03 motion section).

---

## Decisions

- **Dark-first**. Ship dark theme matching Linear marketing in P0/P1. Light theme is **planned but not blocking** — the contract reserves slots, the implementation lands as a follow-up under 02b.
- **`createTheme` + `createThemeContract`** to permit a future light theme without renaming consumers.
- **Tokens live in `src/styles/theme.css.ts`** and are re-exported through a barrel for ergonomic imports.
- **Recipes** (`@vanilla-extract/recipes`) handle variants. No `sprinkles` — utility-class atoms encourage anti-patterns once primitives are in place.
- **No CSS variables defined outside the theme contract.** All runtime-tunable values flow through the contract so theme switching stays declarative.
- **Static class composition for static styling, inline `style` for motion-driven dynamic values.** css.ts is compile-time; transient interpolations belong on `style`.
- **Substitute fonts**: Inter for display + text, JetBrains Mono for mono. Linear's proprietary cuts are not available; the DESIGN spec sanctions Inter/Geist as the closest free substitute.

---

## Token namespaces

### color

Direct port of Linear's palette from DESIGN.md. Names match DESIGN identifiers exactly so a designer can cross-reference.

```ts
// src/styles/tokens/color.ts
export const color = {
  // brand
  primary: '#5e6ad2',
  primaryHover: '#828fff',
  primaryFocus: '#5e69d1',
  brandSecure: '#7a7fad',
  onPrimary: '#ffffff',

  // surface ladder
  canvas: '#010102',
  surface1: '#0f1011',
  surface2: '#181a1c',
  surface3: '#1f2124',
  surface4: '#26282b',

  // hairlines
  hairline: '#23252a',
  hairlineStrong: '#2f3137',
  hairlineTertiary: '#1a1c20',

  // inverse (for the rare white-pill CTA)
  inverseCanvas: '#ffffff',
  inverseSurface1: '#f5f5f5',
  inverseSurface2: '#ebebeb',
  inverseInk: '#0c0d0e',

  // text
  ink: '#f7f8f8',
  inkMuted: '#d0d6e0',
  inkSubtle: '#8a8f98',
  inkTertiary: '#62666d',

  // semantic
  semanticSuccess: '#27a644',
  semanticOverlay: 'rgba(0, 0, 0, 0.65)',

  // admin-only additions (not in Linear marketing — needed for an admin app)
  semanticDanger: '#e5484d',
  semanticWarning: '#f5a524',
  semanticInfo: '#3e63dd',
} as const
```

> Note: surface-1 through surface-4 hex values above are placeholders along the ladder (`#0f1011 → #26282b`). DESIGN.md sources these from Linear's `--color-bg-level-*` CSS variables but does not list exact hex per step. Confirm against the linear.app site computed styles during 02 implementation; values may shift by ~2 lightness points.

**Admin-only semantic colors** (danger / warning / info) are an explicit deviation from Linear marketing, justified because the admin surface needs alarm states the marketing site never renders. Use sparingly, never decoratively.

### typography

```ts
// src/styles/tokens/typography.ts
export const fontFamily = {
  display: "'Inter', 'SF Pro Display', -apple-system, system-ui, 'Segoe UI', Roboto, sans-serif",
  text: "'Inter', 'SF Pro Text', -apple-system, system-ui, 'Segoe UI', Roboto, sans-serif",
  mono: "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace",
} as const

export const typography = {
  displayXl: { size: '80px', weight: '600', lineHeight: '1.05', letterSpacing: '-3px' },
  displayLg: { size: '56px', weight: '600', lineHeight: '1.10', letterSpacing: '-1.8px' },
  displayMd: { size: '40px', weight: '600', lineHeight: '1.15', letterSpacing: '-1px' },
  headline:  { size: '28px', weight: '600', lineHeight: '1.20', letterSpacing: '-0.6px' },
  cardTitle: { size: '22px', weight: '500', lineHeight: '1.25', letterSpacing: '-0.4px' },
  subhead:   { size: '20px', weight: '400', lineHeight: '1.40', letterSpacing: '-0.2px' },
  bodyLg:    { size: '18px', weight: '400', lineHeight: '1.50', letterSpacing: '-0.1px' },
  body:      { size: '16px', weight: '400', lineHeight: '1.50', letterSpacing: '-0.05px' },
  bodySm:    { size: '14px', weight: '400', lineHeight: '1.50', letterSpacing: '0' },
  caption:   { size: '12px', weight: '400', lineHeight: '1.40', letterSpacing: '0' },
  button:    { size: '14px', weight: '500', lineHeight: '1.20', letterSpacing: '0' },
  eyebrow:   { size: '13px', weight: '500', lineHeight: '1.30', letterSpacing: '0.4px' },
  mono:      { size: '13px', weight: '400', lineHeight: '1.50', letterSpacing: '0' },
} as const
```

**Admin context override**: most admin surfaces will live in `body` / `bodySm`; `display*` tokens exist for the rare oversized empty state, marketing-style auth screen, or onboarding hero. Keep them in the contract; use sparingly.

### spacing

Base unit 4 px, identical to DESIGN.md.

```ts
export const spacing = {
  xxs: '4px',
  xs:  '8px',
  sm:  '12px',
  md:  '16px',
  lg:  '24px',
  xl:  '32px',
  xxl: '48px',
  section: '96px',
} as const
```

### radius

```ts
export const radius = {
  xs: '4px',
  sm: '6px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  xxl: '24px',
  pill: '9999px',
  full: '9999px',
} as const
```

### elevation

DESIGN.md: depth via surface ladder + hairlines, not shadows. Encode as four named recipes referenced by primitives.

```ts
export const elevation = {
  // level 0 — flat on canvas
  flat: {
    background: color.canvas,
    border: 'none',
    boxShadow: 'none',
  },
  // level 1 — default card / panel
  raised: {
    background: color.surface1,
    border: `1px solid ${color.hairline}`,
    boxShadow: 'none',
  },
  // level 2 — featured / hovered card
  raisedStrong: {
    background: color.surface2,
    border: `1px solid ${color.hairlineStrong}`,
    boxShadow: 'none',
  },
  // level 3 — submenu / dropdown surface
  popover: {
    background: color.surface3,
    border: `1px solid ${color.hairline}`,
    boxShadow: 'none',
  },
  // focus ring
  focusRing: {
    outline: `2px solid ${color.primaryFocus}`,
    outlineOffset: '2px',
    outlineColor: 'rgba(94, 105, 209, 0.5)',  // primary-focus @ 50%
  },
} as const
```

### motion

`motion` is the runtime animation library. Tokens here only encode timing / easing constants reused across primitives.

```ts
export const motion = {
  duration: {
    instant: 0.08,
    fast: 0.16,
    normal: 0.22,
    slow: 0.32,
    enter: 0.24,
    exit: 0.18,
  },
  easing: {
    standard: [0.2, 0, 0, 1] as const,        // material standard
    decelerate: [0, 0, 0.2, 1] as const,
    accelerate: [0.4, 0, 1, 1] as const,
    overshoot: [0.34, 1.56, 0.64, 1] as const,
  },
} as const
```

These are plain TS values, **not** css.ts vars — they feed `motion`'s `transition={{ duration, ease }}` props. Animations that target CSS properties without `motion` should still use these durations via inline style so the system has one tempo.

### z-index

Single source for stacking order. Primitives must reference these — never magic numbers.

```ts
export const zIndex = {
  base: 0,
  dropdown: 100,
  sticky: 200,
  drawer: 300,
  modal: 400,
  popover: 500,
  toast: 600,
  tooltip: 700,
  kbar: 800,
} as const
```

---

## Theme contract

`vanilla-extract` `createThemeContract` defines the abstract slots; `createTheme` instantiates the dark theme and reserves the slot shape for a later light theme.

```ts
// src/styles/theme.css.ts
import { createGlobalTheme, createThemeContract, createTheme } from '@vanilla-extract/css'
import { color, typography, fontFamily, spacing, radius, elevation, zIndex } from './tokens'

export const themeContract = createThemeContract({
  color: { /* every key from `color` */ },
  fontFamily: { /* every key from `fontFamily` */ },
  spacing: { /* every key from `spacing` */ },
  radius: { /* every key from `radius` */ },
  zIndex: { /* every key from `zIndex` */ },
})

export const darkTheme = createTheme(themeContract, {
  color, fontFamily, spacing, radius, zIndex,
})

// reserved — empty for now
export const lightTheme = darkTheme  // intentional alias until 02b lands
```

**Why a contract**: the `themeContract` resolves to CSS variable names; consumers reference `themeContract.color.canvas` regardless of which theme is active. Switching themes swaps the class on `<html>`, no consumer rewrites.

**Typography is *not* in the contract** because the values are static across themes. They live as plain TS exports in `tokens/typography.ts` and ship as compile-time constants.

**Elevation and motion are *not* in the contract** because they're recipes / animation values, not single tokens.

---

## Theme switching

Source repo's behavior:

- `theme-mode` localStorage key holds `'light' | 'dark' | 'system'`.
- A boot script in `index.html` reads the key and toggles `<html class="dark">` before React mounts (anti-flash).
- `useUIStore` (Zustand in new repo) owns `themeMode` reactively at runtime.

New repo retains all three behaviors. Until `lightTheme` is implemented, the boot script and store still toggle the class, but only `darkTheme` is bound to `:root.dark`. The light branch falls back to dark — visible as identical surface, but the wiring is correct so 02b drops in cleanly.

```css
/* generated by vanilla-extract */
:root           { /* dark vars (default) */ }
:root.dark      { /* dark vars (explicit) */ }
:root.light     { /* light vars — empty until 02b */ }
```

Implementation:

```ts
// src/styles/theme.css.ts (continued)
export const globalStyles = createGlobalTheme(':root, :root.dark', themeContract, { /*...*/ })
// :root.light wired in 02b
```

`useUIStore` in spec 04 owns:

- `themeMode: 'light' | 'dark' | 'system'`
- `isDark: boolean` (derived)
- `setThemeMode(mode)`
- side-effect: writes `theme-mode` to localStorage and toggles `document.documentElement.className`

---

## Recipe conventions

Primitives in spec 03 declare recipes via `@vanilla-extract/recipes`. The contract:

1. **Name the recipe after the component.** `buttonRecipe`, not `btn` or `cta`.
2. **Variants are flat objects of mutually-exclusive options.** Booleans live under `defaultVariants` and toggle a single class.
3. **Compound variants are last-resort.** Prefer composing two clean variants over one compound.
4. **No `style({})` calls outside recipes** for primitives — recipes give predictable class trees and tree-shake cleanly. Layout / app-level styles may use plain `style`.

Sample shape (Button — full version in spec 03):

```ts
import { recipe } from '@vanilla-extract/recipes'
import { themeContract } from '~/styles/theme.css'

export const buttonRecipe = recipe({
  base: {
    fontFamily: themeContract.fontFamily.text,
    borderRadius: themeContract.radius.md,
    paddingBlock: '8px',
    paddingInline: '14px',
    /* ... */
  },
  variants: {
    intent: {
      primary: { background: themeContract.color.primary, color: themeContract.color.onPrimary },
      secondary: { background: themeContract.color.surface1, color: themeContract.color.ink, border: `1px solid ${themeContract.color.hairline}` },
      tertiary: { background: 'transparent', color: themeContract.color.ink },
      inverse: { background: themeContract.color.inverseCanvas, color: themeContract.color.inverseInk },
    },
    size: {
      sm: { /* compact pill */ },
      md: { /* default */ },
      lg: { /* hero */ },
    },
    state: {
      disabled: { opacity: 0.4, pointerEvents: 'none' },
    },
  },
  defaultVariants: { intent: 'secondary', size: 'md' },
})
```

---

## DESIGN.md handling

The full DESIGN.md the user supplied lives at the repo root. It is the human-readable design source and **must not** be edited to reflect implementation choices — when implementation diverges (e.g. surface ladder hex calibration, admin-only semantic colors), the divergence lives in this spec instead. DESIGN.md stays canonical.

A short header at the top of DESIGN.md will state:

> Implementation token mappings live in `src/styles/tokens/*.ts`. Admin-specific extensions and any divergence from this document are tracked in `docs/superpowers/specs/2026-05-06-react-migration/02-design-tokens.md`.

---

## Acceptance for spec 02

1. `pnpm typecheck` passes with `theme.css.ts` exporting a `themeContract`, `darkTheme`, and a placeholder `lightTheme` alias.
2. A demo `app.tsx` renders three swatches (canvas, primary, ink) using `themeContract.color.*` and renders correctly under both `<html class="dark">` and no class.
3. The boot script in `index.html` toggles `<html class="dark">` before React mounts (`theme-mode` localStorage round-trip works).
4. `body` font is Inter at 16px / weight 400 — verified by computed style.
5. All token namespaces (color, typography, fontFamily, spacing, radius, elevation, motion, zIndex) export from `~/styles/tokens` and are documented in `src/styles/README.md`.
6. **No primitive components ship in 02.** That's spec 03's job.

---

## Open questions

- **Surface ladder calibration**: the four surface step values need confirmation against linear.app computed styles. Owner: whoever picks up implementation. Resolves in P1 calibration window.
- **Light theme priority**: defer to 02b. Decide post-P1 whether light theme is part of v1 cutover or a follow-up.
- **Charts theme**: `@antv/g2` and CodeMirror One Dark have their own theme APIs. Spec 09/10 own the bridge from `themeContract.color.*` into those libraries.
