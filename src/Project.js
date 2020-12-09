import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { motion } from 'framer-motion'

const Project = ({ data }) => {

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

  const { projectId } = useParams();
  const project = data.find((p) => p.id === String(projectId));

  let projectData;
  let history = useHistory();

  if (project) {
    projectData = (
      <div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
    );
  } else {
    projectData = <h2> Sorry but this project doesn't exist.</h2>;
  }

  return (
    <motion.div
    variants = {componentVariants}
    initial = 'hidden'
    animate = 'visible'
    exit = 'exit'
    >
      {projectData}
      <button type="button" onClick={() => history.goBack()}>goback</button>
    </motion.div>
  );
};

export default Project;
