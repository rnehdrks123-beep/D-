/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, ArrowUpRight } from 'lucide-react';

interface WhyDyMonthProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function WhyDyMonth({ onScrollToSection }: WhyDyMonthProps) {
  const checkmarks = [
    '네이버 플레이스 최적화',
    '블로그 및 콘텐츠 마케팅',
    '검색광고 운영',
    '브랜드 신뢰도 구축',
    'AI 기반 마케팅 자동화',
  ];

  return (
    <section id="about" className="py-28 bg-slate-950 text-slate-100 border-b border-slate-900/80 relative overflow-hidden">
      {/* Subtle luxury light-leak effect in the background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-300 font-sans">
            왜 DyMonth여야 할까요?
          </h2>
          <div className="h-[2px] w-16 bg-gradient-to-r from-amber-500 via-amber-400 to-transparent mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Core Content Grid - 2 Column Luxury Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Philosophical/Strategy Narrative */}
          <div className="lg:col-span-7 space-y-8 text-slate-300">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="border-l-2 border-amber-500/40 pl-5 space-y-3">
                <p className="text-lg sm:text-xl font-bold text-slate-100 leading-snug tracking-tight">
                  광고는 단순히 노출을 늘리는 것이 아닙니다.
                </p>
                <p className="text-amber-400 font-semibold text-sm sm:text-base">
                  중요한 것은 실제 문의와 매출로 연결되는 결과입니다.
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                디와이먼스는 수많은 광고 상품을 판매하는 회사가 아닌,<br />
                <span className="text-white font-semibold">고객사의 성장 전략을 설계하는 마케팅 파트너</span>입니다.
              </p>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-sans">
                데이터 분석을 기반으로 시장과 경쟁사를 진단하고,<br />
                업종별 특성에 맞는 맞춤형 마케팅 전략을 수립하여<br />
                <span className="text-slate-200">실질적인 성과 창출에 집중합니다.</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-slate-900/60 border border-slate-900 rounded-2xl p-6 sm:p-7 space-y-4"
            >
              <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed font-sans">
                광고 집행 전에는 <span className="text-amber-400 font-semibold">철저한 분석</span>을,<br />
                광고 진행 중에는 <span className="text-amber-400 font-semibold">지속적인 개선</span>을,<br />
                광고 이후에는 <span className="text-amber-400 font-semibold">성과 검증</span>까지 책임집니다.
              </p>
              
              <div className="h-px bg-slate-800/60" />

              <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed font-sans font-medium">
                고객이 원하는 것은 광고가 아니라 성장입니다.<br />
                디와이먼스는 <span className="text-white font-extrabold underline decoration-amber-400/50 underline-offset-4">숫자로 증명되는 마케팅</span>을 제공합니다.
              </p>
            </motion.div>

          </div>

          {/* Right Column: Key Items List & Visual Highlight Quote */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Core Competencies Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-b from-[#0e1118]/90 to-[#131722]/90 border border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-2xl relative"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Sparkles className="h-20 w-20 text-amber-400" />
              </div>

              <h3 className="text-xs font-extrabold text-amber-400 tracking-[0.2em] uppercase mb-6 font-sans">
                CORE SOLUTIONS
              </h3>

              <div className="space-y-4">
                {checkmarks.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3.5 group">
                    <div className="h-6 w-6 rounded-md bg-amber-400/10 flex items-center justify-center shrink-0 border border-amber-500/20 group-hover:bg-amber-400 group-hover:border-amber-400 transition-all duration-300">
                      <Check className="h-3.5 w-3.5 text-amber-400 group-hover:text-slate-950 transition-colors" />
                    </div>
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors font-sans">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Luxurious Quote Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-400/5 via-amber-400/[0.02] to-transparent border border-amber-500/15 p-6 sm:p-8 text-center"
            >
              <div className="inline-block px-3 py-1 bg-amber-400/10 rounded-full border border-amber-500/20 mb-4">
                <span className="text-[10px] font-bold text-amber-400 tracking-[0.15em] font-sans">OUR VISION</span>
              </div>
              <p className="text-lg sm:text-2xl font-serif italic font-extrabold tracking-tight text-amber-300 leading-snug">
                "보이는 광고가 아닌,<br className="sm:hidden" /> 선택받는 브랜드를 만듭니다."
              </p>
            </motion.div>

          </div>

        </div>

        {/* Call to action panel optimized underneath */}
        <div className="mt-20 bg-slate-900 border border-slate-800/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-amber-500/20 transition-all duration-300 shadow-xl">
          <div className="flex items-center gap-4">
            <span className="relative flex h-3 w-3 select-none shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400"></span>
            </span>
            <p className="text-xs sm:text-sm font-semibold text-slate-300 tracking-tight leading-relaxed">
              지금 귀사만을 위한 맞춤 전략 보고서를 단 15분 만에 무료로 진단 신청해 보세요.
            </p>
          </div>
          <button
            onClick={() => onScrollToSection('diagnosis')}
            className="whitespace-nowrap bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-extrabold px-6 py-3 rounded-lg border border-[#C9A227]/20 transition-all active:scale-95 cursor-pointer shadow-lg"
          >
            15분 무료 마케팅 진단하기
          </button>
        </div>

      </div>
    </section>
  );
}
