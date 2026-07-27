import { Card } from "@/components/ui/Card";
import { Badge, type BadgeVariant } from "@/components/ui/Badge";
import { getImageForItem } from "@/lib/menu-images";
import type { MenuItem } from "@/lib/types";

const BADGE_VARIANT: Record<string, BadgeVariant> = {
  Popular: "accent",
  "House Special": "outline",
  Seasonal: "warning",
};

export interface MenuItemCardProps {
  item: MenuItem;
  indexWithinCategory: number;
}

export function MenuItemCard({ item, indexWithinCategory }: MenuItemCardProps) {
  const image = getImageForItem(item.category, indexWithinCategory);

  return (
    <Card image={image}>
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-primary-900">{item.name}</h3>
        <span className="shrink-0 text-lg font-semibold text-primary-900">₹{item.price}</span>
      </div>
      {item.badge && (
        <Badge variant={BADGE_VARIANT[item.badge] ?? "neutral"} className="mt-2">
          {item.badge}
        </Badge>
      )}
      <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.description}</p>
    </Card>
  );
}
