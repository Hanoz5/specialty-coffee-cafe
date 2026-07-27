import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { heroImage } from "@/lib/site-images";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-end overflow-hidden bg-primary-950">
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/55 to-primary-950/10" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-16 lg:pb-24">
        <p className="text-xs uppercase text-secondary-300">Est. 2019 · Deccan Gymkhana, Pune</p>
        <h1 className="mt-4 max-w-2xl font-display text-display-xl font-semibold text-neutral-50">
          Coffee brewed slow, for a city that rarely stops.
        </h1>
        <p className="mt-5 max-w-lg text-lg text-neutral-200">
          Single-origin pour-overs, hand-pulled espresso, and pastries baked each morning — in a
          verandah built for lingering.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button href="#reserve" size="lg">
            Reserve a Table
          </Button>
          <Button href="/menu" size="lg" variant="outline-inverse">
            View the Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
