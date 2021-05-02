import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState({});
    useEffect(() => {
        fetch('https://sheltered-plateau-09251.herokuapp.com/project/' + id)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [id])
    const { title, code, live, description, img, technology} = project;
    return (
        <div>
            <div className="card bg-light mb-2 p-3" >
                <img className="img-fluid" src={img} alt="projectImage" />
                <div className="card-body">
                    <h3 className="card-text projectName text-center">{title}</h3>
                    <div className='d-flex align-items-center justify-content-center project-link'>
                        <a href={code} className='p-2 m-1 btn-success rounded' rel="noreferrer" target='_blank'>GitHub Code</a>
                        <a href={live} className='p-2 m-1 btn-success rounded' rel="noreferrer" target='_blank'>Live Site</a>
                    </div>
                    <div className="text-info text-center">{technology}</div>
                    <div className="text-center">{description}</div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;