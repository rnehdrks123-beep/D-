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
            <div className="h-10 w-10 rounded-xl bg-slate-950 border border-amber-500/30 flex items-center justify-center shadow-lg group-hover:border-amber-400 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] transition-all duration-300 relative overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-amber-500/15 opacity-80" />
              <Gem className="h-5 w-5 text-amber-500 group-hover:text-amber-300 transition-colors drop-shadow-[0_0_8px_rgba(245,158,11,0.5)] stroke-[2]" />
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
