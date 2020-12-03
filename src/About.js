import React from 'react';
import { motion } from 'framer-motion'

//COMPONENTS
import Button from './Components/Button';


const componentVariants = {
  hidden: {
    opacity:0,
    position:'absolute',
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity:0,
  }
}



const About = () => (

 <>
  <Button class="button link_left fixed" linkTo="/" btnText="Back" /> 

  <motion.div
    variants = {componentVariants}
    initial = 'hidden'
    animate = 'visible'
    exit = 'exit'
  >
    <h1>About me</h1>
</motion.div>

</>


)

export default About;