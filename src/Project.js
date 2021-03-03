import React from "react";
import { useParams } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";

//COMPONENTS
import PageTitle from './Components/PageTitle';
import Button from './Components/Button';

const options = {
  settings: {
    overlayColor: "rgb(25, 25, 25)",
  },
  buttons: {
    iconColor: "#ff8717",
    backgroundColor: 'rgba(25,25,25,1)',
    iconPadding: '20px',
    showAutoplayButton: false,
    showDownloadButton: false,
    size: '60px'
  },

};

const Project = ({ data }) => {


  const { projectId } = useParams();
  const project = data.find((p) => p.id === String(projectId));

  const gallery = project.gallery;
  const thumbnails = gallery.map((thumbnail) =>
      <a key={thumbnail.toString()} href={`${process.env.PUBLIC_URL + "/" + project.id + thumbnail}`}>
        <img src={`${process.env.PUBLIC_URL + "/" + project.id + thumbnail}`}/>

      </a>
  )

  return (
    <>
      
      <PageTitle pagetitle={project.name}/>
      <div className="page-main-content project">

        <div className="project-thumbnails">
          <SRLWrapper options={options}>
            {thumbnails}
          </SRLWrapper>          
        </div>

        <Button class="button link_left fixed" linkTo="/projects" btnText="Back" />
        
      </div>
      <div className="spacer"></div>
    </>

  );
};

export default Project;