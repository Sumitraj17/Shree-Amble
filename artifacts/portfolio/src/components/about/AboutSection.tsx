import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profilePhoto from '@assets/0_ChatGPT_Image_Jul_28,_2026,_11_25_53_AM_1785221401730.png';

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

          <div className="flex flex-col items-center gap-8">
            {/* Profile Photo */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 via-accent/20 to-transparent blur-2xl scale-110 pointer-events-none" />
              {/* Rotating border */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin" style={{ animationDuration: '8s' }} />
              <div className="absolute inset-[3px] rounded-full border border-white/10" />
              {/* Photo */}
              <img
                src={profilePhoto}
                alt="Shree Amble"
                className="absolute inset-[6px] w-[calc(100%-12px)] h-[calc(100%-12px)] rounded-full object-cover object-top"
              />
              {/* Bottom label badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary/20 border border-primary/40 backdrop-blur-sm rounded-full text-xs font-mono text-primary uppercase tracking-widest whitespace-nowrap">
                Frontend Developer
              </div>
            </div>

            {/* Stats Grid */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4 w-full">
              {STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center p-5 bg-card/50 border border-white/5 rounded-2xl backdrop-blur-sm hover:border-primary/50 transition-colors group"
                  data-cursor-hover="true"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-primary transition-colors font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest text-center">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
