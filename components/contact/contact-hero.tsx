'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function ContactHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!textRef.current) return;

    gsap.fromTo(textRef.current.children, 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.2,
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full pt-40 pb-20 px-6 relative z-10">
      {/* Ambient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F05A28]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FDB813]/5 rounded-full blur-[120px]" />
      </div>

      <div ref={textRef} className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="font-mono text-xs text-[#F05A28] mb-8 uppercase tracking-widest">The Invitation</div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1] mb-8">
          Ready to create visuals that move people and <br className="hidden md:block" />
          <span className="font-serif italic font-light text-gradient">build credibility?</span> Let&apos;s talk.
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#A1A1AA] font-light leading-relaxed">
          Start a conversation about your project and let us help you be seen, heard, and remembered.
        </p>
      </div>
    </section>
  );
}
