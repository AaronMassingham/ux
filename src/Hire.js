import React from 'react';
import { motion } from 'framer-motion'

const componentVariants = {
  hidden: {
    opacity:0,
    position: 'absolute',
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity:0,
  }
}

const componentChildVariants = { 
  hidden: {
    opacity:0,
    y: 1000,
  },
  visible: {
    opacity:1,
    y: 0,
    transition: {
      duration:1
    }
  },
  exit: {
    opacity:0,
    y: -1000,
    transition: {
      duration:1
    }
  }
}

export const Hire = () => (


    <motion.div
      variants = {componentVariants}
      initial = 'hidden'
      animate = 'visible'
      exit = 'exit'
    >
      <motion.div variants = {componentChildVariants}>
        Hire me
      </motion.div> 
    </motion.div>


)

export default Hire;