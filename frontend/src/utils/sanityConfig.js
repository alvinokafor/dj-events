import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "ndhpaom1",
  dataset: "production",
  apiVersion: "2023-03-19",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const imgBuilder = imageUrlBuilder(sanityClient);

//image url builder for sanity
export const urlFor = (source) => {
  return imgBuilder.image(source);
};
