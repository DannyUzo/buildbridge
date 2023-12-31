"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";
import { teamMembers } from "../constants";
import { TeamCard } from "../components/TeamCard";
import { useRouter } from "next/navigation";
import { Button } from "../components/Button";

const About = () => {
  const router = useRouter();

  const viewmembers = () => {
    router.push("/team");
  }
 return (
  <section
    className={`${styles.paddings} relative z-10 mt-20 flex flex-col gap-y-20`}
    id="about"
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto gap-y-2 md:${styles.flexColLg}`}
    >
      <TypingText title="| About Us" textStyles="text-center" />
      <div>
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[28px] text-center text-secondary-white"
        >
          At <span className="font-extrabold text-white">Build Bridge</span>, we
          believe in the power of connections. Learn about our journey, mission,
          and the bridges we're building in the business world.
        </motion.p>
      </div>
    </motion.div>
    {/* <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} ${styles.flexCol} mx-auto`}
    >
      <motion.p
        variants={fadeIn("up", "tween", 0.5, 1)}
        className=" sm:text-[32px] font-sans font-semibold text-center text-white"
      >
        Key Values
      </motion.p>
      <motion.span
        variants={fadeIn("up", "tween", 0.5, 1)}
        className="font-bold text-2xl text-secondary-white"
      >
        Innovation | Collaboration | Progress
      </motion.span>
    </motion.div> */}
    <div>
      <motion.p
        variants={fadeIn("up", "tween", 0.1, 0.7)}
        className=" sm:text-[32px] font-sans font-semibold text-center text-white"
      >
        Team
      </motion.p>
      <motion.p
        variants={fadeIn("up", "tween", 0.5, 1)}
        className="font-normal text-[14px] text-center text-secondary-white"
      >
        Meet our dedicated team of software engineers and developers
      </motion.p>
    </div>
    <div className={`${styles.flexCenter} flex-wrap gap-5`}>
      {teamMembers.slice(0,3).map((team) => {
        return <TeamCard key={team.id} {...team} />;
      })}
    </div>
    <div className={`${styles.flexCenter}`}>
      <Button title="See more" onClick={viewmembers} />
    </div>
  </section>
)};

export default About;
