import React from 'react';
import { motion } from 'framer-motion'

// COMPONENTS
import AnimatedSpan from './AnimatedSpan';

const componentVariants = { 
  hidden: {
    opacity:0,
  },
  visible: {
    opacity:1,
    transition: {
      delay:2,
      duration: 1.5,
    }
  },
  exit: {
    opacity:0,
  }
}

const Hero = () => (
  <div className="hero flex_center">
    <motion.div 
    variants = {componentVariants}
    initial = 'hidden'
    animate = 'visible'
    exit = 'exit'>

        <h1>Chelsea<br/>Handforth</h1>
        <AnimatedSpan/>
        <p>Photography</p>

    </motion.div>
  </div>

)
export default Hero;