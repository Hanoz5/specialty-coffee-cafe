# Custom Skill — Before/After Evidence

Skill: [`.claude/skills/menu-item-formatter/SKILL.md`](../.claude/skills/menu-item-formatter/SKILL.md)
— automates the repeatable frontend task of turning rough, free-text menu-item notes into a
correctly formatted, rule-compliant row in `Docs/menu.csv` (Step 2's structured content file),
validated against [`Docs/menu-content-rules.md`](menu-content-rules.md).

## How it was invoked

Real invocation through the `Skill` tool (not hand-run instructions) with this input:

> Add a new hot coffee item: a spiced mocha inspired by the Kerala Monsooned Malabar beans
> already used in the Siphon Brewed Single Origin special — espresso, dark chocolate, a warm
> spice blend, steamed milk. Around 240 rupees. No badge needed.

Note: a project skill created mid-session isn't picked up by the `Skill` tool until the roster
refreshes (confirmed by first trying it and getting `Unknown skill: menu-item-formatter` — see
the attempt that immediately preceded this one); it became invokable shortly after, and this run
is the real thing, not a manual stand-in.

## Before

`Docs/menu.csv` had 35 items, ending with:

```
Specials,Filter Coffee Tiramisu,Classic tiramisu soaked in South Indian filter coffee instead of espresso. Creamy mascarpone with a distinctly Indian twist.,260,
```

## What the skill did

Followed its own documented steps: read the file and content rules, derived the 5 fields from the
rough input (category `Hot Coffee`, title-cased name, tasting-note description ≥20 chars with no
embedded commas to match the file's existing convention, plain-integer price, no badge), appended
the row, then ran the validator and confirmed it passed before stopping.

## After

`Docs/menu.csv` diff:

```diff
 Specials,Filter Coffee Tiramisu,...,260,
+Hot Coffee,Malabar Spiced Mocha,Espresso blended with dark chocolate and a warm Kerala Malabar spice mix finished with steamed milk and a dusting of cocoa. Rich earthy and gently spiced.,240,
```

Validator output:

```
PASS — 36 menu items across 6 categories validated against Docs/menu-content-rules.md.
```//(was 35 before)

## Rendered page — real change confirmed in the browser

Restarted the Next.js dev server (it caches parsed CSV data in module scope per
[`lib/menu.ts`](../lib/menu.ts), so a running server needs a restart to pick up a content-file
edit — expected behavior, not a bug) and loaded `http://localhost:3000/menu`. The accessibility
tree of the live page shows the new card in place, in the correct category section, styled
identically to every pre-existing card:

```
heading "Malabar Spiced Mocha"
generic "₹240"
generic "Espresso blended with dark chocolate and a warm Kerala Malabar spice mix finished with steamed milk "
```

positioned directly after "South Indian Filter Coffee" and before the "Cold Coffee" section
starts — exactly where a new Hot Coffee row appended at the end of the CSV should land, since
`getMenuByCategory()` groups by category and preserves file order within each group.

This is a genuine content change that flowed through the real pipeline (CSV → `lib/menu.ts` →
`app/menu/page.tsx` → rendered DOM), not a skill file that merely exists unused.
