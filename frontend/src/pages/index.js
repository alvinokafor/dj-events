import { useContext, useEffect } from "react";
import { AppContext } from "@/contexts/AppContext";
import { sanityClient } from "@/utils/sanityConfig";
import Layout from "@/components/layouts/Layout";
import Hero from "@/components/home/Hero";
import UpcomingEvents from "@/components/home/UpcomingEvents";

export default function Home({ event_list }) {
  const { setEventList } = useContext(AppContext);
  useEffect(() => {
    setEventList(event_list);
  }, []);

  return (
    <>
      <Layout>
        <Hero />
        <UpcomingEvents />
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
