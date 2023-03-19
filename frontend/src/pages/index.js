import { sanityClient } from "@/utils/sanityConfig";
import Layout from "@/components/layouts/Layout";
import Hero from "@/components/home/Hero";
import UpcomingEvents from "@/components/home/UpcomingEvents";

export default function Home({ event_list }) {
  return (
    <>
      <Layout>
        <Hero />
        <UpcomingEvents event_list={event_list} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const event_list = await sanityClient.fetch(`*[_type == "event"]`);

  return {
    props: { event_list },
    revalidate: 10,
  };
}
