# Fresh-Session Context Evidence

Demonstrates that a brand-new Claude session — no memory of any prior conversation, only the
project's `CLAUDE.md`/`AGENTS.md` loaded automatically from the working directory — correctly
understood the project without being re-briefed, per Step 4's pass condition.

## Method

The updated [`CLAUDE.md`](../CLAUDE.md) was written first (project identity, stack, pages, design
system pointers, content rules, conventions — see that file). A brand-new agent (fresh context,
no access to this conversation) was then given **only** the planning-mode prompt from
[`planning-mode-prompt.md`](planning-mode-prompt.md) — verbatim, with no additional briefing — and
asked to produce an implementation plan for a new `/contact` page.

## What the fresh session got right without being told

The prompt never mentions any of the following, yet the fresh session's plan correctly used them:

| Fact used in the plan | Where it actually came from |
|---|---|
| Exact café address ("Deccan Gymkhana, off FC Road") and phone number (`+91 98230 14477`) | Read `components/layout/SiteFooter.tsx` unprompted — treated existing published facts as ground truth instead of inventing new ones |
| Hours phrasing "Open daily, 8:00 AM – 9:00 PM" reused verbatim from the footer | Same file |
| `app/actions/reservation.ts`'s stub pattern (re-validate server-side, no real backend) | Correctly identified as the pattern to mirror for a new `contact.ts` action, matching CLAUDE.md's explicit note that this is a frontend-only build |
| The eyebrow + `--text-display-lg` heading pattern from `/menu` and `/about` | Cited the exact token names and exact prior usage, not just "looks similar" |
| `Docs/Design/components/input.md` already specs an unbuilt `textarea` variant | Found this without being told an Input component existed at all — proposed extending `Input` rather than forking a new component, citing the spec section verbatim |
| Every color/radius/type choice traced to an existing token, zero new tokens proposed | Matches CLAUDE.md's explicit rule: "never use raw hex codes or arbitrary Tailwind values when a token exists" |
| Declined to invent an SLA, contact email, or extra business details not already published | Matches CLAUDE.md/AGENTS.md's implicit expectation that unstated business facts get flagged, not fabricated |

A session that hadn't absorbed `CLAUDE.md` would have had to ask what Dripsters is, where the
existing pages/components live, where the design tokens are, and what "no backend yet" pattern to
follow — instead it asked only genuinely new-page-specific questions (success-state UX, exact
heading copy, whether to add a footer link) and left them as flagged open decisions rather than
blocking on basics.

## Token usage for this session

| Metric | Value |
|---|---|
| Subagent (fresh session) tokens | **48,383** |
| Tool calls made | 16 |
| Duration | ~95 seconds |

(Measured via the harness's own per-agent usage report on the actual run used for this test.)
