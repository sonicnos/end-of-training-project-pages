"use client";
import { projects } from "@/libs/data";
import styles from "@/components/Card/page.module.scss";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Card from ".";
import Link from "next/link";
import ButtonMagnetic from "../ButtonMagnetic/ButtonMagnetic";
import Button from "../Button/Button";

export default function Cards() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <section ref={container} className={styles.cards}>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
      <Link className={styles.link} href="/exposition">
        <ButtonMagnetic>
          <Button />
        </ButtonMagnetic>
      </Link>
    </section>
  );
}
