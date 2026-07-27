# Compliance Subagent — Violation Detection Evidence

Subagent: [`.claude/agents/design-system-compliance.md`](../.claude/agents/design-system-compliance.md)
(`design-system-compliance`, read-only, reports via `ReportFindings`).

## Method

1. Took a clean copy of `components/ui/Badge.tsx` (backed up to
   `scripts/Badge.tsx.clean-backup` for the duration of the test).
2. Introduced 3 deliberate, independent design-system violations (diff below).
3. Ran the `design-system-compliance` subagent against the modified file.
4. Captured its output verbatim (below).
5. Reverted `Badge.tsx` to the clean backup — the violations do not exist in the shipped code.

## The 3 deliberate violations

```diff
--- components/ui/Badge.tsx (clean)
+++ components/ui/Badge.tsx (violated, for this test only)
@@
-  neutral: "bg-neutral-200 text-neutral-900 rounded-full px-3 py-1",
+  neutral: "bg-[#cccccc] text-neutral-900 rounded-full px-3 py-1",
@@
-  accent: "bg-secondary-600 text-neutral-100 rounded-full px-3 py-1",
+  accent: "bg-secondary-600 text-neutral-100 rounded-md px-3 py-1",
@@
-  return <span className={cn("inline-flex items-center text-xs", ...)}>
+  return <span className={cn("inline-flex items-center text-[13px]", ...)}>
```

| # | Violation | Category |
|---|---|---|
| 1 | `neutral` variant background changed from `bg-neutral-200` to raw hex `bg-[#cccccc]` (a generic gray outside the warm palette entirely, not just an untokenized value) | Color |
| 2 | `accent` variant radius changed from `rounded-full` to `rounded-md` | Radius |
| 3 | Base badge text size changed from `text-xs` to arbitrary `text-[13px]` | Typography |

## Subagent output (verbatim)

> I reviewed `components/ui/Badge.tsx` against `Docs/Design/components/badge.md`,
> `Docs/Design/tokens/colors.css`, `Docs/Design/tokens/typography.css`, and
> `Docs/Design/tokens/radius.css`.
>
> Six findings, most severe first:
>
> 1. **`accent` variant radius** (line 21) — `rounded-md` instead of `--radius-full`; badge.md's
>    Anatomy line says badges are "always `--radius-full`."
> 2. **`neutral` variant color** (line 17) — raw hex `bg-[#cccccc]`, not a token; spec calls for
>    `--color-neutral-200`.
> 3. **Arbitrary text size** (line 41) — `text-[13px]` instead of `--text-xs`/`--text-sm`; also
>    silently drops the `--text-xs` letter-spacing (0.08em) tracking the eyebrow variant needs.
> 4. **`accent` text color** (line 21) — `text-neutral-100` instead of the spec's
>    `--color-neutral-50`, narrowing the documented 4.6:1 contrast margin toward the AA floor.
> 5. **`outline` variant fill** (line 22) — solid `bg-neutral-50` instead of the spec's
>    `transparent` background.
> 6. **Missing `size` prop** (component-wide) — badge.md's Sizing table (sm/md) isn't
>    implemented; only one size renders.

## Result

All 3 deliberately introduced violations were detected (findings 1–3 above) — each one citing
the exact file/line, the exact design-system rule broken, and the correct token to use instead:

| Deliberate violation | Detected as | Rule cited |
|---|---|---|
| `bg-[#cccccc]` (color) | Finding #2 | `Docs/Design/components/badge.md` — `neutral` variant spec: `--color-neutral-200` |
| `rounded-md` (radius) | Finding #1 | `Docs/Design/components/badge.md` Anatomy: "always `--radius-full`" |
| `text-[13px]` (typography) | Finding #3 | `Docs/Design/tokens/typography.css` scale: `--text-xs`/`--text-sm` |

Findings #4–#6 were **pre-existing** issues in the unmodified component that the subagent found
unprompted while doing its own spec comparison (not planted for this test) — included here as
evidence the agent is doing a genuine diff against the spec rather than pattern-matching the
injected diff.

Token/tool cost of this run: 27,087 tokens, 14 tool calls (`Read`/`Grep`/`Glob` against the style
guide, tokens, and component spec, plus consumers `EventsSection.tsx` and `MenuItemCard.tsx`),
~102s.
