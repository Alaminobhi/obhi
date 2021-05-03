import React from 'react';
import { ProgressBar } from "react-bootstrap";
import ReactTypingEffect from 'react-typing-effect';
import myI from '../../Images/image 1-2.png'
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
        <div className="text-center bg-white mx-4">
            <h1 className="bg-info">About</h1>
            <div className="bg-secondary m-2">
                <h3 className="text-danger">Al-Amin Obhi</h3>
                <div className="d-flex justify-content-evenly">
                <p className="m-4">
                <ReactTypingEffect
        text={["Web Developer", "Hello, I am a professional web developer, Javascript, React js, Node js, Express js, Mongodb ETC."]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={i%2 === 0 ? { color: 'magenta'} : {}}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      />
                </p>
                <p className="m-3">
                <img className="img-fluid" src={myI} alt=""/> 
                </p>
                </div>
            </div>
            <h2 className="text-success text-center">Programing Skills</h2>
            <div className="row m-3 align-items-center">
                <div className="col-md-6">
                    <div className='skillProgress m-5'>
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
                    <div className='skillProgress m-5'>
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