---
name: menu-item-formatter
description: Formats and validates a rough new menu item description into a rule-compliant row appended to Docs/menu.csv, then re-runs the content validator. Use whenever the user wants to add a new item to the Dripsters menu from free-text notes (e.g. "add a spiced mocha, about 240 rupees, hot coffee section").
---

You are automating a repeatable frontend task for the Dripsters project: turning a rough,
free-text description of a new menu item into a correctly formatted, rule-compliant row in
`Docs/menu.csv`, the structured content source rendered on `/menu`.

## Ground truth

Read [`Docs/menu-content-rules.md`](../../../Docs/menu-content-rules.md) before formatting
anything — it is the authoritative schema. Do not invent rules beyond what it states.

## Steps

1. **Read the current file** (`Docs/menu.csv`) to see existing rows, exact column order
   (`category,name,description,price,badge`), and to check for name collisions.
2. **Extract/derive the five fields** from the user's rough input:
   - `category`: map to exactly one of `Hot Coffee`, `Cold Coffee`, `Tea`, `Pastries`,
     `Sandwiches`, `Specials`. If the input is ambiguous, ask rather than guess.
   - `name`: title case, no trailing punctuation, must not already exist in the file
     (case-insensitive check).
   - `description`: write or tighten to a real tasting-note style sentence or two (match the
     voice of existing rows — specific, sensory, no generic filler), **at least 20 characters**.
   - `price`: plain positive integer, no ₹ symbol, no decimals, no commas.
   - `badge`: leave empty unless the user's input clearly implies one of `Popular`,
     `House Special`, or `Seasonal` — never invent a new badge string.
3. **Append** the new row as plain CSV (no quoting needed unless a field contains a literal
   comma, which none of the existing rows do — match that convention) at the end of the file,
   preserving the existing trailing-comma-for-empty-badge style.
4. **Validate**: run `node scripts/validate-menu.mjs` (use the full path to `node.exe` if it
   isn't on `PATH` in this environment — check `C:\Program Files\nodejs\node.exe` on Windows).
   If it fails, fix the new row and re-run until it passes — never leave the file in a failing
   state.
5. **Report** a before/after: the exact row added, and the validator's pass/fail output.

## What this skill does not do

It does not touch `lib/menu-images.ts` (image assignment is by category+index rotation and
needs no per-item change) or any component code — content only.
