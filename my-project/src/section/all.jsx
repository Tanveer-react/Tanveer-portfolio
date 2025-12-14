

import Intro from "../components/introanimation";
import Home from "./home";
import About from "./about";
import Skill from "./skill";
import Contact from "./contact";
import Project from "./project";
import Experience from "./experience";
import Footer from "./footer";
import { useState } from "react";

export default function All() {
     const [introdone, setintrodone] = useState(false);
  return (
    <>
     {!introdone && <Intro onFinish={() => setintrodone(true)} />}
          {introdone && (
            <div className="relative gradient text-white">
    
<Home/>
      <About />
<Skill />
<Project />
<Experience />
<Contact />
<Footer />

    </div>

      )} 
    </>
  )
}
