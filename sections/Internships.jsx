"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { StartSteps, TitleText, TypingText } from "../components";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { startingFeatures } from "../constants";
import { Button } from "../components/Button";

const Internships = () => (
  <section id="Internships" className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerwidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/workDesk.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Our Internships" />
        <TitleText title={<>Get started with just a few clicks</>} />
        <div className={`mt-[31px] ${styles.flexCol} max-w-[370px] `}>
          <div className={`${styles.flexStart} flex-col gap-y-4`}>
            {startingFeatures.map((feature, index) => (
              <StartSteps key={feature} number={index + 1} text={feature} />
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Button title="More info" />
            <Button title="Sign Up" variant="bg-slate-600" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Internships;
