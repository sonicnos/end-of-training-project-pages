import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import "@/styles/styles.scss";

export default function App({ Component, pageProps, router }) {
  return (
    <div className="main">
      <div className="navBar">
        <Link href="/">Accueil</Link>
        <Link href="/Interview">Interview</Link>
        <Link href="/Exposition">Exposition</Link>
        <Link href="/Conclusion">Conclusion</Link>
      </div>
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}