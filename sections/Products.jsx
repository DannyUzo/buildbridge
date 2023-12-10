"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";
import { products, teamMembers } from "../constants";
import Image from "next/image";
import ProductCard from "../components/ProductCard";
import { Button } from "../components/Button";

const Products = () => {
  return (
    <section
    className={`${styles.paddings} relative z-10 mt-20 flex flex-col gap-y-28`}
    id="products"
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexColLg}`}
    >
      <TypingText title="| Products" textStyles="text-center" />
      <div>
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[28px] text-center text-secondary-white"
        >
        Explore our vast variety of products and  templates.
        </motion.p>
      </div>
    </motion.div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} flex flex-wrap mx-auto gap-20`}
    >
   {products.map((product) =>  (
        <ProductCard key={product.id} {...product}/>
    )
   )}
    </motion.div>
    <Button title="More"/>
  </section>
  )
}

export default Products