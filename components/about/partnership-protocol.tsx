'use client';

import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: '01',
    title: 'LISTEN',
    description: 'To understand your goals, audience, and message.',
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#F05A28] stroke-2 fill-none">
        <path d="M10 50 Q 25 20, 50 50 T 90 50" className="path-anim" />
        <path d="M10 50 Q 25 80, 50 50 T 90 50" className="path-anim" />
      </svg>
    )
  },
  {
    id: '02',
    title: 'PLAN',
    description: 'Translating ideas into clear creative direction.',
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#FDB813] stroke-2 fill-none">
        <rect x="20" y="20" width="20" height="20" className="path-anim" />
        <rect x="60" y="20" width="20" height="20" className="path-anim" />
        <rect x="20" y="60" width="20" height="20" className="path-anim" />
        <rect x="60" y="60" width="20" height="20" className="path-anim" />
        <line x1="40" y1="30" x2="60" y2="30" className="path-anim" />
        <line x1="30" y1="40" x2="30" y2="60" className="path-anim" />
      </svg>
    )
  },
  {
    id: '03',
    title: 'PRODUCE',
    description: 'With professionalism, craftsmanship, and precision.',
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#A1A1AA] stroke-2 fill-none">
        <circle cx="50" cy="50" r="30" className="path-anim" />
        <circle cx="50" cy="50" r="15" className="path-anim" />
        <line x1="50" y1="5" x2="50" y2="20" className="path-anim" />
        <line x1="50" y1="80" x2="50" y2="95" className="path-anim" />
        <line x1="5" y1="50" x2="20" y2="50" className="path-anim" />
        <line x1="80" y1="50" x2="95" y2="50" className="path-anim" />
      </svg>
    )
  },
  {
    id: '04',
    title: 'DELIVER',
    description: 'Consistent, high-quality visuals with impact.',
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full stroke-white stroke-2 fill-none">
        <polygon points="50,10 90,50 50,90 10,50" className="path-anim" />
        <line x1="50" y1="10" x2="50" y2="90" className="path-anim" />
        <line x1="10" y1="50" x2="90" y2="50" className="path-anim" />
      </svg>
    )
  }
];

export function PartnershipProtocol() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    if (!containerRef.current) return;

    const sections = gsap.utils.toArray('.protocol-step');

    sections.forEach((section: any, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveIndex(i),
        onEnterBack: () => setActiveIndex(i),
      });
    });

    // Animate SVGs inside the scrolling content
    const paths = gsap.utils.toArray('.protocol-step .path-anim');
    paths.forEach((path: any) => {
      const length = path.getTotalLength ? path.getTotalLength() : 100;
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      
      ScrollTrigger.create({
        trigger: path.closest('.protocol-step'),
        start: 'top 60%',
        onEnter: () => {
          gsap.to(path, { strokeDashoffset: 0, duration: 1.5, ease: 'power2.out' });
        },
        onLeaveBack: () => {
          gsap.to(path, { strokeDashoffset: length, duration: 1, ease: 'power2.in' });
        }
      });
    });

  }, { scope: containerRef });

  // Effect to animate the sticky visualizer SVGs when activeIndex changes
  useEffect(() => {
    if (!containerRef.current) return;
    
    const stickyPaths = containerRef.current.querySelectorAll('.sticky-visualizer .path-anim');
    
    stickyPaths.forEach((path: any) => {
      const length = path.getTotalLength ? path.getTotalLength() : 100;
      
      // If this path belongs to the active step, animate it in
      if (path.closest(`[data-step-index="${activeIndex}"]`)) {
        gsap.fromTo(path, 
          { strokeDasharray: length, strokeDashoffset: length },
          { strokeDashoffset: 0, duration: 1.5, ease: 'power2.out' }
        );
      } else {
        // Otherwise reset it
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      }
    });
  }, [activeIndex]);

  return (
    <section ref={containerRef} className="w-full relative z-10 bg-[#0D0D12] border-t border-white/5 py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 text-center">
          <div className="font-mono text-xs text-[#F05A28] mb-4 uppercase tracking-widest">The 4-Step Engine</div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            The Partnership <span className="font-serif italic text-gradient font-light">Protocol</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Sticky Visualizer */}
          <div className="hidden lg:block relative h-[60vh]">
            <div className="sticky-visualizer sticky top-32 w-full h-full bg-[#14141A] rounded-[2.5rem] border border-white/5 p-12 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D12]/50 to-transparent" />
              
              {steps.map((step, i) => (
                <div 
                  key={step.id}
                  data-step-index={i}
                  className={`absolute inset-0 p-16 transition-opacity duration-700 ease-in-out ${activeIndex === i ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  {step.svg}
                </div>
              ))}
              
              <div className="absolute bottom-8 left-8 font-mono text-xs text-[#A1A1AA] uppercase tracking-widest">
                System Status: <span className="text-[#FDB813]">Phase {steps[activeIndex].id}</span>
              </div>
            </div>
          </div>

          {/* Scrolling Content */}
          <div className="flex flex-col gap-32 py-16">
            {steps.map((step, i) => (
              <div 
                key={step.id} 
                className={`protocol-step flex flex-col gap-6 transition-opacity duration-500 ${activeIndex === i ? 'opacity-100' : 'opacity-40'}`}
              >
                <div className="lg:hidden w-full aspect-square bg-[#14141A] rounded-[2.5rem] border border-white/5 p-12 mb-8">
                  {step.svg}
                </div>
                
                <span className="font-mono text-5xl md:text-7xl text-[#F05A28] font-light">
                  {step.id}
                </span>
                <h3 className="text-4xl md:text-5xl font-serif italic text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[#A1A1AA] text-xl md:text-2xl font-light leading-relaxed max-w-md">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
