import { useContext } from "react";
import { AppContext } from "@/contexts/AppContext";
import { sanityClient } from "@/utils/sanityConfig";
import Layout from "@/components/layouts/Layout";
import Hero from "@/components/home/Hero";
import UpcomingEvents from "@/components/home/UpcomingEvents";

export default function Home({ event_list }) {
  const { savedEvents } = useContext(AppContext);
  console.log(savedEvents);
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
  const event_list = await sanityClient.fetch(`*[_type == "event"][0...3]`);

  return {
    props: { event_list },
    revalidate: 10,
  };
}
