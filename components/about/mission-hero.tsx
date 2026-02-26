'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function MissionHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!textRef.current) return;
    
    // Simple word splitting simulation since SplitText is premium
    const words = textRef.current.innerText.split(' ');
    textRef.current.innerHTML = '';
    
    words.forEach((word) => {
      const span = document.createElement('span');
      span.innerText = word + ' ';
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      textRef.current?.appendChild(span);
    });

    gsap.to(textRef.current.children, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 0.2,
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full min-h-[80vh] flex flex-col justify-center items-center px-6 pt-32 pb-24 relative z-10">
      <div className="max-w-5xl mx-auto text-center">
        <div className="font-mono text-xs text-[#F05A28] mb-8 uppercase tracking-widest">The Intentional Narrative</div>
        <h1 
          ref={textRef}
          className="text-6xl md:text-8xl lg:text-9xl font-serif italic text-white leading-[0.9] mb-12 tracking-tight"
        >
          Visuals with Purpose.
        </h1>
        
        <div className="max-w-2xl mx-auto space-y-6 text-lg md:text-xl text-[#A1A1AA] font-light leading-relaxed">
          <p>
            We believe that every frame, every pixel, and every design should serve a strategic objective. 
          </p>
          <p>
            Our mission is to position you as a trusted creative partner, transforming abstract ideas into tangible, high-impact visual assets that resonate with your audience and drive measurable results.
          </p>
        </div>
      </div>
    </section>
  );
}
