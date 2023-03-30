import { createContext, SetStateAction, useState, Dispatch, ReactNode } from "react";

export type Event = {
  _id: number,
  title: string,
  description: string,
  saved_event: boolean,
  date_time: string,
  event_description: string,
  event_image: {
    asset: {
      _ref: string
    }
  },
  event_title: string,
  venue: string,
  performers: string,
  slug: {
    current: string
  }
}[]

export interface EventContextType  {
  eventList: Event;
  savedEvents: Event;
  setSavedEvents: Dispatch<SetStateAction<Event>>
  setEventList: Dispatch<SetStateAction<Event>>
};

type AppProviderProps = {
  children: ReactNode
}

export const AppContext = createContext<EventContextType | null>(null);

export default function AppContextProvider({ children }: AppProviderProps) {
  const [savedEvents, setSavedEvents] = useState<Event>([]);
  const [eventList, setEventList] = useState<Event>([]);

  return (
    <AppContext.Provider
      value={{ savedEvents, setSavedEvents, eventList, setEventList }}
    >
      {children}
    </AppContext.Provider>
  );
}
