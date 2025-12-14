import { useEffect, useRef, useState } from "react";
import Overlymenu from "./overlymenu";
import logo from "../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router";

export default function Navbar() {
  const [navbaropen, setnavbaropen] = useState(false);
  const [visibel, setvisibel] = useState(true);
  const [forcevisibel, setforcevisibel] = useState(false);
  const timerid = useRef(null);
  const lastscrollY = useRef(0);

  useEffect(() => {
    const homesection = document.querySelector("#home");
    const observer = new IntersectionObserver(
      ([entery]) => {
        if (entery.isIntersecting) {
          setforcevisibel(true);
          setvisibel(true);
        } else {
          setforcevisibel(false);
        }
      },
      { threshold: 0.1 }
    );

    if (homesection) observer.observe(homesection);
    return () => {
      if (homesection) observer.unobserve(homesection);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (forcevisibel) {
        setvisibel(true);
        return;
      }

      const currentscrollY = window.scrollY;

      if (currentscrollY > lastscrollY.current) {
        setvisibel(false);
        setvisibel(true);
        if (timerid.current) clearTimeout(timerid.current);
        timerid.current = setTimeout(() => setvisibel(false), 3000);
      }

      lastscrollY.current = currentscrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerid.current) clearTimeout(timerid.current);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center px-6 py-4 z-50 transition-transform duration-300 ${
          visibel ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center space-x-1">
          <img
            src={logo}
            alt="logo"
            className=" rounded-full w-12 h-12 font-extrabold "
          />
          <div className="text-2xl font-bold text-white hidden sm:block">
            Tanveer{" "}
          </div>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => setnavbaropen(true)}
            className="text-white text-3xl focus:outline-none"
            aria-label="open-menu"
          >
            <FiMenu />
          </button>
        </div>

        <div className="ml-auto hidden lg:block">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-5 py-2 font-medium rounded-full shadow-lg hover:opacity-50 transition-opacity duration-300"
          >
            Reach Out
          </Link>
        </div>
      </nav>

      <Overlymenu isOpen={navbaropen} onClose={() => setnavbaropen(false)} />
    </>
  );
}
