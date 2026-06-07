/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Gem } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onScrollToSection: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onScrollToSection, activeSection }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: '회사소개', id: 'about' },
    { label: '서비스', id: 'services' },
    { label: '포트폴리오', id: 'portfolio' },
    { label: '고객후기', id: 'reviews' },
    { label: '무료진단', id: 'diagnosis' },
    { label: '문의하기', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavItemClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onScrollToSection(id);
  };

  return (
    <header
      id="main-app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/90 border-b border-slate-800 shadow-lg backdrop-blur-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div
            id="brand-logo"
            onClick={() => handleNavItemClick('hero')}
            className="flex items-center gap-2.5 cursor-pointer select-none group"
          >
            <div className="h-11 w-11 rounded-full bg-gradient-to-b from-[#FAF9F5] to-[#EBE8DF] border border-[#D5D2C9] flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-neutral-100/15 mix-blend-overlay pointer-events-none" />
              <svg className="h-9.5 w-9.5 text-amber-500" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  {/* Majestic Multi-stop Gold Foil Gradient matching the reference photo */}
                  <linearGradient id="luxuryGoldPrimary" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#705219" />
                    <stop offset="15%" stopColor="#C5A059" />
                    <stop offset="30%" stopColor="#FDF1D0" />
                    <stop offset="45%" stopColor="#D8B263" />
                    <stop offset="55%" stopColor="#9C7730" />
                    <stop offset="75%" stopColor="#FEECA8" />
                    <stop offset="100%" stopColor="#5E4311" />
                  </linearGradient>
                  
                  <linearGradient id="luxuryGoldSecondary" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FDF0BD" />
                    <stop offset="50%" stopColor="#B48D37" />
                    <stop offset="100%" stopColor="#553A04" />
                  </linearGradient>

                  {/* Sharp 3D Letterpress Debossing / Carving Filter */}
                  <filter id="luxuryEngrave" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0.5" dy="1.1" stdDeviation="0.4" flood-color="#2D1F08" flood-opacity="0.55" />
                    <feDropShadow dx="-0.3" dy="-0.3" stdDeviation="0.15" flood-color="#FFFFFF" flood-opacity="0.95" />
                  </filter>
                </defs>

                {/* Highly Clean & Pristine Calligraphic Monogram "dy" */}
                <g filter="url(#luxuryEngrave)">
                  {/* Lowercase 'd' bowl (Elegant crescent shape) */}
                  <path 
                    d="M 43.5 45 C 31 45 23 51.5 23 62 C 23 72.5 31 79 43.5 79 C 43.5 79 43.5 76.2 43.5 76.2 C 34.5 76.2 28.2 71.8 28.2 62 C 28.2 52.2 34.5 47.8 43.5 47.8 Z" 
                    fill="url(#luxuryGoldPrimary)" 
                    fillRule="evenodd" 
                  />

                  {/* Lowercase 'd' vertical stem (Tall pristine columns with neat serifs) */}
                  <path 
                    d="M 40.5 25 H 49.5 L 48.5 27 C 46 27 46 28.2 46 32 V 75.5 C 46 78 47.2 79 50.5 79 H 51.5 V 81 H 38.5 V 79 H 39.5 C 42.8 79 43.5 78 43.5 75.5 V 32 C 43.5 28.2 43.5 27 41.5 27 L 40.5 25 Z" 
                    fill="url(#luxuryGoldSecondary)" 
                  />

                  {/* Lowercase 'y' left connection branch */}
                  <path 
                    d="M 46.5 54.5 C 51.5 53 56.5 51.5 59.5 56.5 C 61.2 59.5 62.5 62 62.5 62" 
                    stroke="url(#luxuryGoldPrimary)" 
                    strokeWidth="1.6" 
                    strokeLinecap="round" 
                  />

                  {/* Lowercase 'y' sweeping script descender */}
                  <path 
                    d="M 74.5 50.5 C 76.5 54.5 75.5 57 71 66 L 62.5 83 C 57 91.5 49 95 38 95 C 24 95 17 88.5 17 81.5 C 17 76.5 20 74.2 23 74.2 C 26 74.2 28 76.5 28 80 C 28 85 32 90.5 37.5 90.5 C 44 90.5 49.5 85.5 53.5 76.5 L 59.5 64.5 C 57.2 59.5 53 55.5 48.5 51.2 Z" 
                    fill="url(#luxuryGoldPrimary)" 
                    fillRule="evenodd" 
                  />
                </g>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-wider text-slate-100 font-sans group-hover:text-amber-400 transition-colors leading-none">
                Dy<span className="text-amber-400 group-hover:text-amber-300 transition-colors">Month</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] leading-none mt-1.5 font-bold">PREMIUM AGENCY</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav id="desktop-navbar" className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavItemClick(item.id)}
                className={`text-sm font-medium tracking-wide transition-all border-b-2 py-1 ${
                  activeSection === item.id
                    ? 'text-amber-400 border-amber-400 font-bold'
                    : 'text-slate-300 border-transparent hover:text-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Right Button */}
          <div className="hidden lg:flex items-center">
            <button
              id="cta-desktop-header-btn"
              onClick={() => handleNavItemClick('diagnosis')}
              className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-sm px-5 py-2.5 rounded-lg flex items-center gap-1.5 shadow-lg shadow-amber-400/10 hover:shadow-amber-400/20 active:scale-95 transition-all cursor-pointer"
            >
              <span>무료 상담 신청</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              id="cta-mobile-header-btn-quick"
              onClick={() => handleNavItemClick('diagnosis')}
              className="bg-amber-400 focus:bg-amber-500 text-slate-950 font-extrabold text-xs px-3.5 py-1.5 rounded-md active:scale-95 transition-all outline-none border-none select-none"
            >
              무료 상담
            </button>
            <button
              id="mobile-hamburger-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg p-2 text-slate-300 hover:text-slate-100 hover:bg-slate-800 transition-all focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-5 pt-3 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavItemClick(item.id)}
                  className={`w-full text-left py-3 px-4 rounded-xl text-base font-semibold tracking-wide transition-all flex items-center justify-between ${
                    activeSection === item.id
                      ? 'bg-amber-400/10 text-amber-400'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-slate-100'
                  }`}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                  )}
                </button>
              ))}
              <div className="pt-4 px-4">
                <button
                  id="cta-mobile-drawer-btn"
                  onClick={() => handleNavItemClick('diagnosis')}
                  className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-amber-400/10 hover:shadow-amber-400/20 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>무료 상담 신청</span>
                  <ArrowUpRight className="h-4.5 w-4.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
