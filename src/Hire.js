import React from 'react';
import { motion } from 'framer-motion';

//COMPONENTS
import AnimatedSpan from './Components/AnimatedSpan';

const componentVariants = { 
  hidden: {
    opacity:0,
    y: 500,
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
    y: -500,
    transition: {
      duration:1
    }
  }
}

export const Hire = () => (

<>
  <motion.div
    variants = {componentVariants}
    initial = 'hidden'
    animate = 'visible'
    exit = 'exit'>
    <h1>Hire me</h1>
    <AnimatedSpan/>
  </motion.div> 
 
</>


)

export default Hire;