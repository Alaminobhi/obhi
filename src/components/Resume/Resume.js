import React from 'react';
import resume from '../../Images/Resume Al-Amin Obhi.pdf'
const Resume = () => {
    return (
        <div className="m-4">
            <h1 className="bg-info text-center">Resume File</h1> <a className="btn btn-success shadow mb-4 mx-3" href="https://drive.google.com/file/d/18OsZzbszi1butUkxBk6b50iaFOEA1D-H/view?usp=sharing" download>
               Resume view
               </a>
            <iframe src={resume} width="100%" height="930px">
            </iframe>

            <br />
            <a className="btn btn-primary shadow mx-3 mb-3" href="https://drive.google.com/file/d/18OsZzbszi1butUkxBk6b50iaFOEA1D-H/view" download>
               Resume download
               </a>
        </div>
    );
};

export default Resume;