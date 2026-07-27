import { Nav } from "@/components/ui/Nav";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About Us" },
];

const CTA = { href: "/#reserve", label: "Reserve a Table" };

export function SiteHeader() {
  return <Nav brand="Dripsters" links={LINKS} cta={CTA} />;
}
