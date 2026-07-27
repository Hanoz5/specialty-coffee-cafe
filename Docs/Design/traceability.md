# Component → Token → Style Guide Traceability

Worked example proving the chain has no gaps, as required by the assignment's Step 1 pass
condition. Component chosen: **Button**, `primary` variant, fill color.

## The chain

**1. Component code** — [`components/ui/Button.tsx`](../../components/ui/Button.tsx) line 9:

```ts
primary: "bg-primary-900 text-neutral-100 hover:bg-primary-800 active:bg-primary-950",
```

The `primary` variant fills with the Tailwind utility class `bg-primary-900`.

**2. Component spec** — [`Docs/Design/components/button.md`](components/button.md), Variants table:

> | `primary` | `--color-primary-900` | `--color-neutral-100` | none | Main page CTA... |

The spec names the exact token the `primary` variant must use: `--color-primary-900`.

**3. Design token** — [`Docs/Design/tokens/colors.css`](tokens/colors.css) line 20:

```css
/* Primary — Espresso. Brand anchor: primary-900 = #4B2E20 (style-guide.md §1.2) */
--color-primary-900: #4b2e20;
```

Tailwind v4's `@theme` block auto-generates the `bg-primary-900` utility from this exact
`--color-primary-900` variable — this is what connects step 1's class name to step 3's token
(no separate Tailwind config file exists; confirmed in `app/globals.css` / style-guide.md §0).
The token's own comment cites the style guide section it comes from.

**4. Style guide rule** — [`Docs/Design/style-guide.md`](style-guide.md) §1.2, Primary — Espresso table:

> | **900** | **`#4B2E20`** | **Brand anchor.** Primary button fill, primary headings, dark
> section background |

This is the ground-truth rule: `#4B2E20` is pinned directly from the brand reference
(`Design 4.webp`, §0 table, row 4 — "Ground truth for color and type") and its stated purpose
explicitly includes "Primary button fill."

## The chain, summarized

```
Button.tsx "primary" variant
  → class "bg-primary-900"
    → button.md spec: primary variant fill = --color-primary-900
      → tokens/colors.css: --color-primary-900 = #4b2e20
        → style-guide.md §1.2: 900 = #4B2E20, "Primary button fill"
          → Design 4.webp brand sheet (ground truth hex)
```

Every hop names the same value (`#4B2E20` / `--color-primary-900`) and the same purpose
("primary button fill") — no renaming, no unexplained substitution, no orphaned step.
