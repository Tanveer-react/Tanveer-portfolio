import React  from "react";
import Navbar from "./components/navbar";
import Home from "./section/home";
import About from "./section/about";
import Skill from "./section/skill";
import Contact from "./section/contact";
import Footer from "./section/footer";
import Project from "./section/project";
import Customcursor from "./components/customcursor";
import Experience from "./section/experience";
import { Link, Navigate, Route, Routes } from "react-router";
import All from "./section/all";
import NotFound from "./section/notfound";

const App = () => {
  return (
    <>
          <Customcursor />
          <Navbar />
          <Routes>
             <Route path="/" element={<All/>}/>
            <Route path="/" element={<Home/>}/>
             <Route path="/about" element={<About/>}/>
              <Route path="/skill" element={<Skill/>}/>
                <Route path="/experience" element={<Experience/>}/>
                 <Route path="/project" element={<Project />} />
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/footer" element={<Footer/>}/>
                    <Route path="*" element={<NotFound/>}  />
          </Routes>
    </>
  );
};

export default App;
