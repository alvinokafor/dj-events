import { createContext, useState } from "react";

export const AppContext = createContext([]);

export default function AppContextProvider({ children }) {
  const [savedEvents, setSavedEvents] = useState([]);
  const [eventList, setEventList] = useState([]);

  return (
    <AppContext.Provider
      value={{ savedEvents, setSavedEvents, eventList, setEventList }}
    >
      {children}
    </AppContext.Provider>
  );
}
