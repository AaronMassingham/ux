import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Project from "./Project";

const Projects = () => {
  let { url } = useRouteMatch();

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

  const linkList = ProjectData.map((project) => {
    return (
      <li key={project.id}>
        <Link to={`${url}/${project.id}`}>{project.name}</Link>
      </li>
    );
  });

  return (
    <Switch>
      <Route exact path={`${url}/:projectId`}>
        <Project data={ProjectData} />
      </Route>
      <Route exact path={url}>
        <ul>{linkList}</ul>
      </Route>
    </Switch>
  );
};

export default Projects;
