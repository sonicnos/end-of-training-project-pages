import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./page.module.css";

const phrases = [
  "En conclusion, après avoir rencontré Eli Talpalariu, j'ai été profondément inspiré par son parcours et ses ",
  "réalisations dans le domaine du développement web. Cette rencontre a renforcé ma détermination ",
  "à poursuivre ma formation et à acquérir les compétences nécessaires pour devenir, moi aussi, ",
  "un développeur web accompli. Je suis convaincu que, grâce à mon engagement et à ma passion ",
  "pour ce domaine, je pourrai un jour contribuer de manière significative à des projets innovants et ",
  "à l'évolution de la technologie.",
];

const MaskText = () => {
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
    <div ref={ref} className={styles.bodyText}>
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

export default MaskText;
