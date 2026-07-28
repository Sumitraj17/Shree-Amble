import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Bot, User, Send } from 'lucide-react';

type Message = {
  role: 'bot' | 'user';
  text: string;
};

const INITIAL_MESSAGE = "Hi! I'm Shree's AI Portfolio Assistant. Ask me anything about his projects, skills, or experience.";

const RESPONSES: Record<string, string> = {
  "skills": "Shree specializes in React, TypeScript, Tailwind CSS, Next.js, Framer Motion, GSAP, and Three.js. He loves creating interactive, high-performance web applications.",
  "technologies": "His core stack is React, TypeScript, Next.js, and Tailwind. For animations, he uses Framer Motion, GSAP, and React Three Fiber.",
  "projects": "He has worked on several amazing projects like NovaMind (AI Dashboard), PixelCraft (Design Tool), and AuraCart (E-commerce). You can check them out in the Projects section!",
  "experience": "He's currently working as a Freelance Frontend Developer (2023-Present) and actively contributes to Open Source.",
  "education": "Shree is currently pursuing a Bachelor of Computer Applications (BCA) with a focus on Software Engineering and Web Technologies.",
  "contact": "You can reach Shree via email at hello@shreeamble.com, or through the contact form at the bottom of the page. He's also on GitHub and LinkedIn!",
  "default": "I'm not sure about that specific detail. But you can email Shree directly at hello@shreeamble.com to ask him personally!"
};

function findBestResponse(input: string): string {
  const lowerInput = input.toLowerCase();
  for (const [key, response] of Object.entries(RESPONSES)) {
    if (key !== 'default' && lowerInput.includes(key)) {
      return response;
    }
  }
  return RESPONSES['default'];
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: INITIAL_MESSAGE }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = findBestResponse(userMsg);
      setMessages(prev => [...prev, { role: 'bot', text: response }]);
      setIsTyping(false);
    }, 800 + Math.random() * 500);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)] flex items-center justify-center hover:scale-110 transition-transform group"
            data-cursor-hover="true"
          >
            <MessageSquare className="w-6 h-6 group-hover:hidden" />
            <Bot className="w-6 h-6 hidden group-hover:block animate-bounce" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] max-w-[350px] h-[500px] max-h-[80vh] bg-card border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-black/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Shree's AI</h3>
                  <p className="text-xs text-primary font-mono">Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-white transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl p-3 text-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary text-primary-foreground rounded-tr-sm' 
                      : 'bg-white/5 border border-white/5 text-foreground rounded-tl-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-sm p-4 flex gap-1">
                    <motion.div className="w-1.5 h-1.5 bg-muted-foreground rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                    <motion.div className="w-1.5 h-1.5 bg-muted-foreground rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                    <motion.div className="w-1.5 h-1.5 bg-muted-foreground rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-black/20 border-t border-white/10">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about his skills..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-50 transition-colors"
                >
                  <Send className="w-4 h-4 ml-[-2px]" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
