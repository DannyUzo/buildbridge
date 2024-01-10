"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { InsightCard, TypingText } from "../components";
import { staggerContainer, fadeIn } from "../utils/motion";
import { insights } from "../constants";

const Blog = () => (
  <section id="blog" className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col`}
    >
      <TypingText title="| Our Blog" textStyles="text-center" />
      <div>
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[28px] text-center text-secondary-white"
        >
          We have a designated blog where we document and release articles about{" "}
          <br />
          our products and services
        </motion.p>
      </div>
    </motion.div>
    <div className="mt-[50px] flex flex-col gap-[30px] ">
      {insights.map((insights, index) => (
        <InsightCard key={`insight-${index} `} {...insights} />
      ))}
    </div>
  </section>
);

export default Blog;
