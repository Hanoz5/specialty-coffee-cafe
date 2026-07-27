# Menu Content Rules

Stated validation rules for [`Docs/menu.csv`](menu.csv), the structured content source for the
`/menu` page (rendered via [`lib/menu.ts`](../lib/menu.ts)). These are the rules the assignment's
Step 2 pass condition asks the content file to validate against — enforced by
[`scripts/validate-menu.mjs`](../scripts/validate-menu.mjs).

## Schema

| Column | Required | Rule |
|---|---|---|
| `category` | yes | Must be exactly one of the six values in `MENU_CATEGORIES` (`lib/types.ts`): `Hot Coffee`, `Cold Coffee`, `Tea`, `Pastries`, `Sandwiches`, `Specials`. |
| `name` | yes | Non-empty. Unique across the entire file (no duplicate item names, even across categories). |
| `description` | yes | Non-empty, at least 20 characters — short enough to reject placeholder text, long enough to force real tasting-note copy. |
| `price` | yes | Positive integer (whole ₹, no decimals, no currency symbol, no thousands separator). |
| `badge` | no | Empty, or exactly one of: `Popular`, `House Special`, `Seasonal`. No free-text badges. |

## Structural rules

- Header row must be exactly `category,name,description,price,badge`, in that order.
- Every data row must have exactly 5 comma-separated fields (trailing empty `badge` field is fine).
- No blank rows.

## Why these rules

- Category is a closed enum because `app/menu/page.tsx` groups items by
  `MENU_CATEGORIES` — an unrecognized category would silently vanish from the rendered page
  instead of erroring.
- Price as a bare positive integer matches every existing row (₹90–₹500) and how
  `MenuItemCard` formats it; decimals or symbols would break that formatting assumption.
- The badge enum is closed to the 3 values actually designed for in
  [`components/menu/MenuItemCard.tsx`](../components/menu/MenuItemCard.tsx) and
  [`Docs/Design/components/badge.md`](Design/components/badge.md) — a new badge string would
  render but wouldn't have a defined color mapping in the design system.

## Running the validator

```bash
node scripts/validate-menu.mjs
```

Exits `0` and prints a per-row-count pass summary if every rule holds; exits `1` and lists every
violation (row number, field, reason) otherwise.
