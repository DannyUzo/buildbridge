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
      viewport={{ once: false, amount: 0.25 }}
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
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:mt-[20px] -mt-[12px]"
      >
        <div className="hidden md:flex  w-full h-[5px] border hero-gradient rounded-tl-[20px] rounded-bl-[20px] z-[0] -top-[30px]" />
      </motion.div>
      <motion.p variants={textVariant(1.1)} className="text-lg w-1/12 text-center sm:w-auto p-10 font-sans text-semibold text-slate-300">
        "Building Bridges to Tomorrow's Digital Frontiers with Build Bridge:
        Where Innovation Meets Imagination."
      </motion.p>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 2)}
        className="relative w-full md:mt-[20px] -mt-[12px]"
      >
        <div className="hidden  md:flex  w-full -ml-20 h-[5px] border hero-gradient rounded-tr-[20px] rounded-br-[20px] z-[0] -top-[30px]" />
      </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
