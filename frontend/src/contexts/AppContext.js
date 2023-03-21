import { createContext, useState } from "react";

export const AppContext = createContext([]);

export default function AppContextProvider({ children }) {
  const [savedEvents, setSavedEvents] = useState([]);

  return (
    <AppContext.Provider value={{ savedEvents, setSavedEvents }}>
      {children}
    </AppContext.Provider>
  );
}
