import Image from "next/image";
import Link from "next/link";
import ActionButtons from "../ActionButtons";

export default function EventCard({ event }) {
  return (
    <div className="overflow-hidden rounded-md bg-[#242526]">
      <Image
        src={event?.imageUrl}
        alt={event?.name}
        className="w-full h-[300px]"
        width={200}
        height={300}
      />
      <div className="p-3">
        <Link href={`/event/${event._id}`} className="font-bold text-lg">
          {event?.name}
        </Link>
        <p className="text-[#9C9C9C] text-sm mt-1">{event?.location}</p>
        <div className="text-[#737373] text-sm mt-1">
          <span className="me-2">{event.interested_ids.length} Interested</span>
          <span className="me-2">|</span>
          <span>{event.going_ids.length} Going</span>
        </div>

        <ActionButtons />
      </div>
    </div>
  );
}
