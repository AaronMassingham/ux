import React, { useState } from 'react';
import { useRouteMatch } from "react-router-dom";
import { motion } from 'framer-motion';

//COMPONENTS
import Button from './Components/Button';
import PageTitle from './Components/PageTitle';


const testVarients = { 
  hidden: {
    opacity:0,
  },
  visible: {
    opacity:1,
    transition: {
      duration:1
    }
  },
  exit: {
    opacity:0,
  }
}


const Projects = ({ projectData }) => {

  const { url } = useRouteMatch();
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      
      <PageTitle pagetitle="Projects"/>

      <div className="page-main-content">

        {projectData.map((project) => (

          <motion.div 
            initial='hidden' 
            animate = 'visible' 
            exit = 'exit' 
            variants = {testVarients} 
            className="project-container" 
            key={project.id}
          >
            <div className="project-image lift">
              <div 
              className={`${isShown ? "active" : ""}`} 
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL + project.mainImage})`}}
              ></div>
            </div>
            <div>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <div
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              >
                <Button class="button link_right relative" linkTo={`${url}/${project.id}`} btnText="Explore" />
              </div>
            </div>
          </motion.div>

        ))}

      </div>
      <div className="spacer"></div>
    </>
  );
};

export default Projects;
 


