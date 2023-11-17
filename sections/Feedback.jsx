"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerwidth} mx-auto flex lg:flex-row gap-6 flex-col`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >
        {/* <div className="feedback-gradient" /> */}
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white ">
            Emmy
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white ">
            Founder | Build Bridge
          </p>
        </div>
        <p className="mt-[14px] font-normal sm:text-[12px] text-[12px] sm:leading-[35px] leading-[30px] text-white">
          <span className="font-extrabold text-white">Build Bridge</span> is not
          merely a product of today's technology; it is a catalyst for the
          evolution of work in the era often referred to as Web 3.0. Whether
          you're crafting the next generation of web applications,or delving
          into cutting-edge software development, Build Bridge is your versatile
          companion. "With Build Bridge, you're not just using a tool; you're
          shaping the future. It's the key to unlock limitless potential in the
          ever-expanding realm of technology. Build Bridge is everything you
          need for the next phase of digital innovation."
        </p>
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
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%] "
        >
          <img
            src="/stamp.png"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain "
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
