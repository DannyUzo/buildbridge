'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <img
      src={imgUrl}
      alt="planet-01"
      className="md:w-[270px] h-[250px] w-full rounded-[32px] object-cover "
    />
    <div className="w-full justify-between flex items-center">
      <div className="flex-1 md:ml-[62px] flex-col max-w-[650px] flex">
        <h4 className="font-normal lg:text-[36px] text-[22px] text-white">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[18px] text-[12px] text-secondary-white">
          {subtitle}
        </p>
      </div>

      <div className="lg:flex hidden items-center justify-center w-[60px] h-[60px] rounded-full bg-transparent border-[1px] border-white ">
        <img
          src="arrow.svg"
          alt="arrow"
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
