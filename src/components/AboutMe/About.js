import React from 'react';
import { ProgressBar } from "react-bootstrap";
const About = () => {
    const javaScript = 95;
    const react = 95;
    const HTML = 95;
    const ReactNative = 80;
    const NodeJS = 80;
    const Bootstrap = 96;
    const MongoDB = 90;
    const Heroku = 97;
    const Firebase = 96;
    const ReactRedux = 60;
    return (
        <div className="text-center bg-white">
            <h1 className="bg-info">About</h1>
            <div className="bg-secondary m-2">
                <h3 >Al-Amin Obhi</h3>
                <p>
                    Hello, I am a professional web developer, I have 2 years of work experience on Javascript, React js, Node js, Express js, Mongodb ETC.
       </p>
            </div>
            <h2 className="text-success text-center">Programing Skills</h2>
            <div className="row m-2 align-items-center">
                <div className="col-md-6">
                    <div className='skillProgress'>
                        <h4>JavaScript</h4>
                        <ProgressBar
                            className="mb-3"
                            animated
                            striped
                            variant="success"
                            now={javaScript}
                            label={`${javaScript}%`}
                        />
                        <h4>React</h4>
                        <ProgressBar
                            className="mb-3"
                            animated
                            striped
                            variant="info"
                            now={react}
                            label={`${react}%`}
                        />
                        <h4>HTML & CSS</h4>
                        <ProgressBar
                            className="mb-3"
                            animated
                            striped
                            variant="warning"
                            now={HTML}
                            label={`${HTML}%`}
                        />
                        <h4>React Native</h4>
                        <ProgressBar
                            className="mb-3"
                            animated
                            striped
                            variant="danger"
                            now={ReactNative}
                            label={`${ReactNative}%`}
                        />
                        <h4>React Redux</h4>
                        <ProgressBar
                            className="mb-3"
                            animated
                            striped
                            variant="success"
                            now={ReactRedux}
                            label={`${ReactRedux}%`}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className='skillProgress'>
                        <h4>NodeJS</h4>
                        <ProgressBar
                            className="mb-3"
                            animated
                            striped
                            variant="success"
                            now={NodeJS}
                            label={`${NodeJS}%`}
                        />
                        <h4>Bootstrap</h4>
                        <ProgressBar
                            className="mb-3"
                            animated
                            striped
                            variant="info"
                            now={Bootstrap}
                            label={`${Bootstrap}%`}
                        />
                        <h4>MongoDB</h4>
                        <ProgressBar
                            className="mb-3"
                            animated
                            striped
                            variant="warning"
                            now={MongoDB}
                            label={`${MongoDB}%`}
                        />
                        <h4>Heroku & Netlify</h4>
                        <ProgressBar
                            className="mb-3"
                            animated
                            striped
                            variant="danger"
                            now={Heroku}
                            label={`${Heroku}%`}
                        />
                        <h4>Firebase & GitHub</h4>
                        <ProgressBar
                            className="mb-3"
                            animated
                            striped
                            variant="success"
                            now={Firebase}
                            label={`${Firebase}%`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;