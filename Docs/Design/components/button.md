# Button

**Source:** directly evidenced. Filled pill CTAs appear in all three full-page comps (`Design
1.webp` "Order Online" / "View Menu" / "Add to Cart", `Design 3.webp` "Explore More" / "Get
Delivery", `Design 2.webp` "Discover More"). Outline/secondary pill appears in Design 1
("View Menu"). See [`../style-guide.md`](../style-guide.md) §1, §5.

## Anatomy

`[ leading icon? ] Label [ trailing icon? ]` — always full-pill radius, horizontally padded well
past the text, never icon-only without an accessible label (`aria-label`).

## Variants

| Variant | Fill | Text | Border | Use |
|---|---|---|---|---|
| `primary` | `--color-primary-900` | `--color-neutral-100` | none | Main page CTA — one per view ("Order Online", "Add to Cart") |
| `secondary` | transparent | `--color-primary-900` | 1px `--color-primary-900` at 8% opacity (matches the hairline outline in Design 1, not a solid brand-color border) | Secondary action alongside a primary ("View Menu") |
| `accent` | `--color-secondary-600` | `--color-neutral-100` | none | Extrapolated — not directly shown, for a single accent CTA distinct from the dark primary (e.g. promotional banner). Uses `secondary-600`, not the `secondary-500` brand anchor — see Accessibility note below |
| `ghost` | transparent | `--color-primary-900` | none | Extrapolated — low-emphasis inline action (nav "Sign In") |
| `destructive` | `--color-error` | `--color-neutral-100` | none | Extrapolated — no destructive action shown in references; needed for account/order-cancel flows |

## Sizes

| Size | Height | Padding-x | Text | Icon |
|---|---|---|---|---|
| `sm` | 36px | 16px | `--text-sm` / weight 500 | 16px |
| `md` (default) | 48px | 20px | `--text-base` / weight 500 | 20px |
| `lg` | 56px | 28px | `--text-lg` / weight 500 | 20px |

Minimum 44×44px hit area maintained even at `sm` via padding, per
[`../style-guide.md`](../style-guide.md) §7.

## States

| State | Primary | Secondary | Accent |
|---|---|---|---|
| Default | `--color-primary-900` fill | transparent fill, `--color-primary-900` text/border | `--color-secondary-600` fill |
| Hover | `--color-primary-800` fill | `--color-primary-50` fill | `--color-secondary-700` fill |
| Active/pressed | `--color-primary-950` fill | `--color-primary-100` fill | `--color-secondary-800` fill |
| Focus-visible | adds 2px `--color-focus-ring` ring, 2px offset (§1.8) | same | same |
| Disabled | `--color-neutral-200` fill, `--color-neutral-400` text, no hover/active response, `cursor: not-allowed` | `--color-neutral-300` border, `--color-neutral-400` text | same as Primary disabled |
| Loading | fill unchanged, label replaced/paired with spinner in current text color, `aria-busy="true"`, interaction disabled | same | same |

## Tokens used

`--color-primary-800/900/950/50/100`, `--color-neutral-200/300/400/100`, `--color-secondary-600/700`,
`--color-focus-ring`, `--radius-full`, `--shadow-sm` (rest), `--shadow-md` (hover, optional lift),
`--text-sm/base/lg`, `--font-weight-sans-medium`.

## Accessibility

- Text/icon contrast checked against §1.7 — `primary` (Cream-on-Espresso, 10.2:1) and `secondary`
  (Espresso-on-Cream, 10.2:1) both pass AAA. `accent` deliberately fills with `secondary-600`
  rather than the `secondary-500` brand anchor: Cream text on `secondary-500` is only 3.3:1, which
  fails normal-text AA (4.5:1) at every button size in this spec (none of them qualify as WCAG
  "large text" — that needs ≥24px regular or ≥18.66px/14pt bold, and buttons here are 14–18px at
  weight 500). Cream-on-`secondary-600` is **4.6:1**, which passes. Do not swap `accent`'s fill back
  to `secondary-500` without also darkening the text or enlarging/bolding it past the large-text
  threshold.
- Disabled buttons are never the only way to convey "why can't I click this" — pair with helper
  text where the reason isn't obvious.
- Loading state keeps the button's width stable (no layout shift) and announces state via
  `aria-busy`, not color alone.

## Cross-references

Colors/radius/shadow: [`../tokens/colors.css`](../tokens/colors.css),
[`../tokens/radius.css`](../tokens/radius.css), [`../tokens/shadows.css`](../tokens/shadows.css).
Used inside: [`card.md`](./card.md) (Add to Cart), [`nav.md`](./nav.md) (Order Now),
[`modal.md`](./modal.md) (confirm/cancel actions).
