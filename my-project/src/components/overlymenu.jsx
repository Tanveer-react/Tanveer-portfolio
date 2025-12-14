import { AnimatePresence, motion } from "framer-motion";

import { FiX } from "react-icons/fi";
import { Link } from "react-router";
export default function Overlymenu({ isOpen, onClose }) {
  const ismobile = typeof window !== "undefined" && window.innerWidth < 1024;
  const orign = ismobile ? "95% 8%" : "50% 8%";
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skill" },
    { name: "Projects", path: "/project" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  
  ];
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ clipPath: `circle(0% at ${orign})` }}
          animate={{ clipPath: `circle(150% at ${orign})` }}
          exit={{ clipPath: `circle(0% at ${orign})` }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{ backgroundColor: "rgba(0,0,0,0.95)" }}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-3xl text-white"
            aria-label="close menu"
          >
            <FiX />
          </button>

          <ul className="space-y-6 text-center">
            {menuItems.map((items, idex) => (
              <motion.li
                key={items.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idex * 0.1 }}
              >
              
                 <Link
                  to={items.path}
                  onClick={onClose}
                  className="text-4xl text-white font-semibold hover:text-pink-400 transition-colors duration-300"
                >
                  {items.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
