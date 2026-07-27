# Tooltip

**Source:** not evidenced. No reference shows a hover/focus tooltip. This spec is **fully
extrapolated** from the elevation and radius tokens defined elsewhere, for cases the marketing site
will plausibly need (icon-only nav affordances, disabled-button explanations, truncated text
reveal). Flag as unconfirmed brand application.

## Anatomy

`Trigger` (any element) → `Tooltip bubble` (short text, optional directional arrow/caret) on
hover or focus.

## Variants

| Variant | Background | Text | Use |
|---|---|---|---|
| `dark` (default) | `--color-primary-950` | `--color-neutral-50` | Standard, on any page background — dark bubble reads consistently over both light and dark sections |
| `light` | `--color-neutral-50` | `--color-primary-900` | Extrapolated alternative for use over very dark hero imagery where a dark bubble would disappear |

## Sizing

Max width 240px, padding 8px 12px, `--text-xs`, `--radius-sm` (6px — smaller than card radius,
deliberately, so it reads as a transient hint rather than a content surface).

## States

| State | Treatment |
|---|---|
| Hidden | `opacity: 0`, not rendered to the accessibility tree until shown |
| Visible | `opacity: 1`, 120ms fade, no delay on focus; ~400ms hover delay before showing (avoids flicker on fast mouse movement) |
| Dismiss | `Escape` key hides it immediately (focus-triggered tooltips); moving focus/pointer away hides it |

## Tokens used

`--color-primary-950/900`, `--color-neutral-50`, `--radius-sm`, `--shadow-md`, `--text-xs`.

## Accessibility

- Triggered by both hover **and** keyboard focus — never hover-only, or keyboard users lose the
  content entirely.
- Uses `role="tooltip"` and the trigger references it via `aria-describedby`; never used to hold
  content essential to completing a task (that belongs in visible helper text, e.g.
  [`input.md`](./input.md)'s helper/error text pattern) — tooltips are supplementary only.
- Never the only place a disabled button's reason is explained if that reason is critical — repeat
  it as visible text when it blocks a primary flow.

## Cross-references

Tokens: [`../tokens/colors.css`](../tokens/colors.css), [`../tokens/shadows.css`](../tokens/shadows.css),
[`../tokens/radius.css`](../tokens/radius.css). Contrast with [`input.md`](./input.md) helper text
for critical vs. supplementary information guidance.
