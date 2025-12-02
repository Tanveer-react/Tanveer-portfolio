import React, { useEffect, useState } from "react";
const Customcursor = () => {
  const [position, setposition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const moveHandelr = (e) => {
      setposition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveHandelr);

    return () => window.removeEventListener("mousemove", moveHandelr);
  }, []);

  return (
    <div
      className=" fixed top-0  left-0  pointer-events-none z-[9999]"
      style={{
        transform: `translate(${position.x - 40}px,${position.y - 40}px)`,
      }}
    >
      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 blur-2xl opacity-80" />
    </div>
  );
};

export default Customcursor;
