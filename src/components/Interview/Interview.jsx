import Image from "next/image";
import personaImg from "../../../public/images/personna.png";
import { motion, useInView } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef, useState } from "react";

const Interview = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 600);
  });

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
    <section className="interview-section">
      {mounted ? (
        <motion.div
          className="personna"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1.25 }}
          variants={{
            hidden: { opacity: 0, y: -200 },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
        >
          <div className="photo">
            <Image src={personaImg} className="avatar-photo" />
          </div>
          <div className="interview-description">
            <div className="avatar-details">
              <p>Eli</p>
              <p>Talpalariu</p>
            </div>
            <div className="avatar-details">
              <p>VALKUREN</p>
              <p>Full Stack Web Developer</p>
            </div>
          </div>
        </motion.div>
      ) : (
        ""
      )}
      {mounted ? (
        <motion.div
          className="description-job-section"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1.25, delay: 1 }}
          variants={{
            hidden: { opacity: 0, y: -200 },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
        >
          <div className="description-job">
            Je suis Eli, D&eacute;veloppeur Full Stack chez Valkuren, une
            soci&eacute;t&eacute; sp&eacute;cialis&eacute;e dans le
            d&eacute;veloppement de solutions Big Data. Nos activit&eacute;s
            principales incluent la gestion et l&apos;analyse de donn&eacute;es,
            l&apos;intelligence artificielle et le machine learning dans trois
            domaines : manufacturing, mobilit&eacute; et marketing.
          </div>
        </motion.div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Interview;
