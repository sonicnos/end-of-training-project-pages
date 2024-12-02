import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import "@/styles/styles.scss";

export default function App({ Component, pageProps, router }) {
  return (
    <div className="main">
      <div className="header">
        <Link href="/">Home</Link>
        <Link href="/Interview">Interview</Link>
        <Link href="/Exposition">Exposition</Link>
      </div>
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
