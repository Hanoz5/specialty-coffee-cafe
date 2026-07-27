import { MENU_CATEGORIES } from "@/lib/types";
import { slugify } from "@/lib/slug";

export function MenuCategoryNav() {
  return (
    <nav aria-label="Menu categories" className="sticky top-18 z-20 border-y border-neutral-200 bg-background/95 backdrop-blur-sm">
      <ul className="mx-auto flex w-full max-w-7xl gap-2 overflow-x-auto px-6 py-3 lg:px-16">
        {MENU_CATEGORIES.map((category) => (
          <li key={category}>
            <a
              href={`#${slugify(category)}`}
              className="inline-flex items-center whitespace-nowrap rounded-full border border-neutral-300 px-4 py-1.5 text-sm font-medium text-primary-900 transition-colors hover:bg-primary-50"
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
