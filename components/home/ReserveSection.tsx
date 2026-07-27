import { ReservationForm } from "@/components/reservation/ReservationForm";

export function ReserveSection() {
  return (
    <section id="reserve" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="mx-auto w-full max-w-5xl px-6 lg:px-16">
        <p className="text-xs uppercase text-secondary-600">Reserve a Table</p>
        <h2 className="mt-3 font-display text-display-md text-primary-900">Save your corner</h2>
        <p className="mt-4 max-w-xl text-lg text-neutral-700">
          Tell us who&apos;s coming and when — we&apos;ll have a table and a menu waiting.
        </p>
        <div className="mt-10">
          <ReservationForm />
        </div>
      </div>
    </section>
  );
}
