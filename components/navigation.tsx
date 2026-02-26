'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
];

export function Navigation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useGSAP(() => {
    if (!navRef.current) return;

    // Desktop animation
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.create({
        start: 'top -50',
        end: 99999,
        toggleClass: {
          targets: navRef.current,
          className: 'is-scrolled'
        },
        onEnter: () => {
          gsap.to(navRef.current, {
            width: 'auto',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            backgroundColor: 'rgba(13, 13, 18, 0.4)',
            backdropFilter: 'blur(40px)',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '3rem',
            marginTop: '1.5rem',
            duration: 0.6,
            ease: 'power3.out',
          });
        },
        onLeaveBack: () => {
          gsap.to(navRef.current, {
            width: '100%',
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
            backgroundColor: 'transparent',
            backdropFilter: 'blur(0px)',
            borderColor: 'transparent',
            borderRadius: '0px',
            marginTop: '0rem',
            duration: 0.6,
            ease: 'power3.out',
          });
        }
      });
    });

    // Mobile animation
    mm.add("(max-width: 767px)", () => {
      ScrollTrigger.create({
        start: 'top -50',
        end: 99999,
        onEnter: () => {
          gsap.to(navRef.current, {
            width: 'auto',
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
            backgroundColor: 'rgba(13, 13, 18, 0.4)',
            backdropFilter: 'blur(40px)',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '3rem',
            marginTop: '1rem',
            duration: 0.6,
            ease: 'power3.out',
          });
        },
        onLeaveBack: () => {
          gsap.to(navRef.current, {
            width: '100%',
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
            backgroundColor: 'transparent',
            backdropFilter: 'blur(0px)',
            borderColor: 'transparent',
            borderRadius: '0px',
            marginTop: '0rem',
            duration: 0.6,
            ease: 'power3.out',
          });
        }
      });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <nav 
        ref={navRef}
        className="w-full flex items-center justify-between px-6 py-4 pointer-events-auto border border-transparent transition-colors duration-300"
      >
        <Link href="/" className="font-mono text-sm tracking-widest uppercase text-white hover:text-[#F05A28] transition-colors whitespace-nowrap">
          Victor Visualze
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm tracking-wide uppercase font-medium transition-colors ${
                pathname === link.href ? 'text-[#F05A28]' : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contact"
            className="px-5 py-2 rounded-full bg-white text-[#0D0D12] text-xs font-bold uppercase tracking-widest hover:bg-[#F05A28] hover:text-white transition-colors"
          >
            Start Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#0D0D12]/95 backdrop-blur-xl flex flex-col items-center justify-center pointer-events-auto">
          <div className="flex flex-col items-center gap-8">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={`text-2xl tracking-widest uppercase font-serif italic transition-colors ${
                  pathname === link.href ? 'text-[#F05A28]' : 'text-white hover:text-[#F05A28]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
