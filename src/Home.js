import React from 'react';
import { motion } from 'framer-motion'

//COMPONENTS
import Button from './Components/Button';
import Hero from './Components/Hero';
import Shutter from './Components/Shutter';

const componentVariants = {
  hidden: {
    opacity:1,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity:1,
  }
}

const componentChildVariants = { 
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

const componentChildVariantsTwo = { 
  hidden: {
    opacity:0,
    scale: 1,
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
    scale: .5,
    transition: {
      duration:1.5
    }
  }
}

const Home = () => (

 <>
  <Button class="button link_right fixed" linkTo="/about" btnText="About" /> 
  <Button class="button link_left fixed" linkTo="/projects" btnText="Work" />  

  
  <motion.div
    variants = {componentVariants}
    initial = 'hidden'
    animate = 'visible'
    exit = 'exit'
  >
  <motion.div variants = {componentChildVariants}>
    <Hero />     
  </motion.div> 
  <motion.div className="shutter flex_center" variants = {componentChildVariantsTwo}>
    <Shutter />      
  </motion.div> 

</motion.div>

</>

)

export default Home;