import React from 'react';
import './Header.css';
import me from '../../Images/alamin.png';
import resume from '../Resume/Resume.pdf';
import ReactTypingEffect from 'react-typing-effect';

const Header = () => {
    return (
        <section className="header mb-3">
        <div className="row align-items-center text-center">
          <div className="col-md-6">
          <div className="mx-5">
            <h4 className="text-center text-uppercase text-shadow">AL-AMIN OBHI</h4>
            <p><b>alaminobhi2@gmail.com <br/> 01744891919 </b></p>
            <ReactTypingEffect
        text={["Web Developer", "AL-AMIN OBHI", "React js, Node js"]}
        cursorRenderer={cursor => <h2>{cursor}</h2>}
        displayTextRenderer={(text, i) => {
          return (
            <h2>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={i%2 === 0 ? { color: 'magenta'} : {}}
                  >{char}</span>
                );
              })}
            </h2>
          );
        }}        
      />
            <p className="text-center text-uppercase text-shadow">
            I am a professional web developer, Javascript, React js, Node js, Express js, Mongodb ETC.
            </p>
            <a className="btn btn-primary mx-3 mb-3" href={resume} download>
               Resume download
            </a>
          </div>
          </div>
          <div className="col-md-6 banner-img d-flex p-3 justify-content-center">
            <img
              className="img-fluid rounded-lg shadow w-75"
              src={me}
              alt=""
            />
          </div>
        </div>
      </section>
    );
};

export default Header;