# Reveal

**Source:** extrapolated — added in the premium-redesign pass to satisfy the "subtle motion and
hover states" brief. Not shown in any reference (all four are static comps). See
[`../style-guide.md`](../style-guide.md) §8 (Motion).

## Purpose

A behavioral wrapper, not a visual component: fades and rises its children into view the first
time they scroll into the viewport. Used to give homepage sections and menu category intros a
one-time entrance rather than appearing instantly, without turning the page into a scroll-jacked
animation demo.

## Behavior

- Default (resting) state: `opacity-0 translate-y-6`.
- Revealed state: `opacity-100 translate-y-0`, transition with `--ease-standard`, over either
  `--duration-base` (400ms, default `speed="base"` — ordinary section/card content) or
  `--duration-slow` (900ms, `speed="slow"` — hero entrance and category-intro reveals, per
  style-guide.md §8's duration table).
- Fires once via `IntersectionObserver` at `threshold: 0.15`, then disconnects — never re-hides on
  scroll-out, never re-triggers.
- Optional `delayMs` prop staggers siblings (e.g. a 3-card row revealing left-to-right).

## Accessibility

- Checks `prefers-reduced-motion: reduce` on mount; if set, renders at the visible resting state
  immediately with no transition — content is never gated behind motion the user can't skip
  (style-guide.md §7, §8).
- Purely presentational — does not alter tab order, focus behavior, or semantic structure of its
  children.

## Tokens used

`--duration-base`, `--duration-slow`, `--ease-standard` (`Docs/Design/tokens/motion.css`).

## Cross-references

Used inside: `Hero` (headline stagger, `speed="slow"`), `LovedItems`, `EventsSection`,
`ReserveSection`, `MenuSection` (category intros use `speed="slow"`; item grids use the default
`speed="base"`), `app/about/page.tsx`, `app/menu/page.tsx`.
