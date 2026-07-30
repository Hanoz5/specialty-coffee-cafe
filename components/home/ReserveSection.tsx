import { ReservationForm } from "@/components/reservation/ReservationForm";
import { Reveal } from "@/components/ui/Reveal";

export function ReserveSection() {
  return (
    <section id="reserve" className="scroll-mt-24 bg-background py-24 lg:py-32">
      <div className="mx-auto w-full max-w-5xl px-6 lg:px-16">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-secondary-600">Reserve a Table</p>
          <h2 className="mt-3 font-display text-display-md text-primary-900">Save your corner</h2>
          <p className="mt-4 max-w-xl text-lg text-neutral-700">
            Tell us who&apos;s coming and when — we&apos;ll have a table and a menu waiting.
          </p>
        </Reveal>
        <div className="mt-10">
          <ReservationForm />
        </div>
      </div>
    </section>
  );
}
