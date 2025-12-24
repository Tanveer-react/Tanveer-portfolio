
import React, { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Experience() {
  const dragRef = useRef(null); 
  const [dotY, setDotY] = useState(0);

  const leftControls = useAnimation();
  const rightControls = useAnimation();

  const experienceData = [
    {
      id: 1,
      title: "React Developer",
      company: "DigiFlon",
      duration: "2025 — Present",
      desc: "I am a Front-End Developer specializing in React and modern web technologies, creating responsive, high-performance, and visually engaging web applications with clean, maintainable code.",
      skills: ["Next.js","Redux ToolKit","React", "Framer-Motion", "Tailwind CSS", "HTML","CSS","Bootstrap"],
      side: "left",
    },
    {
      id: 2,
      title: "WordPress Developer",
      company: "DigiFlon",
      duration: "2025",
      desc: "WordPress Developer creating complete e-commerce stores using Elementor, handling full setup, customization, and SEO optimization for high-performing websites.",
      skills: ["WordPress", "Elementor", "SEO"],
      side: "right",
    },
  ];

  const handleDotMove = (deltaY) => {
    setDotY((prev) => {
      const newY = Math.min(Math.max(prev + deltaY, -100), 100); 
      leftControls.start({ y: newY * 0.4 });
      rightControls.start({ y: newY * -0.4 });
      return newY;
    });
  };

  return (
    <section className="relative w-full h-auto bg-black
            text-white py-24 px-20">
      <h2 className="text-4xl font-bold text-center mb-24">Experience</h2>

   
      <div
        ref={dragRef}
        className=" hidden  sm:block md:block lg:block absolute left-1/2 top-48 bottom-28 w-[2px] h-[450px] bg-green-100"
      ></div>

     
      <motion.div
        drag="y"
        dragConstraints={dragRef}
        dragElastic={0.2}
        onDrag={(e, info) => handleDotMove(info.delta.y)}
        className=" hidden  sm:block md:block lg:block absolute left-1/2 top-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-green-300 to-blue-300 shadow-lg"
        style={{ y: dotY }}
        whileHover={{ scale: 1.3, boxShadow: "0 0 20px #00ffd2" }}
        whileTap={{ scale: 0.9 }}
      />

   
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-25 mt-10">
        {experienceData.map((item) => (
          <motion.div
            key={item.id}
            animate={item.side === "left" ? leftControls : rightControls}
            initial={{ y: 0 }}
            className="bg-white/10 text-white border border-green-200 rounded-xl p-6 backdrop-blur-md
              min-h-[280px] flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-white">{item.company}</p>
              <p className="text-white">{item.duration}</p>
              <p className="mt-3 text-white">{item.desc}</p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {item.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-gray-500 text-white text-sm rounded-full border border-green-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


