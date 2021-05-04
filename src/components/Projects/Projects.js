import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Project from "./Project";
import "./Projects.css";

const Projects = () => {

const [projectsData, setProjectsData] = useState([]);
  useEffect(() => {
    fetch('https://sheltered-plateau-09251.herokuapp.com/projects')
    .then(res => res.json())
    .then(data => setProjectsData(data))
}, [])

  return (
    <div
      className="mt-5 m-4">
        <h1 className="text-center text-uppercase bg-secondary">
          Projects
        </h1>
        <div className="row gx-2">
          {
            projectsData.map(project => <Project key={project._id} project={project}></Project>)
          }
        </div>

        <Link to="/projects" className="btn btn-success btn-custom my-3">
          Go To Projects
        </Link>
    </div>
  );
};

export default Projects;
