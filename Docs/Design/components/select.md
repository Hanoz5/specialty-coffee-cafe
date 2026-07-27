# Select

**Source:** partially evidenced. The "Subject" field in `Design 1.webp`'s contact form shows a
resolved value ("General Inquiry") in a field styled identically to the text inputs beside it,
consistent with a native/custom select — but no open/expanded dropdown state, chevron affordance,
or option-list styling is visible at the reference's resolution. **Chrome and states below are
extrapolated** from the [Input](./input.md) spec plus the card/list styling used elsewhere. Flag
before treating the dropdown visuals as brand-confirmed.

## Anatomy

`Label` → `Trigger` (current value + trailing chevron icon, same shell as [Input](./input.md)) →
`Listbox` (on open: floating panel, one row per option, optional leading check icon on the selected
row).

## Sizes

Matches [Input](./input.md) `sm` / `md` / `lg` exactly — trigger uses the same height/padding scale
so selects and text inputs align in a shared form grid.

## States

| State | Trigger | Notes |
|---|---|---|
| Default | Same as Input default | Chevron icon `--color-neutral-500` |
| Hover | Same as Input hover | — |
| Focus / open | Same as Input focus (ring + border) | Listbox appears below (or above if no room), `--shadow-lg`, `--radius-md`, `--color-neutral-50` background |
| Disabled | Same as Input disabled | Chevron `--color-neutral-300` |
| Error | Same as Input error | — |

**Listbox option states:**

| State | Background | Text |
|---|---|---|
| Default | transparent | `--color-neutral-900` |
| Hover / keyboard-active | `--color-neutral-100` | `--color-neutral-900` |
| Selected | `--color-secondary-50` | `--color-primary-900`, leading check icon `--color-secondary-500` |
| Disabled option | transparent | `--color-neutral-400` |

## Tokens used

Same as [Input](./input.md), plus `--shadow-lg`, `--color-secondary-50`, `--color-neutral-500`.

## Accessibility

- Implement as a proper listbox (`role="listbox"`/`role="option"` or native `<select>`), not a
  styled `<div>` with click handlers only — needs full keyboard support (Arrow keys, Home/End,
  type-ahead, Escape to close, Enter/Space to select).
- Trigger exposes `aria-expanded` and `aria-haspopup="listbox"`.
- Selected option is announced on change, not conveyed by color alone (the check icon in the
  "Selected" state above is required, not decorative).

## Cross-references

Extends [`input.md`](./input.md) sizing/state model. Tokens:
[`../tokens/colors.css`](../tokens/colors.css), [`../tokens/shadows.css`](../tokens/shadows.css).
