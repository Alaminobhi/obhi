import React from 'react';
import resume from '../Resume/Resume.pdf'

const Resume = () => {
    return (
        <div className="m-4">
            <h1 className="bg-info text-center">Resume File</h1> <a className="btn btn-success text-right mb-2 mx-3" href={resume} download>
               Resume download
               </a>
            <iframe src={resume} width="100%" height="930px">
            </iframe>

            <br />
            <a className="btn btn-primary mx-3 mb-3" href={resume} download>
               Resume download
               </a>
        </div>
    );
};

export default Resume;