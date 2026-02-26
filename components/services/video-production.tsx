'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, PlayCircle } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const list = [
  { id: '01', title: 'Podcast Production', desc: 'Shooting, editing, and short-form clips.' },
  { id: '02', title: 'Commercial & Brand Videos', desc: 'High-end storytelling for products and services.' },
  { id: '03', title: 'Event & Milestone Highlights', desc: 'Cinematic recaps of your most important moments.' },
  { id: '04', title: 'Music Videos', desc: 'Visualizing rhythm and emotion.' },
  { id: '05', title: 'Public Figure Campaigns', desc: 'Strategic content for personal brands.' },
];

export function VideoProduction() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo('.video-item', 
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full py-32 px-6 relative z-10 bg-[#0D0D12] border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Content (Left) */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="font-mono text-xs text-[#F05A28] mb-6 uppercase tracking-widest">The Story-Driven Pillar</div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">
            Video <br />
            <span className="font-serif italic text-gradient font-light">Production & Editing</span>
          </h2>
          
          <div className="space-y-6 text-[#A1A1AA] text-lg font-light leading-relaxed mb-12">
            <p>
              Optimized content for digital platforms, events, and campaigns. We craft narratives that demand attention and drive action.
            </p>
          </div>

          <Link href="/contact" className="inline-block relative group overflow-hidden rounded-full bg-white/5 border border-white/10 px-8 py-4 backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-white/20">
            <div className="absolute inset-0 bg-gradient-sunset opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="relative flex items-center gap-3">
              <span className="font-medium text-white tracking-wide uppercase text-sm">Request a Video Project</span>
              <ArrowRight className="w-4 h-4 text-[#F05A28] group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

        {/* Horizontal Reel (Right) */}
        <div className="lg:col-span-7 relative">
          <div className="flex flex-col gap-4">
            {list.map((item, index) => (
              <div 
                key={item.id}
                className="video-item group relative bg-[#14141A] rounded-[2rem] p-6 md:p-8 border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Hover Preview Background */}
                <div className={`absolute inset-0 z-0 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-30' : 'opacity-0'}`}>
                  <Image 
                    src={`https://picsum.photos/800/400?random=${index + 10}&grayscale`} 
                    alt={item.title}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#14141A] via-[#14141A]/80 to-transparent" />
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-2xl text-[#F05A28] opacity-50 font-light group-hover:opacity-100 transition-opacity">
                      {item.id}
                    </span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-[#FDB813] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[#A1A1AA] text-sm md:text-base">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  
                  <div className={`w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md transition-all duration-500 ${hoveredIndex === index ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
                    <PlayCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
