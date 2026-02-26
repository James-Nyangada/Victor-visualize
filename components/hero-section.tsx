'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-6 py-24">
      {/* Background Video/Texture Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D12]/40 via-[#0D0D12]/80 to-[#0D0D12] z-10" />
        <Image 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Cinematic Background" 
          fill
          className="object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <span className="font-mono text-sm tracking-widest uppercase text-gradient mb-4 block">
            Victor Visualze
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.9]">
            Be Seen.<br />
            <span className="font-serif italic font-light text-gradient">Be Heard.</span><br />
            Be Remembered.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-lg md:text-xl text-[#A1A1AA] mb-12 font-light"
        >
          Purpose-driven visual storytelling for brands, creators, and institutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative group overflow-hidden rounded-full bg-white/5 border border-white/10 px-8 py-4 backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-white/20"
          >
            <div className="absolute inset-0 bg-gradient-sunset opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="relative flex items-center gap-3">
              <span className="font-medium text-white tracking-wide uppercase text-sm">Start a Project</span>
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ArrowRight className="w-4 h-4 text-[#F05A28]" />
              </motion.div>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
