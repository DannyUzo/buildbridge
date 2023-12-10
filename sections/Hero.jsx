"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section id="home" className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Build
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>Bridge</h1>
        </motion.div>
      </div>
      <div className="flex flex-col items-center justify-center">

      <motion.p variants={textVariant(1.1)} className="text-lg w-11/12 text-center sm:w-auto p-10 font-sans text-semibold text-slate-300">
        "Build Bridges to Success with Innovation and Collaboration."
      </motion.p>

      </div>
    </motion.div>
  </section>
);

export default Hero;
