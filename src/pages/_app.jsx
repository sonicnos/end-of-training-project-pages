import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import "@/styles/styles.scss";
import NavBar from "@/components/NavBar/NavBar";

export default function App({ Component, pageProps, router }) {
  return (
    <div className="navMain">
      <NavBar />
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
