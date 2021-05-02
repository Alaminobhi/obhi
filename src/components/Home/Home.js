import React from 'react';
import Header from '../Header/Header'
import About from '../AboutMe/About';
import Resume from '../Resume/Resume';
import Projects from '../Projects/Projects';
import Contact from '../ContactUs/Contact';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    return (
        <div className="bg-light m-1">
        <Header></Header>
        <About></About>
        <Projects></Projects>
        <Resume></Resume>
        <Contact></Contact>
        <Blogs></Blogs>
        </div>
    );
};

export default Home;