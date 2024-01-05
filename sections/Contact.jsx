"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { ContactCard, TitleText } from "../components";

const Feedback = () => (
  <section
    id="contact"
    className={`${styles.paddings} ${styles.flexColLg} relative z-10 flex flex-col items-center justify-center`}
  >
    <div className="text-center">
      <TitleText title="Let's Talk." textSytles="text-[40px]"/>
      <div>
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[28px] text-center text-secondary-white"
        >
          Contact us for any inquiries.
        </motion.p>
      </div>
    </div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerwidth} mx-auto flex lg:flex-row gap-6 flex-col`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] sm:h-auto max-h-[530px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >
        <div className="w-full h-full">
          <ContactCard />
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img
          src="/softwareDeveloper.jpg"
          alt="Founder Image"
          className="w-full lg:h-[530px] h-auto min-h-[210px] object-cover rounded-[40px] "
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
