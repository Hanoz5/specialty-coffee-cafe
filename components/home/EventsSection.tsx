import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { eventImages } from "@/lib/site-images";

const EVENTS = [
  {
    image: eventImages.openMic,
    tag: "Every Friday, 7:30 PM",
    title: "Open Mic Nights",
    description:
      "Poets, first-time singers, and the odd stand-up set take the corner by the teak counter. No sign-up fee — just put your name on the chalkboard before 7.",
  },
  {
    image: eventImages.coffeeTasting,
    tag: "Every Saturday, 10:00 AM",
    title: "Coffee Tasting Sessions",
    description:
      "A guided cupping through whatever's arrived fresh from Chikmagalur or Coorg that week. Small batches, honest notes, seconds always poured.",
  },
];

export function EventsSection() {
  return (
    <section id="events" className="bg-primary-900 py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-16">
        <p className="text-xs uppercase text-secondary-300">This Week at Dripsters</p>
        <h2 className="mt-3 max-w-xl font-display text-display-md text-neutral-50">
          A few reasons to stay past your last cup
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {EVENTS.map((event) => (
            <Card key={event.title} variant="media-overlay" image={event.image} imageAspectClassName="aspect-[16/11]">
              <Badge variant="scrim">{event.tag}</Badge>
              <h3 className="mt-3 font-display text-2xl font-semibold text-neutral-50">{event.title}</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-neutral-200">{event.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
