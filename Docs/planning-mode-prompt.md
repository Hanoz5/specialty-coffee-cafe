# Planning-Mode Prompt — Dripsters Website (Frontend Scope)

This is the prompt used to enter Plan Mode in a **fresh** Claude Code session (relying entirely on
`CLAUDE.md`/`AGENTS.md` for project context — nothing here re-explains the stack, brand, or design
system, since that's what CLAUDE.md is for) to plan out the site's pages.

## The prompt

> I want to add a **Contact & Location** page to the Dripsters site — a fourth route alongside
> Home, Menu, and About. Plan it before writing any code.
>
> Requirements for the page:
> 1. **Route:** `/contact`, added to `SiteHeader`'s nav links.
> 2. **Content sections, top to bottom:**
>    - A header section matching the eyebrow + `--text-display-lg` heading pattern already used on
>      `/menu` and `/about` (don't invent a new heading treatment).
>    - An address/hours block: the by-lane-off-Fergusson-College-Road location, and opening hours
>      (café opens 8am, closes 9pm daily — invent nothing else, ask me if another business detail
>      is needed).
>    - A contact form (name, email, message) — client-side validation only, no real submission
>      target (this is a frontend-only build; stub the submit handler the same way
>      `app/actions/reservation.ts` stubs reservations).
>    - A map placeholder — an embedded map is out of scope (no API keys), so use a static styled
>      block with the address text, not a live map embed.
> 3. **Component reuse:** identify which existing `components/ui/` primitives (Input, Button,
>    Card, etc.) this page can reuse as-is versus what (if anything) needs a new component, and
>    check any new component against `Docs/Design/components/` before deciding it needs a new
>    spec written.
> 4. **Design system compliance:** every color/spacing/radius/type choice must trace to an existing
>    token — flag anything that would require a new token or a new component spec rather than
>    silently inventing one.
> 5. **Content:** if new copy is needed (hours, address, page intro), draft it in Hanoz's
>    established voice from `app/about/page.tsx` — warm, specific, no generic marketing copy — and
>    flag it as a draft for me to approve, don't treat it as final.
>
> Give me a plan that lists: the exact files you'll create/edit, which existing components get
> reused vs. which (if any) are new, and which design-system tokens/specs each new piece of UI maps
> to — in the same traceable style as `Docs/Design/traceability.md`. Don't start implementing until
> I approve the plan.

## Why this prompt is a good test of context retention

It deliberately never restates:
- What Dripsters is, who runs it, or where it's located (assumes CLAUDE.md's project section).
- The tech stack (Next.js/React/Tailwind version, App Router, no component library).
- Where the design system lives or that tokens must be used instead of raw values.
- That reservation-style stubs are the established pattern for "no backend yet" forms.
- The existing page list/nav structure it's extending.

A session that hasn't internalized `CLAUDE.md` would have to ask about all of the above before it
could produce a real plan. See
[`Docs/fresh-session-evidence.md`](fresh-session-evidence.md) for the actual test run and token
count.
