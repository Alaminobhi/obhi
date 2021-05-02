import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useState } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import AboutMe from './components/AboutMe/About';
import Contact from './components/ContactUs/Contact';
import Blogs from './components/Blogs/Blogs';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer';
import Alamin from './components/Alamin/Alamin';
import Header from './components/Header/Header';
import ProjectDetails from './components/Projects/ProjectDetails';
export const UserContext = createContext();

function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <h3>{loggedInUser.name}</h3>
    <Router>
      <div className="bg-light"><Navbar></Navbar> </div>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
         <AboutMe></AboutMe>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/blogs">
         <Blogs></Blogs>
        </Route>
        <Route path="/resume">
         <Resume></Resume>
        </Route>
        <Route path="/projects">
          <Projects></Projects>
        </Route>
        {/* <Route path="projectDetails/:id">
          <ProjectDetails></ProjectDetails>
        </Route> */}
        <Route path="/projectDetails/:id">
         <ProjectDetails></ProjectDetails>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/header">
          <Header></Header>
        </Route>
        <Route path="/al-amin">
         <Alamin></Alamin>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  </UserContext.Provider>
  );
}

export default App;
