# Tab

**Source:** directly evidenced. `Design 3.webp`'s "Popular Collections" section shows a row of
pill filter tabs ("All", "Coffee", "Drinks", "Food", "Ambiance", "Flowers") with one active/filled
state and the rest inactive/outlined — a filter-tab pattern (content swaps below, tabs don't
navigate to a new page) rather than a routed-page tab.

## Anatomy

`Tab list` (row of `Tab` pill buttons) → associated `Panel` (content that swaps based on the
active tab).

## Variants

| Variant | Shape | Use |
|---|---|---|
| `pill` (default) | `--radius-full`, matches [`badge.md`](./badge.md) filter-chip shape | Filter/segment control (Design 3's collection filter) — preferred default, directly evidenced |
| `underline` | flat, `--radius-none`, 2px bottom border on active | Extrapolated — for a denser row of tabs (e.g. account settings sub-navigation) where pill chrome would be too heavy; not shown in references |

## Sizing

Matches [Badge](./badge.md) `md` size: 28px height, 12px padding-x, `--text-sm` weight 500.

## States

| State | `pill` treatment |
|---|---|
| Inactive (default) | transparent fill, 1px `--color-neutral-300` border, `--color-neutral-700` text |
| Inactive hover | `--color-neutral-100` fill |
| Active | `--color-primary-900` fill, `--color-neutral-50` text, no border |
| Focus-visible | 2px `--color-focus-ring` ring, 2px offset, on top of either fill |
| Disabled | `--color-neutral-100` fill, `--color-neutral-400` text |

## Tokens used

`--color-primary-900`, `--color-neutral-50/100/300/700`, `--color-focus-ring`, `--radius-full`,
`--text-sm`.

## Accessibility

- Implement with `role="tablist"` / `role="tab"` / `role="tabpanel"` and `aria-selected` when tabs
  swap content in place (as in Design 3); use plain nav links instead if each tab is actually a
  distinct route.
- Arrow-key navigation moves focus between tabs (`Left`/`Right`, `Home`/`End`); `Tab` key moves into
  the panel, not between tab pills.
- Active tab's fill/text change is paired with `aria-selected="true"` — never conveyed by color
  alone for the inactive→active distinction, since it's a mid-contrast neutral-border vs.
  brand-fill difference that low-vision users may not distinguish.

## Cross-references

Shares shape/sizing with [`badge.md`](./badge.md) filter-chip variant. Tokens:
[`../tokens/colors.css`](../tokens/colors.css), [`../tokens/radius.css`](../tokens/radius.css).
