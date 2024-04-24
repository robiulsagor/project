import EventDetails from "@/components/details/EventDetails";
import EventMap from "@/components/details/EventMap";
import HeroSection from "@/components/details/HeroSection";
import { getEventById } from "@/db/queries";

export default async function DetailsPage({ params: { id } }) {
  const event = await getEventById(id);

  return (
    <>
      <HeroSection event={event} />

      <section className="container">
        <div className="grid grid-cols-5 gap-12 my-12">
          <EventDetails event={event} />
          <EventMap event={event} />
        </div>
      </section>
    </>
  );
}
