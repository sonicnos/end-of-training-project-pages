"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import ButtonMagnetic from "../ButtonMagnetic/ButtonMagnetic";
import Button from "../Button/Button";

const Hero = () => {
  const [windowsWidth, setWindowsWidth] = useState(0);

  useEffect(() => {
    setWindowsWidth(window.innerWidth);
  }, []);

  const getBlocks = () => {
    const blockSize = windowsWidth * 0.05;
    const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);
    return [...Array(nbOfBlocks).keys()].map((_, index) => {
      return (
        <div
          onMouseEnter={(e) => {
            colorize(e.target);
          }}
          key={index}
        ></div>
      );
    });
  };

  const colorize = (el) => {
    el.style.backgroundColor = "black";
    setTimeout(() => {
      el.style.backgroundColor = "transparent";
    }, 300);
  };

  return (
    <section className={styles.container}>
      <div className={styles.body}>
        <p>Projet de fin de préformation</p>
      </div>
      <div className={styles.grid}>
        {windowsWidth > 0 &&
          [...Array(20).keys()].map((_, index) => {
            return (
              <div key={index} className={styles.column}>
                {getBlocks()}
              </div>
            );
          })}

        <Link
          className={styles.link}
          href={
            process.env.NEXT_PUBLIC_APP_ENV === "DEV"
              ? "/interview"
              : "/loukas/interview"
          }
        >
          <ButtonMagnetic>
            <Button />
          </ButtonMagnetic>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
