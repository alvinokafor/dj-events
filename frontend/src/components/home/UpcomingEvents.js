import Link from "next/link";
import EventCard from "../partials/EventCard";

export default function UpcomingEvents({ event_list }) {
  return (
    <section className="px-4 lg:px-6">
      <h2 className="text-3xl font-bold mb-16 text-center">Upcoming Events</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 mb-12 gap-y-6">
        {event_list.map((event) => (
          <EventCard event={event} key={event._id} />
        ))}
      </div>

      <div className="mb-12 flex justify-center">
        <Link href="/events">
          <button className="text-center py-3 px-5 text-base mx-auto font-medium  text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 ">
            View All Events
          </button>
        </Link>
      </div>
    </section>
  );
}
