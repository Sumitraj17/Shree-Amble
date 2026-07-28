import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const name = "SHREE AMBLE";
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress(Math.min((currentStep / steps) * 100, 100));
      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 500); // Wait for final animations
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-background"
        exit={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative flex flex-col items-center">
          <div className="flex space-x-1 overflow-hidden">
            {name.split("").map((char, index) => (
              <motion.span
                key={index}
                className="text-4xl md:text-6xl font-bold tracking-widest text-foreground uppercase"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
          
          <motion.div 
            className="w-48 h-[2px] bg-white/10 mt-8 rounded-full overflow-hidden relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div 
              className="absolute top-0 left-0 bottom-0 bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </motion.div>
          
          <motion.div
            className="absolute -bottom-8 text-xs text-muted-foreground font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            SYSTEM_BOOT: {Math.round(progress)}%
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
