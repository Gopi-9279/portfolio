import { useEffect, useRef, useState } from "react";
import TagCloud from "TagCloud";

const skillsData = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
];

// Generate HTML strings for TagCloud
const skillElements = skillsData.map(skill => `
  <div class="flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 p-2 rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] hover:bg-white/60 dark:hover:bg-black/60 transition-all duration-300 gap-2 pointer-events-auto">
    <img src="${skill.icon}" alt="${skill.name}" class="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-md" loading="lazy" />
    <span class="text-[10px] sm:text-xs font-semibold text-foreground text-center leading-tight">${skill.name}</span>
  </div>
`);

export const SkillsSection = () => {
  const containerRef = useRef(null);
  const [isCompact, setIsCompact] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleViewport = () => setIsCompact(window.innerWidth < 768);
    handleViewport();
    window.addEventListener("resize", handleViewport);
    return () => window.removeEventListener("resize", handleViewport);
  }, []);

  useEffect(() => {
    if (isCompact) return;

    const container = containerRef.current;
    if (!container) return;

    // Helper to calculate radius based on screen size
    const getRadius = () => {
      if (window.innerWidth < 1024) return 280;
      return 350; // Increased radius for boxes
    };

    const initTagCloud = () => {
      // Clear previous tags
      container.innerHTML = "";
      
      // Initialize TagCloud
      TagCloud(container, skillElements, {
        radius: getRadius(),
        maxSpeed: "fast",
        initSpeed: "normal",
        direction: 135,
        keep: true,
        useHTML: true, // Enable rendering of HTML strings
      });
    };

    // Delay initialization slightly to ensure DOM layout is complete
    const timeoutId = setTimeout(() => {
        initTagCloud();
    }, 100);

    // Re-initialize on window resize for responsiveness
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        initTagCloud();
      }, 200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
      container.innerHTML = "";
    };
  }, [isCompact]);

  return (
    <section id="skills" className="py-20 sm:py-24 px-4 relative z-10 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>
        
        {isCompact ? (
          <div className="grid grid-cols-2 min-[420px]:grid-cols-3 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-md border border-primary/20 p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/70 hover:shadow-[0_0_20px_rgba(139,92,246,0.35)]"
              >
                <img src={skill.icon} alt={skill.name} className="h-10 w-10 object-contain drop-shadow-md" loading="lazy" />
                <span className="text-sm font-semibold text-foreground text-center leading-tight">{skill.name}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center w-full min-h-[620px] lg:min-h-[760px]">
            <div
              ref={containerRef}
              className="flex justify-center items-center cursor-pointer"
            ></div>
          </div>
        )}
      </div>
    </section>
  );
};
