import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { Github, Linkedin, Twitter, Mail, Send } from 'lucide-react';
import SectionReveal from '../shared/SectionReveal';
import MagneticButton from '../shared/MagneticButton';
import CanvasErrorBoundary from '../shared/CanvasErrorBoundary';
import { useWebGL } from '../shared/useWebGL';

function ContactBackground() {
  const ref = useRef<any>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.2;
      ref.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={ref}>
        <torusKnotGeometry args={[2, 0.5, 100, 16]} />
        <MeshDistortMaterial 
          color="#3b82f6" 
          envMapIntensity={1} 
          clearcoat={0.8} 
          clearcoatRoughness={0} 
          metalness={0.9} 
          roughness={0.1}
          distort={0.4}
          speed={2}
          wireframe
          opacity={0.1}
          transparent
        />
      </mesh>
    </Float>
  );
}

export default function ContactSection() {
  const webgl = useWebGL();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate sending
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert("Message sent successfully!");
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative border-t border-white/5 overflow-hidden">
      {/* 3D Background */}
      {webgl && (
        <CanvasErrorBoundary>
          <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <ContactBackground />
            </Canvas>
          </div>
        </CanvasErrorBoundary>
      )}

      <SectionReveal className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                Let's build something <span className="text-primary italic font-serif font-light">extraordinary.</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-md">
                I'm currently looking for new opportunities. Whether you have a project in mind or just want to say hi, my inbox is always open.
              </p>
            </div>

            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/shreeamble003" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/shree-amble-9b32252a3/" },
              ].map((social, i) => (
                <MagneticButton 
                  key={i} 
                  onClick={() => window.open(social.href, '_blank')}
                  className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-white/10 hover:border-primary/50 hover:text-primary transition-all group"
                  data-cursor-hover="true"
                >
                  <social.icon className="w-5 h-5" />
                </MagneticButton>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10">
              <div className="flex items-center gap-4 text-muted-foreground mb-2">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:shreeamble.3@gmail.com" className="hover:text-white transition-colors" data-cursor-hover="true">
                  shreeamble.3@gmail.com
                </a>
              </div>
              <div className="text-sm font-mono text-muted-foreground/50 uppercase tracking-widest">
                Based in India
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-card/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-2 relative group">
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest transition-colors group-focus-within:text-primary">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2 relative group">
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest transition-colors group-focus-within:text-primary">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2 relative group">
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest transition-colors group-focus-within:text-primary">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <MagneticButton
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-primary-foreground font-medium rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50"
                data-cursor-hover="true"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </MagneticButton>
            </form>
          </div>

        </div>
      </SectionReveal>
    </section>
  );
}
