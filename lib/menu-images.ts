import type { MenuCategory } from "./types";

export interface CategoryImage {
  src: string;
  alt: string;
}

/**
 * Defensive fallback only — every one of the 36 current menu items has a direct entry in
 * `menuItemImages` below, so this pool is never actually reached today. It exists so a future
 * item added without a photo (e.g. via the menu-item-formatter skill) renders *something* real
 * rather than a broken image, instead of silently duplicating another item's photo. Every value
 * is a real, previously-verified Pexels photo. Do NOT add a new src here without first confirming
 * it on an actual Pexels page — never guess a photo ID.
 */
const categoryPool: Record<MenuCategory, CategoryImage[]> = {
  "Hot Coffee": [
    { src: "https://images.pexels.com/photos/2067432/pexels-photo-2067432.jpeg", alt: "Cappuccino in a cup on a saucer with a teaspoon" },
    { src: "https://images.pexels.com/photos/10226668/pexels-photo-10226668.jpeg", alt: "Hands filtering coffee through a pour-over dripper" },
    { src: "https://images.pexels.com/photos/7208665/pexels-photo-7208665.jpeg", alt: "Hot water being poured over ground coffee in a filter cone" },
    { src: "https://images.pexels.com/photos/29498509/pexels-photo-29498509.jpeg", alt: "Pour-over coffee dripper beside a ceramic mug on a wooden table" },
  ],
  "Cold Coffee": [
    { src: "https://images.pexels.com/photos/38426418/pexels-photo-38426418.jpeg", alt: "Iced coffee with ice cubes in a clear glass on marble" },
    { src: "https://images.pexels.com/photos/31435390/pexels-photo-31435390.png", alt: "Cold brew coffee beside a glass of ice and scattered coffee beans" },
    { src: "https://images.pexels.com/photos/13735958/pexels-photo-13735958.jpeg", alt: "Barista's hands pouring iced coffee into a glass" },
    { src: "https://images.pexels.com/photos/16284351/pexels-photo-16284351.jpeg", alt: "Cold brew coffee being poured from a pot into a glass" },
  ],
  Tea: [
    { src: "https://images.pexels.com/photos/37186989/pexels-photo-37186989.jpeg", alt: "Creamy Indian masala chai in a glass on a wooden table" },
    { src: "https://images.pexels.com/photos/10377676/pexels-photo-10377676.jpeg", alt: "A hand holding a traditional clay kulhad cup of masala chai" },
    { src: "https://images.pexels.com/photos/29650995/pexels-photo-29650995.jpeg", alt: "A glass of masala chai served with fresh ginger on marble" },
    { src: "https://images.pexels.com/photos/34324342/pexels-photo-34324342.jpeg", alt: "A street vendor pouring traditional chai into glasses" },
  ],
  Pastries: [
    { src: "https://images.pexels.com/photos/30403209/pexels-photo-30403209.jpeg", alt: "Freshly baked croissants in a bakery display" },
    { src: "https://images.pexels.com/photos/13425794/pexels-photo-13425794.jpeg", alt: "Close-up of golden, flaky croissants" },
    { src: "https://images.pexels.com/photos/27969779/pexels-photo-27969779.jpeg", alt: "A display case of croissants and other baked goods" },
    { src: "https://images.pexels.com/photos/11675765/pexels-photo-11675765.jpeg", alt: "Close-up of freshly baked croissants" },
  ],
  Sandwiches: [
    { src: "https://images.pexels.com/photos/35054704/pexels-photo-35054704.jpeg", alt: "Grilled sandwiches served with a cappuccino on a wooden table" },
    { src: "https://images.pexels.com/photos/5555754/pexels-photo-5555754.jpeg", alt: "Grilled panini sandwiches on a wooden platter" },
    { src: "https://images.pexels.com/photos/13250821/pexels-photo-13250821.jpeg", alt: "A sandwich plated on a wooden table with a drink" },
    { src: "https://images.pexels.com/photos/34452171/pexels-photo-34452171.jpeg", alt: "A sandwich plate paired with a coffee latte" },
  ],
  Specials: [
    { src: "https://images.pexels.com/photos/34505585/pexels-photo-34505585.jpeg", alt: "A coffee tasting setup with small cups and spoons" },
    { src: "https://images.pexels.com/photos/33669195/pexels-photo-33669195.jpeg", alt: "An elegant cortado served on a marble café table" },
    { src: "https://images.pexels.com/photos/16991282/pexels-photo-16991282.jpeg", alt: "A fried egg with buttered toast plated for breakfast" },
  ],
};

/**
 * One unique photo per menu item, keyed by exact item name from Docs/menu.csv. Populated from
 * the item-specific sourcing pass — see Docs/image-sourcing-evidence.md. Falls back to the
 * category pool (cycled) for any item not yet populated.
 */
export const menuItemImages: Record<string, CategoryImage> = {
  // Hot Coffee
  "Espresso": { src: "https://images.pexels.com/photos/9052283/pexels-photo-9052283.jpeg", alt: "Espresso freshly brewed into a shot glass, dark crema catching the light" },
  "Cappuccino": { src: "https://images.pexels.com/photos/14335866/pexels-photo-14335866.jpeg", alt: "Cappuccino with delicate latte art on a sunlit marble café table" },
  "Cafe Latte": { src: "https://images.pexels.com/photos/29554058/pexels-photo-29554058.jpeg", alt: "A latte with heart-shaped foam art resting on a textured wooden table" },
  "Flat White": { src: "https://images.pexels.com/photos/33216070/pexels-photo-33216070.jpeg", alt: "A flat white with graceful latte art served on a rustic wooden table" },
  "Single-Origin Pour-Over": { src: "https://images.pexels.com/photos/32391648/pexels-photo-32391648.jpeg", alt: "Overhead view of a V60 dripper brewing coffee, grounds blooming in the filter" },
  "South Indian Filter Coffee": { src: "https://images.pexels.com/photos/33932441/pexels-photo-33932441.png", alt: "Frothy South Indian filter coffee served in traditional steel tumbler and davara" },
  "Malabar Spiced Mocha": { src: "https://images.pexels.com/photos/15149174/pexels-photo-15149174.jpeg", alt: "A mocha topped with creamy foam and a chocolate drizzle on a marble table" },

  // Cold Coffee
  "Cold Brew": { src: "https://images.pexels.com/photos/30694844/pexels-photo-30694844.jpeg", alt: "Cold brew coffee being poured over ice into a glass on a wooden table" },
  "Iced Latte": { src: "https://images.pexels.com/photos/32681655/pexels-photo-32681655.jpeg", alt: "Espresso being poured into cold milk over ice, layering into an iced latte" },
  "Nitro Cold Brew": { src: "https://images.pexels.com/photos/37574027/pexels-photo-37574027.jpeg", alt: "A barista filling a cup with velvety nitro cold brew straight from the tap" },
  "Affogato": { src: "https://images.pexels.com/photos/32972513/pexels-photo-32972513.jpeg", alt: "A scoop of vanilla gelato drowned in hot espresso, poured tableside" },
  "Iced Americano": { src: "https://images.pexels.com/photos/34932738/pexels-photo-34932738.jpeg", alt: "Layers of espresso and ice in a glass of iced Americano on a metal tray" },
  "Classic Cold Coffee": { src: "https://images.pexels.com/photos/12833529/pexels-photo-12833529.jpeg", alt: "A tall glass of cold coffee topped with whipped cream and chocolate chips" },

  // Tea
  "Masala Chai": { src: "https://images.pexels.com/photos/36662612/pexels-photo-36662612.jpeg", alt: "Masala chai poured into a traditional clay cup by a street vendor" },
  "Darjeeling First Flush": { src: "https://images.pexels.com/photos/4563760/pexels-photo-4563760.jpeg", alt: "A steaming cup of delicate loose-leaf tea against a rustic backdrop" },
  "Assam Golden Tip": { src: "https://images.pexels.com/photos/17537474/pexels-photo-17537474.jpeg", alt: "A richly colored cup of brewed tea resting on an open book in warm light" },
  "Jasmine Green Tea": { src: "https://images.pexels.com/photos/38050692/pexels-photo-38050692.jpeg", alt: "A cup of jasmine tea with fresh leaves by a sunlit window" },
  "Nilgiri Iced Tea": { src: "https://images.pexels.com/photos/37515893/pexels-photo-37515893.jpeg", alt: "A glass of iced tea with lemon and mint, bright in natural light" },
  "Chamomile Herbal Infusion": { src: "https://images.pexels.com/photos/8115976/pexels-photo-8115976.jpeg", alt: "A cozy flat-lay of chamomile tea in a cup surrounded by fresh chamomile flowers" },

  // Pastries
  "Butter Croissant": { src: "https://images.pexels.com/photos/20002837/pexels-photo-20002837.jpeg", alt: "Freshly baked golden croissants on a cooling rack showing flaky buttery layers" },
  "Almond Croissant": { src: "https://images.pexels.com/photos/37970772/pexels-photo-37970772.jpeg", alt: "Golden almond croissants fresh from the oven topped with slivered almonds" },
  "Chocolate Hazelnut Tart": { src: "https://images.pexels.com/photos/29395475/pexels-photo-29395475.jpeg", alt: "Elegant chocolate hazelnut tart with glossy ganache plated on a designer green dish" },
  "Banana Walnut Bread": { src: "https://images.pexels.com/photos/37046609/pexels-photo-37046609.jpeg", alt: "Freshly baked banana walnut bread loaf in a tin surrounded by ripe bananas" },
  "Blueberry Muffin": { src: "https://images.pexels.com/photos/13054437/pexels-photo-13054437.jpeg", alt: "Top-down view of fresh blueberry muffins with scattered blueberries and a crumbled sugar topping" },
  "Cardamom Bun": { src: "https://images.pexels.com/photos/29300995/pexels-photo-29300995.jpeg", alt: "Top-down view of a Swedish cardamom bun dusted with cinnamon sugar on a black plate" },

  // Sandwiches
  "Classic Club Sandwich": { src: "https://images.pexels.com/photos/29346178/pexels-photo-29346178.jpeg", alt: "Close-up of a triple-decker club sandwich stacked with layers of meat, lettuce, and tomato" },
  "Caprese Grilled Sandwich": { src: "https://images.pexels.com/photos/30925490/pexels-photo-30925490.jpeg", alt: "Fresh caprese sandwich with mozzarella, tomato, and basil on grilled ciabatta bread" },
  "Paneer Tikka Sandwich": { src: "https://images.pexels.com/photos/36268517/pexels-photo-36268517.jpeg", alt: "Grilled paneer tikka sandwich served with dipping chutneys on a black plate" },
  "Smoked Chicken and Cheese Panini": { src: "https://images.pexels.com/photos/35225535/pexels-photo-35225535.jpeg", alt: "Close-up of a grilled chicken and cheese panini with a gooey melted cheese pull" },
  "Avocado and Hummus Sandwich": { src: "https://images.pexels.com/photos/9012028/pexels-photo-9012028.jpeg", alt: "Close-up of an avocado and hummus sandwich with sprouts and cucumber on multigrain bread" },
  "Bombay Masala Toast": { src: "https://images.pexels.com/photos/36268518/pexels-photo-36268518.jpeg", alt: "Stacked Bombay-style grilled masala toast sandwich with chutney and a red checkered napkin" },

  // Specials
  "Siphon Brewed Single Origin": { src: "https://images.pexels.com/photos/31961247/pexels-photo-31961247.jpeg", alt: "Vintage vacuum siphon coffee brewing setup on a café counter with warm ambient light" },
  "Aeropress Flight": { src: "https://images.pexels.com/photos/31967901/pexels-photo-31967901.jpeg", alt: "Aeropress coffee maker brewing single-origin coffee into a glass carafe for a tasting flight" },
  "Coffee Cupping Flight": { src: "https://images.pexels.com/photos/34933330/pexels-photo-34933330.jpeg", alt: "Close-up of a coffee cupping session with tasting spoons resting on rows of small cups" },
  "Chef's All-Day Breakfast Platter": { src: "https://images.pexels.com/photos/37279433/pexels-photo-37279433.jpeg", alt: "Hearty all-day breakfast platter with fried eggs, crispy toast, and bacon on a rustic wooden table" },
  "Filter Coffee Tiramisu": { src: "https://images.pexels.com/photos/35135510/pexels-photo-35135510.jpeg", alt: "Filter coffee tiramisu layered in glass cups and dusted with cocoa powder" },
};

export function getImageForItem(category: MenuCategory, name: string, indexWithinCategory = 0): CategoryImage {
  const specific = menuItemImages[name];
  if (specific) return specific;
  const pool = categoryPool[category];
  return pool[indexWithinCategory % pool.length];
}
