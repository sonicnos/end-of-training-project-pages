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
          <h1 className={styles.title}>titre</h1>
          <p className={styles.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
            explicabo repellat excepturi asperiores. Illo voluptate, adipisci
            illum nam magnam reiciendis sequi enim nobis reprehenderit corrupti
            modi amet? Debitis fugiat consequuntur, quam iusto eum, nihil
            asperiores possimus, illo voluptatum aspernatur ipsum iste. Eos
            perspiciatis aspernatur labore. Quam mollitia asperiores
            exercitationem harum eveniet eius, blanditiis sed dolore officia
            recusandae neque fuga, sit itaque cumque eligendi optio enim
            veritatis quo rerum dolores doloribus necessitatibus laborum! Quod
            earum, ut minus est culpa quae illum eos explicabo facere.
            Blanditiis, rem! Officiis ut reprehenderit eligendi aliquid. Quas
            molestias officiis quia veritatis molestiae deleniti harum velit
            suscipit?
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
