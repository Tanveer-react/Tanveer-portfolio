import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="py-16 w-full bg-gray-950 text-white ">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
          My Resume
        </h2>
        <p className="text-center text-gray-300 max-w-xl mb-8">
          Explore my professional experience, skills, and education. You can
          view or download my resume below.
        </p>

        <a
          href="/Tanveer Khan Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white text-black rounded-lg  transition-all duration-300"
        >
          View / Download Resume
        </a>
      </div>
    </section>
  );
}
