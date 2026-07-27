import { getFeaturedItems } from "@/lib/menu";
import { MenuItemCard } from "@/components/menu/MenuItemCard";
import { Button } from "@/components/ui/Button";

export function LovedItems() {
  const items = getFeaturedItems();

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-16 lg:py-28">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs uppercase text-secondary-600">Customer Favourites</p>
          <h2 className="mt-3 font-display text-display-md text-primary-900">What people keep coming back for</h2>
        </div>
        <Button href="/menu" variant="secondary">
          See the Full Menu
        </Button>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <MenuItemCard key={item.name} item={item} indexWithinCategory={item.indexWithinCategory} />
        ))}
      </div>
    </section>
  );
}
