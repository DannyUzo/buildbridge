import { motion } from 'framer-motion';
import Image from 'next/image';

import { fadeIn } from '../utils/motion';

export const TeamCard = ({
  imgUrl,
  name,
  role,
  techStack,
  twitter,
  twitterImg,
  linkedIn,
  linkedInImg,
}) => (
  <motion.div
    variants={fadeIn('up', 'tween', 0.2, 1)}
    className=" lg:max-w-[370px] flex w-[290px] h-[500px] flex-col items-center justify-between gradient-05 sm:p-4 p-2 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
  >
    <Image
      src={imgUrl}
      width={250}
      height={200}
      className="object-cover rounded-lg"
    />
    <div>
      <h4 className="font-bold sm:text-[30px] text-[24px] sm:leading-[38px] leading-[34px] text-white ">
        {name}
      </h4>
      <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white ">
        {role}
      </p>
    </div>
    <p className="mt-[14px] text-left font-normal sm:text-[12px] text-[12px] sm:leading-[35px] leading-[30px] text-white">
      {techStack}
    </p>
    ;
    <div className="flex gap-3">
      <a href={twitter}>
        <img
          src={twitterImg}
          alt="twitter"
          className="w-[22px] h-[22px] object-contain"
        />
      </a>
      <a href={linkedIn}>
        <img
          src={linkedInImg}
          alt="twitter"
          className="w-[24px] h-[24px] object-contain"
        />
      </a>
    </div>
  </motion.div>
);
