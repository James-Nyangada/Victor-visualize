'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const steps = [
  {
    id: '01',
    title: 'Listen',
    description: 'To understand your goals, audience, and message.',
    color: '#14141A'
  },
  {
    id: '02',
    title: 'Plan',
    description: 'Translating ideas into clear creative direction.',
    color: '#1A1A24'
  },
  {
    id: '03',
    title: 'Produce',
    description: 'With professionalism, craftsmanship, and precision.',
    color: '#20202E'
  },
  {
    id: '04',
    title: 'Deliver',
    description: 'Consistent, high-quality visuals with impact.',
    color: '#2A2A38'
  }
];

export function ProtocolSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="w-full relative z-10 bg-[#0D0D12]">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            The Partnership <span className="font-serif italic text-gradient font-light">Path</span>
          </h2>
          <p className="text-[#A1A1AA] max-w-xl text-lg">
            A systematic approach to transforming your vision into reality.
          </p>
        </div>

        <div className="relative h-[200vh]">
          <div className="sticky top-32 flex flex-col gap-4">
            {steps.map((step, index) => {
              return (
                <StepCard 
                  key={step.id} 
                  step={step} 
                  index={index} 
                  progress={scrollYProgress} 
                  total={steps.length} 
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index, progress, total }: { step: any, index: number, progress: any, total: number }) {
  // Calculate when this card should start stacking
  const start = index / total;
  const end = (index + 1) / total;
  
  const scale = useTransform(progress, [start, end], [1, 0.95 - (total - index) * 0.01]);
  const opacity = useTransform(progress, [start, end], [1, 0.5]);
  const y = useTransform(progress, [start, end], [0, index * 10]);

  return (
    <motion.div
      style={{
        scale,
        opacity,
        y,
        backgroundColor: step.color,
        zIndex: index,
        top: `calc(8rem + ${index * 1.5}rem)`
      }}
      className="w-full rounded-[2.5rem] p-8 md:p-12 border border-white/5 shadow-2xl origin-top"
    >
      <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="font-mono text-4xl md:text-6xl text-[#F05A28] opacity-50 font-light">
            {step.id}
          </span>
          <h3 className="text-3xl md:text-4xl font-serif italic text-white">
            {step.title}
          </h3>
        </div>
        <p className="text-[#A1A1AA] text-lg md:text-xl max-w-sm">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}
