import "@/styles/globals.css";
import AppContextProvider from "@/contexts/AppContext";

export default function App({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />;
    </AppContextProvider>
  );
}
