import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-primary-900 text-neutral-100">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 md:grid-cols-3 lg:px-16">
        <div className="flex flex-col gap-3">
          <span className="font-display text-2xl font-semibold text-neutral-50">Dripsters</span>
          <p className="max-w-xs text-sm leading-relaxed text-neutral-300">
            A quiet by-lane off Fergusson College Road, Deccan Gymkhana, Pune — coffee brewed slow,
            pastries made by hand, and chairs worth staying in.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-neutral-300">
          <span className="text-xs uppercase text-secondary-300">Visit</span>
          <p>Deccan Gymkhana, off FC Road</p>
          <p>Pune, Maharashtra</p>
          <p>Open daily, 8:00 AM – 9:00 PM</p>
          <p>+91 98230 14477</p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <span className="text-xs uppercase text-secondary-300">Explore</span>
          <Link href="/menu" className="text-neutral-300 hover:text-neutral-50">
            Menu
          </Link>
          <Link href="/about" className="text-neutral-300 hover:text-neutral-50">
            About Us
          </Link>
          <Link href="/#reserve" className="text-neutral-300 hover:text-neutral-50">
            Reserve a Table
          </Link>
          <Link href="/#events" className="text-neutral-300 hover:text-neutral-50">
            This Week&apos;s Events
          </Link>
        </div>
      </div>

      <div className="border-t border-primary-800">
        <p className="mx-auto w-full max-w-7xl px-6 py-6 text-xs text-neutral-400 lg:px-16">
          © {new Date().getFullYear()} Dripsters Specialty Coffee. Made with care, one cup at a time.
        </p>
      </div>
    </footer>
  );
}
