import React from 'react';
import SectionReveal from '../shared/SectionReveal';

const EDUCATION = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Global Institute of Management Sciences",
    period: "Completed",
    description: "Completed BCA with a core focus on Software Engineering, Data Structures, Algorithms, and Web Technologies. Built a strong foundation in full-stack development and modern frontend engineering."
  },
  {
    degree: "12th — PCMIP (Computer Science)",
    institution: "Sri Chaitanya PU College",
    period: "66%",
    description: "Completed Pre-University education with Physics, Chemistry, Mathematics, and Computer Science. Developed core programming and problem-solving fundamentals."
  },
  {
    degree: "10th — Secondary School Certificate",
    institution: "BGS Public School, Bangalore",
    period: "65%",
    description: "Completed secondary education with a strong academic foundation, building early interest in computers and technology."
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="py-32 relative border-t border-white/5 bg-black/20">
      <SectionReveal className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center">
          Academic <span className="text-primary italic font-serif font-light">Background</span>
        </h2>

        <div className="space-y-8">
          {EDUCATION.map((edu, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-3xl border border-white/5 bg-card/40 backdrop-blur-sm hover:border-white/10 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-sm text-primary font-mono mt-4 md:mt-0">
                  {edu.period}
                </span>
              </div>
              <h4 className="text-lg text-muted-foreground mb-4">{edu.institution}</h4>
              <p className="text-muted-foreground/80 leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
