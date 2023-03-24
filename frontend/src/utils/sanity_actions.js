import { sanityClient } from "./sanityConfig";

export async function updateEvent(id, saved_event) {
  const res = await sanityClient.patch(id).set({ saved_event }).commit();
  return res;
}
