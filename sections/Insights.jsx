'use client';
import { motion } from "framer-motion";
import styles from "../styles";
import { InsightCard, TitleText, TypingText } from "../components";
import { staggerContainer } from "../utils/motion";
import { insights } from '../constants'

const Insights = () => (
  <section id="insights" className={`${styles.paddings} relative z-10`}>
  <motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{once: 'false', amount: 0.25 }}
  className={`${styles.innerwidth} mx-auto flex  flex-col`}
  >
    <TypingText title="| Insights" textStyles='text-center' />
    <TitleText title="Insight about Build Bridge" textSytles="text-center" />
  </motion.div>
 <div className="mt-[50px] flex flex-col gap-[30px] ">
{insights.map((insights, index) => (
<InsightCard key={`insight-${index} `} {...insights} />
))}
 </div>
  </section>
);

export default Insights;
