'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function FounderSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const signatureRef = useRef<SVGPathElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !imageRef.current || !signatureRef.current) return;

    // Parallax scale effect for image
    gsap.to(imageRef.current, {
      scale: 1.1,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    // Signature draw animation
    const pathLength = signatureRef.current.getTotalLength();
    gsap.set(signatureRef.current, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    gsap.to(signatureRef.current, {
      strokeDashoffset: 0,
      duration: 2,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full py-32 px-6 relative z-10 bg-[#0D0D12] border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Visual (60%) */}
        <div className="lg:col-span-7 relative aspect-[4/5] md:aspect-[16/9] lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-[#14141A]">
          <Image 
            ref={imageRef}
            src="https://picsum.photos/1200/1500?grayscale&blur=1" 
            alt="Victor Visualze Founder"
            fill
            className="object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-transparent to-transparent opacity-90" />
        </div>

        {/* Copy (40%) */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="font-mono text-xs text-[#F05A28] mb-6 uppercase tracking-widest">Leadership & Craft</div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">
            The <span className="font-serif italic text-gradient font-light">Story-First</span> Mindset.
          </h2>
          
          <div className="space-y-6 text-[#A1A1AA] text-lg font-light leading-relaxed mb-12">
            <p>
              &quot;We don&apos;t just capture visuals; we craft narratives that position you as a trusted partner in your industry.&quot;
            </p>
            <p>
              Our approach is rooted in the belief that true impact comes from intentionality. Every project begins with a deep dive into the core message, ensuring that the final product is not only visually stunning but strategically sound.
            </p>
          </div>

          {/* Magnetic Signature SVG */}
          <div className="mt-8">
            <svg 
              width="200" 
              height="80" 
              viewBox="0 0 200 80" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="group cursor-pointer"
            >
              <path 
                ref={signatureRef}
                d="M10 60C30 20 60 10 80 40C100 70 120 20 150 30C180 40 190 70 190 70" 
                stroke="#F05A28" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="transition-all duration-300 group-hover:stroke-[#FDB813] group-hover:stroke-[3px]"
              />
              <text x="100" y="75" fill="#A1A1AA" fontSize="10" fontFamily="monospace" textAnchor="middle" className="opacity-50 uppercase tracking-widest">Victor</text>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
