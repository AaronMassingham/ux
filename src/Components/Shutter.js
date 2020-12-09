import React from 'react';
import { motion } from 'framer-motion'

//IMAGES
import Outer from '../Images/one.svg';
import Inner from '../Images/two.svg';

const componentVariants = { 
  hidden: {
    opacity:0,
    scale: .9,
  },
  visible: {
    opacity:1,
    scale: 1,
    transition: {
      duration:2
    }
  },
  exit: {
    opacity:0,
    scale: .9,
    transition: {
      duration:1.5
    }
  }
}

const Shutter = () => (

    <motion.div 
    className="shutter flex_center" 
    variants = {componentVariants}
    initial = 'hidden'
    animate = 'visible'
    exit = 'exit'>
        <div>
            <div className="outer" style={{backgroundImage: `url(${Outer})`}}></div>
            <div className="inner" style={{backgroundImage: `url(${Inner})`}}></div>
        </div>
    </motion.div> 

)

export default Shutter;