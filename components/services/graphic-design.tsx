'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PenTool } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const artifacts = [
  { id: '01', title: 'Webinar & Event Posters', type: 'Digital & Print', img: 'https://picsum.photos/800/600?random=31&grayscale' },
  { id: '02', title: 'Professional CV & Portfolio', type: 'Personal Branding', img: 'https://picsum.photos/800/600?random=32&grayscale' },
  { id: '03', title: 'Thumbnails & Creatives', type: 'Digital Assets', img: 'https://picsum.photos/800/600?random=33&grayscale' },
  { id: '04', title: 'Flyers & Business Cards', type: 'Print Collateral', img: 'https://picsum.photos/800/600?random=34&grayscale' },
];

export function GraphicDesign() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo('.artifact-card', 
      { opacity: 0, y: 50, rotationX: 10 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full py-32 px-6 relative z-10 bg-[#0D0D12] border-t border-white/5 perspective-1000">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Artifacts Gallery (Left) */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {artifacts.map((artifact, index) => (
            <div 
              key={artifact.id} 
              className={`artifact-card group relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-[#14141A] border border-white/5 shadow-2xl transform transition-transform duration-500 hover:scale-105 hover:z-10 ${index % 2 !== 0 ? 'md:translate-y-12' : ''}`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Image 
                src={artifact.img} 
                alt={artifact.title}
                fill
                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="font-mono text-[10px] text-[#F05A28] mb-1 uppercase tracking-widest">
                      {artifact.type}
                    </div>
                    <h3 className="text-lg font-bold text-white">{artifact.title}</h3>
                  </div>
                  <span className="font-mono text-xl text-[#A1A1AA] opacity-30 font-light">
                    {artifact.id}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content (Right) */}
        <div className="lg:col-span-5 flex flex-col justify-center lg:pl-12">
          <div className="font-mono text-xs text-[#F05A28] mb-6 uppercase tracking-widest">The Identity Pillar</div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">
            Graphic <br />
            <span className="font-serif italic text-gradient font-light">Design</span>
          </h2>
          
          <div className="space-y-6 text-[#A1A1AA] text-lg font-light leading-relaxed mb-12">
            <p>
              Clean, strategic assets that reinforce brand identity across digital and print mediums.
            </p>
            <p>
              We don&apos;t just design; we build visual systems that communicate your core message with clarity and authority.
            </p>
          </div>

          <Link href="/contact" className="inline-flex items-center gap-3 text-white hover:text-[#F05A28] transition-colors group">
            <PenTool className="w-5 h-5" />
            <span className="font-medium uppercase tracking-widest text-sm border-b border-white/30 group-hover:border-[#F05A28] pb-1 transition-colors">Request Design Work</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
