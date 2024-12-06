import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./page.module.css";

const phrases = ["Conclusion"];

const MaskTitle = () => {
  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0",
      transition: {
        duration: 1,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.5 * i,
      },
    }),
  };

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={styles.bodyTitle}>
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className={styles.lineMask}>
            <motion.p
              custom={index}
              variants={animation}
              initial="initial"
              animate={inView ? "enter" : ""}
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
};

export default MaskTitle;
