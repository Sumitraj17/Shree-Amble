import React from 'react';
import { Award } from 'lucide-react';
import SectionReveal from '../shared/SectionReveal';
import { motion } from 'framer-motion';

const CERTIFICATES = [
  { title: "React Developer Certification", issuer: "Meta / Coursera" },
  { title: "JavaScript Algorithms", issuer: "freeCodeCamp" },
  { title: "Responsive Web Design", issuer: "freeCodeCamp" },
  { title: "Git & GitHub Bootcamp", issuer: "Udemy" }
];

export default function CertificatesSection() {
  return (
    <section className="py-32 relative border-t border-white/5">
      <SectionReveal className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Licenses & <span className="text-primary italic font-serif font-light">Certifications</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATES.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group p-6 rounded-2xl border border-white/5 bg-card/20 hover:bg-card/40 hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 group-hover:text-primary transition-all duration-500 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
                <Award className="w-16 h-16" />
              </div>
              <Award className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold text-white mb-2 leading-tight relative z-10">{cert.title}</h3>
              <p className="text-muted-foreground text-sm font-mono relative z-10">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
