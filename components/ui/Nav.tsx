"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export interface NavLink {
  href: string;
  label: string;
}

export interface NavProps {
  brand: string;
  links: NavLink[];
  cta: NavLink;
}

export function Nav({ brand, links, cta }: NavProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200 bg-background/95 backdrop-blur-sm">
      <nav aria-label="Primary" className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-6 lg:px-16">
        <Link href="/" className="font-display text-2xl font-semibold text-primary-900">
          {brand}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "text-sm font-medium text-primary-900 transition-colors hover:text-secondary-600",
                  "border-b-2 border-transparent pb-1",
                  isActive(link.href) && "border-secondary-500",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href={cta.href} size="sm">
            {cta.label}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-primary-900 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div className="border-t border-neutral-200 bg-background md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className="block rounded-md px-2 py-2.5 text-base font-medium text-primary-900 hover:bg-primary-50"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-6 pb-6">
            <Button href={cta.href} className="w-full" onClick={() => setOpen(false)}>
              {cta.label}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
