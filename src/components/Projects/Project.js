import React from "react";
import { Link } from "react-router-dom";

const Project = ({project}) => {
  const {title, code, live, img, _id} = project;
  return (
    <div className='col-md-4'>
      <div className="card bg-light mb-2 p-3" >
        <img className="img-fluid" src={img} alt="projectImage" />
        <div className="card-body">
          <h5 className="card-text projectName">{title}</h5>
          <div className='d-flex align-items-center justify-content-center project-link'>
              <a href={code} className='p-2 m-1 btn-success rounded' rel="noreferrer" target='_blank'>GitHub Code</a>
              <a href={live} className='p-2 m-1 btn-success rounded' rel="noreferrer" target='_blank'>Live Site</a>
          </div>
          <Link to={"/projectDetails/"+_id}>Details..</Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
