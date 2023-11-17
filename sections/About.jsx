"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10 mt-20`} id="about">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto {styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Build Bridge" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Build Bridge</span> is not
        just a startup; it's a journey into the future of digital innovation.
        Our mission is to craft software products and services that bridge the
        gap between imagination and reality. In the world of metaverses, we
        believe in turning dreams into tangible experiences. With a passion for
        coding and a love for the digital realm, we embark on a journey where
        each line of code is a step toward a new frontier.
        <span className="font-extrabold text-white">Join us</span> as we explore
        the madness of the digital universe. Immerse yourself in the
        possibilities, where every click propels us into a world of endless
        creativity. Let's build bridges to tomorrow, one line of code at a time.
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[24px] object-contain mt-[28px] m-auto"
      ></motion.img>
    </motion.div>
  </section>
);

export default About;
