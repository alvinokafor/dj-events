import { API_URL } from "@/config/index";

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
  const res = await fetch(`${API_URL}/api/events`);
  const event_list = await res.json();

  return {
    props: { event_list },
    revalidate: 10,
  };
}
