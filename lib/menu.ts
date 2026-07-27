import { readFileSync } from "fs";
import path from "path";
import { MENU_CATEGORIES, type MenuCategory, type MenuItem } from "./types";

let cachedItems: MenuItem[] | null = null;

function parseCsv(content: string): MenuItem[] {
  const lines = content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const [headerLine, ...rows] = lines;
  const headers = headerLine.split(",");

  return rows.map((row) => {
    const cells = row.split(",");
    const record: Record<string, string> = {};
    headers.forEach((header, i) => {
      record[header] = cells[i] ?? "";
    });

    return {
      category: record.category as MenuCategory,
      name: record.name,
      description: record.description,
      price: Number(record.price),
      badge: record.badge ? record.badge : undefined,
    };
  });
}

/** Reads and parses docs/menu.csv. Server-only — never import from a 'use client' file. */
export function getMenuItems(): MenuItem[] {
  if (cachedItems) return cachedItems;
  const filePath = path.join(process.cwd(), "docs", "menu.csv");
  const content = readFileSync(filePath, "utf-8");
  cachedItems = parseCsv(content);
  return cachedItems;
}

export function getMenuByCategory(): Record<MenuCategory, MenuItem[]> {
  const items = getMenuItems();
  const grouped = Object.fromEntries(MENU_CATEGORIES.map((category) => [category, [] as MenuItem[]])) as Record<
    MenuCategory,
    MenuItem[]
  >;

  for (const item of items) {
    grouped[item.category].push(item);
  }

  return grouped;
}

// Hand-picked for the homepage "most loved" section: the 3 CSV-badged items
// plus a few fan-favorites chosen for category variety, not generic padding.
const FEATURED_NAMES = [
  "South Indian Filter Coffee",
  "Masala Chai",
  "Siphon Brewed Single Origin",
  "Single-Origin Pour-Over",
  "Iced Latte",
  "Classic Club Sandwich",
];

export interface FeaturedMenuItem extends MenuItem {
  /** Index within its category's list — keeps homepage/menu-page image rotation consistent. */
  indexWithinCategory: number;
}

export function getFeaturedItems(): FeaturedMenuItem[] {
  const byCategory = getMenuByCategory();

  return FEATURED_NAMES.map((name) => {
    for (const category of MENU_CATEGORIES) {
      const indexWithinCategory = byCategory[category].findIndex((item) => item.name === name);
      if (indexWithinCategory !== -1) {
        return { ...byCategory[category][indexWithinCategory], indexWithinCategory };
      }
    }
    return undefined;
  }).filter((item): item is FeaturedMenuItem => Boolean(item));
}
