'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ValueAddFooter() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.to('.ticker-content', {
      xPercent: -50,
      ease: 'none',
      duration: 20,
      repeat: -1,
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full relative z-10 bg-[#0D0D12] border-t border-white/5 pt-32 pb-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center mb-24">
        <div className="font-mono text-xs text-[#F05A28] mb-8 uppercase tracking-widest">Why Choose Us?</div>
        
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter mb-12 leading-[1.1]">
          Professional Reliability. <br />
          <span className="font-serif italic text-gradient font-light">End-to-End Execution.</span>
        </h2>
        
        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-[#A1A1AA] font-light leading-relaxed">
          Creative solutions aligned with your brand goals. We build systems that deliver consistent, high-impact results.
        </p>
      </div>

      {/* Operational Status Ticker */}
      <div className="w-full border-y border-white/5 bg-[#14141A] py-4 overflow-hidden flex whitespace-nowrap">
        <div className="ticker-content flex items-center gap-16 px-8 text-xs font-mono uppercase tracking-widest text-[#A1A1AA]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" /> System Status: Operational</span>
              <span className="text-[#FDB813]">End-to-End Execution</span>
              <span className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" /> Quality Control: Active</span>
              <span className="text-[#FDB813]">Professional Reliability</span>
              <span className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" /> Creative Solutions: Deployed</span>
              <span className="text-[#FDB813]">Brand Alignment</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
