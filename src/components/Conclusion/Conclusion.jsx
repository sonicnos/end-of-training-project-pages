"use client";

import MaskText from "./MaskText";
import MaskTitle from "./MaskTitle";
import styles from "./page.module.css";

const Conclusion = () => {
  return (
    <div className={styles.container}>
      <MaskTitle />
      <MaskText />
    </div>
  );
};

export default Conclusion;
