# Style Guide

Source of truth for the specialty-coffee-cafe visual identity. This document formalizes what is
already implied by the codebase and the moodboard in `Docs/Design/References/` — it does not
introduce a new direction. Every token in [`tokens/`](./tokens/) traces back to a section here, and
every component spec in [`components/`](./components/) cites the tokens it consumes.

> **Note on source path:** the task brief pointed at `docs/design/reference/`; the actual assets
> live at `Docs/Design/References/` (4 images: `Design 1.webp`–`Design 4.webp`). This guide treats
> those four images as the reference set. Flagged below wherever they disagree or leave a gap.

## 0. What the references actually establish

| # | Image | What it is | What it contributes |
|---|-------|-----------|----------------------|
| 1 | `Design 1.webp` ("Roastroom") | Full marketing page comp, light theme | Warm cream page background, pill buttons, serif display headlines over sans body, stat blocks, product cards, testimonial cards, rounded product photography |
| 2 | `Design 2.webp` ("rren", watermarked "Wix Studio Template") | Generic hero comp, dark theme | Layout/composition idea only — **excluded from the color palette**, see §1.4 |
| 3 | `Design 3.webp` ("United Coffee / Bodrin") | Full marketing page comp, dark theme | Espresso-brown section backgrounds, cream text on dark, pill buttons, rounded image cards, collection tabs |
| 4 | `Design 4.webp` ("mora coffee") | Literal brand sheet with hex codes and named typefaces | **Ground truth** for color and type: `#4B2E20` / `#A9744A` / `#F3E8DB`, Playfair Display + Montserrat |

Images 1, 3, and 4 agree with each other on palette family (espresso brown / caramel / cream),
button shape (full pill), card radius (generous), and display typography (elegant serif headline
over clean sans body). Image 4 is the only asset presented as an actual brand spec, so its exact
hex values and typeface names are treated as authoritative; images 1 and 3 are used to confirm how
those values get used in a real layout.

**The codebase currently has no brand name, no component library, and no design tokens** —
`app/page.tsx` / `app/layout.tsx` are still the unmodified `create-next-app` starter (Geist fonts,
generic metadata title "Create Next App"). This guide does not invent a business name; it defines
the system generically so it can be applied once one is chosen.

Stack confirmed from `package.json` / config files: **Next.js 16.2.12 (App Router), React 19.2,
Tailwind CSS v4** (CSS-first config — no `tailwind.config.*` file, theme lives in `@theme` blocks
inside CSS, per `app/globals.css`). No shadcn/ui, MUI, or other component library is installed, so
component specs in this system target plain Tailwind utilities plus the tokens defined here, not a
third-party library's API.

## 1. Color

### 1.1 Brand anchors (exact, from Design 4)

| Token | Hex | Role |
|---|---|---|
| `--color-primary-900` (Espresso) | `#4B2E20` | Dark brand color — primary buttons, headings on light surfaces, dark section backgrounds |
| `--color-secondary-500` (Caramel) | `#A9744A` | Accent — secondary buttons, links, icon accents, ratings |
| `--color-neutral-100` (Cream) | `#F3E8DB` | Light brand surface — page background, card fill, text-on-dark |

These three are pinned exactly as shown on the brand sheet. Everything else in §1.2–1.3 is a ramp
*derived* from these anchors by linear interpolation toward white/black, so the whole palette reads
as one warm, earth-toned family instead of generic Tailwind gray.

### 1.2 Primary — Espresso (brand dark / primary actions)

| Step | Hex | Typical use |
|---|---|---|
| 50 | `#FBF7F3` | Tinted hover background on light surfaces |
| 100 | `#E8E1DC` | Subtle fills, disabled button background |
| 200 | `#D4CAC4` | Borders on light surfaces |
| 300 | `#C0B4AD` | Disabled text, decorative rules |
| 400 | `#AD9E95` | Placeholder text |
| 500 | `#99877E` | Secondary/muted text on light surfaces |
| 600 | `#867166` | — |
| 700 | `#725B4F` | — |
| 800 | `#5F4437` | Hover state of primary-900 buttons (darken) is *not* this — see §5 button spec |
| **900** | **`#4B2E20`** | **Brand anchor.** Primary button fill, primary headings, dark section background |
| 950 | `#2A190F` | Deepest dark surface (footer, nav-on-scroll), max-contrast text |

### 1.3 Secondary — Caramel (accent)

| Step | Hex | Typical use |
|---|---|---|
| 50 | `#FAF1E7` | Tinted accent background (badge fill) |
| 100 | `#EAD8C8` | — |
| 200 | `#DABFA8` | Borders on accent elements |
| 300 | `#C9A689` | — |
| 400 | `#B98D69` | — |
| **500** | **`#A9744A`** | **Brand anchor.** Secondary buttons, links, star ratings, icon accents |
| 600 | `#8B5E3C` | Hover/active state for secondary-500 elements |
| 700 | `#7A5233` | Pressed state |
| 800 | `#624028` | — |
| 900 | `#4A2F1C` | — |
| 950 | `#391F12` | — |

### 1.4 Neutral — Sand (backgrounds, borders, body text)

A warm gray ramp, not a cool/pure gray, so neutral UI chrome doesn't fight the brown/cream palette.
`100` is pinned to the exact brand cream from Design 4; `50` is a hair lighter for page background
so brand-cream cards can sit visibly on top of it (this two-step cream/off-cream relationship is
visible in Design 1, where card surfaces are whiter than the page background).

| Step | Hex | Typical use |
|---|---|---|
| 50 | `#FBF8F4` | Page background |
| **100** | **`#F3E8DB`** | **Brand anchor.** Card/section surface, input background |
| 200 | `#E6D8C6` | Dividers, table row stripe |
| 300 | `#D3C0A8` | Borders, disabled control border |
| 400 | `#B39B7D` | Placeholder text, disabled text |
| 500 | `#8F7458` | Muted/secondary body text |
| 600 | `#6E5842` | — |
| 700 | `#52402F` | — |
| 800 | `#382B20` | — |
| 900 | `#241B14` | Default body text on light surfaces |
| 950 | `#17110C` | Max-contrast text, near-black |

### 1.5 Semantic colors (new — not present in references)

The reference set is a marketing site with no form-validation, alerting, or status UI, so it defines
no semantic colors. These four are new additions, chosen to stay inside the warm palette rather than
introduce generic saturated red/green:

| Token | Base | Subtle bg | Border | Rationale |
|---|---|---|---|---|
| `--color-success` | `#6B7A4F` (sage) | `#EEF1E6` | `#C3CBAE` | Echoes the olive/leaf iconography in Design 4's "ethically sourced" footer icon rather than a stock green |
| `--color-warning` | `#C98A2C` (amber) | `#FBF1DF` | `#E8C48B` | Sits between caramel and gold, stays warm |
| `--color-error` | `#B3462C` (rust) | `#FBEAE4` | `#E3AC9A` | Coffee-cherry red — thematically grounded rather than a stock alert red |
| `--color-info` | `#5C7A8A` (dusty blue) | `#E8EFF1` | `#B7CBD2` | The one deliberately cool note, muted enough not to clash |

**Flag:** confirm these are acceptable before they ship in a checkout/order-status flow — they were
designed for palette harmony, not tested against a specific error/success copy deck.

### 1.6 Excluded: Design 2's green accent

`Design 2.webp` is watermarked "Wix Studio Template" and uses a bright sage-green pill accent on a
near-black background — this conflicts with the brown/caramel/cream family that the other three
references agree on, and it reads as generic template styling rather than this brand's identity.
**It was used only for layout ideas** (dark hero, split desktop/mobile device mockup, pill-shaped
feature badges with a leading icon) **and excluded from the color system.** Flag for the user: if
green was actually meant to be incorporated as a color (not just a layout reference), that's a
deliberate palette decision this guide did not make — confirm before adding it.

### 1.7 Contrast (WCAG 2.1)

Computed from the exact brand anchors, relative-luminance method:

| Pair | Ratio | Passes |
|---|---|---|
| Espresso-900 text on Cream-100 bg | **10.2 : 1** | AAA (body text) |
| Cream-100 text on Espresso-900 bg | **10.2 : 1** | AAA (body text) |
| Caramel-500 text on Cream-100 bg | **3.3 : 1** | AA for large text (≥24px / 19px bold) and UI components only — **not** body text |
| Caramel-500 text on Espresso-900 bg | **3.1 : 1** | Same restriction — large text/UI only |

**Rule:** Caramel-500 is an accent color, never a body-copy color. Use it for large headings, icons,
borders, and interactive states where the 3:1 non-text/large-text threshold applies. Default body
copy is always Espresso-900-on-light or Cream-100-on-dark.

### 1.8 Focus states

Every interactive element gets a visible focus ring — no `outline: none` without a replacement.
Default: 2px solid `--color-secondary-500` (Caramel), offset 2px, on both light and dark surfaces
(it clears the 3:1 non-text contrast minimum against both Cream-100 and Espresso-900 backgrounds
per §1.7). See each component spec's "Focus" state for exact treatment.

## 2. Typography

### 2.1 Families (from Design 4, confirmed by headline treatment in Designs 1 & 3)

| Role | Family | Token |
|---|---|---|
| Display / heading | **Playfair Display** (serif) | `--font-display` |
| Body / UI | **Montserrat** (sans) | `--font-sans` |
| Utility (code, numeric tabular data) | *not specified by any reference* | `--font-mono` |

**Resolved:** `app/layout.tsx` now loads `Playfair_Display` and `Montserrat` via `next/font/google`
(variables `--font-playfair-display` / `--font-montserrat`), and `tokens/typography.css` binds
`--font-display` / `--font-sans` to them. `app/globals.css` imports `tokens/index.css`, so the full
token set (not just typography) is live.

**Flag — open decision:** no reference shows a monospace/tabular-numeral use case (prices, order
numbers, timestamps). Recommendation: keep Geist Mono as the utility face since it's already wired
into `next/font/google` in the current codebase and nothing in the references contradicts it — but
this is a default, not a brand decision, so confirm before relying on it.

### 2.2 Scale

Base size 16px (1rem). Display sizes use Playfair Display at heavier weights than body text needs,
since the typeface's default weight reads light at small sizes.

| Token | Size | Line height | Weight | Family | Example use |
|---|---|---|---|---|---|
| `--text-display-2xl` | 4.5rem / 72px | 1.05 | 600 | display | Hero headline ("Crafted Coffee, Perfected Daily") |
| `--text-display-xl` | 3.75rem / 60px | 1.1 | 600 | display | Large section headline |
| `--text-display-lg` | 3rem / 48px | 1.15 | 600 | display | — |
| `--text-display-md` | 2.25rem / 36px | 1.2 | 600 | display | Section headings ("Best Sellers", "What Our Customers Say") |
| `--text-display-sm` | 1.875rem / 30px | 1.25 | 500 | display | Card/subsection headings |
| `--text-xl` | 1.25rem / 20px | 1.5 | 400 | sans | Lead paragraph |
| `--text-lg` | 1.125rem / 18px | 1.55 | 400 | sans | Emphasized body |
| `--text-base` | 1rem / 16px | 1.6 | 400 | sans | Default body copy |
| `--text-sm` | 0.875rem / 14px | 1.5 | 400 | sans | Captions, form labels, table cells |
| `--text-xs` | 0.75rem / 12px | 1.4 | 600 | sans | Eyebrows/badges — always paired with uppercase + wide tracking |

### 2.3 Weights available

- Playfair Display: 500 (medium), 600 (semibold — default display weight), 700 (bold, sparing use)
- Montserrat: 400 (regular — default body weight), 500 (medium — buttons, labels), 600 (semibold — emphasis), 700 (bold — rare)

### 2.4 Eyebrow / label treatment

Small caps-style labels seen above headlines in Designs 1 & 3 ("Award-Winning Coffee Since 2015",
"Customer Favorites"): `--text-xs`, uppercase, `letter-spacing: 0.08em` (`tracking-widest`),
Secondary-600 or Primary-500 color, often preceded by a small icon glyph.

## 3. Spacing & grid

Tailwind v4's default 4px base spacing scale is inherited as-is — nothing in the references
justifies a custom spacing unit. Documented here for the semantic rhythm actually observed:

| Token | Value | Use |
|---|---|---|
| `--spacing-section-y` | 6rem / 96px | Vertical padding between major page sections (mobile) |
| `--spacing-section-y-lg` | 8rem / 128px | Same, ≥ `lg` breakpoint (matches the starter's `py-32`) |
| `--spacing-card-gap` | 1.5rem / 24px | Gap between cards in a grid (product/testimonial rows) |
| `--spacing-content-gap` | 1.5rem–2rem | Gap between heading/body/CTA stack inside a section |

### Grid / container

| Token | Value | Justification |
|---|---|---|
| `--container-max` | 80rem / 1280px | Centered content width observed across all three full-page comps |
| `--container-padding` | 1.5rem mobile / 4rem desktop | Matches the starter's `px-16` desktop gutter |

Column grid: standard 12-column, `gap-6` (24px) default, collapsing to 1–2 columns below `md`.

## 4. Elevation & shadow

Shadows use a warm-brown tint (`rgba(74, 47, 28, …)`) instead of pure black, so elevated surfaces
stay inside the palette rather than reading as generic neutral-gray shadows. Visible on the floating
product card and testimonial cards in Design 1.

| Token | Value | Use |
|---|---|---|
| `--shadow-none` | `none` | Flat elements |
| `--shadow-sm` | `0 1px 2px rgba(74,47,28,0.06)` | Inputs, low-emphasis cards |
| `--shadow-md` | `0 4px 12px rgba(74,47,28,0.10)` | Resting card, nav bar |
| `--shadow-lg` | `0 10px 24px rgba(74,47,28,0.14)` | Hover/raised card, dropdown menu |
| `--shadow-xl` | `0 20px 40px rgba(74,47,28,0.18)` | Popover, floating product badge (the "$4.9 rating" chip in Design 1) |
| `--shadow-2xl` | `0 28px 64px rgba(74,47,28,0.24)` | Modal |

## 5. Radius scale

Two distinct radius languages are visible and kept distinct rather than collapsed into one: a
**generous** radius for photographic/card surfaces, and **full pill** for anything actionable
(buttons, badges, tags, avatars) — consistent across all three full-page comps.

| Token | Value | Use |
|---|---|---|
| `--radius-none` | 0 | Table cells, dividers |
| `--radius-sm` | 6px | Tags, small chips |
| `--radius-md` | 10px | Inputs, selects, textareas |
| `--radius-lg` | 16px | Cards, panels, modals |
| `--radius-xl` | 24px | Hero image panels, large feature cards |
| `--radius-full` | 9999px | Buttons, badges, avatars, pill nav items |

## 6. Iconography

**Flag — open decision:** no icon library is installed (`package.json` has none). The references
show a consistent **thin outline style** (star ratings, leaf/coffee-cup/heart glyphs in Design 4's
feature strip, small nav/cart icons in Designs 1 & 3) — single-color, no fills, no duotone.

Rules to apply once a library is chosen:

- Stroke width 1.5–1.75px at a 24px base (scales proportionally at 16/20px)
- Color via `currentColor` so icons inherit text color context (Primary-900 on light, Cream-100 on dark, Secondary-500 for accents)
- Sizes: 16px (inline with `--text-sm`/`--text-xs`), 20px (default UI/body context), 24px (standalone/nav)
- Filled variants reserved for a single semantic case: the star rating glyph (Secondary-500 fill), which is filled in every reference — the one intentional exception to "outline only"

Suggested library matching this stroke language: **Lucide** (not installed — confirm before adding
a dependency).

## 7. Accessibility standards

- **Contrast:** body text ≥ 4.5:1, large text (≥24px or ≥19px bold) and UI components ≥ 3:1 — see §1.7 for the computed brand pairs. Never place Secondary-500 (Caramel) body copy on Cream-100 or Espresso-900; it fails body-text contrast (3.1–3.3:1).
- **Focus visibility:** every focusable element shows the 2px Caramel-500 focus ring from §1.8. Never remove `:focus-visible` styling without a replacement of equal or greater visibility.
- **Touch targets:** minimum 44×44px hit area for buttons, links-as-buttons, and form controls, even where the visible pill is smaller (pad hit area, not just visible chrome).
- **Motion:** respect `prefers-reduced-motion`; no scroll-triggered or hover animation should be the only way to access content.
- **Text over imagery:** the hero pattern in Designs 1 & 3 (headline over photography) needs either a scrim/gradient overlay or the headline placed on a solid Espresso-900/Cream-100 panel — never raw text directly on unprocessed photography without verifying contrast per-image.

## Cross-reference index

- Machine-readable tokens implementing this guide: [`tokens/`](./tokens/) (`colors.css`, `typography.css`, `spacing.css`, `radius.css`, `shadows.css`, `breakpoints.css`)
- Component-level application of these tokens: [`components/`](./components/)
