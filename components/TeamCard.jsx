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
    className="flex w-[320px] h-[488px] flex-col items-center justify-between gap-y-1 gradient-05 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
  >
    <Image
      src={imgUrl}
      width={250}
      height={200}
      alt={name}
      className="object-cover w-full rounded-2xl sm:rounded-lg"
    />
    <div>
      <h4 className="font-bold  text-center text-[22px]  text-white ">
        {name}
      </h4>
      <p className="mt-[8px] font-normal sm:text-[20px] text-center text-[14px] text-white ">
        {role}
      </p>
      <p className="mt-[14px]  font-normal text-center sm:text-[12px] text-[12px] text-white">
        {techStack}
      </p>
    </div>
    <div className="flex gap-3">
      <a href={twitter}>
        <img
          src={twitterImg}
          alt="twitter"
          className="w-[22px] h-[22px] object-contain"
        />
      </a>
      {linkedIn && (
      <a href={linkedIn}>
        <img
          src={linkedInImg}
          alt="twitter"
          className="w-[24px] h-[24px] object-contain"
        />
      </a>
      )}
    </div>
  </motion.div>
);
