import { motion } from "framer-motion";
import React from "react";
import profile from "../assets/Tanveer.png";

export default function About() {
  const status = [
    { label: "Experience", value: "4 Months" },
    { label: "Spaciality", value: " Front End" },
    { label: "Focus", value: " Performance & UI" },
  ];

  const glows = [
    "-top-10 left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 h-[420px] w-[420px] opacity-15 blur-[140px] delay-300",
    "top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 blur-[100px] w-[220px] h-[220px]",
  ];
  return (
    <section
      id="about"
      className="  relative min-h-screen w-full flex items-center justify-center bg-black text-white overflow-hidden "
    >
      <div className=" absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={` absolute rounded-full bg-gradient-to-r from-[#63382b]  via-[#00bf8f] to-[#1cd2d8] animate-pulse ${c}`}
          />
        ))}
      </div>

      <div className=" relative z-[10] mx-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12">
        <motion.div
          className=" flex flex-col md:flex-row items-center md:items-stretch gap-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div
            className=" relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] 
rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-[#302b63]  via-[#00bf8f] to-[#1cd2d8]
"
          >
            <img src={profile} alt="profile" className=" absolute inset-0" />
          </motion.div>

          <div className=" flex-1 flex-col flex justify-center text-center md:text-left">
            <h2
              className=" mb-10 text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent
  bg-gradient-to-r from-[#1cd2d8]  via-[#1cd2d8] to-[#1cd2d8]
  "
            >
              Tanveer
            </h2>
            <p className=" mt-2 text-xl sm:text-lg  text-white/90 font-semibold">
              React Devolper
            </p>

            <p className="   mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl:">
              I am a front-end developer specializing in React and Framer
              Motion. I create modern, responsive, and visually engaging web
              experiences with smooth animations, clean UI, and high
              performance. My focus is delivering fast, user-friendly interfaces
              that feel polished and professional.
            </p>

            <div className=" mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl">
              {status.map((items, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="text-sm text-gray-500">{items.label}</div>
                  <div className="font-bold">{items.value}</div>
                </motion.div>
              ))}
            </div>

            <div className=" mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="#project"
                className=" inline-flex rounded-lg justify-center items-center bg-white text-black font-semibold px-5 py-3 hover:bg-gray-200 transition"
              >
                View projects
              </a>
              <a
                href="#contact"
                className=" inline-flex rounded-lg justify-center items-center border-white/20 bg-white/10 text-white  px-5 py-3 hover:bg-white/20 transition"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h3 className=" text-2xl sm:text-3xl font-bold text-white mb-3">
            About Me
          </h3>
          <p className=" text-gray-300 leading-relaxed  text-base sm:text-lg">
            I am a front-end developer specializing in React and Framer Motion.{" "}
            <br />I create fast, modern, and animated web interfaces that are
            both responsive and visually engaging.
          </p>
          <p className=" mt-4 text-gray-400   text-base sm:text-lg">
            I build clean, responsive, and visually engaging user experiences
            with smooth animations and high performance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
