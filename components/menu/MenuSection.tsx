import { MenuItemCard } from "./MenuItemCard";
import { slugify } from "@/lib/slug";
import type { MenuCategory, MenuItem } from "@/lib/types";

export interface MenuSectionProps {
  category: MenuCategory;
  items: MenuItem[];
}

export function MenuSection({ category, items }: MenuSectionProps) {
  return (
    <section id={slugify(category)} className="scroll-mt-36 border-b border-neutral-200 py-12 last:border-b-0">
      <h2 className="font-display text-display-sm text-primary-900">{category}</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <MenuItemCard key={item.name} item={item} indexWithinCategory={i} />
        ))}
      </div>
    </section>
  );
}
