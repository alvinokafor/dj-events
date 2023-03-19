import { sanityClient } from "@/utils/sanityConfig";
import Layout from "@/components/layouts/Layout";
import EventCard from "@/components/partials/EventCard";

export default function EventsPage({ event_list }) {
  return (
    <Layout>
      <section className="px-4 lg:px-6">
        <h2 className="text-3xl font-bold mb-16 text-center">All Events</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 mb-12 gap-y-6">
          {event_list.map((event) => (
            <EventCard event={event} key={event._id} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const event_list = await sanityClient.fetch(`*[_type == "event"]`);

  return {
    props: { event_list },
    revalidate: 10,
  };
}
