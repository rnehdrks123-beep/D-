/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, TrendingUp, ArrowRight, CornerRightDown } from 'lucide-react';
import { PORTFOLIO_CASES } from '../data';

interface PortfolioProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Portfolio({ onScrollToSection }: PortfolioProps) {
  return (
    <section id="portfolio" className="py-24 bg-slate-950 text-slate-100 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-3 font-mono">
            SUCCESS STORIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
            디와이먼스의 성과는 수치로 말합니다.
          </h2>
          <div className="h-1 w-12 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-5 text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
            의무적인 노출 횟수나 의미 없는 배너 제작에 예산을 낭비하지 마십시오.<br className="hidden sm:inline" />
            실제 고객사의 문의 트랙킹과 매출 배수 성장을 증명한 DyMonth의 핵심 성과사례입니다.
          </p>
        </div>

        {/* Portfolio Cards layout */}
        <div className="space-y-12">
          {PORTFOLIO_CASES.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group rounded-3xl border border-slate-800/80 bg-slate-900 p-6 sm:p-10 flex flex-col lg:flex-row gap-8 items-center lg:items-stretch transition-all duration-300 hover:border-amber-400/30 hover:shadow-2xl"
            >
              
              {/* Graphic stats dashboard col */}
              <div className="w-full lg:w-[35%] bg-slate-950 text-slate-100 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shrink-0 shadow-lg border border-slate-800/80">
                {/* Background Grid Accent */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>

                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-[10px] font-bold uppercase tracking-wider mb-4">
                    <Sparkles className="h-3 w-3 animate-pulse" />
                    <span>{item.industry}</span>
                  </span>
                  
                  <p className="text-xs text-slate-400 font-sans tracking-wide leading-none">{item.statName}</p>
                </div>

                {/* Main comparison metric visualizer */}
                <div className="my-8 flex items-center justify-between gap-6 relative z-10">
                  {/* Before state */}
                  <div className="text-center">
                    <span className="text-[10px] text-slate-400 block mb-1 uppercase tracking-widest font-semibold">BEFORE</span>
                    <span className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-500 block relative">
                      {item.statBefore}
                    </span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex flex-col items-center flex-1">
                    <TrendingUp className="h-5 w-5 text-amber-400 animate-pulse stroke-[2.5]" />
                    <div className="h-0.5 w-full bg-gradient-to-r from-slate-700 via-amber-400 to-slate-700 mt-2"></div>
                  </div>

                  {/* After state */}
                  <div className="text-center">
                    <span className="text-[10px] text-amber-400 block mb-1 uppercase tracking-widest font-black">AFTER</span>
                    <span className="text-3xl sm:text-4xl font-black font-sans text-amber-400 block relative drop-shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                      {item.statAfter}
                    </span>
                  </div>
                </div>

                {/* Total Gain Indicator */}
                <div className="bg-amber-400 hover:bg-amber-500 transition-colors text-slate-950 font-black rounded-xl p-3.5 flex items-center justify-between text-xs tracking-tight">
                  <span className="font-sans uppercase">실시간 수직상승 성과</span>
                  <span className="text-sm font-black font-mono">{item.statGain}</span>
                </div>

              </div>

              {/* Text content details col */}
              <div className="flex-1 flex flex-col justify-between">
                
                <div className="space-y-4">
                  {/* Tag List */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] sm:text-xs font-bold text-slate-300 bg-slate-800 rounded-lg px-2.5 py-1 font-sans">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-100 tracking-tight leading-tight group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-sans pt-1">
                    {item.desc}
                  </p>
                </div>

                {/* Sub Action */}
                <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">실험 및 세팅 기간 평균 3~4주 소요</span>
                  <button
                    onClick={() => onScrollToSection('diagnosis')}
                    className="text-xs sm:text-sm font-bold text-slate-100 hover:text-amber-400 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    이러한 성과 세팅하기 <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
