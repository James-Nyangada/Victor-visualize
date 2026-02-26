'use client';

import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="w-full py-32 px-6 relative z-10 bg-[#0D0D12] border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            The Project <br />
            <span className="font-serif italic text-gradient font-light">Intake</span>
          </h2>
          <p className="text-[#A1A1AA] text-lg mb-12 max-w-md">
            Ready to elevate your visual presence? Tell us about your vision, and we&apos;ll craft the narrative.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-[#A1A1AA]">
              <div className="w-2 h-2 rounded-full bg-[#F05A28] animate-pulse" />
              <span className="font-mono text-sm uppercase tracking-widest">We typically respond within 24–48 hours</span>
            </div>
            
            <a href="#" className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors border border-[#25D366]/20">
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">WhatsApp Quick Link</span>
            </a>
          </div>
        </div>

        <div className="bg-[#14141A] rounded-[2.5rem] p-8 md:p-12 border border-white/5">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-mono text-xs text-[#A1A1AA] uppercase tracking-widest">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-[#F05A28] transition-colors"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-xs text-[#A1A1AA] uppercase tracking-widest">Organization</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-[#F05A28] transition-colors"
                  placeholder="Company Inc."
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs text-[#A1A1AA] uppercase tracking-widest">Project Type</label>
              <select defaultValue="" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-[#F05A28] transition-colors appearance-none">
                <option value="" disabled className="bg-[#14141A]">Select a service...</option>
                <option value="video" className="bg-[#14141A]">Video Production</option>
                <option value="photo" className="bg-[#14141A]">Event Photography</option>
                <option value="design" className="bg-[#14141A]">Graphic Design</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-mono text-xs text-[#A1A1AA] uppercase tracking-widest">Budget</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-[#F05A28] transition-colors"
                  placeholder="$5k - $10k"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-xs text-[#A1A1AA] uppercase tracking-widest">Timeline</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-[#F05A28] transition-colors"
                  placeholder="Q3 2026"
                />
              </div>
            </div>

            <button className="w-full mt-8 relative group overflow-hidden rounded-full bg-white text-[#0D0D12] px-8 py-4 transition-all hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center gap-3 group-hover:text-white transition-colors">
                <span className="font-bold uppercase tracking-widest text-sm">Submit Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
