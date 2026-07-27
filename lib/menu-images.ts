import type { MenuCategory } from "./types";

export interface CategoryImage {
  src: string;
  alt: string;
}

/**
 * A curated set of ~3–4 verified Pexels photos per category, rotated across
 * that category's items (see docs/design/../../.claude/plans — "Menu imagery"
 * decision). Not 35 individually unique images — not realistically sourceable
 * for named dishes like "Cardamom Bun" on stock libraries.
 */
export const categoryImages: Record<MenuCategory, CategoryImage[]> = {
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
    { src: "https://images.pexels.com/photos/34933330/pexels-photo-34933330.jpeg", alt: "A professional coffee cupping and tasting process in action" },
    { src: "https://images.pexels.com/photos/33669195/pexels-photo-33669195.jpeg", alt: "An elegant cortado served on a marble café table" },
    { src: "https://images.pexels.com/photos/16991282/pexels-photo-16991282.jpeg", alt: "A fried egg with buttered toast plated for breakfast" },
  ],
};

export function getImageForItem(category: MenuCategory, indexWithinCategory: number): CategoryImage {
  const pool = categoryImages[category];
  return pool[indexWithinCategory % pool.length];
}
