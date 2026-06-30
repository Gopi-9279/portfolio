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
      <div className="container w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        
        {/* Left Content - Typography */}
        <div className="space-y-4 z-20 text-center sm:text-left order-2 lg:order-1">
          <h2 className="text-lg sm:text-xl md:text-3xl font-medium text-muted-foreground mb-3 sm:mb-4 opacity-0 animate-fade-in">
            Hey, I'm a
          </h2>
          <h1 className="text-[clamp(2.65rem,13vw,4.8rem)] md:text-7xl lg:text-[7rem] font-black leading-[0.9] flex flex-col">
            <span className="opacity-0 animate-fade-in-delay-1">Full Stack</span>
            <span className="opacity-0 animate-fade-in-delay-2">Developer</span>
            <span className="opacity-0 animate-fade-in-delay-3 mt-2 text-[clamp(2rem,10vw,3.8rem)] md:text-6xl lg:text-[5rem]">
              <span 
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(to right, hsl(var(--primary)), #ec4899, hsl(var(--primary)))',
                  backgroundSize: '200% auto',
                  animation: 'gradientFlow 3s linear infinite'
                }}
              >
                (MERN)
              </span>
            </span>
          </h1>

          <div className="mt-8 opacity-0 animate-fade-in-delay-4 space-y-4 max-w-lg mx-auto sm:mx-0">
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-foreground">
              Aspiring Software Developer
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Passionate about building scalable web applications and enhancing problem-solving skills. I have hands-on experience in MERN Stack development and a strong proficiency in Java and DSA.
            </p>
          </div>

          <div className="pt-6 sm:pt-8 opacity-0 animate-fade-in-delay-4">
            <MagneticButton 
              href="#projects" 
              className="cosmic-button text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 uppercase tracking-widest font-bold shadow-[0_0_15px_var(--color-primary)] hover:shadow-[0_0_25px_var(--color-primary)]"
            >
              View My Work
            </MagneticButton>
          </div>
        </div>

        {/* Right Content - Photo & Orbs */}
        <div className="relative w-full min-h-[300px] h-[42vh] max-h-[460px] lg:h-[80vh] lg:max-h-[680px] flex items-center justify-center order-1 lg:order-2 opacity-0 animate-fade-in z-20">
          
          {/* Floating Tech Orbs */}
          <div className="absolute top-1/4 left-1 sm:-left-4 md:-left-12 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center animate-[float_6s_ease-in-out_infinite] z-30">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="w-6 h-6 sm:w-8 sm:h-8 drop-shadow-lg" />
          </div>
          <div className="absolute bottom-1/4 right-1 sm:-right-4 md:-right-8 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center animate-[float_8s_ease-in-out_infinite_reverse] z-30">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-lg" />
          </div>
          <div className="absolute top-10 right-4 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center animate-[float_5s_ease-in-out_infinite] z-30" style={{ animationDelay: '1s' }}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-lg" />
          </div>

          <Tilt 
            tiltMaxAngleX={5} 
            tiltMaxAngleY={5} 
            glareEnable={true} 
            glareMaxOpacity={0.2} 
            glarePosition="all"
            className="relative w-full h-full max-h-[600px] max-w-[500px] mx-auto rounded-3xl"
          >
            {/* The photo with a fade out at the bottom */}
            <img 
              src={profileImg} 
              alt="Gopi Kishan" 
              className="object-cover w-full h-full rounded-3xl relative z-10"
              style={{
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)'
              }}
            />
            
            {/* Ambient glow behind photo matching theme */}
            <div className="absolute inset-0 bg-primary/30 blur-[80px] rounded-full z-0 transform scale-100 animate-pulse-subtle pointer-events-none"></div>
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
