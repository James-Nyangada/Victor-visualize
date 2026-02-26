'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function StorytellingFooter() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo('.footer-content', 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full relative z-10 bg-[#0D0D12] border-t border-white/5 py-32 overflow-hidden">
      <div className="footer-content max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        <div className="font-mono text-xs text-[#F05A28] mb-8 uppercase tracking-widest">The Next Step</div>
        
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter mb-12 leading-[1.1]">
          Ready to create visuals that move people and <br className="hidden md:block" />
          <span className="font-serif italic text-gradient font-light">build credibility?</span>
        </h2>
        
        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-[#A1A1AA] font-light leading-relaxed mb-16">
          Let&apos;s talk.
        </p>

        <Link href="/contact" className="relative group overflow-hidden rounded-full bg-white/5 border border-white/10 px-12 py-6 backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:scale-105 mb-8">
          <div className="absolute inset-0 bg-gradient-sunset opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
          <div className="relative flex items-center gap-4">
            <span className="font-bold text-white tracking-widest uppercase text-sm md:text-base">Start a Project</span>
            <ArrowRight className="w-5 h-5 text-[#F05A28] group-hover:translate-x-2 transition-transform" />
          </div>
        </Link>

        <div className="flex items-center gap-3 text-[#A1A1AA]">
          <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest">We typically respond within 24–48 hours</span>
        </div>
      </div>
    </section>
  );
}
