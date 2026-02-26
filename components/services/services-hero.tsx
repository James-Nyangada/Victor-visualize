'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function ServicesHero() {
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
    <section ref={containerRef} className="w-full min-h-[80vh] flex flex-col justify-center items-center px-6 pt-32 pb-24 relative z-10">
      {/* Background Video/Texture Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D12]/40 via-[#0D0D12]/80 to-[#0D0D12] z-10" />
        <Image 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Workflow Background" 
          fill
          className="object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
      </div>

      <div ref={textRef} className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="font-mono text-xs text-[#F05A28] mb-8 uppercase tracking-widest">The Outcome Overview</div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.9] mb-8">
          Creative Solutions.<br />
          <span className="font-serif italic font-light text-gradient">Defined Impact.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#A1A1AA] font-light leading-relaxed">
          Victor Visualze delivers end-to-end creative solutions that help individuals and organizations communicate clearly and connect meaningfully.
        </p>
      </div>
    </section>
  );
}
