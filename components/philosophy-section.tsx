'use client';

import { motion } from 'motion/react';

export function PhilosophySection() {
  return (
    <section className="w-full py-32 px-6 relative z-10 bg-[#0D0D12] border-y border-white/5">
      <div className="max-w-5xl mx-auto text-center">
        <div className="font-mono text-xs text-[#F05A28] mb-8 uppercase tracking-widest">The Differentiator</div>
        
        <div className="flex flex-col gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl md:text-3xl font-light text-[#A1A1AA] leading-relaxed">
              * Most creative services focus on: <br className="hidden md:block" />
              <span className="line-through opacity-50">just capturing visuals.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-2xl md:text-5xl font-bold text-white leading-tight">
              We focus on: <br />
              <span className="font-serif italic text-gradient font-light">positioning you as a trusted partner</span> <br />
              through purpose-driven storytelling.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
