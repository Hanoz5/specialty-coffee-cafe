# Table

**Source:** not evidenced. All four references are consumer-facing marketing pages; none contain
tabular data. This spec is **fully extrapolated** for a hypothetical account/order-history or
admin context (order list, past purchases), using the neutral-scale striping and radius tokens
already defined. Flag as unconfirmed brand application — revisit once an actual data-table use case
exists.

## Anatomy

`Table` → `Header row` (column labels, optional sort affordance) → `Body rows` (data cells,
optional leading checkbox/avatar, optional trailing row actions) → optional `Footer` (pagination).

## Variants

| Variant | Row background | Use |
|---|---|---|
| `default` | alternating `--color-neutral-50` / transparent | Dense data, ≥5 rows |
| `flush` | all transparent, `1px --color-neutral-200` row dividers only | Short lists, inside a card |

## Sizing

| Density | Row height | Cell padding-x | Text |
|---|---|---|---|
| `compact` | 40px | 12px | `--text-sm` |
| `default` | 52px | 16px | `--text-sm` |
| `comfortable` | 64px | 20px | `--text-base` |

## States

| Element | State | Treatment |
|---|---|---|
| Header cell | default | `--text-xs` label styling (§2.4: uppercase, wide tracking), `--color-neutral-500` text |
| Header cell | sortable, active | `--color-primary-900` text, sort-direction icon |
| Row | hover | `--color-neutral-100` background |
| Row | selected | `--color-secondary-50` background, `--color-secondary-500` 2px left border |
| Cell | empty/N/A | `--color-neutral-400` text, em-dash, never a blank cell |
| Table | empty state | centered icon + message + primary action, not just a blank table body |

## Tokens used

`--color-neutral-50/100/200/400/500`, `--color-secondary-50/500`, `--color-primary-900`,
`--text-xs/sm/base`, `--radius-lg` (outer container only, not per-cell).

## Accessibility

- Semantic `<table>`/`<thead>`/`<tbody>`/`<th scope="col">` markup — never a `<div>` grid pretending
  to be a table for actual tabular data.
- Sort state announced via `aria-sort` on the active header cell.
- Row selection (checkbox variant) exposes `aria-selected` on the row.
- Horizontal scroll container on narrow viewports, not silent truncation — never hide columns
  without an explicit "show more" affordance.

## Cross-references

Badges for status cells: [`badge.md`](./badge.md). Tokens:
[`../tokens/colors.css`](../tokens/colors.css), [`../style-guide.md`](../style-guide.md) §2.4
(label treatment).
