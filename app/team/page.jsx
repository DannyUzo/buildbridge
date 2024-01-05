"use client";

import { teamMembers } from "../../constants";
import { TeamCard } from "../../components/TeamCard";
import { TitleText, TypingText } from "../../components";
import styles from "../../styles";

const TeamPage = () => {
  return (
    <div className="bg-primary-black relative overflow-hidden flex flex-col gap-y-10 p-5 md:p-20">
        <TypingText title="Our Team" textStyles="text-center"/>
      <div>
        <TitleText title="Meet our dedicated team of developers and designers" textSytles="text-center md:text-[38px] text-[30px] leading-14"/>
      </div>
      <div className={`${styles.flexCenter} flex-wrap gap-5`}>
        {teamMembers.map((team) => {
          return <TeamCard key={team.id} {...team} />;
        })}
      </div>
    </div>
  );
};

export default TeamPage;
