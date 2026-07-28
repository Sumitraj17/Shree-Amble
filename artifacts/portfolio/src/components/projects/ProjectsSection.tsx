import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';
import SectionReveal from '../shared/SectionReveal';

const PROJECTS = [
  {
    id: "nova-mind",
    title: "NovaMind",
    subtitle: "AI Dashboard Interface",
    description: "A highly interactive, cinematic dashboard for an AI platform. Features real-time data visualization, custom Framer Motion page transitions, and a dark-mode optimized aesthetic.",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion", "Recharts"],
    color: "from-blue-500/20 to-indigo-500/20"
  },
  {
    id: "pixel-craft",
    title: "PixelCraft",
    subtitle: "Web-based Design Tool",
    description: "An experimental web application for manipulating vector graphics. Built with performance in mind using Canvas API and React state management for zero-latency drawing.",
    tech: ["Next.js", "Zustand", "Canvas API", "Radix UI"],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: "aura-cart",
    title: "AuraCart",
    subtitle: "Headless E-Commerce Front",
    description: "A premium, headless e-commerce storefront with smooth page transitions, optimized image loading, and an intricate cart state management system.",
    tech: ["React", "Vite", "Stripe API", "GSAP"],
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: "luminary",
    title: "Luminary",
    subtitle: "SaaS Landing Page",
    description: "A conversion-optimized landing page with scroll-triggered storytelling, 3D element integration, and impeccable typography scaling.",
    tech: ["React Three Fiber", "Tailwind", "Framer Motion"],
    color: "from-orange-500/20 to-amber-500/20"
  }
];

export default function ProjectsSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = PROJECTS.find(p => p.id === selectedId);

  return (
    <section id="projects" className="py-32 relative border-t border-white/5">
      <SectionReveal className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Selected <span className="text-primary italic font-serif font-light">Works</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              A collection of projects showcasing my focus on interactive design, performance, and modern architecture.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              layoutId={`project-container-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              className="group cursor-pointer"
              data-cursor-hover="true"
            >
              <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-card border border-white/5 group-hover:border-primary/30 transition-colors`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                {/* Abstract placeholder visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border border-white/10 group-hover:scale-110 transition-transform duration-700 ease-out flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-md" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 flex gap-2 flex-wrap">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs text-white/80 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <motion.h3 layoutId={`project-title-${project.id}`} className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </motion.h3>
              <p className="text-muted-foreground">{project.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </SectionReveal>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-background/80 backdrop-blur-lg z-50 cursor-pointer"
            />
            <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none p-4 md:p-10">
              <motion.div
                layoutId={`project-container-${selectedProject.id}`}
                className="bg-card w-full max-w-5xl aspect-auto md:aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row pointer-events-auto"
              >
                {/* Visual Area */}
                <div className={`relative w-full md:w-1/2 h-64 md:h-full bg-gradient-to-br ${selectedProject.color} flex items-center justify-center p-8`}>
                  <div className="w-full h-full border border-white/20 rounded-2xl bg-black/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-white/50 font-mono text-sm tracking-widest uppercase">Project Preview</span>
                  </div>
                </div>
                
                {/* Content Area */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col bg-background/50 backdrop-blur-xl relative">
                  <button 
                    onClick={() => setSelectedId(null)}
                    className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <motion.h3 layoutId={`project-title-${selectedProject.id}`} className="text-3xl md:text-4xl font-bold mb-2 text-white">
                    {selectedProject.title}
                  </motion.h3>
                  <p className="text-primary font-mono text-sm mb-8">{selectedProject.subtitle}</p>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex-grow"
                  >
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                      {selectedProject.description}
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="text-sm text-white/50 uppercase tracking-widest mb-4">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map(t => (
                          <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80 border border-white/10">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex gap-4 mt-auto"
                  >
                    <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 text-white border border-white/10 rounded-full font-medium hover:bg-white/10 transition-colors">
                      <Github className="w-4 h-4" /> Code
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
