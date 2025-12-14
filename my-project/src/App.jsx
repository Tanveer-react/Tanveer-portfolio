import React  from "react";
import Navbar from "./components/navbar";
import Home from "./section/home";
import About from "./section/about";
import Skill from "./section/skill";
import Contact from "./section/contact";
import Footer from "./section/footer";
import Project from "./section/project";
import Customcursor from "./components/customcursor";
// import Intro from "./components/introanimation";
import Experience from "./section/experience";
// import All from "./section/all";
import { Link, Navigate, Route, Routes } from "react-router";
import All from "./section/all";




const App = () => {
  // const [introdone, setintrodone] = useState(false);
  return (
  
    <>
      {/* {!introdone && <Intro onFinish={() => setintrodone(true)} />}
      {introdone && (
        <div className="relative gradient text-white"> */}
          <Customcursor />

          <Navbar />
          <Routes>
             <Route path="/" element={<All/>}/>
            <Route path="/" element={<Home/>}/>
             <Route path="/about" element={<About/>}/>
              <Route path="/skill" element={<Skill/>}/>
                {/* <Route path="/resume" element={<Resume/>}/>  */}
                <Route path="/experience" element={<Experience/>}/>
                 <Route path="/project" element={<Project />} />
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/footer" element={<Footer/>}/>
                    <Route path="*" element={<Navigate to="/"/>}  />
          </Routes>

          {/* <Home />
          <About />
          <Skill />
          <Resume />
          <Experience />
          <Project />
          <Contact />
          <Footer /> */}
        {/* </div>
      )} */}
    </>
  );
};

export default App;
