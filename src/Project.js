import React from "react";
import { useParams, useHistory } from "react-router-dom";

const Project = ({ data }) => {

  const { projectId } = useParams();
  const project = data.find(p => p.id === String(projectId));
  
  let projectData;
  let history = useHistory()
  
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
    <>
      {projectData}
      <button type="button" onClick={() => history.goBack()}>goback</button>
    </>
  );
};

export default Project;