import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-[#050508] rounded-t-[4rem] pt-24 pb-12 px-6 border-t border-white/5 relative z-20 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-24">
        <div>
          <h2 className="text-3xl font-bold text-white tracking-tight mb-2">
            Victor Visualze
          </h2>
          <p className="font-serif italic text-[#A1A1AA] text-lg">
            Visuals with Purpose.
          </p>
        </div>
        
        <div className="flex gap-12">
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-xs text-[#F05A28] uppercase tracking-widest mb-2">Navigation</h4>
            <Link href="/" className="text-[#A1A1AA] hover:text-white transition-colors text-sm uppercase tracking-wide">Home</Link>
            <Link href="/about" className="text-[#A1A1AA] hover:text-white transition-colors text-sm uppercase tracking-wide">About</Link>
            <Link href="/services" className="text-[#A1A1AA] hover:text-white transition-colors text-sm uppercase tracking-wide">Services</Link>
            <Link href="/work" className="text-[#A1A1AA] hover:text-white transition-colors text-sm uppercase tracking-wide">Work</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-xs text-[#F05A28] uppercase tracking-widest mb-2">Legal</h4>
            <Link href="#" className="text-[#A1A1AA] hover:text-white transition-colors text-sm uppercase tracking-wide">Privacy Policy</Link>
            <Link href="#" className="text-[#A1A1AA] hover:text-white transition-colors text-sm uppercase tracking-wide">Terms of Service</Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-xs text-[#A1A1AA] uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Victor Visualze. All rights reserved.
        </p>
        <p className="font-mono text-xs text-[#A1A1AA] uppercase tracking-widest">
          Designed for Impact
        </p>
      </div>
    </footer>
  );
}
