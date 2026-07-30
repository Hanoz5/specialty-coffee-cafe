import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { heroImage } from "@/lib/site-images";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-primary-950">
      <div className="absolute inset-0">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="hero-drift object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/60 to-primary-950/15" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-32 lg:px-16 lg:pb-28">
        <Reveal speed="slow">
          <p className="flex items-center gap-3 text-xs uppercase tracking-widest text-secondary-300">
            <span className="h-px w-8 bg-secondary-300/70" aria-hidden="true" />
            Est. 2019 · A verandah off Fergusson College Road
          </p>
        </Reveal>
        <Reveal speed="slow" delayMs={120}>
          <h1 className="mt-5 max-w-3xl font-display text-display-2xl font-semibold leading-[1.03] text-neutral-50">
            Coffee, unhurried.
            <br />
            <span className="italic text-secondary-200">A verandah, unchanged.</span>
          </h1>
        </Reveal>
        <Reveal speed="slow" delayMs={220}>
          <p className="mt-6 max-w-lg text-lg text-neutral-200">
            Single-origin pour-overs, filter coffee brewed the way Hanoz&rsquo;s family always
            drank it, and a mango tree that still drops fruit on the tables every May.
          </p>
        </Reveal>
        <Reveal speed="slow" delayMs={320}>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="#reserve" size="lg">
              Reserve a Table
            </Button>
            <Button href="/menu" size="lg" variant="outline-inverse">
              View the Menu
            </Button>
          </div>
        </Reveal>
      </div>

      <div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-neutral-300 sm:flex"
        aria-hidden="true"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-neutral-300 to-transparent" />
      </div>
    </section>
  );
}
