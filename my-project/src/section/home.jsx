import ParticleBackground from "../components/particalbackground";
import { motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Tanveer from "../assets/Tanveer.png";

export default function Home() {
  const roles = useMemo(
    () => ["Web Developer", "React Developer", "Front-end devolper"],
    []
  );
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const social = [
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tanveer-khan-devolper/",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/Tanveer-react",
    },
  ];

  const glowVariants = {
    initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
    hover: {
      scale: 1.2,
      y: -3,
      filter:
        "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
    tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
  };

  useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex < current.length) {
          setSubIndex((v) => v + 1);
        } else if (!deleting && subIndex === current.length) {
          setDeleting(true);
        } else if (deleting && subIndex > 0) {
          setSubIndex((v) => v - 1);
        } else if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((p) => (p + 1) % roles.length);
        }
      },
      deleting ? 40 : 120
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <section className="w-full h-screen relative bg-black overflow-hidden">
      <ParticleBackground />

      <div className="absolute -top-32 right-32 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cdbd2] rounded-full opacity-30 sm:opacity-20 md:opacity-10 blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cdbd2] rounded-full opacity-30 sm:opacity-20 md:opacity-10 blur-[120px] animate-pulse delay-500"></div>

      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center h-full text-center lg:text-left relative">
          <div className="w-full lg:pr-24 mx-auto max-w-[48rem]">
            <motion.div
              className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6rem]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span>{roles[index].substring(0, subIndex)}</span>
              <span
                className="inline-block w-[2px] ml-1 animate-pulse align-middle bg-white"
                style={{ height: "1em" }}
              />
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1c8ad8] via-[#00bf8f] to-[#2b6363]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hello,I'am
              <br />
              <span className=" text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl lg:whitespace-nowrap">
                Tanveer Khan
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-base sm:text-lg md:text-xl text-gray-50 mx-auto max-w-2xl lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Frontend Developer creating responsive, high-quality web
              applications with clean code and seamless user experiences using
              React and modern web technologies.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row justify-center items-center lg:justify-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                href="#project"
                className="px-4 py-4   w-[160px]  rounded-2xl font-medium text-lg text-white bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] shadow-lg hover:scale-105 transition-all"
              >
                View My Work
              </a>
              <a
                href="#resume"
                className="px-4 py-4  w-[160px] rounded-2xl font-medium text-lg text-black bg-white hover:bg-gray-200 shadow-lg hover:scale-105 transition-all"
              >
                My Resume
              </a>
            </motion.div>

            <div className="mt-10 flex gap-6 text-2xl md:text-3xl justify-center lg:justify-start">
              {social.map(({ icon: Icon, label, href }) => (
                <motion.a
                  href={href}
                  key={label}
                  target="_blank"
                  aria-label={label}
                  rel="noopener noreferrer"
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="text-gray-300"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className=" ralative hidden lg:block">
          <div
            className=" absolute top-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              right: "10px",
              width: "min-(22vw,410px)",
              height: "min(40vw,760px)",
              borderRadius: "50%",
              filter: "blur(38px)",
              opacity: 0.32,
              background:
                "conic-gradient(from 0deg,#1cd8d2,#00bf8f,#302b63,#1cd8d2)",
            }}
          />
          <motion.img
            src={Tanveer}
            alt="Tanveer Khan"
            className="absolute top-1/2 -translate-y-1/2 right-0
             w-[280px] h-[280px] md:w-[340px] md:h-[340px] lg:w-[420px] lg:h-[420px]
             rounded-full object-cover border-2 border-green-100 shadow-2xl
           "
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
}
