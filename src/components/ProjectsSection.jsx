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

const ProjectVisual = ({ project }) => (
  <div className={`relative h-48 overflow-hidden bg-linear-to-br ${project.accent}`}>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.65),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.35),transparent_40%)]" />
    <div className="absolute inset-x-5 bottom-5 top-8 rounded-xl border border-white/30 bg-white/20 p-4 text-left shadow-2xl backdrop-blur-sm transition-transform duration-500 group-hover:scale-105">
      <div className="mb-5 flex gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
      </div>
      <div className="space-y-3">
        <div className="h-3 w-2/3 rounded-full bg-white/80" />
        <div className="h-3 w-full rounded-full bg-white/45" />
        <div className="h-3 w-4/5 rounded-full bg-white/45" />
      </div>
      <div className="absolute bottom-4 right-4 h-12 w-12 rounded-full border border-white/40 bg-white/25" />
    </div>
  </div>
);

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
                  className="group bg-white/45 dark:bg-black/25 backdrop-blur-md border border-primary/20 rounded-xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:border-primary/80 transition-all duration-300 hover:shadow-[0_0_15px_var(--color-primary)] hover:-translate-y-1 h-full flex flex-col min-h-[450px]"
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
