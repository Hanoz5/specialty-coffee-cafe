# Input (text field)

**Source:** directly evidenced. The contact form in `Design 1.webp` ("Full Name", "Email",
"Phone (Optional)", "Message" textarea, newsletter email field) shows label-above-field, rounded
rectangular inputs on a light card, distinct from the full-pill radius used for buttons. See
[`../style-guide.md`](../style-guide.md) §1.4, §5.

## Anatomy

`Label` (+ optional `*` required marker) → `Input field` (+ optional leading/trailing icon) →
`Helper/error text` (below, only when present).

## Sizes

| Size | Height | Padding-x | Text |
|---|---|---|---|
| `sm` | 36px | 12px | `--text-sm` |
| `md` (default) | 44px | 16px | `--text-base` |
| `lg` | 52px | 16px | `--text-lg` |

`textarea` variant: same padding, `min-height: 96px` (4 lines), resizable vertically only.

## States

| State | Background | Border | Text |
|---|---|---|---|
| Default | `--color-neutral-50` | 1px `--color-neutral-300` | `--color-neutral-900` |
| Hover | `--color-neutral-50` | 1px `--color-neutral-400` | — |
| Focus | `--color-neutral-50` | 1px `--color-secondary-500` + 2px `--color-focus-ring` ring (§1.8) | — |
| Filled | unchanged | unchanged | — |
| Disabled | `--color-neutral-100` | 1px `--color-neutral-200` | `--color-neutral-400`, `cursor: not-allowed` |
| Error | `--color-error-bg` | 1px `--color-error` | `--color-neutral-900`, helper text in `--color-error` |
| Placeholder | — | — | `--color-neutral-400` |

## Tokens used

`--color-neutral-50/100/200/300/400/900`, `--color-secondary-500`, `--color-error/-bg`,
`--color-focus-ring`, `--radius-md`, `--text-sm/base/lg`, `--shadow-sm` (focus only, optional).

## Accessibility

- Every input has a visible, associated `<label>` (`for`/`id`) — placeholder text is never the only
  label, per the "Full Name" / "Email" pattern in the reference (labels sit above the field, not
  inside it as a floating-label substitute).
- Error state pairs the red border with an explicit text message read by screen readers
  (`aria-describedby` pointing at the helper text, `aria-invalid="true"`), never color alone.
- Required fields marked with both a visual `*` and `aria-required="true"`, not `*` alone.
- Focus ring must remain visible on the `--color-neutral-50` background — verified 3:1+ per §1.7
  non-text contrast minimum (`--color-secondary-500` border against `--color-neutral-50` ≈ 3.3:1,
  passes).

## Cross-references

[`../style-guide.md`](../style-guide.md) §1.7 (contrast), §1.8 (focus). Tokens:
[`../tokens/colors.css`](../tokens/colors.css), [`../tokens/radius.css`](../tokens/radius.css).
Related: [`select.md`](./select.md) shares this sizing/state model.
