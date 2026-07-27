# Badge

**Source:** directly evidenced. Three distinct badge patterns recur: the eyebrow pill above a
headline ("Award-Winning Coffee Since 2015", "Customer Favorites" — Design 1), the floating
rating/meta chip on product media ("★ 4.9"), and the corner status tag on a product image
("Best Seller" — Design 1). Design 2's icon+label pills ("Freshly Brewed", "Organic Beans") confirm
the same shape family but **not** its green color (excluded, see
[`../style-guide.md`](../style-guide.md) §1.6).

## Anatomy

`[ leading icon/dot? ] Label [ trailing count? ]` — always `--radius-full`.

## Variants

| Variant | Background | Text | Use |
|---|---|---|---|
| `eyebrow` | transparent or `--color-secondary-50` | `--color-secondary-600`, `--text-xs` uppercase, wide tracking | Small label above a headline |
| `neutral` | `--color-neutral-200` | `--color-neutral-900` | Generic tag, filter chip (inactive) |
| `accent` | `--color-secondary-600` | `--color-neutral-50` | "Best Seller" / status tag on media. Uses `secondary-600`, not the `secondary-500` brand anchor — Cream text on `secondary-500` is 3.3:1 and fails normal-text AA contrast at badge size; `secondary-600` clears it (4.6:1). Same fix as [`button.md`](./button.md)'s `accent` variant. |
| `success` / `warning` / `error` / `info` | respective `-bg` token | respective base token | Order/status states (e.g. "In Stock", "Low Stock") — extrapolated, not shown in references but needed for e-commerce states |
| `outline` | transparent | `--color-primary-900` | 1px `--color-primary-900` border, floating rating chip on light media |
| `scrim` | `--color-primary-950` at 70% opacity, `backdrop-blur` | `--color-neutral-50` | Tag/label placed directly over photographic media whose brightness varies (e.g. an event tile). A transparent or outline chip can wash out over a bright patch of the photo — the solid dark scrim guarantees legibility regardless of what's behind it. Added during implementation after exactly that failure showed up on a real photo; not shown in references. |

## Sizing

| Size | Height | Padding-x | Text |
|---|---|---|---|
| `sm` | 22px | 8px | `--text-xs` |
| `md` (default) | 28px | 12px | `--text-xs` / `--text-sm` |

## States

Badges are informational, not interactive, by default (no hover/focus state) **except** the
`filter-chip` usage (see [`tab.md`](./tab.md) for the selectable variant, which reuses this shape
with interactive states layered on).

## Tokens used

`--color-secondary-50/600`, `--color-neutral-50/200/900`, `--color-primary-900`,
`--color-success/-bg`, `--color-warning/-bg`, `--color-error/-bg`, `--color-info/-bg`,
`--radius-full`, `--text-xs/sm`, `--shadow-xl` (only the floating media chip — see
[`card.md`](./card.md) "floating meta chip").

## Accessibility

- Badge conveying status (not just decorative label) must not rely on color alone — pair with an
  icon or text ("✓ In Stock", not a green dot alone).
- Decorative eyebrow badges above a headline should not duplicate as a redundant `<h>` — treat as a
  `<p>` or `<span>`, with the actual heading doing the semantic work.

## Cross-references

Used inside: [`card.md`](./card.md) (corner tag, floating chip), [`nav.md`](./nav.md) (cart count),
[`tab.md`](./tab.md) (filter-pill shares this shape). Semantic colors:
[`../style-guide.md`](../style-guide.md) §1.5.
