'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { X } from 'lucide-react';

const categories = ['All', 'Video Production', 'Photography', 'Graphic Design'];

const projects = [
  {
    id: '01',
    title: 'Tech Summit 2025',
    category: 'Video Production',
    image: 'https://picsum.photos/1200/600?random=41&grayscale',
    objective: 'Establish authority and capture the high-energy atmosphere of a premier tech conference.',
    execution: 'Purpose-driven storytelling with dynamic, high-key lighting and rapid-cut editing to maintain viewer engagement.',
    result: 'Increased post-event engagement by 40% and secured a 25% increase in early-bird ticket sales for the following year.',
    gallery: [
      'https://picsum.photos/800/600?random=42&grayscale',
      'https://picsum.photos/800/600?random=43&grayscale',
      'https://picsum.photos/800/600?random=44&grayscale'
    ]
  },
  {
    id: '02',
    title: 'Lumina Brand Identity',
    category: 'Graphic Design',
    image: 'https://picsum.photos/1200/600?random=45&grayscale',
    objective: 'Modernize a legacy brand to appeal to a younger, digitally-native demographic.',
    execution: 'Developed a clean, minimalist visual system with a bold new color palette and custom typography.',
    result: 'Successfully repositioned the brand, leading to a 60% increase in social media following within 3 months.',
    gallery: [
      'https://picsum.photos/800/600?random=46&grayscale',
      'https://picsum.photos/800/600?random=47&grayscale'
    ]
  },
  {
    id: '03',
    title: 'The Artisan Series',
    category: 'Photography',
    image: 'https://picsum.photos/1200/600?random=48&grayscale',
    objective: 'Document the intricate process of local craftsmen to build brand authenticity.',
    execution: 'Intimate, documentary-style photography using natural light to highlight texture and detail.',
    result: 'Featured in 3 major lifestyle publications and drove a 30% increase in direct-to-consumer sales.',
    gallery: [
      'https://picsum.photos/800/600?random=49&grayscale',
      'https://picsum.photos/800/600?random=50&grayscale',
      'https://picsum.photos/800/600?random=51&grayscale'
    ]
  },
  {
    id: '04',
    title: 'Echoes Music Video',
    category: 'Video Production',
    image: 'https://picsum.photos/1200/600?random=52&grayscale',
    objective: 'Create a visually striking narrative that complements the emotional depth of the track.',
    execution: 'Cinematic, low-key lighting with a focus on abstract, slow-motion visuals and color grading.',
    result: 'Surpassed 1 million views on YouTube within the first month of release.',
    gallery: [
      'https://picsum.photos/800/600?random=53&grayscale',
      'https://picsum.photos/800/600?random=54&grayscale'
    ]
  },
  {
    id: '05',
    title: 'Corporate Headshots',
    category: 'Photography',
    image: 'https://picsum.photos/1200/600?random=55&grayscale',
    objective: 'Standardize the executive team’s visual presence across all corporate communications.',
    execution: 'Clean, professional studio setups with consistent lighting and subtle retouching.',
    result: 'Elevated the company’s "About Us" page, contributing to a more cohesive and trustworthy brand image.',
    gallery: [
      'https://picsum.photos/800/600?random=56&grayscale',
      'https://picsum.photos/800/600?random=57&grayscale'
    ]
  },
  {
    id: '06',
    title: 'Fintech App Launch',
    category: 'Graphic Design',
    image: 'https://picsum.photos/1200/600?random=58&grayscale',
    objective: 'Design high-converting digital assets for a new app launch campaign.',
    execution: 'Created a suite of dynamic, data-driven visuals that clearly communicated the app’s value proposition.',
    result: 'Achieved a 15% higher click-through rate compared to previous campaigns.',
    gallery: [
      'https://picsum.photos/800/600?random=59&grayscale',
      'https://picsum.photos/800/600?random=60&grayscale'
    ]
  }
];

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  return (
    <section className="w-full relative z-10 bg-[#0D0D12] border-t border-white/5 pb-32">
      
      {/* The "Signal" Filter System */}
      <div className="sticky top-24 z-30 w-full bg-[#0D0D12]/80 backdrop-blur-xl border-b border-white/5 py-4 mb-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className="relative px-4 py-2 text-sm md:text-base font-medium tracking-wide uppercase transition-colors"
            >
              <span className={`relative z-10 ${activeFilter === category ? 'text-white' : 'text-[#A1A1AA] hover:text-white'}`}>
                {category}
              </span>
              {activeFilter === category && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-sunset"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* The Curated Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[21/9] rounded-[2rem] overflow-hidden bg-[#14141A] border border-white/5 mb-4">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#0D0D12]/0 group-hover:bg-[#0D0D12]/40 transition-colors duration-500" />
                  
                  {/* Hover Label */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="font-mono text-sm text-white bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 uppercase tracking-widest">
                      View Case Study
                    </span>
                  </div>
                </div>
                
                <div className="flex justify-between items-start px-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#FDB813] transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-[#A1A1AA] uppercase tracking-widest">
                      {project.category}
                    </p>
                  </div>
                  <span className="font-mono text-xl text-[#F05A28] opacity-50 font-light">
                    {project.id}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal (Dark Mode Transition) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[#0D0D12] overflow-y-auto"
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="fixed top-8 right-8 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Sticky Text Content (Left) */}
              <div className="lg:col-span-5 relative">
                <div className="sticky top-32">
                  <div className="font-mono text-xs text-[#F05A28] mb-4 uppercase tracking-widest">
                    {selectedProject.category} {/* separator */} {selectedProject.id}
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-12">
                    {selectedProject.title}
                  </h2>
                  
                  <div className="space-y-12">
                    <div>
                      <h3 className="text-xl font-serif italic text-white mb-4">The Objective</h3>
                      <p className="text-[#A1A1AA] text-lg font-light leading-relaxed">
                        {selectedProject.objective}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-serif italic text-white mb-4">The Execution</h3>
                      <p className="text-[#A1A1AA] text-lg font-light leading-relaxed">
                        {selectedProject.execution}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-serif italic text-white mb-4">The Result</h3>
                      <p className="text-[#A1A1AA] text-lg font-light leading-relaxed border-l-2 border-[#F05A28] pl-4">
                        {selectedProject.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scrolling Visuals (Right) */}
              <div className="lg:col-span-7 flex flex-col gap-8">
                <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden bg-[#14141A] border border-white/5">
                  <Image 
                    src={selectedProject.image} 
                    alt={`${selectedProject.title} Hero`}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {selectedProject.gallery.map((img: string, i: number) => (
                  <div key={i} className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-[#14141A] border border-white/5">
                    <Image 
                      src={img} 
                      alt={`${selectedProject.title} Gallery ${i + 1}`}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
