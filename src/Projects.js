import React from "react";
import {
  Link,
  Route,
  Switch,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import Project from "./Project";

const Projects = () => {
  const location = useLocation();

  const ProjectData = [
    {
      id: "project-one",
      name: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
    },
    {
      id: "project-two",
      name: "Project 2",
      description:
        "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
    },
  ];

  const { url } = useRouteMatch();
  const linkList = ProjectData.map((project) => {
    return (
      <li key={project.id}>
        <Link to={`${url}/${project.id}`}>{project.name}</Link>
      </li>
    );
  });

  return (
    <>
      <ul>{linkList}</ul>

      <Route path="/projects/:projectId">
        <Project data={ProjectData} />
      </Route>
    </>
  );
};

export default Projects;
