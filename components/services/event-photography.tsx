'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Camera } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const shoots = [
  { id: '01', title: 'Outdoor & Lifestyle', outcome: 'Authentic visual narratives in natural settings.', img: 'https://picsum.photos/600/800?random=21&grayscale' },
  { id: '02', title: 'Professional Headshots', outcome: 'Elevating personal brands and corporate profiles.', img: 'https://picsum.photos/600/800?random=22&grayscale' },
  { id: '03', title: 'Engagement & Dinners', outcome: 'Intimate documentation of personal milestones.', img: 'https://picsum.photos/600/800?random=23&grayscale' },
  { id: '04', title: 'Birthday & Graduation', outcome: 'Capturing joy and achievement with cinematic flair.', img: 'https://picsum.photos/600/800?random=24&grayscale' },
  { id: '05', title: 'Event Documentation', outcome: 'Comprehensive coverage of corporate and social gatherings.', img: 'https://picsum.photos/600/800?random=25&grayscale' },
];

export function EventPhotography() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo('.photo-card', 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
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
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <div className="font-mono text-xs text-[#F05A28] mb-4 uppercase tracking-widest">The Intention Pillar</div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Event <span className="font-serif italic text-gradient font-light">Photography</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-6">
            <p className="text-[#A1A1AA] max-w-md text-lg md:text-right">
              Preserving memories, enhancing personal brands, and professional documentation.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-transparent border border-[#A1A1AA] text-white hover:bg-white/5 transition-colors">
              <Camera className="w-4 h-4" />
              <span className="font-medium uppercase tracking-widest text-xs">Book Photography</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shoots.map((shoot, index) => (
            <div 
              key={shoot.id} 
              className={`photo-card group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-[#14141A] ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <Image 
                src={shoot.img} 
                alt={shoot.title}
                fill
                className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-transparent to-transparent opacity-80" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="font-mono text-xs text-[#F05A28] mb-2 uppercase tracking-widest opacity-50">
                  {shoot.id}
                </div>
                <h3 className="text-2xl font-serif italic text-white mb-2">{shoot.title}</h3>
                <div className="overflow-hidden">
                  <p className="font-mono text-xs text-[#A1A1AA] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    Outcome: {shoot.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
