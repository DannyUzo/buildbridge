import { motion } from "framer-motion"
import styles from "../styles"
const ProductCard = ({ name, summary}) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="flex flex-col items-start justify-center w-[350px]"
    >
     <h2 className="font-semibold text-white text-lg">{name}</h2> 
     <p className="text-secondary-white text-base">{summary}</p>  
    </motion.div>
  )
}

export default ProductCard