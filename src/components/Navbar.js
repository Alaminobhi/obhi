import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/image 1.png'

const Navbar = () => {

    return (
        <div className="header">
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <img style={{ height: "50px" }} className="navbar-brand" src={logo} alt="" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav justify-content-end">
                        <Link className="nav-item nav-link active" to="/home">Home</Link>
                        <Link className="nav-item nav-link" to="/contact">Contact </Link>
                        <Link className="nav-item nav-link" to="/about">About</Link>
                        <Link className="nav-item nav-link" to="/blogs">Blogs</Link>
                        <Link className="nav-item nav-link" to="/resume">Resume</Link>
                        <Link className="nav-item nav-link" to="/projects">Projects</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;