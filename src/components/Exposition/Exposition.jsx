"use client";
import styles from "./page.module.scss";
import ZoomParallax from "@/components/Exposition/ZoomParallax/index";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Link from "next/link";
import ButtonMagnetic from "../ButtonMagnetic/ButtonMagnetic";

export default function Exposition() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <section className={styles.mainExpo}>
      <ZoomParallax />
      <div className={styles.expositionDetails}>
        <div className={styles.container}>test</div>
        <Link className={styles.link} href="/Conclusion">
          <ButtonMagnetic>Suivant</ButtonMagnetic>
        </Link>
      </div>
    </section>
  );
}
