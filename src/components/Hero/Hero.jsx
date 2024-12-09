"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import ButtonMagnetic from "../ButtonMagnetic/ButtonMagnetic";

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
        <p>Project de fin de preformation</p>
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
            <div className={styles.button}>Suivant</div>
          </ButtonMagnetic>
        </Link>
      </div>
    </section>

    // <section className="hero">
    //   <div className="Section_top">
    //     <div className="content">
    //       <h1 className="text-8xl text-white">Project de fin de formation</h1>
    //     </div>
    //   </div>
    //   <Link href="/Interview" className="btnNext">
    //     Suivant
    //   </Link>
    // </section>
  );
};

export default Hero;
