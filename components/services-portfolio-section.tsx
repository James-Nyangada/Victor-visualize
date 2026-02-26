'use client';

import { motion } from 'motion/react';
import { Video, Camera, PenTool } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    title: "Video Production",
    icon: <Video className="w-6 h-6" />,
    desc: "Cinematic storytelling that captures attention and drives action."
  },
  {
    title: "Event Photography",
    icon: <Camera className="w-6 h-6" />,
    desc: "Professional documentation of your most important moments."
  },
  {
    title: "Graphic Design",
    icon: <PenTool className="w-6 h-6" />,
    desc: "Visual identity and collateral that communicates your purpose."
  }
];

const portfolio = [
  {
    id: 1,
    title: "Brand Anthem",
    objective: "Establish market authority",
    image: "https://picsum.photos/800/1000?random=1&grayscale"
  },
  {
    id: 2,
    title: "Tech Summit '25",
    objective: "Capture event energy",
    image: "https://picsum.photos/800/1000?random=2&grayscale"
  },
  {
    id: 3,
    title: "Identity Refresh",
    objective: "Modernize visual language",
    image: "https://picsum.photos/800/1000?random=3&grayscale"
  }
];

export function ServicesPortfolioSection() {
  return (
    <section className="w-full py-24 px-6 relative z-10 bg-[#0D0D12]">
      <div className="max-w-7xl mx-auto">
        
        {/* Services Grid */}
        <div className="mb-32">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Our <span className="font-serif italic text-gradient font-light">Capabilities</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-[#14141A] border border-white/5 hover:border-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#FDB813] mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-[#A1A1AA]">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Preview */}
        <div>
          <div className="mb-16 flex justify-between items-end">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Selected <span className="font-serif italic text-gradient font-light">Work</span>
              </h2>
            </div>
            <button className="hidden md:block font-mono text-sm text-[#A1A1AA] hover:text-white transition-colors uppercase tracking-widest">
              View Archive [↗]
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((item) => (
              <div key={item.id} className="group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-[#14141A]">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-transparent to-transparent opacity-80" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-2xl font-serif italic text-white mb-2">{item.title}</h3>
                  <div className="overflow-hidden">
                    <p className="font-mono text-xs text-[#F05A28] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      Obj: {item.objective}
                    </p>
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
