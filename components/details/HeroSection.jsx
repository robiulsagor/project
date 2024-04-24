import Image from "next/image";
import ActionButtons from "../ActionButtons";

export default function HeroSection({ event }) {
  return (
    <section className="container">
      <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
        <Image
          src={event?.imageUrl}
          alt={event?.name}
          className="h-[450px] mx-auto"
          width={600}
          height={450}
        />
      </div>
      <div className="flex items-end">
        <div className="flex-auto py-4">
          <h1 className="font-bold text-2xl">{event?.name} </h1>
          <p className="text-[#9C9C9C] text-base mt-1">{event?.location}</p>
          <div className="text-[#737373] text-sm mt-1">
            <span className="me-2">
              {event.interested_ids.length} Interested
            </span>
            <span className="me-2">|</span>
            <span>{event.going_ids.length} Going</span>
          </div>
        </div>

        <ActionButtons fromDetails={true} />
      </div>
    </section>
  );
}
