import React from 'react';
import SectionReveal from '../shared/SectionReveal';

const EXPERIENCES = [
  {
    role: "Freelance Frontend Developer",
    company: "Self-Employed",
    period: "2023 — Present",
    description:
      "Designing and developing custom web applications for various clients. Focusing on creating high-performance, responsive, and accessible user interfaces using React, Next.js, and Tailwind CSS."
  },
  {
    role: "Open Source Contributor",
    company: "Personal Projects",
    period: "2022 — 2024",
    description:
      "Building and maintaining various frontend tools and utility libraries. Experimenting with new web APIs, WebGL, and advanced CSS techniques to push the boundaries of digital experiences."
  },
  {
    role: "Founder & Frontend Developer",
    company: "TechWave Developers",
    period: "Aug 2024 — Jul 2026",
    description:
      "Founded and managed a digital solutions agency specializing in custom websites, web applications, branding, graphic design, and creative content. Collaborated with startups and businesses to deliver scalable, high-performance digital solutions while ensuring exceptional user experience and client satisfaction."
  },
  {
    role: "Python Programming Intern",
    company: "Oasis Infobyte",
    period: "Jun 2024 — Aug 2024",
    description:
      "Developed Python applications and worked with Flask, NumPy, and Pandas to build efficient software solutions. Gained practical experience in API integration, debugging, performance optimization, and writing clean, maintainable code."
  },
  {
    role: "Internshala Student Partner (ISP)",
    company: "Internshala Trainings",
    period: "May 2024 — Aug 2024",
    description:
      "Represented Internshala as a campus ambassador by promoting training programs, organizing student outreach initiatives, and helping learners discover career development opportunities while strengthening leadership, communication, and networking skills."
  },
  {
    role: "Frontend Web Developer Intern",
    company: "CodSoft",
    period: "Apr 2024 — May 2024",
    description:
      "Developed responsive websites using HTML, CSS, and JavaScript while implementing modern UI components and improving user experience. Gained hands-on experience in frontend development through real-world projects."
  },
  {
    role: "Sales Development Representative Intern",
    company: "Intervue.io",
    period: "Feb 2023 — Jun 2023",
    description:
      "Worked on lead generation, client outreach, and sales pipeline management. Collaborated with the sales team to identify prospective clients, build business relationships, and contribute to overall company growth."
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 relative border-t border-white/5">
      <SectionReveal className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center">
          Experience <span className="text-primary italic font-serif font-light">&</span> Journey
        </h2>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-8 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0">
              <div className="absolute w-4 h-4 rounded-full bg-primary -left-[25px] md:-left-[41px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <span className="text-primary font-mono text-sm mt-2 md:mt-0">{exp.period}</span>
              </div>
              
              <h4 className="text-lg text-muted-foreground mb-4">{exp.company}</h4>
              <p className="text-muted-foreground/80 leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
