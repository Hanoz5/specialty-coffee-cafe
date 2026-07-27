# Card

**Source:** directly evidenced — the most common surface across every reference. `Design 1.webp`:
product card (image, badge, title, price, rating, Add to Cart), testimonial card (quote, stars,
avatar), stat block. `Design 3.webp`: feature card with icon (dark), collection card (image +
label). See [`../style-guide.md`](../style-guide.md) §4, §5.

## Anatomy

`Media` (optional, top or full-bleed) → `Content` (`eyebrow/badge`, `title`, `body`, `meta row`:
price/rating/stat) → `Action` (optional, button or link).

## Variants

| Variant | Background | Border | Shadow | Use |
|---|---|---|---|---|
| `surface` (default) | `--color-neutral-100` | none | `--shadow-md` | Product cards, general content cards on a `--color-neutral-50` page background (Design 1) |
| `outlined` | `--color-neutral-50` | 1px `--color-neutral-200` | `--shadow-none` | Dense grids where shadow-stacking would look muddy |
| `dark` | `--color-primary-900` | none | `--shadow-md` | Feature cards on a dark section (Design 3), text flips to `--color-neutral-100` |
| `media-overlay` | image fills card, gradient scrim bottom, text over image | none | `--shadow-lg` | Collection/category cards (Design 3's "Popular Collections") |

## Sizing

Radius `--radius-lg` (16px) standard; `--radius-xl` (24px) for large hero-adjacent feature cards.
Internal padding: 20px (`sm` card, e.g. stat block), 24px (`md`, default), 32px (`lg`, feature card).

## States

| State | Treatment |
|---|---|
| Default | `--shadow-md` |
| Hover (if interactive/clickable) | lifts to `--shadow-lg`, translateY(-2px), 150ms ease-out |
| Focus-visible (if card itself is the interactive element, e.g. wrapped in a link) | 2px `--color-focus-ring` ring around the whole card, 2px offset |
| Loading (skeleton) | media + text blocks replaced with `--color-neutral-200` pulsing placeholders at the same dimensions, never a layout shift on load |

## Sub-patterns observed

- **Badge overlay:** top-left corner badge on product media ("Best Seller" — see [`badge.md`](./badge.md)).
- **Floating meta chip:** small pill overlapping the bottom edge of the media (the "★ 4.9 · 1,250 Reviews" chip in Design 1) — `--shadow-xl`, `--radius-full`, `--color-neutral-50` background, offset so it straddles the image/content boundary.
- **Price + CTA row:** price in `--text-lg` / weight 600 / `--color-primary-900`, [Button](./button.md) `sm` size right-aligned or full-width below on mobile.

## Tokens used

`--color-neutral-50/100/200`, `--color-primary-900`, `--radius-lg/xl`, `--shadow-md/lg/xl`,
`--text-display-sm` (title), `--text-base` (body), `--text-lg` (price).

## Accessibility

- If the whole card is a link (common for product/collection cards), the entire clickable area is
  a single `<a>`, not nested interactive elements with duplicate focus stops (the "Add to Cart"
  button inside a card-as-link is the one exception — it needs its own stop-propagation handling
  and its own accessible name distinct from the card's).
- Image `alt` text describes the product, not the layout ("Iced caramel latte in a glass with
  whipped cream", not "product photo").
- Rating stars have a text equivalent ("4.9 out of 5, 1,250 reviews"), not star-glyphs alone.

## Cross-references

Badges: [`badge.md`](./badge.md). Buttons: [`button.md`](./button.md). Tokens:
[`../tokens/colors.css`](../tokens/colors.css), [`../tokens/shadows.css`](../tokens/shadows.css),
[`../tokens/radius.css`](../tokens/radius.css).
