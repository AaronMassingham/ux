import React from 'react';
import { motion } from 'framer-motion';

import AnimatedSpan from './AnimatedSpan';

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

const PageTitle = (props) => (

  <div className="page-wrap flex_center">
    <motion.div 
      variants = {componentVariants} 
      initial = 'hidden' 
      animate = 'visible' 
      exit = 'exit'
    >
      <h1>{props.pagetitle}</h1>
      <AnimatedSpan/>
    </motion.div>
  </div>

)
export default PageTitle;