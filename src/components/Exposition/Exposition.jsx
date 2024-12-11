"use client";
import styles from "./page.module.scss";
import ZoomParallax from "@/components/Exposition/ZoomParallax/index";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Link from "next/link";
import ButtonMagnetic from "../ButtonMagnetic/ButtonMagnetic";
import { motion, useInView } from "framer-motion";
import Button from "../Button/Button";

export default function Exposition() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

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
        <motion.div
          className={styles.container}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1.25 }}
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
        >
          <h1 className={styles.title}>
            Les Parapluies de Bruxelles : Reflets d'une Ville Multiculturelle
          </h1>
          <p className={styles.description}>
            Les parapluies me rappellent toujours le temps bruxellois,
            imprévisible et souvent pluvieux. Cette salle du musée, avec ses
            expositions sur les différents quartiers de Bruxelles, m&apos;a
            particulièrement touché. Chaque parapluie suspendu semble raconter
            une histoire unique, reflétant la diversité et le côté multiculturel
            de cette ville fascinante.
          </p>
        </motion.div>
        <Link className={styles.link} href="/conclusion">
          <ButtonMagnetic>
            <Button />
          </ButtonMagnetic>
        </Link>
      </div>
    </section>
  );
}
