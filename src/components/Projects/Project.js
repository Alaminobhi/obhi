import React from "react";

const Project = ({project}) => {
  const { title, code, live, description, img, technology} = project;
  return (
    <div className='col-md-6'>
      <div className="card shadow bg-light mb-4 p-3" >
        <img className="rounded-lg shadow w-100" style={{height: "300px"}} src={img} alt="projectImage" />
        <div className="card-body">
          <h5 className="card-text projectName">{title}</h5>
          <p>{technology}</p>
          <small>{description}</small>
          <div className='d-flex align-items-center justify-content-center project-link'>
              <a href={code} className='p-2 m-1 btn-primary rounded' rel="noreferrer" target='_blank'>GitHub Code</a>
              <a href={live} className='p-2 m-1 btn-primary rounded' rel="noreferrer" target='_blank'>Live Site</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
