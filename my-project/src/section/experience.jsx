import React from "react";

export default function Experience() {
  const experiences = [
    {
      id: "digiflon-frontend",
      role: "Front-End Developer",
      company: "Digiflon",
      duration: "2025 — Present",
      details:
        "Building modern, responsive websites using React, JavaScript, Tailwind CSS, Bootstrap, HTML, Framer Motion, and WordPress.",
    },
  ];

  const education = [
    {
      id: "BS-software",
      field: "Bachelor of Science in Software Engineering",
      institute: "PMAS–Arid Agriculture University Rawalpindi",
      duration: "2022 — 2026",
      CGPA: "3.5",
    },
  ];

  return (
    <section
      className="py-16 relative w-full bg-gray-950 text-white"
      id="experience"
    >
      <div className="absolute -top-32 left-12 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cdbd2] rounded-full opacity-30 sm:opacity-20 md:opacity-10 blur-[120px] animate-pulse delay-500"></div>
      <div className="absolute -bottom-32 right-12 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cdbd2] rounded-full opacity-30 sm:opacity-20 md:opacity-10 blur-[120px] animate-pulse delay-500"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start justify-center">
        <div className="flex-1 ">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center lg:text-left">
            Experience
          </h2>
          <div className="flex flex-col gap-6 ">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="p-6 bg-white text-black shadow-md rounded-xl border border-gray-200 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-gray-700">{exp.company}</p>
                <p className="text-sm text-gray-700 mb-3">{exp.duration}</p>
                <p className="text-gray-700 leading-relaxed">{exp.details}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center lg:text-left">
            Education
          </h2>
          <div className="flex flex-col gap-6">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="p-6 bg-white text-black shadow-md rounded-xl border border-gray-200 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold">{edu.field}</h3>
                <p className="text-gray-700">{edu.institute}</p>
                <p className="text-sm text-gray-500 mb-3">{edu.duration}</p>
                <p className="text-gray-800 leading-relaxed pb-6">
                  CGPA: {edu.CGPA}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
