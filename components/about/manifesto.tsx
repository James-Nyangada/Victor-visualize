'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !textRef.current) return;

    gsap.fromTo(textRef.current, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full min-h-screen relative z-10 bg-[#0D0D12] border-t border-white/5 flex items-center justify-center overflow-hidden">
      
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Creative Process" 
          fill
          className="object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-[#0D0D12]/80 to-[#0D0D12]/40" />
      </div>

      <div ref={textRef} className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        <div className="font-mono text-xs text-[#F05A28] mb-8 uppercase tracking-widest">The &quot;Why&quot; Manifesto</div>
        
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter mb-12 leading-[0.9]">
          Beyond the <br />
          <span className="font-serif italic text-gradient font-light">Camera.</span>
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-8 text-xl md:text-3xl text-[#A1A1AA] font-light leading-relaxed">
          <p>
            We don&apos;t just deliver files; we deliver impact. 
          </p>
          <p>
            Our commitment extends beyond the shoot. We are your long-term creative partners, dedicated to end-to-end execution that elevates your brand and ensures your message is not just seen, but felt.
          </p>
        </div>

        <button className="mt-16 relative group overflow-hidden rounded-full bg-white/5 border border-white/10 px-10 py-5 backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-sunset opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
          <div className="relative flex items-center gap-3">
            <span className="font-medium text-white tracking-wide uppercase text-sm">Start a Project</span>
          </div>
        </button>
      </div>

    </section>
  );
}
