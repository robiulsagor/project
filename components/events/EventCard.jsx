import Image from "next/image";
import Link from "next/link";

export default function EventCard({ event }) {
  return (
    <div className="overflow-hidden rounded-md bg-[#242526]">
      <Image
        src={event?.imageUrl}
        alt="Event 1"
        className="w-full"
        width={500}
        height={500}
      />
      <div className="p-3">
        <Link href={`/event/${event._id}`} className="font-bold text-lg">
          {event?.name}
        </Link>
        <p className="text-[#9C9C9C] text-sm mt-1">{event?.location}</p>
        <div className="text-[#737373] text-sm mt-1">
          <span> {event.interested_ids.length} Interested</span>
          <span>|</span>
          <span>{event.going_ids.length} Going</span>
        </div>

        <div className="w-full flex gap-4 mt-4">
          <button className="w-full bg-indigo-600 hover:bg-indigo-800">
            Interested
          </button>
          <button className="w-full">Going</button>
        </div>
      </div>
    </div>
  );
}
