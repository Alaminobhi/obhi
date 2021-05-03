import React from "react";

const Project = ({project}) => {
  const { title, code, live, description, img, technology} = project;
  return (
    <div className='col-md-6'>
      <div className="card bg-light mb-2 p-3" >
        <img className="img-fluid hover-zoom" src={img} alt="projectImage" />
        <div className="card-body">
          <h5 className="card-text projectName">{title}</h5>
          <p>{technology}</p>
          <small>{description}</small>
          <div className='d-flex align-items-center justify-content-center project-link'>
              <a href={code} className='p-2 m-1 btn-success rounded' rel="noreferrer" target='_blank'>GitHub Code</a>
              <a href={live} className='p-2 m-1 btn-success rounded' rel="noreferrer" target='_blank'>Live Site</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
