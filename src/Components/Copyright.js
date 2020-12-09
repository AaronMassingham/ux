import React from 'react';
import { motion } from 'framer-motion';

const componentVariants = {
  hidden: {
    opacity:0,
    y:100
  },
  visible: {
    opacity: 1,
    y:0,
    transition: {
      duration:.5,
      delay:1,
    }
  },
  exit: {
    opacity:0,
  }
}

const Copyright = () => (
  
<div className="copyright">
    <motion.div
      variants = {componentVariants}
      initial = 'hidden'
      animate = 'visible'
      exit = 'exit' 
    >
      © 2020<span> handforth Photography</span>
    </motion.div>
</div>

)
export default Copyright;