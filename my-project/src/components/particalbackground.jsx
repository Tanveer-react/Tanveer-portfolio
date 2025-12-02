import React, { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas.getContext("2d");
    let particles = [];
    const particleCount = 40;
    const colors = ["rgba(255,255,255,0.7)"];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speedx = (Math.random() - 0.5) * 0.5;
        this.speedy = (Math.random() - 0.5) * 0.5;
      }

      draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.shadowBlur = 10;
        context.shadowColor = this.color;
        context.fillStyle = this.color;
        context.fill();
      }

      update() {
        this.x += this.speedx;
        this.y += this.speedy;
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
        this.draw();
      }
    }

    function createParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    let animationId;
    function animate() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => p.update());
      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="  absolute h-full w-full top-0 left-0 z-0 pointer-events-none"
    ></canvas>
  );
};

export default ParticleBackground;
