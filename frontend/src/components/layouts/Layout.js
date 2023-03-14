import Head from "next/head";
import NavBar from "../partials/NavBar";
import Footer from "../partials/Footer";

export default function Layout({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <NavBar />
      <main className="mx-auto">{children}</main>
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: "DJ Events",
  description: "Get access to dj events",
};
