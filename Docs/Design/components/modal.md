# Modal

**Source:** not evidenced. No dialog/overlay appears in any of the four references (all four are
static marketing-page or brand-sheet comps). This spec is **fully extrapolated** from the card,
button, and elevation tokens defined elsewhere in this system, for use cases the marketing site will
eventually need (cart confirmation, age/location gate, image lightbox for the gallery grid in
Design 1's "Follow Our Journey" section). Flag as unconfirmed brand application.

## Anatomy

`Scrim` (full-viewport overlay) → `Panel` (`Header`: title + close button, `Body`, `Footer`:
action buttons, right-aligned, using [Button](./button.md)).

## Sizes

| Size | Max width | Use |
|---|---|---|
| `sm` | 400px | Confirmation dialogs ("Remove item?") |
| `md` (default) | 560px | Forms, detail panels |
| `lg` | 800px | Rich content, image + description |
| `full` (mobile) | 100vw, bottom-sheet | Any size, below `md` breakpoint — slides up from bottom rather than centering, to match thumb-reachable mobile conventions |

## States

| Element | Treatment |
|---|---|
| Scrim | `--color-primary-950` at 60% opacity |
| Panel | `--color-neutral-50` background, `--radius-lg`, `--shadow-2xl` |
| Panel — entrance | fade + scale from 0.96→1 over 180ms, respects `prefers-reduced-motion` (fade only, no scale) |
| Close button | `ghost` [Button](./button.md) variant, `sm` size, top-right of header |
| Footer buttons | primary action uses `primary` [Button](./button.md) variant, secondary/cancel uses `secondary` variant |

## Tokens used

`--color-primary-950`, `--color-neutral-50`, `--radius-lg`, `--shadow-2xl`,
`--text-display-sm` (title), `--text-base` (body), `--spacing-content-gap`.

## Accessibility

- `role="dialog"` + `aria-modal="true"` + `aria-labelledby` pointing at the title.
- Focus moves into the panel on open (to the first focusable element or the panel itself) and
  returns to the triggering element on close.
- Focus is trapped inside the panel while open; `Escape` closes it; clicking the scrim closes it
  unless the modal represents a required, non-dismissable step.
- Background content gets `inert` (or `aria-hidden="true"`) while the modal is open.

## Cross-references

Buttons: [`button.md`](./button.md). Tokens: [`../tokens/colors.css`](../tokens/colors.css),
[`../tokens/shadows.css`](../tokens/shadows.css), [`../tokens/radius.css`](../tokens/radius.css).
