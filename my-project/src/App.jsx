import React, { useState } from "react";
import Navbar from "./components/navbar";
import Home from "./section/home";
import About from "./section/about";
import Skill from "./section/skill";
import Contact from "./section/contact";
import Footer from "./section/footer";
import Project from "./section/project";
import Customcursor from "./components/customcursor";
import Intro from "./components/introanimation";
import Experience from "./section/experience";
import Resume from "./section/resume";
const App = () => {
  const [introdone, setintrodone] = useState(false);
  return (
    <>
      {!introdone && <Intro onFinish={() => setintrodone(true)} />}
      {introdone && (
        <div className="relative gradient text-white">
          <Customcursor />
          <Navbar />
          <Home />
          <About />
          <Skill />
          <Resume />
          <Experience />
          <Project />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
