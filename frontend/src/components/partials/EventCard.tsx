import { useContext } from "react";
import { updateEvent } from "@/utils/sanity_actions";
import Link from "next/link";
import { AppContext, Event } from "@/contexts/AppContext";
import { useFormattedDate } from "@/hooks/useFormattedDate";
import { urlFor } from "@/utils/sanityConfig";

export default function EventCard({ event }) {
  const { eventList, setEventList } = useContext(AppContext);
  const event_date = useFormattedDate(event.date_time);

  const handleSaveEvent = (event) => {
    const mutatedEvents = eventList.map((evt) => {
      if (evt._id === event) {
        evt.saved_event = !evt.saved_event;
        updateEvent(evt._id, evt.saved_event);
      }
      return evt;
    });

    setEventList(mutatedEvents);
  };

  return (
    <div className="max-w-sm h-full bg-white border border-gray-200 rounded-lg shadow place-self-center">
      <div>
        <img
          className="basis-2/4 rounded-t-lg"
          src={urlFor(event.event_image.asset._ref).url()}
          alt=""
        />
      </div>
      <div className="p-5 flex flex-col">
        <h5 className="basis-1/4 mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {event.event_title}
        </h5>

        <p className="basis-1/4 mb-3 font-normal text-gray-700 dark:text-gray-400">
          {event_date}
        </p>

        <div className="space-x-3 basis-1/4">
          <Link href={`/events/${event.slug.current}`}>
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
              View details
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </Link>

          {!event.saved_event ? (
            <button
              className="inline-flex items-center px-3 py-2 text-sm text-slate-600 border border-blue-700 font-medium text-center  rounded-lg hover:text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              onClick={() => handleSaveEvent(event)}
            >
              Save
            </button>
          ) : (
            <button
              className="inline-flex items-center px-3 py-2 text-sm text-white border bg-blue-700 font-medium text-center  rounded-lg hover:text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              onClick={() => handleSaveEvent(event)}
            >
              Saved
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
