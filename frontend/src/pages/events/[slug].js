import Image from "next/image";

import { API_URL } from "@/config/index";

import Layout from "@/components/layouts/Layout";
import DetailsCard from "@/components/partials/DetailsCard";

export default function EventPage({ event }) {
  return (
    <Layout>
      <section className="px-4 lg:px-6 ">
        <div className="w-full h-[450px] relative rounded-lg overflow-hidden mb-12 mt-8">
          <Image
            className="object-cover object-center"
            src={event.image}
            fill
          />
        </div>

        <p className="text-lg my-6">{event.description}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 mb-12 gap-y-6">
          <DetailsCard title={"Performers"} performers={event.performers} />
          <DetailsCard title={"Date"} performers={event.date} />
          <DetailsCard title={"Time"} performers={event.time} />
          <DetailsCard title={"Venue"} performers={event.venue} />
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  const paths = events.map((evt) => ({
    params: { slug: evt.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const event = await res.json();

  return {
    props: { event: event[0] },
    revalidate: 10,
  };
}
