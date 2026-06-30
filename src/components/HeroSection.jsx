import { ArrowDown } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";
import Tilt from "react-parallax-tilt";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const MagneticButton = ({ children, className, href }) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Magnetic pull strength
    setPosition({ x: distanceX * 0.2, y: distanceY * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <a
      href={href}
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("inline-block", className)}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: position.x === 0 ? "transform 0.3s ease-out" : "transform 0.1s ease-out",
      }}
    >
      {children}
    </a>
  );
};

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center px-4 pt-24 pb-16 z-10"
    >

      {/* Huge Background Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden z-0 opacity-0 animate-fade-in-delay-1 w-full h-full leading-[0.75]">
         <div className="text-[38vw] font-black tracking-tighter text-foreground/[0.07] dark:text-foreground/[0.05] whitespace-nowrap drop-shadow-sm">
            WEB
         </div>
         <div className="text-[14.5vw] font-black tracking-tighter text-foreground/[0.07] dark:text-foreground/[0.05] whitespace-nowrap drop-shadow-sm">
            DEVELOPER
         </div>
      </div>

      <div className="container relative w-full h-full flex items-center justify-center mx-auto z-20">

        {/* Centered Content - Holographic Photo & Orbits */}
        <div className="relative w-full min-h-[400px] flex items-center justify-center opacity-0 animate-fade-in">

          {/* Orbital Rings Background */}
          <div className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border border-primary/20 animate-[spin_30s_linear_infinite] pointer-events-none flex items-center justify-center z-10 hidden sm:flex">
            {/* React Icon */}
            <div className="absolute -top-6 sm:-top-8 animate-[spin_30s_linear_infinite_reverse]">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-card border border-border/50 shadow-[0_0_20px_rgba(139,92,246,0.3)] flex items-center justify-center pointer-events-auto hover:scale-110 transition-transform">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="w-6 h-6 sm:w-8 sm:h-8 drop-shadow-lg" />
              </div>
            </div>

            {/* Node Icon */}
            <div className="absolute -bottom-6 sm:-bottom-8 animate-[spin_30s_linear_infinite_reverse]">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-card border border-border/50 shadow-[0_0_20px_rgba(139,92,246,0.3)] flex items-center justify-center pointer-events-auto hover:scale-110 transition-transform">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-6 h-6 sm:w-8 sm:h-8 drop-shadow-lg" />
              </div>
            </div>
          </div>

          <div className="absolute w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] lg:w-[850px] lg:h-[850px] rounded-full border border-primary/10 animate-[spin_50s_linear_infinite_reverse] pointer-events-none flex items-center justify-center z-10 hidden lg:flex">
            {/* Mongo Icon */}
            <div className="absolute -left-6 sm:-left-8 animate-[spin_50s_linear_infinite]">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-card border border-border/50 shadow-[0_0_20px_rgba(139,92,246,0.3)] flex items-center justify-center pointer-events-auto hover:scale-110 transition-transform">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-6 h-6 sm:w-8 sm:h-8 drop-shadow-lg" />
              </div>
            </div>
          </div>

          {/* Glowing Aura */}
          <div className="absolute inset-0 bg-primary/10 dark:bg-primary/20 blur-[100px] rounded-full z-0 transform scale-75 animate-pulse-subtle pointer-events-none"></div>

          {/* Holographic Photo Card */}
          <Tilt
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            glareEnable={true}
            glareMaxOpacity={0.3}
            glareColor="white"
            glarePosition="all"
            className="relative w-[240px] h-[320px] sm:w-[320px] sm:h-[420px] lg:w-[380px] lg:h-[500px] rounded-[2rem] p-2 bg-white/80 dark:bg-gradient-to-br dark:from-white/20 dark:via-white/5 dark:to-white/10 backdrop-blur-xl border-2 border-white/60 dark:border-white/30 shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-20 group mx-auto"
          >
            <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-card border border-border/50">
              <img
                src={profileImg}
                alt="Gopi Kishan"
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Inner Vignette / Shadow */}
              <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.3)] pointer-events-none transition-opacity duration-700"></div>

              {/* Holographic shifting overlay */}
              <div className="absolute inset-0 bg-linear-to-tr from-primary/30 via-transparent to-pink-500/30 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-700 pointer-events-none"></div>
            </div>
          </Tilt>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-20 hidden md:flex">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
