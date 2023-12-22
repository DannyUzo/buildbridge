'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import { navLinks } from '../constants';
import { UseScrollTop } from '../hooks/use-scroll-top';
import { Menu } from './Menu';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const scrolled = UseScrollTop();

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={` py-8 relative ${
        scrolled
          ? 'border-b border-b-slate-500  shadow-sm bg-primary-black py-4'
          : ' '
      }`}
    >
      <>
        <div
          className={`${styles.innerWidth} mx-auto flex flex-col px-8 justify-between gap-8`}
        >
          <div
            className={`${styles.innerWidth} mx-auto flex  justify-between gap-8`}
          >
            <h2 className=" text-[24px] font-serif leading-[30px] text-white">
              💻
            </h2>
            <div className="hidden  lg:flex md:flex gap-5 text-white font-bold">
              {navLinks.map((links) => (
                <a key={links.id} href={links.href}>
                  <span>{links.title}</span>
                </a>
              ))}
            </div>
            <Menu sidebar={sidebar} setSidebar={setSidebar} />
          </div>
        </div>
        {sidebar && (
          <div className=" absolute rounded w-full items-center p-10 justify-center mt-2 h-screen z-[999] bg-primary-black">
            <div className="flex w-full items-center justify-center text-lg text-slate-500 gap-10 flex-col z-50">
              {navLinks.map((links) => (
                <a
                  onClick={() => setSidebar(false)}
                  key={links.id}
                  href={links.href}
                >
                  <span>{links.title}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </>
    </motion.nav>
  );
};

export default Navbar;
