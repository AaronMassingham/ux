import React from 'react';
import { motion } from 'framer-motion'

const componentVariants = {
  hidden: {
    width:'1%',
    opacity:0,
  },
  visible: {
    width:'30%',
    opacity: 1,
    transition: {
      delay:1,
      duration:.75
    }
  },
  exit: {
    width:'1%',
    opacity:0,
    transition: {
      duration:.5
    }
  }
}

export const AnimatedSpan = () => (

  <motion.span
      className="animatedSpan"
      variants = {componentVariants}
      initial = 'hidden'
      animate = 'visible'
      exit = 'exit'>
  </motion.span>

)
export default AnimatedSpan;