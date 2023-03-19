import { sanityClient, urlFor } from "@/utils/sanityConfig";
import Layout from "@/components/layouts/Layout";
import DetailsCard from "@/components/partials/DetailsCard";

export default function EventPage({ event }) {
  return (
    <Layout>
      <section className="px-4 lg:px-6 ">
        <div className="w-full h-[450px] relative rounded-lg overflow-hidden mb-12 mt-8">
          <img
            className="object-cover object-center"
            src={urlFor(event.event_image.asset._ref).url()}
          />
        </div>

        <p className="text-lg my-6">{event.description}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 mb-12 gap-y-6">
          <DetailsCard title={"Performers"} performers={event.performers} />
          {/* <DetailsCard title={"Date"} performers={event.date} />
          <DetailsCard title={"Time"} performers={event.time} /> */}
          <DetailsCard title={"Venue"} performers={event.venue} />
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const events = await sanityClient.fetch(`*[_type == "event"]`);

  const paths = events.map((evt) => ({
    params: { slug: evt.slug.current },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const event = await sanityClient.fetch(
    `*[_type == "event" && slug.current == "${slug}"]`
  );

  return {
    props: { event: event[0] },
    revalidate: 10,
  };
}
