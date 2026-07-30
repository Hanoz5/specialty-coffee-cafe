@AGENTS.md

# Project: Dripsters Specialty Coffee

A marketing/ordering-adjacent website for **Dripsters**, a specialty coffee café on a by-lane off
Fergusson College Road in Deccan Gymkhana, Pune, run by Hanoz Avari. Single-origin coffee, filter
brews, tea, pastries, sandwiches, and a table-reservation flow. This is a frontend-only build —
no database, no auth, no deployment; the reservation "server action" is a stub, not a real backend.

## Stack

- Next.js 16.2.12, App Router, React 19.2, TypeScript, Tailwind CSS v4 (CSS-first — theme lives in
  `@theme` blocks in CSS, no `tailwind.config.*` file).
- **This Next.js version has breaking changes from your training data.** Read
  `node_modules/next/dist/docs/` before writing App Router code — see `AGENTS.md`.
- No component library (no shadcn/MUI) — everything in `components/ui/` is hand-built against this
  repo's own design system.
- Path alias `@/*` → repo root (see `tsconfig.json`).

## Pages (current scope — frontend only)

| Route | File | Purpose |
|---|---|---|
| `/` | `app/page.tsx` | Home: Hero, "Most Loved" items, Events, Reservation form (`#reserve` anchor) |
| `/menu` | `app/menu/page.tsx` | Full menu grouped by category, rendered from `Docs/menu.csv` |
| `/about` | `app/about/page.tsx` | Café/owner story |

Nav and footer live in `components/layout/SiteHeader.tsx` / `SiteFooter.tsx`; the header's CTA
links to `/#reserve` rather than a separate route.

## Design system — read before writing any UI code

- [`Docs/Design/style-guide.md`](Docs/Design/style-guide.md) — the source of truth: palette,
  type scale, spacing/grid, elevation, radius, iconography, accessibility rules, and *why* each
  decision was made (which are brand-pinned from `Docs/Design/References/`, which are
  extrapolated).
- [`Docs/Design/tokens/*.css`](Docs/Design/tokens/) — machine-readable tokens (`colors.css`,
  `typography.css`, `spacing.css`, `radius.css`, `shadows.css`, `breakpoints.css`), imported into
  `app/globals.css` and exposed as Tailwind utilities (`bg-primary-900`, `text-display-lg`, etc.)
  via the `@theme` block. **Never use raw hex codes or arbitrary Tailwind values
  (`bg-[#...]`, `text-[13px]`) when a token exists.**
- [`Docs/Design/components/*.md`](Docs/Design/components/) — one spec per component (button,
  input, select, modal, table, nav, card, badge, tab, tooltip): variants, states, sizing, exact
  tokens used, accessibility requirements.
- [`Docs/Design/traceability.md`](Docs/Design/traceability.md) — a worked example proving the
  chain from a component's class name → component spec → token → style-guide rule holds with no
  gaps. Use the same pattern when adding new components/tokens.
- Brand anchors (memorize, don't re-derive): Espresso `--color-primary-900` `#4B2E20`, Caramel
  `--color-secondary-500` `#A9744A`, Cream `--color-neutral-100` `#F3E8DB`. Display font Playfair
  Display (`--font-display`), body font Montserrat (`--font-sans`) — both already wired in
  `app/layout.tsx`. Buttons/badges/pills are always `--radius-full`; cards/panels `--radius-lg`;
  inputs `--radius-md`. Caramel-500 is an accent color only — never body text (fails contrast, see
  style-guide §1.7).
- After writing or editing any `.tsx`/`.css` in `app/` or `components/`, run the
  `design-system-compliance` subagent (`.claude/agents/design-system-compliance.md`) against the
  changed files before considering the change done.
- **Premium-redesign additions (evolution, not replacement, of the above):** `tokens/motion.css`
  defines `--duration-*`/`--ease-*` tokens (style-guide §8) for scroll-reveal and hover motion;
  [`components/ui/Reveal.tsx`](components/ui/Reveal.tsx) is the one approved scroll-reveal
  wrapper (respects `prefers-reduced-motion`, fires once) — don't hand-roll another. The menu and
  "Most Loved" grids use an **editorial** layout, not a uniform grid: the first item in a section
  gets `size="feature"` on `MenuItemCard` (larger tile, spans 2 grid columns), the rest cycle
  through varied aspect ratios — see style-guide §3 "Editorial rhythm" and `reveal.md`.

## Structured content

- [`Docs/menu.csv`](Docs/menu.csv) is the single source of truth for menu items, read server-side
  by [`lib/menu.ts`](lib/menu.ts) (never import it from a `'use client'` file) and rendered on
  `/menu` (`app/menu/page.tsx`) and the homepage "Most Loved" section
  (`components/home/LovedItems.tsx`, via `getFeaturedItems()`).
- Content rules for that CSV — schema, allowed categories/badges, why each rule exists — are
  stated in [`Docs/menu-content-rules.md`](Docs/menu-content-rules.md) and enforced by
  [`scripts/validate-menu.mjs`](scripts/validate-menu.mjs) (`node scripts/validate-menu.mjs`).
  Run the validator after any manual edit to `menu.csv`.
- Adding/reformatting a menu item by hand is automatable — see the `menu-item-formatter` skill
  under `.claude/skills/` if present, which turns rough item text into a rule-compliant CSV row.

## Conventions

- Components are organized by domain: `components/ui/` (primitives — Button, Card, Badge, Input,
  Modal, Nav, Select), `components/home/`, `components/menu/`, `components/reservation/`,
  `components/layout/`.
- Class name composition goes through `cn()` in `lib/cn.ts`.
- Reservation validation (`lib/validation.ts`) is shared between the client form
  (`components/reservation/ReservationForm.tsx`) and the server action
  (`app/actions/reservation.ts`) — never trust client-only validation, re-run it server-side, as
  the existing code already does.
- Menu/site imagery is sourced from verified Pexels URLs in `lib/menu-images.ts` /
  `lib/site-images.ts` — not local files, not `next/image` static imports. **Never invent, guess,
  or extrapolate a Pexels photo ID or URL** — every entry must come from an actual, visited Pexels
  page. `lib/menu-images.ts` maps **one unique image per menu item by name** (`menuItemImages`) —
  no two items or site sections may share the same photo; a per-category fallback pool exists only
  as a stopgap for an item not yet populated, never as a long-term duplicate.

## Explicitly out of scope

Database integration, deployment, and AI evaluation are not part of this project's current phase —
don't add a database client, deployment config, or eval pipeline unless asked.
