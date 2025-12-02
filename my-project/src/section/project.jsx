import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useScroll,
  AnimatePresence,
  useMotionValueEvent,
} from "framer-motion";

import img1 from "../assets/Todo.png";
import img2 from "../assets/lottery.png";
import img3 from "../assets/calculator.png";
import img4 from "../assets/weather.png";
import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo 2.png";
import photo3 from "../assets/photo3.png";
import photo4 from "../assets/photo4.png";

const useIsmobile = (query = "(max-width:639px)") => {
  const [mobile, setMobile] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const handler = (e) => setMobile(e.matches);

    mql.addEventListener("change", handler);
    setMobile(mql.matches);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return mobile;
};

export default function Project() {
  const mobile = useIsmobile();
  const scanserf = useRef(null);

  const project = useMemo(
    () => [
      {
        id: "todo-app",
        title: "Github.com",
        link: "https://github.com/Tanveer-react/Todo-App",
        bgColor: "#f5e6cc",
        image: mobile ? photo1 : img1,
      },
      {
        id: "Lottery-Game",
        title: "Github.com",
        link: "https://github.com/Tanveer-react/Lottery-Game",
        bgColor: "#3b82f6",
        image: mobile ? photo2 : img2,
      },
      {
        id: "scientific-calculator",
        title: "Github.com",
        link: "https://github.com/Tanveer-react/react-scientific-calculator",
        bgColor: "#f5e6cc",
        image: mobile ? photo3 : img3,
      },
      {
        id: "Weather-App",
        title: "Github.com",
        link: "https://github.com/Tanveer-react/Weather-App",
        bgColor: "#4a6c8c",
        image: mobile ? photo4 : img4,
      },
    ],
    [mobile]
  );

  const { scrollYProgress } = useScroll({
    target: scanserf,
    offset: ["start start", "end end"],
  });

  const thresholds = project.map((_, i) => (i + 1) / project.length);
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = thresholds.findIndex((t) => v <= t);
    setActiveIndex(idx === -1 ? thresholds.length - 1 : idx);
  });

  const activeProject = project[activeIndex];

  return (
    <section
      id="project"
      ref={scanserf}
      className="relative py-16 text-white"
      style={{
        height: `${100 * project.length}vh`,
        backgroundColor: activeProject.bgColor,
        transition: "background-color 400ms ease",
      }}
    >
      <div className="sticky top-0  flex flex-col items-center justify-center h-screen">
        <h2
          className={`text-3xl font-semibold z-10 text-center ${
            mobile ? "-mt-4" : ""
          }`}
        >
          My work
        </h2>
        <div
          className={`reative w-full flex flex-1 items-center justify-center  ${
            mobile ? "-mt-4" : ""
          }`}
        >
          {project.map((proj, idx) => (
            <div
              key={proj.id}
              className={` absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ${
                activeIndex === idx
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0 sm:z-10"
              }`}
              style={{ width: "85%", maxWidth: "1200px" }}
            >
              <AnimatePresence mode="wait">
                {activeIndex === idx && (
                  <motion.h3
                    key={proj.title}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`block text-center text-white/95 text-[clamp(2rem,6vw,5rem)] sm:absolute  sm:-top-20 sm:left-[35%] lg:left-[-5%] italic font-semibold ${
                      mobile ? "relative mt-24 " : ""
                    }`}
                    style={{
                      zIndex: 5,
                      textAlign: mobile ? "center" : "left",
                    }}
                  >
                    {proj.title}
                  </motion.h3>
                )}
              </AnimatePresence>

              <div
                className={`relative overflow-hidden w-full max-w-5xl   h-screen bg-black/20 shadow-2xl 
              md:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)]  sm:h-[66vh]
               ${mobile ? "mb-6  rounded-lg" : "mb-10 sm:mb-12 rounded-xl"} `}
                style={{ zIndex: 10, transition: "box-shadow 250ms ease" }}
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className=" absolute top-0  left-0 w-full h-full object-cover "
                  style={{
                    filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.65))",
                    transition: "filter 200ms ease",
                  }}
                  loading="lazy"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    zIndex: 11,
                    background:
                      "linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0) 48%)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className={`absolute ${mobile ? "bottom-20" : "bottom-10"}`}>
          <a
            href={activeProject?.link}
            target="blank"
            rel="noopener noreferrer"
            className=" inline-block px-3 py-3 font-semibold  rounded-lg bg-white text-black hover:bg-gray-200 transition-all"
            aria-label={` view ${activeProject}`}
          >
            View projects
          </a>
        </div>
      </div>
    </section>
  );
}
