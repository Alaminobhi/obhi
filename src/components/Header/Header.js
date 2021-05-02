import React from 'react';
import './Header.css';
import me from '../../Images/alamin obhi.jpg';
import resume from '../Resume/Resume.pdf';
import ReactTypingEffect from 'react-typing-effect';

const Header = () => {
    return (
        <section className="container headerMain">
        <div className="row align-items-center text-center">
          <div className="col-md-6">
            <h4 className="text-center text-uppercase text-shadow">ASSALAMU ALIKUM</h4>
            <ReactTypingEffect
        text={["Web Developer", "AL-AMIN OBHI"]}
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
            <p className="text-center text-uppercase text-shadow">
              I am a Full Stack Web Developer.A HTML,CSS,JavaScript, React js, Node js & MongoDB
              expert. I always maintain a good relationships with my Team Members.
            </p>
            <a className="btn btn-primary mx-3 mb-3" href={resume} download>
               Resume download
            </a>
          </div>
          <div className="col-md-6 banner-img d-flex p-3 justify-content-center">
            <img
              className="img-fluid w-75"
              src={me}
              alt=""
            />
          </div>
        </div>
      </section>
    );
};

export default Header;