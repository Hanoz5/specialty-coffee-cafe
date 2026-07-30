# Image Sourcing — Premium Redesign

Every image on the site is now unique — no photo is reused across two menu items or two site
sections. This replaces the previous per-category rotation (4 photos reused across 6-7 items each)
that produced visibly repeated imagery, especially on `/menu`.

## Method

Two research passes each independently searched Pexels via the browser (not guessed IDs), opened
the actual photo page for every candidate, and confirmed the real photo ID/URL before recording it.
Aesthetic direction given to both: cinematic, tactile, editorial food/drink photography — varied
composition/angle/props/mood per item, authentic Indian styling for Indian-specific items (filter
coffee, chai, paneer tikka, Bombay masala toast) rather than generic Western café stock.

- **Pass A** — Hot Coffee (7), Cold Coffee (6), Tea (6): 19 items.
- **Pass B** — Pastries (6), Sandwiches (6), Specials (5), plus 6 general site images (hero, 3×
  About, 2× Events): 23 items.

Total: 42 unique, individually-verified photos.

## Result

`lib/menu-images.ts`'s `menuItemImages` map and `lib/site-images.ts` now hold one dedicated photo
per menu item and per site section (see those files for the full list — every entry includes the
exact URL and a specific alt description). The old per-category `categoryPool` in
`lib/menu-images.ts` remains only as a stopgap fallback for any item name not found in
`menuItemImages`; once every item is populated, it is never actually reached.

## Distinctness

Both passes tracked photo IDs as they searched and confirmed zero collisions within their own set.
After integration, a programmatic check (regex-scanning every `pexels-photo-<id>` reference across
`lib/menu-images.ts` and `lib/site-images.ts`) confirmed **65 distinct IDs, zero duplicates**: the
42 live images (36 menu items + 6 site sections) plus the 23 old-pool fallback entries that remain
only as a defensive stopgap for a future unmapped item — none of which are reachable today, since
every one of the 36 current menu items has a direct entry.

## Full mapping — Pass A (Hot Coffee, Cold Coffee, Tea)

| Item | Photo ID | Alt text |
|---|---|---|
| Espresso | 9052283 | Espresso freshly brewed into a shot glass, dark crema catching the light |
| Cappuccino | 14335866 | Cappuccino with delicate latte art on a sunlit marble café table |
| Cafe Latte | 29554058 | A latte with heart-shaped foam art resting on a textured wooden table |
| Flat White | 33216070 | A flat white with graceful latte art served on a rustic wooden table |
| Single-Origin Pour-Over | 32391648 | Overhead view of a V60 dripper brewing coffee, grounds blooming in the filter |
| South Indian Filter Coffee | 33932441 | Frothy South Indian filter coffee served in traditional steel tumbler and davara |
| Malabar Spiced Mocha | 15149174 | A mocha topped with creamy foam and a chocolate drizzle on a marble table |
| Cold Brew | 30694844 | Cold brew coffee being poured over ice into a glass on a wooden table |
| Iced Latte | 32681655 | Espresso being poured into cold milk over ice, layering into an iced latte |
| Nitro Cold Brew | 37574027 | A barista filling a cup with velvety nitro cold brew straight from the tap |
| Affogato | 32972513 | A scoop of vanilla gelato drowned in hot espresso, poured tableside |
| Iced Americano | 34932738 | Layers of espresso and ice in a glass of iced Americano on a metal tray |
| Classic Cold Coffee | 12833529 | A tall glass of cold coffee topped with whipped cream and chocolate chips |
| Masala Chai | 36662612 | Masala chai poured into a traditional clay cup by a street vendor |
| Darjeeling First Flush | 4563760 | A steaming cup of delicate loose-leaf tea against a rustic backdrop |
| Assam Golden Tip | 17537474 | A richly colored cup of brewed tea resting on an open book in warm light |
| Jasmine Green Tea | 38050692 | A cup of jasmine tea with fresh leaves by a sunlit window |
| Nilgiri Iced Tea | 37515893 | A glass of iced tea with lemon and mint, bright in natural light |
| Chamomile Herbal Infusion | 8115976 | A cozy flat-lay of chamomile tea in a cup surrounded by fresh chamomile flowers |

Two items (Malabar Spiced Mocha, Assam Golden Tip) had no literal-match stock photo available on
Pexels (no real "Kerala spice mocha" or "Assam golden tip cup" photos exist there); the closest
honest visual match was used, with alt text describing only what the photo actually shows rather
than the full flavor description from the menu copy.

## Full mapping — Pass B (Pastries, Sandwiches, Specials, site images)

| Item / slot | Photo ID | Alt text |
|---|---|---|
| Butter Croissant | 20002837 | Freshly baked golden croissants on a cooling rack showing flaky buttery layers |
| Almond Croissant | 37970772 | Golden almond croissants fresh from the oven topped with slivered almonds |
| Chocolate Hazelnut Tart | 29395475 | Elegant chocolate hazelnut tart with glossy ganache plated on a designer green dish |
| Banana Walnut Bread | 37046609 | Freshly baked banana walnut bread loaf in a tin surrounded by ripe bananas |
| Blueberry Muffin | 13054437 | Top-down view of fresh blueberry muffins with scattered blueberries and a crumbled sugar topping |
| Cardamom Bun | 29300995 | Top-down view of a Swedish cardamom bun dusted with cinnamon sugar on a black plate |
| Classic Club Sandwich | 29346178 | Close-up of a triple-decker club sandwich stacked with layers of meat, lettuce, and tomato |
| Caprese Grilled Sandwich | 30925490 | Fresh caprese sandwich with mozzarella, tomato, and basil on grilled ciabatta bread |
| Paneer Tikka Sandwich | 36268517 | Grilled paneer tikka sandwich served with dipping chutneys on a black plate |
| Smoked Chicken and Cheese Panini | 35225535 | Close-up of a grilled chicken and cheese panini with a gooey melted cheese pull |
| Avocado and Hummus Sandwich | 9012028 | Close-up of an avocado and hummus sandwich with sprouts and cucumber on multigrain bread |
| Bombay Masala Toast | 36268518 | Stacked Bombay-style grilled masala toast sandwich with chutney and a red checkered napkin |
| Siphon Brewed Single Origin | 31961247 | Vintage vacuum siphon coffee brewing setup on a café counter with warm ambient light |
| Aeropress Flight | 31967901 | Aeropress coffee maker brewing single-origin coffee into a glass carafe for a tasting flight |
| Coffee Cupping Flight | 34933330 | Close-up of a coffee cupping session with tasting spoons resting on rows of small cups |
| Chef's All-Day Breakfast Platter | 37279433 | Hearty all-day breakfast platter with fried eggs, crispy toast, and bacon on a rustic wooden table |
| Filter Coffee Tiramisu | 35135510 | Filter coffee tiramisu layered in glass cups and dusted with cocoa powder |
| Hero (homepage) | 32556929 | Cozy vintage café interior in India with warm ambient lighting and rustic wooden furniture |
| About — verandah exterior | 33520069 | Facade of a colonial-era Indian bungalow with a pink exterior and lush garden greenery |
| About — espresso machine hands | 10439808 | Close-up of a barista's hands working the espresso machine, steam rising from the portafilter |
| About — dough detail | 37970770 | Close-up texture detail of raw laminated croissant dough with delicate buttery layers |
| Events — open mic | 15789086 | Singer-songwriter performing acoustic guitar at an intimate open mic night |
| Events — coffee tasting | 21967253 | Two people informally tasting coffee together from small cups in a cozy daylight café |

Paneer Tikka Sandwich and Bombay Masala Toast were deliberately sourced from Indian
photographers/settings for authentic styling rather than generic Western café stock, per the
redesign brief.
