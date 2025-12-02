import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

const social = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tanveer-khan-devolper/",
  },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/Tanveer-react" },
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

export default function Footer() {
  return (
    <footer className=" relative overflow-hidden bg-black">
      <div className=" pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_70%_35%,rgba(13,88,202,0.35),transparent_70%)]"></div>
      <div className=" pointer-events-none absolute inset-0 bg-[radial-gradient(50%_55%_at_30%_70%,rgba(16,185,129,0.30),transparent_70%)]"></div>
      <motion.div
        className=" relative px-4  z-10 sm:px-8 lg:px-10  flex flex-col items-center text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          className=" font-semibold leading-none text-center text-white select-none"
          style={{
            fontSize: "clamp(3rem,5vw,14rem)",
            letterSpacing: "0.02em",
            padding: "0.3vw",
            lineHeight: 0.9,
            whiteSpace: "nowrap",
            textShadow: "0px 2px 18px rgba(0,0,0,0.45)",
          }}
        >
          Tanveer Khan
        </h1>

        <div className="h-[3px] w-24 md:w-32 rounded-full  bg-gradient-to-r from-[#0d58cc]  via-cyan-300 to-emerald-400" />
        <div className="flex gap-5 text-2xl md:text-3xl">
          {social.map((item, index) => (
            <motion.a
              href={item.href}
              key={index}
              aria-label={item.label}
              target="_blank"
              rel="noopener noreferrer"
              variants={glowVariants}
              initial="initial"
              whileTap="tap"
              whileHover="hover"
              className="text-gray-300 transition-colors duration-200 inline-flex items-center justify-center"
            >
              <item.icon />
            </motion.a>
          ))}
        </div>
        <p className=" text-gray-300 italic max-w-xl">
          "success is when preparation meets opportunity"
        </p>
        <p className=" text-xs text-gray-300 mb-10">
          &copy;{new Date().getFullYear()} Tanveer Khan. All right reserved.
        </p>
      </motion.div>
    </footer>
  );
}
