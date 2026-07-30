import { MenuItemCard } from "./MenuItemCard";
import { Reveal } from "@/components/ui/Reveal";
import { slugify } from "@/lib/slug";
import type { MenuCategory, MenuItem } from "@/lib/types";

const CATEGORY_BLURB: Record<MenuCategory, string> = {
  "Hot Coffee": "Pulled to order, no exceptions — the espresso bar Hanoz builds his mornings around.",
  "Cold Coffee": "For the half of Pune that never stopped being hot by 8 a.m.",
  Tea: "Assam and Darjeeling leaves, steeped the unhurried way — no tea bags, ever.",
  Pastries: "Laminated, baked, and iced from a notebook that's older than the café.",
  Sandwiches: "Griddled to order on the same teak counter that's held every cup since 2019.",
  Specials: "The slow stuff — flights, siphons, and a tiramisu that only makes sense here.",
};

export interface MenuSectionProps {
  category: MenuCategory;
  items: MenuItem[];
}

export function MenuSection({ category, items }: MenuSectionProps) {
  const [feature, ...rest] = items;

  return (
    <section id={slugify(category)} className="scroll-mt-36 border-b border-neutral-200 py-14 last:border-b-0 lg:py-16">
      <Reveal speed="slow" className="max-w-xl">
        <h2 className="font-display text-display-sm text-primary-900">{category}</h2>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600">{CATEGORY_BLURB[category]}</p>
      </Reveal>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {feature && (
          <Reveal className="sm:col-span-2 lg:col-span-2">
            <MenuItemCard item={feature} indexWithinCategory={0} size="feature" className="h-full" />
          </Reveal>
        )}
        {rest.map((item, i) => (
          <Reveal key={item.name} delayMs={Math.min(i, 4) * 70}>
            <MenuItemCard item={item} indexWithinCategory={i + 1} className="h-full" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
