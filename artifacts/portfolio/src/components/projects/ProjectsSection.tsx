import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";
import SectionReveal from "../shared/SectionReveal";
import sagittariusImg from "./sagittarius.png";
import masImg from "./mas.png";
import srijaImg from "./srija.png";
import portfolioImg from "./portfolio.png";

const PROJECTS = [
  {
  id: "sagittarius-group",
  title: "Sagittarius Group",
  subtitle: "Metal Roofing & Industrial Products",
  description:
    "A professional manufacturing website developed for Sagittarius Group to showcase premium metal roofing sheets, industrial fabrication products, and customized metal solutions. The website features a modern responsive design, product showcase, company profile, and an intuitive user experience tailored for industrial and commercial customers.",
  tech: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Bootstrap",
    "AOS Animation"
  ],
  image: sagittariusImg,
  website: "https://sagittariusgroup.in/index.html",
  color: "from-blue-500/20 to-cyan-500/20",
},
{
  id: "madilgekars-art-studio",
  title: "Madilgekars Art Studio",
  subtitle: "Custom Statue & Sculpture Website",
  description:
    "A professional business website designed and developed for Madilgekars Art Studio to showcase handcrafted statues, sculptures, and custom artistic creations. The website features a modern, responsive design with elegant galleries, service highlights, and seamless navigation, delivering an engaging experience across all devices.",
  tech: [
    "HTML5",
    "CSS3",
    "JavaScript"
  ],
  image: masImg,
  website: "https://www.madilgekarsartstudio.com/",
  color: "from-emerald-500/20 to-green-500/20",
},
  {
  id: "srija-consultancy",
  title: "Srija Consultancy",
  subtitle: "HR Consultancy & Recruitment Website",
  description:
    "A professional business website developed for Srija Consultancy to showcase HR consulting, recruitment, staffing, and workforce solutions. The website features a clean, responsive design, intuitive navigation, service highlights, job listings, and contact facilities to connect employers with qualified talent efficiently.",
  tech: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Bootstrap",
    "PHP",
    "MySQL"
  ],
  image: srijaImg,
  website: "https://srijaconsultancy.in/index.html",
  color: "from-purple-500/20 to-pink-500/20",
},
{
  id: "portfolio",
  title: "Personal Portfolio",
  subtitle: "Frontend Developer Portfolio",
  description:
    "A modern and interactive personal portfolio website designed to showcase my projects, technical skills, and professional journey. Built with smooth animations, responsive layouts, and a premium user experience, it reflects my passion for creating visually appealing and high-performance web applications.",
  tech: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Vite"
  ],
  image: portfolioImg,
  website: "https://your-portfolio-link.com",
  color: "from-orange-500/20 to-red-500/20",
},
];

export default function ProjectsSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedProject = PROJECTS.find((p) => p.id === selectedId);

  return (
    <section id="projects" className="py-32 relative border-t border-white/5">
      <SectionReveal className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Selected <span className="text-primary italic font-serif font-light">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A collection of projects showcasing interactive design, performance, and modern development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`project-${project.id}`}
              className="group cursor-pointer"
              onClick={() => setSelectedId(project.id)}
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.slice(0,3).map((t)=>(
                      <span key={t} className="px-3 py-1 bg-black/60 rounded-full text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-white/70">{project.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionReveal>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
              onClick={() => setSelectedId(null)}
              initial={{opacity:0}}
              animate={{opacity:1}}
              exit={{opacity:0}}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
              <motion.div
                layoutId={`project-${selectedProject.id}`}
                className="bg-card rounded-3xl overflow-hidden max-w-6xl w-full grid md:grid-cols-2 border border-white/10"
              >
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover min-h-[350px]"
                />

                <div className="p-10 relative flex flex-col">
                  <button
                    onClick={() => setSelectedId(null)}
                    className="absolute top-5 right-5 p-2 rounded-full bg-white/10"
                  >
                    <X size={20}/>
                  </button>

                  <h2 className="text-4xl font-bold mb-2">{selectedProject.title}</h2>
                  <p className="text-primary mb-6">{selectedProject.subtitle}</p>

                  <p className="text-muted-foreground leading-7 mb-8">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tech.map((tech)=>(
                      <span key={tech} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-4">
                    <a
                      href={selectedProject.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-primary text-primary-foreground"
                    >
                      <ExternalLink size={18}/> Live Demo
                    </a>

                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full border border-white/10 bg-white/5"
                    >
                      <Github size={18}/> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
