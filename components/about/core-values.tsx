'use client';

import { useRef } from 'react';
import { Target, ShieldCheck, TrendingUp } from 'lucide-react';

const values = [
  {
    id: '01',
    title: 'Purpose-Driven Storytelling',
    icon: <Target className="w-8 h-8 text-[#FDB813]" />,
    desc: 'Every frame serves a strategic objective. We align visuals with your core narrative.',
    label: 'Narrative Alignment'
  },
  {
    id: '02',
    title: 'Professional Reliability',
    icon: <ShieldCheck className="w-8 h-8 text-[#FDB813]" />,
    desc: 'Non-negotiable quality and optimized delivery timelines. A system you can trust.',
    label: 'System Status: Active'
  },
  {
    id: '03',
    title: 'Business Impact',
    icon: <TrendingUp className="w-8 h-8 text-[#FDB813]" />,
    desc: 'Visuals designed to convert, engage, and elevate your market positioning.',
    label: 'ROI Focused'
  }
];

export function CoreValues() {
  return (
    <section className="w-full py-32 px-6 relative z-10 bg-[#0D0D12] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <div className="font-mono text-xs text-[#F05A28] mb-4 uppercase tracking-widest">Interactive Pillars</div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Core <span className="font-serif italic text-gradient font-light">Values</span>
            </h2>
          </div>
          <p className="text-[#A1A1AA] max-w-md text-lg">
            The foundational principles that guide our creative process and client partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value) => (
            <div 
              key={value.id} 
              className="group relative bg-[#14141A] rounded-[2.5rem] p-10 border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-30 transition-opacity duration-500 transform group-hover:scale-110">
                {value.icon}
              </div>
              
              <div className="relative z-10 flex flex-col h-full justify-between min-h-[280px]">
                <div>
                  <span className="font-mono text-4xl text-[#F05A28] opacity-50 font-light mb-6 block">
                    {value.id}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4 pr-8">
                    {value.title}
                  </h3>
                  <p className="text-[#A1A1AA] leading-relaxed">
                    {value.desc}
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="font-mono text-xs text-[#FDB813] uppercase tracking-widest">
                    {value.label}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#FDB813] animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
