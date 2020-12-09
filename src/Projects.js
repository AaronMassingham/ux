import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { motion } from 'framer-motion'

const Projects = ({ projectData }) => {

  const componentVariants = {
    hidden: {
      opacity:0,
    },
    visible: {
      opacity: 1,
    },
    exit: {
      opacity:0,
    }
  }

  const { url } = useRouteMatch();

  return projectData.map((project) => (
    <motion.div
      variants = {componentVariants}
      initial = 'hidden'
      animate = 'visible'
      exit = 'exit'
    >
    <li key={project.id}>
      <Link to={`${url}/${project.id}`}>{project.name}</Link>
    </li>
    </motion.div>
  ));
};

export default Projects;
 