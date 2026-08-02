import React from "react";
import { Award } from "lucide-react";
import SectionReveal from "../shared/SectionReveal";
import { motion } from "framer-motion";

import certificate1 from "./certificate1.jpg";
import certificate2 from "./certificate2.jpg";
import certificate3 from "./certificate3.jpg";
import certificate4 from "./certificate4.jpg";

const CERTIFICATES = [
  {
    title: "Introduction to Ethical Hacking",
    issuer: "Great Learning Academy",
    date: "December 2023",
    image: certificate1,
  },
  {
    title: "Web Development Internship",
    issuer: "CodSoft",
    date: "May 2024",
    image: certificate2,
  },
  {
    title: "Introduction to Python",
    issuer: "Infosys Springboard",
    date: "March 2024",
    image: certificate3,
  },
  {
    title: "Freedom with AI Masterclass",
    issuer: "Freedom With AI",
    date: "June 2024",
    image: certificate4,
  },
];

export default function CertificatesSection() {
  return (
    <section className="py-32 relative border-t border-white/5">
      <SectionReveal className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Licenses &{" "}
            <span className="text-primary italic font-serif font-light">
              Certifications
            </span>
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
              className="group rounded-2xl overflow-hidden border border-white/5 bg-card/20 hover:bg-card/40 hover:border-primary/30 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-primary text-sm font-medium">
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white leading-tight mb-2">
                  {cert.title}
                </h3>

                <p className="text-muted-foreground text-sm">
                  Completed • {cert.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}