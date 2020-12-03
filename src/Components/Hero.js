import React from 'react';
import { motion } from 'framer-motion'

const componentVariants = {
    hidden: {
      width:'1%',
      opacity:0,
    },
    visible: {
      opacity: 1,
      width:'30%',
      transition: {
        delay:2,
        duration:1
      }
    },
    exit: {
      opacity:0,
    }
  }

export const Hero = () => (



    <div className="hero flex_center">
        <h1>Chelsea<br/>Handforth</h1>
        <motion.span
            variants = {componentVariants}
            initial = 'hidden'
            animate = 'visible'
            exit = 'exit'
        >
        </motion.span>
        <p>Photography</p>
    </div>

)
export default Hero;