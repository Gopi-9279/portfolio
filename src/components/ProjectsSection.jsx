import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const projects = [
  {
    id: 1,
    title: "LuxeStay",
    description: "A full-stack travel accommodation platform modeled after Airbnb with secure authentication, image uploads, and Mapbox integration.",
    accent: "from-violet-500 via-fuchsia-500 to-cyan-400",
    tags: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "EdTech Platform",
    description: "Production-ready EdTech platform for Emancipation Edutech featuring authentication, course and student management.",
    accent: "from-emerald-400 via-teal-500 to-violet-500",
    tags: ["React", "Express", "Tailwind CSS", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "AI Image Generator",
    description: "A cutting-edge AI image generation tool allowing users to create stunning visuals from text prompts.",
    accent: "from-pink-500 via-violet-500 to-indigo-500",
    tags: ["React", "Node.js", "OpenAI API", "Tailwind"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Crypto Portfolio Tracker",
    description: "Real-time cryptocurrency portfolio tracker with live market data, interactive charts, and asset management.",
    accent: "from-amber-400 via-pink-500 to-violet-500",
    tags: ["React", "Next.js", "Chart.js", "CoinGecko API"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description: "Comprehensive social media analytics dashboard for tracking engagement, audience growth, and campaign performance.",
    accent: "from-sky-400 via-violet-500 to-rose-400",
    tags: ["Vue.js", "Firebase", "Tailwind CSS", "D3.js"],
    demoUrl: "#",
    githubUrl: "#",
  }
];

const ProjectVisual = ({ project }) => {
  return (
    <div className={`relative h-48 overflow-hidden bg-linear-to-r ${project.accent} bg-[size:300%_300%] animate-gradient-flow`}>
      {/* Decorative inner glow/shadow to blend the edges */}
      <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.2)] mix-blend-overlay"></div>

      {/* Floating Lava Lamp Orbs */}
      <div className="absolute -top-[20%] -left-[10%] w-32 h-32 bg-white/30 blur-3xl rounded-full mix-blend-overlay animate-[spin_10s_linear_infinite]" />
      <div className="absolute -bottom-[20%] -right-[10%] w-40 h-40 bg-black/20 blur-3xl rounded-full mix-blend-overlay animate-[spin_15s_linear_infinite_reverse]" />
      
      {/* Additional Slow Moving Orb */}
      <div className="absolute top-[20%] right-[20%] w-24 h-24 bg-white/20 blur-2xl rounded-full mix-blend-overlay animate-pulse" />

      {/* Floating Glass Emblem */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative z-10 w-24 h-24 rounded-full border border-white/40 flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl bg-white/10 group-hover:scale-110 group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-500 overflow-hidden">
          
          {/* Subtle reflection on the glass */}
          <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:translate-x-full group-hover:-translate-y-full"></div>
          
          <span className="text-4xl font-black text-white relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] tracking-tighter mix-blend-overlay">
            {project.title.substring(0, 2).toUpperCase()}
          </span>
          <span className="text-4xl font-black text-white absolute z-20 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] tracking-tighter opacity-70 group-hover:opacity-100 transition-opacity">
            {project.title.substring(0, 2).toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 sm:py-24 px-4 relative z-10 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="w-full pb-12">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 150,
              modifier: 1.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="w-full py-12 px-2 sm:px-4"
          >
            {projects.map((project, key) => (
              <SwiperSlide key={key} className="max-w-[calc(100vw-2rem)] sm:max-w-[380px]">
                <div
                  className="group bg-card border border-border rounded-3xl overflow-hidden shadow-lg dark:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.6)] hover:border-primary/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(139,92,246,0.2)] hover:-translate-y-1 h-full flex flex-col min-h-[450px]"
                >
                  <ProjectVisual project={project} />

                  <div className="p-6 flex flex-col grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 text-xs font-medium border border-primary/30 rounded-full bg-primary/10 text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold mb-1 text-foreground"> {project.title}</h3>
                    <p className="text-foreground/70 text-sm mb-4 leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center mt-auto pt-4">
                      <div className="flex space-x-3">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.title} live demo`}
                          className="text-foreground/80 hover:text-primary hover:drop-shadow-[0_0_8px_var(--color-primary)] transition-all duration-300"
                        >
                          <ExternalLink size={20} />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.title} GitHub repository`}
                          className="text-foreground/80 hover:text-primary hover:drop-shadow-[0_0_8px_var(--color-primary)] transition-all duration-300"
                        >
                          <Github size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-center mt-8">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Gopi-9279"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
