import { Briefcase, GraduationCap, Award, Terminal } from "lucide-react";
import resumePdf from "@/assets/GopiKishanResume.pdf";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-fr">
          
          {/* Box 1: Terminal Bio (Spans 2 columns and 2 rows on large screens) */}
          <Tilt 
            tiltMaxAngleX={2} 
            tiltMaxAngleY={2} 
            glareEnable={true} 
            glareMaxOpacity={0.05} 
            glarePosition="all" 
            className="lg:col-span-2 lg:row-span-2 h-full w-full"
          >
            <div className="h-full flex flex-col rounded-2xl bg-[#0d1117] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden relative group">
              {/* Mac OS Header */}
              <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center text-xs text-white/50 font-mono flex items-center justify-center gap-2">
                  <Terminal className="w-3 h-3" />
                  gopi-kishan ~ bash
                </div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 sm:p-8 text-sm md:text-base font-mono text-green-400 flex-1 flex flex-col gap-2">
                <p>
                  <span className="text-pink-500">const</span> <span className="text-blue-400">developer</span> = <span className="text-yellow-300">{`{`}</span>
                </p>
                <div className="pl-2 sm:pl-8 space-y-2">
                  <p><span className="text-white/70">name:</span> <span className="text-green-300">"Gopi Kishan"</span>,</p>
                  <p><span className="text-white/70">role:</span> <span className="text-green-300">"Full Stack Developer (MERN)"</span>,</p>
                  <p><span className="text-white/70">education:</span> <span className="text-green-300">"B.Tech CSE"</span>,</p>
                  <p><span className="text-white/70">passions:</span> [</p>
                  <div className="pl-2 sm:pl-8 text-green-300">
                    <TypeAnimation
                      sequence={[
                        '"Building scalable web apps",\n"Solving complex DSA problems",\n"Delivering elegant UX"',
                        1000, 
                      ]}
                      wrapper="div"
                      cursor={true}
                      speed={50}
                      style={{ whiteSpace: 'pre-line' }}
                    />
                  </div>
                  <p>]</p>
                </div>
                <p className="text-yellow-300">{`}`}</p>

                <p className="mt-4 text-white/50">
                  <span className="text-green-500 font-bold">gopi-kishan@macbook</span><span className="text-white">:</span><span className="text-blue-500">~</span>$ <span className="animate-pulse">_</span>
                </p>
                
                {/* Action Buttons */}
                <div className="mt-auto pt-8 flex flex-col sm:flex-row gap-4 font-sans">
                  <a href="#contact" className="cosmic-button shadow-[0_0_15px_var(--color-primary)] hover:shadow-[0_0_25px_var(--color-primary)] text-center flex-1">
                    Execute Contact.sh
                  </a>
                  <a
                    href={resumePdf}
                    download="GopiKishanResume.pdf"
                    className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/20 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_15px_var(--color-primary)] text-center flex items-center justify-center font-medium flex-1"
                  >
                    Download Resume.pdf
                  </a>
                </div>
              </div>
            </div>
          </Tilt>

          {/* Box 2: Education */}
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.1} className="h-full w-full">
            <div className="h-full p-6 rounded-2xl bg-white/40 dark:bg-black/20 backdrop-blur-md border border-primary/20 hover:border-primary/80 transition-all duration-300 hover:shadow-[0_0_20px_var(--color-primary)] flex flex-col justify-center gap-4 group">
              <div className="p-4 rounded-xl bg-primary/10 w-max group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-xl text-foreground">Education</h4>
                <p className="text-foreground/90 font-medium mt-2">
                  Amity University Jharkhand (B.Tech CSE)
                </p>
                <p className="text-foreground/70 text-sm mt-1 font-mono bg-white/30 dark:bg-black/30 px-2 py-1 rounded-md inline-block">
                  2023 - 2027 | CGPA: 8.11
                </p>
              </div>
            </div>
          </Tilt>

          {/* Box 3: Experience */}
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.1} className="h-full w-full">
            <div className="h-full p-6 rounded-2xl bg-white/40 dark:bg-black/20 backdrop-blur-md border border-primary/20 hover:border-primary/80 transition-all duration-300 hover:shadow-[0_0_20px_var(--color-primary)] flex flex-col justify-center gap-4 group">
              <div className="p-4 rounded-xl bg-primary/10 w-max group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-xl text-foreground">Experience</h4>
                <p className="text-foreground/90 font-medium mt-2">
                  Web Developer Intern @ Emancipation Edutech
                </p>
                <p className="text-foreground/70 text-sm mt-1 font-mono bg-white/30 dark:bg-black/30 px-2 py-1 rounded-md inline-block">
                  Feb 2026 - Present
                </p>
                <p className="text-foreground/80 text-sm mt-2">
                  Building a production-ready EdTech platform using the MERN stack.
                </p>
              </div>
            </div>
          </Tilt>

          {/* Box 4: Certifications (Spans 3 columns) */}
          <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} glareEnable={true} glareMaxOpacity={0.05} className="lg:col-span-3 w-full">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/40 dark:bg-black/20 backdrop-blur-md border border-primary/20 hover:border-primary/80 transition-all duration-300 hover:shadow-[0_0_20px_var(--color-primary)] flex flex-col sm:flex-row items-center gap-6 group">
              <div className="p-5 rounded-xl bg-primary/10 group-hover:rotate-12 transition-transform duration-300 flex-shrink-0">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <div className="flex-1 w-full">
                <h4 className="font-bold text-xl text-foreground mb-4 text-center sm:text-left">Certifications</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white/30 dark:bg-black/30 p-4 rounded-lg border border-white/10 dark:border-white/5 hover:bg-white/50 dark:hover:bg-black/50 transition-colors">
                    <p className="font-medium text-foreground text-sm">DSA using Python</p>
                    <p className="text-primary text-xs mt-1">NPTEL</p>
                  </div>
                  <div className="bg-white/30 dark:bg-black/30 p-4 rounded-lg border border-white/10 dark:border-white/5 hover:bg-white/50 dark:hover:bg-black/50 transition-colors">
                    <p className="font-medium text-foreground text-sm">OOP Fundamentals</p>
                    <p className="text-primary text-xs mt-1">NPTEL</p>
                  </div>
                  <div className="bg-white/30 dark:bg-black/30 p-4 rounded-lg border border-white/10 dark:border-white/5 hover:bg-white/50 dark:hover:bg-black/50 transition-colors">
                    <p className="font-medium text-foreground text-sm">DSA with Java</p>
                    <p className="text-primary text-xs mt-1">Apna College</p>
                  </div>
                </div>
              </div>
            </div>
          </Tilt>

        </div>
      </div>
    </section>
  );
};