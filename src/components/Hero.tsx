/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, CalendarRange, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import heroBg from '../assets/images/hero_office_premium_bg_1780755915082.png';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center justify-center bg-[#0F1115] overflow-hidden pt-24 pb-16">
      
      {/* Background image & gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Premium Office Interior"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 select-none pointer-events-none"
        />
        {/* Navy dark linear and radial gradients to perfectly blend the image into background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-[#0F1115]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1115]/90 via-transparent to-[#0F1115]/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0F1115_90%)]"></div>
      </div>

      {/* Decorative Gold & Indigo Ambient Lights */}
      <div className="absolute top-1/4 left-1/4 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl z-0 pointer-events-none animate-pulse duration-[6000ms]"></div>
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl z-0 pointer-events-none animate-pulse duration-[8000ms]"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Animated Badge */}
        <motion.div
          id="hero-badge"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold font-sans tracking-wide mb-6 shadow-md"
        >
          <Sparkles className="h-3.5 w-3.5 animate-spin duration-3000" />
          <span>PREMIUM MARKETING AGENCY • DYMONTH</span>
        </motion.div>

        {/* 메인 카피 (Main Heading) */}
        {/* Mobile Header: 2 lines in title maximum as required by Mobile Optimization rule */}
        <motion.h1
          id="hero-main-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3.5xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-sans max-w-4xl leading-[1.15] mb-5"
        >
          매출을 만드는 마케팅,<br className="sm:hidden" />
          <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent drop-shadow-sm">
            광고가 아닌 성과
          </span>
          를 설계합니다.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          id="hero-subtext"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-slate-300 font-medium font-sans max-w-3xl leading-relaxed mb-10 px-4"
        >
          네이버 브랜드 블로그  플레이스  비주얼 브랜딩  AI 자동화<br />
          심리학 기반의 정밀한 블로그 기획과 노출 제어로 확실한 성과와 신뢰를 안겨드립니다.
        </motion.p>

        {/* Buttons (Responsive 2-button layout) */}
        <motion.div
          id="hero-cta-buttons"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-6"
        >
          <button
            id="hero-primary-cta"
            onClick={() => onScrollToSection('diagnosis')}
            className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold text-base px-8 py-4 rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-amber-400/20 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span>무료 진단 신청</span>
            <ArrowRight className="h-4.5 w-4.5" />
          </button>
          <button
            id="hero-secondary-cta"
            onClick={() => onScrollToSection('portfolio')}
            className="w-full sm:w-auto bg-slate-900/30 hover:bg-slate-800/80 text-white font-bold text-base px-8 py-4 rounded-xl border border-slate-700 backdrop-blur-md flex items-center justify-center gap-2 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span>포트폴리오 보기</span>
          </button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          id="hero-trust-indicators"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 border-t border-slate-800/60 pt-8 max-w-3xl w-full"
        >
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">1,125%</span>
            <span className="text-xs text-slate-400 mt-1 font-sans">브랜드 블로그 평균 문의 증가</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">1:1</span>
            <span className="text-xs text-slate-400 mt-1 font-sans">전문 컨설턴트 책임 세팅</span>
          </div>
          <div className="flex flex-col items-center col-span-2 md:col-span-1 border-t md:border-t-0 border-slate-800/40 pt-4 md:pt-0">
            <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-sans">15분</span>
            <span className="text-xs text-slate-400 mt-1 font-sans">실시간 AI 진단 대응</span>
          </div>
        </motion.div>

      </div>

    </section>
  );
}
