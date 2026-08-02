import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, Mail } from 'lucide-react';
import HeroCanvas from './HeroCanvas';
import MagneticButton from '../shared/MagneticButton';

const SUBTITLES = [
  "Frontend Developer",
  "UI/UX Enthusiast",
  "React Specialist",
  "Experience Creator"
];

export default function HeroSection() {
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % SUBTITLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* 3D Background */}
      <HeroCanvas />

      {/* Abstract Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center md:items-start text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Available for work</span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          SHREE <span className="text-gradient">AMBLE</span>
        </motion.h1>

        <div className="h-12 md:h-16 mb-8 flex items-center">
          <motion.div
            key={subtitleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-3xl font-mono text-muted-foreground"
          >
            {SUBTITLES[subtitleIndex]}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-[2px] h-[1em] bg-primary ml-1 align-middle"
            />
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <MagneticButton
            onClick={() => scrollTo('#projects')}
            className="group flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium transition-transform hover:scale-105"
            data-cursor-hover="true"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>

          <div className="flex items-center space-x-4">
            <MagneticButton
              onClick={() => scrollTo('#contact')}
              className="flex items-center space-x-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-4 rounded-full font-medium transition-colors backdrop-blur-md"
              data-cursor-hover="true"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </MagneticButton>
<MagneticButton
  className="flex flex-col items-center justify-center w-14 h-14 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full transition-colors backdrop-blur-md tooltip-trigger group"
  data-cursor-hover="true"
  onClick={() => window.open("/Shree_Amble_ATS_Frontend_Developer_Resume.pdf", "_blank")}
  title="Download Resume"
>
              <FileText className="w-5 h-5 group-hover:text-primary transition-colors" />
            </MagneticButton>
          </div>
        </motion.div>

        {/* Floating Stat Cards */}
        <motion.div
          className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 flex-col space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {[
            { label: "Location", value: "India" },
            { label: "Status", value: "BCA Student" },
            { label: "Focus", value: "React & Motion" }
          ].map((stat, i) => (
            <div key={i} className="glass-panel p-4 rounded-xl border border-white/5 bg-black/40 backdrop-blur-md w-48 hover:border-primary/50 transition-colors">
              <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-1">{stat.label}</p>
              <p className="text-sm font-semibold text-white">{stat.value}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs font-mono uppercase tracking-widest rotate-90 mb-6">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
