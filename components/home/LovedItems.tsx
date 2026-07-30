import { getFeaturedItems } from "@/lib/menu";
import { MenuItemCard } from "@/components/menu/MenuItemCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function LovedItems() {
  const [feature, ...rest] = getFeaturedItems();

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-16 lg:py-32">
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs uppercase tracking-widest text-secondary-600">Customer Favourites</p>
            <h2 className="mt-3 font-display text-display-md text-primary-900">What people keep coming back for</h2>
          </div>
          <Button href="/menu" variant="secondary">
            See the Full Menu
          </Button>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {feature && (
          <Reveal className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
            <MenuItemCard item={feature} indexWithinCategory={feature.indexWithinCategory} size="feature" className="h-full" />
          </Reveal>
        )}
        {rest.map((item, i) => (
          <Reveal key={item.name} delayMs={(i + 1) * 90}>
            <MenuItemCard item={item} indexWithinCategory={item.indexWithinCategory} className="h-full" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
