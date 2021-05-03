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
    const { title, live, description, img, technology} = project;
    return (
        <div>
            <div className="card bg-light m-5 p-3" >
                <img className="img-fluid" src={img} alt="projectImage" />
                <div className="card-body">
                    <h3 className="card-text projectName text-center">{title}</h3>
                    <div className="text-info text-center">{technology}</div>
                    <div className="text-center">{description}</div>
                    <div className='text-center'>
                    <iframe href={live} width="100%" height="100%">
                  </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;