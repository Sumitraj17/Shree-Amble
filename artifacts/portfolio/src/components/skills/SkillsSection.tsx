import React from 'react';
import { motion } from 'framer-motion';
import SectionReveal from '../shared/SectionReveal';

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Next.js"]
  },
  {
    title: "Animations",
    skills: ["Framer Motion", "GSAP", "Three.js", "React Three Fiber"]
  },
  {
    title: "Tools & Ecosystem",
    skills: ["Git", "GitHub", "Figma", "VS Code", "Vite", "pnpm"]
  }
];

function SkillCard({ title, skills, index }: { title: string, skills: string[], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative group perspective"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />
      <div className="relative h-full bg-card/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:bg-card/60 preserve-3d group-hover:rotate-y-2 group-hover:rotate-x-2">
        <h3 className="text-xl font-mono text-primary mb-6 flex items-center">
          <span className="w-8 h-[1px] bg-primary mr-4 inline-block" />
          {title}
        </h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-foreground hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-colors cursor-default"
              data-cursor-hover="true"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 relative border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-30 translate-x-1/2 -translate-y-1/2" />

      <SectionReveal className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Technical <span className="text-primary italic font-serif font-light">Arsenal</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            I build with modern, production-ready technologies, focusing on performance, scalability, and developer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <SkillCard key={idx} index={idx} title={category.title} skills={category.skills} />
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
