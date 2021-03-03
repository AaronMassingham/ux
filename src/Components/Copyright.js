import React from 'react';
import { motion } from 'framer-motion';
import ToggleSwitch from "./ToggleSwitch";

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

const today = new Date();

const Copyright = (props) => (

<div className="copyright-con">
  <ToggleSwitch onClick={props.onClick}/>
  <div className="copyright">
      <motion.div
        variants = {componentVariants}
        initial = 'hidden'
        animate = 'visible'
        exit = 'exit' 
      >
        © {today.getFullYear()}<span> handforth Photography</span>
      </motion.div>
  </div>
</div>

)
export default Copyright;