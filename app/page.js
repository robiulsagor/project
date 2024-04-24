import EventList from "@/components/events/EventList";
import Header from "@/components/events/Header";

export default function Home() {
  return (
    <section className="container py-5">
      <Header />
      <EventList />
    </section>
  );
}
