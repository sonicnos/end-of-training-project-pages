import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { menuSlide } from "../anim";
import Link from "../Link";
import Curve from "../Curve";
import Footer from "../Footer";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Interview",
    href: "/interview",
  },
  {
    title: "Exposition",
    href: "/exposition",
  },
  {
    title: "Conclusion",
    href: "/conclusion",
  },
];

export default function Index() {
  const router = useRouter();
  const pathname = router.pathname;
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                // isActive={data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            );
          })}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
