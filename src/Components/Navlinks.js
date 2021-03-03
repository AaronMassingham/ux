import React from 'react';
import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion';
import ToggleSwitch from "./ToggleSwitch";

const componentVariants = {
  hidden: {

  },
  visible: {

  },
  exit: {

  }
}

const Navlinks = (props) => (

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
        <NavLink activeClassName="active" to="/projects">Work</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/hire">Hire</NavLink>
      </li>
      <li>
        <p>dark / light</p>
       <ToggleSwitch onClick={props.onClick}/>
      </li>
    </motion.ul>


)
export default Navlinks;