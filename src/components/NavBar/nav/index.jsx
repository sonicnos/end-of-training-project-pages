import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { menuSlide } from "../anim";
import Link from "../Link";
import Curve from "../Curve";

const navItems = [
  {
    title: "Home",
    href: process.env.NEXT_PUBLIC_APP_ENV === "DEV" ? "/" : "/loukas",
  },
  {
    title: "Interview",
    href: process.env.NEXT_PUBLIC_APP_ENV === "DEV" ? "/interview" : "/loukas/interview",
  },
  {
    title: "Exposition",
    href: process.env.NEXT_PUBLIC_APP_ENV === "DEV" ? "/exposition" : "/loukas/exposition",
  },
  {
    title: "Conclusion",
    href: process.env.NEXT_PUBLIC_APP_ENV === "DEV" ? "/conclusion" : "/loukas/conclusion",
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
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            );
          })}
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
