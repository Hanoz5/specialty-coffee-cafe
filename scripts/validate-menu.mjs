#!/usr/bin/env node
// Validates Docs/menu.csv against the rules stated in Docs/menu-content-rules.md.
import { readFileSync } from "node:fs";
import path from "node:path";

const CATEGORIES = ["Hot Coffee", "Cold Coffee", "Tea", "Pastries", "Sandwiches", "Specials"];
const BADGES = ["Popular", "House Special", "Seasonal"];
const EXPECTED_HEADER = "category,name,description,price,badge";

const csvPath = path.join(process.cwd(), "Docs", "menu.csv");
const raw = readFileSync(csvPath, "utf-8");
const lines = raw.split(/\r?\n/).filter((line) => line.length > 0);

const errors = [];

if (lines.length === 0) {
  errors.push("File is empty.");
} else if (lines[0] !== EXPECTED_HEADER) {
  errors.push(`Header row must be exactly "${EXPECTED_HEADER}", got "${lines[0]}".`);
}

const dataLines = lines.slice(1);
const seenNames = new Set();

dataLines.forEach((line, i) => {
  const rowNum = i + 2; // +1 for header, +1 for 1-index
  const cells = line.split(",");

  if (cells.length !== 5) {
    errors.push(`Row ${rowNum}: expected 5 fields, got ${cells.length} ("${line}").`);
    return;
  }

  const [category, name, description, price, badge] = cells;

  if (!CATEGORIES.includes(category)) {
    errors.push(`Row ${rowNum}: category "${category}" is not one of ${CATEGORIES.join(", ")}.`);
  }

  if (!name || name.trim().length === 0) {
    errors.push(`Row ${rowNum}: name is empty.`);
  } else {
    const key = name.trim().toLowerCase();
    if (seenNames.has(key)) {
      errors.push(`Row ${rowNum}: duplicate name "${name}".`);
    }
    seenNames.add(key);
  }

  if (!description || description.trim().length < 20) {
    errors.push(`Row ${rowNum}: description must be at least 20 characters (got ${description?.trim().length ?? 0}).`);
  }

  if (!/^\d+$/.test(price)) {
    errors.push(`Row ${rowNum}: price "${price}" is not a positive integer.`);
  }

  if (badge && !BADGES.includes(badge)) {
    errors.push(`Row ${rowNum}: badge "${badge}" is not one of ${BADGES.join(", ")}.`);
  }
});

if (errors.length > 0) {
  console.error(`FAIL — ${errors.length} violation(s) in Docs/menu.csv:\n`);
  for (const err of errors) console.error(`  - ${err}`);
  process.exit(1);
}

console.log(`PASS — ${dataLines.length} menu items across ${CATEGORIES.length} categories validated against Docs/menu-content-rules.md.`);
