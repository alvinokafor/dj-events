import { sanityClient } from "./sanityConfig";


export async function updateEvent(id: string, saved_event: boolean) {
  const res = await sanityClient.patch(id).set({ saved_event }).commit();
  return res;
}
