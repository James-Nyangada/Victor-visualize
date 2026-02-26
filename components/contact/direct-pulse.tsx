'use client';

import { MessageCircle } from 'lucide-react';

export function DirectPulse() {
  return (
    <div className="flex flex-col gap-8 h-full">
      <div className="bg-[#14141A] border border-white/5 rounded-[2.5rem] p-8 md:p-12 flex-1 flex flex-col justify-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
          <div className="font-mono text-xs text-[#F05A28] mb-6 uppercase tracking-widest">Direct Pulse</div>
          
          <h3 className="text-2xl md:text-3xl font-serif italic text-white mb-6">
            Prefer a quick conversation?
          </h3>
          
          <p className="text-[#A1A1AA] font-light leading-relaxed mb-12">
            Reach us directly on WhatsApp for immediate inquiries or to discuss your project details in real-time.
          </p>

          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/20 transition-colors group-hover:scale-105 transform duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-bold tracking-widest uppercase text-sm">WhatsApp Chat</span>
          </a>
        </div>
      </div>

      <div className="bg-[#14141A] border border-white/5 rounded-[2rem] p-8 flex items-center gap-4">
        <div className="w-3 h-3 rounded-full bg-[#25D366] animate-pulse shadow-[0_0_10px_rgba(37,211,102,0.5)]" />
        <div className="font-mono text-xs text-[#A1A1AA] uppercase tracking-widest leading-relaxed">
          System Operational <br />
          <span className="text-white">We typically respond within 24–48 hours.</span>
        </div>
      </div>
    </div>
  );
}
