import React from 'react';
import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion'

const componentVariants = {
  hidden: {
    opacity:0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay:.4,
      duration:.5
    }
  },
  exit: {
    opacity:0,
      transition: {
      delay:.4,
      duration:.5
    }
  }
}

const Navlinks = () => (

    <motion.ul
      variants = {componentVariants}
      initial = 'hidden'
      animate = 'visible'
      exit = 'exit'
    >
      <li>
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/about">About</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/projects">Projects</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/hire">Hire</NavLink>
      </li>
    </motion.ul>



)
export default Navlinks;