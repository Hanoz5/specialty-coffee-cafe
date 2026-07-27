import { Hero } from "@/components/home/Hero";
import { LovedItems } from "@/components/home/LovedItems";
import { EventsSection } from "@/components/home/EventsSection";
import { ReserveSection } from "@/components/home/ReserveSection";

export default function Home() {
  return (
    <>
      <Hero />
      <LovedItems />
      <EventsSection />
      <ReserveSection />
    </>
  );
}
