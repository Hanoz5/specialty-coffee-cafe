import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { aboutImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "About Us — Dripsters Specialty Coffee",
  description:
    "How Hanoz Avari built Dripsters from a Sunday farmers' market handcart into a verandah café in Deccan Gymkhana, Pune.",
};

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="mx-auto w-full max-w-4xl px-6 pt-16 pb-12 lg:px-16 lg:pt-24">
        <p className="text-xs uppercase text-secondary-600">Our Story</p>
        <h1 className="mt-3 font-display text-display-lg text-primary-900">
          One counter, one verandah, and a lot of second cups
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-neutral-700">
          Dripsters didn&apos;t start as a business plan. It started as a single handcart at a
          Sunday farmers&apos; market, four years before the café had a name.
        </p>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:order-2">
          <Image src={aboutImages.brewingBar.src} alt={aboutImages.brewingBar.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="flex flex-col gap-5 text-base leading-relaxed text-neutral-700 lg:order-1">
          <p>
            <strong className="font-display text-xl font-semibold text-primary-900">Hanoz Avari</strong>{" "}
            grew up in Indore, in a Parsi household where meals were an occasion and coffee
            wasn&apos;t really part of the picture — that came later. He lived there for
            twenty-five years before a cousin&apos;s coffee estate near Chikmagalur pulled him
            south, and he stayed on, spending the better part of his late twenties on overnight
            buses between Bengaluru and the estates of Chikmagalur and Coorg, learning to cup lots
            at 6 a.m. before the day&apos;s heat changed how everything tasted. He could tell you
            the difference between a wet-processed and a natural-processed bean before he could
            parallel park.
          </p>
          <p>
            What he couldn&apos;t find, anywhere close to home, was a place in Pune that treated
            coffee like it deserved that kind of attention — brewed to order, poured by someone
            who&apos;d actually tasted the batch. The pastry counter came from the same
            stubbornness. His grandmother ran a small Irani bakery near Indore&apos;s Sarafa Bazaar
            decades ago, and the smell of her cardamom buns is the closest thing Hanoz has to a
            childhood memory of home. When he finally opened a place of his own in Pune, buying in
            trays from a wholesale bakery was never really an option — he taught himself to
            laminate dough from her old notebook, badly at first, then well enough.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image src={aboutImages.interior.src} alt={aboutImages.interior.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="flex flex-col gap-5 text-base leading-relaxed text-neutral-700">
          <p>
            For three years, Dripsters was just a stall — a restored steel handcart Hanoz wheeled out
            every Sunday to the farmers&apos; market off Boat Club Road, one urn of filter coffee and a
            tray of whatever he&apos;d baked the night before. Regulars started asking when he&apos;d
            get a proper roof.
          </p>
          <p>
            In 2019, he found a bungalow on a quiet by-lane off Fergusson College Road — the kind of
            1960s Deccan Gymkhana house with a garage nobody used and a verandah built for exactly
            this. The landlady, a retired botany professor, agreed to lease it on the condition that he
            didn&apos;t cut down the mango tree in the courtyard. He didn&apos;t. It still drops fruit
            on the tables every May, which the regulars have learned to treat as a feature, not an
            inconvenience.
          </p>
        </div>
      </section>

      <section className="bg-primary-900 py-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:order-2">
            <Image src={aboutImages.handsWithMug.src} alt={aboutImages.handsWithMug.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="flex flex-col gap-5 text-base leading-relaxed text-neutral-200 lg:order-1">
            <p>
              The counter is a hundred-year-old Burma teak door Hanoz found at a reclamation yard off
              Solapur Road, sanded down and sealed rather than replaced. The chairs came from four
              different trips to Tulshibaug, chosen for comfort over matching. The espresso machine — a
              temperamental, beloved thing — got named{" "}
              <span className="font-display italic text-neutral-50">&quot;Bahadur&quot;</span> by the
              first barista he hired, because it complained loudly every morning and worked hard
              anyway.
            </p>
            <p>
              A lot of the early regulars came from across the road — Fergusson College students who
              treated the verandah like an extension of their library, then kept coming back after
              graduation. That&apos;s more or less how the open mic nights started: someone asked if
              they could bring a guitar on a slow Friday, and the answer was yes, and it never stopped
              being yes.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 py-16 text-center lg:py-24">
        <p className="text-lg leading-relaxed text-neutral-700">
          Dripsters is still mostly just Hanoz most mornings — behind the machine before the shutters
          are even up, convinced that a neighbourhood café&apos;s job is less about the coffee and more
          about giving people a reason to stay an extra half hour.
        </p>
        <p className="mt-2 font-display text-xl italic text-primary-900">The coffee just gives you an excuse.</p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/#reserve" size="lg">
            Reserve a Table
          </Button>
          <Button href="/menu" size="lg" variant="secondary">
            See the Menu
          </Button>
        </div>
      </section>
    </div>
  );
}
