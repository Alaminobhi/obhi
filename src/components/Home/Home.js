import React from 'react';
import Header from '../Header/Header'
import About from '../AboutMe/About';
import Resume from '../Resume/Resume';
import Projects from '../Projects/Projects';
import Contact from '../ContactUs/Contact';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    return (
        <div className="m-2">
        <Header></Header>
        <About></About>
        <Projects></Projects>
        <Resume></Resume>
        <Blogs></Blogs>
        <Contact></Contact>
        </div>
    );
};

export default Home;