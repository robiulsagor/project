import { getAllEvents } from "@/db/queries";
import EventCard from "./EventCard";

export default async function EventList() {
  const events = await getAllEvents();
  console.log("-- ", events);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {events.length > 0 && events.map((e) => <EventCard key={e._id} />)}
      </div>

      {events.length == 0 && (
        <div className=" w-[90%] flex items-center justify-center mx-auto">
          <h2 className="text-5xl text-red-800 font-bold pt-32">
            {" "}
            No events found!
          </h2>
        </div>
      )}
    </>
  );
}
