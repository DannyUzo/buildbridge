"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import { useState } from "react";
import { navLinks } from "../constants";
import { UseScrollTop } from "../hooks/use-scroll-top";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const scrolled  = UseScrollTop();
  const toggleSidebar = () => {
    setSidebar(true);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative ${scrolled && "border-b border-b-slate-500  shadow-sm bg-primary-black py-4"}`}
    >
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <h2 className=" text-[24px] font-serif leading-[30px] text-white">
          💻
        </h2>
        {/* <img src="/web-traffic.png" alt="logo" className="w-[24px] h-[24px]"/> */}

        <div className="hidden sm:flex lg:flex md:flex gap-5 text-white font-bold">
          
          {navLinks.map((links) => {
            return(

          <a key={links.id} href={links.href}>
          <span>{links.title}</span>
          </a>
            )
          })}
        </div>
        <img
          src="/menu.svg"
          alt="menu"
          onClick={toggleSidebar}
          className="flex sm:hidden md:hidden lg:hidden w-[24px] h-[24px] object-contain"
        />
        {sidebar && (
          <div className=" absolute rounded w-full items-center p-10 justify-center h-screen z-[999] bg-primary-black">
            <span
              className="mt-20 text-white cursor-pointer"
              onClick={() => setSidebar(false)}
            >
              Close
            </span>
            <div className="flex w-full items-center justify-center text-lg text-slate-500 gap-10 flex-col z-50">
            {navLinks.map((links) => {
            return(

          <a onClick={() => setSidebar(false)} key={links.id} href={links.href}>
          <span>{links.title}</span>
          </a>
            )
          })}
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
