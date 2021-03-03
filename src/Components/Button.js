import React from 'react';
import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion';

const componentVariants = {
  hidden: {
    opacity:0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay:1
    }
  },
  exit: {
    opacity:0,
  }
}

const Button = (props) => (
  <>
    <motion.div 
      variants = {componentVariants}
      initial = 'hidden'
      animate = 'visible'
      exit = 'exit'
      className={props.class}
    >
      <NavLink exact activeClassName="active" to={props.linkTo}>{props.btnText}</NavLink>
    </motion.div>
</>
)
export default Button;