'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative `}
  >
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5 ">
        <h4 className="font-bold md:text-[44px] flex flex-col text-[34px] text-white">
          Build Bridge
          <span className="text-base text-slate-500">
            Connecting Ideas, Creating Opportunities.
          </span>
        </h4>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            Build Bridge
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright &copy; 2024. All rights reserved.
          </p>
          {/* <div className="flex gap-4">
            <p className="text-secondary-white">Terms & Conditions</p>
          </div> */}
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
