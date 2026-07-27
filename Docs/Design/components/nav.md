# Nav (primary navigation bar)

**Source:** directly evidenced in all three full-page comps. `Design 1.webp`: light bar, logo
left, text links center, search/cart/sign-in/CTA right, cart icon carries a numeric badge.
`Design 3.webp`: dark bar (`Espresso-900` background, `Cream-100` text/links). `Design 2.webp`:
dark bar, underlined active link. See [`../style-guide.md`](../style-guide.md) §1.

## Anatomy

`Logo/wordmark` → `Primary links` (center or left-aligned after logo) → `Utility cluster`
(search icon, account/sign-in, cart icon + count badge, primary CTA button).

## Variants

| Variant | Background | Text | Use |
|---|---|---|---|
| `light` | `--color-neutral-50` | `--color-primary-900` | Default, matches Design 1 |
| `dark` | `--color-primary-900` | `--color-neutral-100` | Dark-themed pages/sections, matches Design 3 |
| `transparent-on-scroll` | transparent over hero image → solid `light`/`dark` after scroll threshold | Extrapolated from the hero-overlaid logo position in Design 2/3; not explicitly confirmed as a scroll-triggered behavior in a static comp — flag before implementing the scroll transition itself |

## Sizing

Height 72px desktop / 64px mobile. Logo max-height 32px. Link text `--text-sm`, weight 500.

## States

| Element | State | Treatment |
|---|---|---|
| Link | default | text color per variant, no underline |
| Link | hover | `--color-secondary-500` text |
| Link | active/current page | text color per variant + 2px `--color-secondary-500` underline, offset 6px (matches the underlined "Home" in Design 2) |
| Link | focus-visible | 2px `--color-focus-ring` ring, 2px offset |
| Cart icon badge | has items | `--radius-full` chip, `--color-secondary-500` background, `--color-neutral-50` text, `--text-xs`, positioned top-right of icon |
| Mobile (< `md`) | collapsed | Links move into a slide-in/off-canvas panel behind a hamburger trigger; utility cluster (cart, CTA) stays visible in the bar |

## Tokens used

`--color-primary-900`, `--color-neutral-50/100`, `--color-secondary-500`, `--color-focus-ring`,
`--text-sm/xs`, `--shadow-md` (once scrolled/sticky, to separate from page content).

## Accessibility

- Landmark: wrap in `<nav aria-label="Primary">`.
- Current page indicated with `aria-current="page"`, not the underline alone.
- Mobile hamburger trigger is a real `<button>` with `aria-expanded` and an accessible name
  ("Open menu" / "Close menu"), not a bare icon.
- Cart badge count is exposed to assistive tech via visually-hidden text ("3 items in cart"), not
  the numeral alone inside a decorative chip.

## Cross-references

CTA button: [`button.md`](./button.md). Badge chip: [`badge.md`](./badge.md). Tokens:
[`../tokens/colors.css`](../tokens/colors.css), [`../tokens/shadows.css`](../tokens/shadows.css).
