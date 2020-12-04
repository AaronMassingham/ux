import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const Projects = ({ projectData }) => {
  const { url } = useRouteMatch();

  return projectData.map((project) => (
    <li key={project.id}>
      <Link to={`${url}/${project.id}`}>{project.name}</Link>
    </li>
  ));
};

export default Projects;
