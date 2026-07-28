import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion, useScroll, useSpring } from 'framer-motion';

import LoadingScreen from '@/components/loading/LoadingScreen';
import Navbar from '@/components/nav/Navbar';
import HeroSection from '@/components/hero/HeroSection';
import AboutSection from '@/components/about/AboutSection';
import SkillsSection from '@/components/skills/SkillsSection';
import ProjectsSection from '@/components/projects/ProjectsSection';
import ExperienceSection from '@/components/experience/ExperienceSection';
import EducationSection from '@/components/education/EducationSection';
import CertificatesSection from '@/components/certificates/CertificatesSection';
import ContactSection from '@/components/contact/ContactSection';
import AIAssistant from '@/components/assistant/AIAssistant';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lenis smooth scroll setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <div className="relative w-full min-h-screen overflow-x-hidden">
          {/* Progress bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-50 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
            style={{ scaleX }}
          />

          <Navbar />
          
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <EducationSection />
            <CertificatesSection />
            <ContactSection />
          </main>

          <AIAssistant />
        </div>
      )}
    </>
  );
}
