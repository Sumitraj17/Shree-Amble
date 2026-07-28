import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: "10+", label: "Projects Completed" },
  { value: "15+", label: "Technologies" },
  { value: "1000+", label: "Hours Coding" },
  { value: "∞", label: "Coffees Consumed" }
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text elements
      if (textRef.current) {
        gsap.fromTo(
          textRef.current.children,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
            }
          }
        );
      }

      // Animate stats
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.children,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 relative border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div ref={textRef} className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Beyond the <span className="text-primary italic font-serif font-light">Code</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a BCA student and passionate <strong className="text-white">Frontend Developer</strong> focused on building beautiful, responsive, and high-performance web applications.
              </p>
              <p>
                I believe that an interface should be more than just functional — it should be an <strong className="text-white">experience</strong>. I enjoy crafting digital environments that combine exceptional user experience with clean architecture and modern technologies.
              </p>
              <p>
                Whether it's orchestrating complex state management or fine-tuning micro-interactions, I obsess over the details that make a product feel alive.
              </p>
            </div>
          </div>

          <div ref={statsRef} className="grid grid-cols-2 gap-4 md:gap-6">
            {STATS.map((stat, idx) => (
              <div 
                key={idx} 
                className="aspect-square flex flex-col items-center justify-center p-6 bg-card/50 border border-white/5 rounded-2xl backdrop-blur-sm hover:border-primary/50 transition-colors group"
                data-cursor-hover="true"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-primary transition-colors font-mono">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest text-center">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
