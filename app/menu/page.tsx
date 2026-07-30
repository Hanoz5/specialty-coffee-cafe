import type { Metadata } from "next";
import { getMenuByCategory } from "@/lib/menu";
import { MENU_CATEGORIES } from "@/lib/types";
import { MenuSection } from "@/components/menu/MenuSection";
import { MenuCategoryNav } from "@/components/menu/MenuCategoryNav";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Menu — Dripsters Specialty Coffee",
  description:
    "Single-origin coffee, filter brews, tea, pastries, sandwiches, and specials — the full Dripsters menu, priced in ₹.",
};

export default function MenuPage() {
  const byCategory = getMenuByCategory();

  return (
    <div className="bg-background">
      <section className="mx-auto w-full max-w-7xl px-6 pt-16 pb-8 lg:px-16 lg:pt-24">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-secondary-600">The Full Menu</p>
          <h1 className="mt-3 font-display text-display-lg text-primary-900">Slow-brewed, well-plated</h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-700">
            Every cup is brewed to order and every plate leaves a kitchen that measures in handfuls,
            not machines — six counters&apos; worth of what we&apos;d actually serve a friend. Prices
            in ₹.
          </p>
        </Reveal>
      </section>

      <MenuCategoryNav />

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-16">
        {MENU_CATEGORIES.map((category) => (
          <MenuSection key={category} category={category} items={byCategory[category]} />
        ))}
      </div>
    </div>
  );
}
