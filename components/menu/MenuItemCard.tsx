import { Card } from "@/components/ui/Card";
import { Badge, type BadgeVariant } from "@/components/ui/Badge";
import { getImageForItem } from "@/lib/menu-images";
import type { MenuItem } from "@/lib/types";

const BADGE_VARIANT: Record<string, BadgeVariant> = {
  Popular: "accent",
  "House Special": "outline",
  Seasonal: "warning",
};

/** Cycled by index within a category so a grid of items doesn't read as one repeated ratio. */
const ASPECT_CYCLE = ["aspect-[4/3]", "aspect-[3/4]", "aspect-square"];

export interface MenuItemCardProps {
  item: MenuItem;
  indexWithinCategory: number;
  /** "feature" is a larger editorial tile — used once per section, see style-guide.md §3. */
  size?: "standard" | "feature";
  className?: string;
}

export function MenuItemCard({ item, indexWithinCategory, size = "standard", className }: MenuItemCardProps) {
  const image = getImageForItem(item.category, item.name, indexWithinCategory);
  const isFeature = size === "feature";
  const aspect = isFeature ? "aspect-[16/11]" : ASPECT_CYCLE[indexWithinCategory % ASPECT_CYCLE.length];

  return (
    <Card image={image} imageAspectClassName={aspect} className={className}>
      <div className="flex items-start justify-between gap-3">
        <h3
          className={
            isFeature
              ? "font-display text-display-sm font-semibold text-primary-900"
              : "font-display text-lg font-semibold text-primary-900"
          }
        >
          {item.name}
        </h3>
        <span className={isFeature ? "shrink-0 text-xl font-semibold text-primary-900" : "shrink-0 text-lg font-semibold text-primary-900"}>
          ₹{item.price}
        </span>
      </div>
      {item.badge && (
        <Badge variant={BADGE_VARIANT[item.badge] ?? "neutral"} className="mt-2">
          {item.badge}
        </Badge>
      )}
      <p className={isFeature ? "mt-3 max-w-md text-base leading-relaxed text-neutral-600" : "mt-2 text-sm leading-relaxed text-neutral-600"}>
        {item.description}
      </p>
    </Card>
  );
}
