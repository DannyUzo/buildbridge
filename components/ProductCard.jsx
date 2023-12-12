import { motion } from "framer-motion";

export const ProductCard = ({ name, summary }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="flex flex-col items-start justify-center w-[350px]"
  >
    <h2 className="font-semibold text-white text-lg">{name}</h2>
    <p className="text-secondary-white text-base">{summary}</p>
  </motion.div>
);