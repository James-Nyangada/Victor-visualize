'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Layers, Terminal, CalendarClock } from 'lucide-react';

export function FeaturesSection() {
  return (
    <section className="w-full py-24 px-6 relative z-10 bg-[#0D0D12]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            The Core <span className="font-serif italic text-gradient font-light">Pillars</span>
          </h2>
          <p className="text-[#A1A1AA] max-w-xl text-lg">
            Our methodology is built on three foundational principles that ensure your message resonates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ShufflerCard />
          <TypewriterCard />
          <SchedulerCard />
        </div>
      </div>
    </section>
  );
}

function ShufflerCard() {
  const items = ["Intentional Narratives", "Emotional Impact", "Audience Connection"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="bg-[#14141A] border border-white/5 rounded-[2.5rem] p-8 flex flex-col h-[320px] relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
        <Layers className="w-12 h-12 text-[#FDB813]" />
      </div>
      <div className="mt-auto z-10">
        <div className="font-mono text-xs text-[#F05A28] mb-4 uppercase tracking-widest">01 // Story-First Mindset</div>
        <div className="h-20 relative">
          <AnimatePresence mode="wait">
            <motion.h3
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-2xl font-serif italic text-white absolute inset-0"
            >
              {items[index]}
            </motion.h3>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function TypewriterCard() {
  const [currentLine, setCurrentLine] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const lines = [
      "Initializing workflow...",
      "Optimizing delivery timelines...",
      "Ensuring non-negotiable quality..."
    ];
    
    const timeout = setTimeout(() => {
      const fullText = lines[currentLine];
      
      if (!isDeleting) {
        setText(fullText.substring(0, text.length + 1));
        if (text === fullText) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(fullText.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setCurrentLine((prev) => (prev + 1) % lines.length);
        }
      }
    }, isDeleting ? 30 : 80);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentLine]);

  return (
    <div className="bg-[#14141A] border border-white/5 rounded-[2.5rem] p-8 flex flex-col h-[320px] relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
        <Terminal className="w-12 h-12 text-[#FDB813]" />
      </div>
      <div className="mt-auto z-10 w-full">
        <div className="font-mono text-xs text-[#F05A28] mb-4 uppercase tracking-widest">02 // Professional Systems</div>
        <div className="h-20 font-mono text-sm text-[#A1A1AA] flex items-start">
          <span className="text-[#FDB813] mr-2">&gt;</span>
          <span>{text}<span className="animate-pulse">_</span></span>
        </div>
      </div>
    </div>
  );
}

function SchedulerCard() {
  return (
    <div className="bg-[#14141A] border border-white/5 rounded-[2.5rem] p-8 flex flex-col h-[320px] relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
        <CalendarClock className="w-12 h-12 text-[#FDB813]" />
      </div>
      <div className="mt-auto z-10 w-full">
        <div className="font-mono text-xs text-[#F05A28] mb-4 uppercase tracking-widest">03 // End-to-End Execution</div>
        <div className="h-20 flex flex-col justify-center gap-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#A1A1AA]" />
            <div className="h-[1px] flex-1 bg-white/10 relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-gradient-sunset"
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div className="w-2 h-2 rounded-full bg-[#F05A28] shadow-[0_0_10px_rgba(240,90,40,0.5)]" />
          </div>
          <div className="flex justify-between text-xs font-mono text-[#A1A1AA]">
            <span>Concept</span>
            <span className="text-white">Delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
}
