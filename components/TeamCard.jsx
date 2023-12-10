import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"
import Image from "next/image"
const TeamCard = ({ imgUrl, name, role, techStack }) => {
  return (
    <motion.div
    variants={fadeIn("up", "tween", 0.2, 1)}
    className=" lg:max-w-[370px] flex w-[280px] h-[360px] flex-col items-center justify-evenly gradient-05 sm:p-4 p-2 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
  >
    <div>
      <Image
        src={imgUrl}
        width={250}
        height={280}
        className="object-cover rounded-lg"
      />
      <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white ">
        {name}
      </h4>
      <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white ">
        {role}
      </p>
    </div>
    <p className="mt-[14px] font-normal sm:text-[12px] text-[12px] sm:leading-[35px] leading-[30px] text-white">
      {techStack}
    </p>
  </motion.div>
  )
}

export default TeamCard