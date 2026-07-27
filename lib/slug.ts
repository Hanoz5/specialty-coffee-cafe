export function slugify(value: string): string {
  return value.toLowerCase().trim().replace(/\s+/g, "-");
}
