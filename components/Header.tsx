import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SECTIONS, ASSETS } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Programática', href: `#${SECTIONS.PROGRAMMATIC}` },
    { label: 'Solución', href: `#${SECTIONS.SOLUTION}` },
    { label: 'DV360', href: `#${SECTIONS.DV360}` },
    { label: 'CTV & DOOH', href: `#${SECTIONS.CHANNELS}` },
    { label: 'KPIs', href: `#${SECTIONS.KPI}` },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <a 
            href="https://21.edu.ar/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${isScrolled ? 'bg-white p-1 rounded' : ''} transition-all duration-300 hover:opacity-80`}
          >
            <img 
              src={isScrolled ? ASSETS.logoUES21 : ASSETS.logoUES21White} 
              alt="Universidad Siglo 21" 
              className="h-10 w-auto object-contain" 
            />
          </a>
          <div className="h-6 w-px bg-slate-300 hidden md:block"></div>
          <span className={`text-sm font-semibold hidden md:block ${isScrolled ? 'text-slate-600' : 'text-white'}`}>
            Intro a DV360
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className={`text-sm font-medium hover:text-ues21-green transition-colors ${isScrolled ? 'text-slate-600' : 'text-white'}`}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="https://abndigital.com.ar/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img src={isScrolled ? ASSETS.logoABNBlack : ASSETS.logoABNWhite} alt="ABN Digital" className="h-8 w-auto ml-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-800" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-slate-800 font-medium py-2 border-b border-slate-100"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};