/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Target, BarChart2, Sliders, ShieldAlert, Award, ArrowUpRight } from 'lucide-react';
import { WHY_ITEMS } from '../data';

interface WhyDyMonthProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function WhyDyMonth({ onScrollToSection }: WhyDyMonthProps) {
  // Map icons based on array items
  const getIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Target className="h-6 w-6 text-amber-400 stroke-[1.8]" />;
      case '02':
        return <BarChart2 className="h-6 w-6 text-amber-400 stroke-[1.8]" />;
      case '03':
        return <Sliders className="h-6 w-6 text-amber-400 stroke-[1.8]" />;
      case '04':
        return <Award className="h-6 w-6 text-amber-400 stroke-[1.8]" />;
      default:
        return <Award className="h-6 w-6 text-amber-400 stroke-[1.8]" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-slate-950 text-slate-100 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-3 font-mono">
            WHY DYMONTH
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
            왜 디와이먼스(DyMonth)여야 하는가?
          </h2>
          <div className="h-1 w-12 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-5 text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
            마케팅 비용 소진만 유도하는 불합리한 정액제 광고에서 탈피하십시오.<br className="hidden sm:inline" />
            DyMonth는 오직 고객사의 매출 증폭과 실질 구매 전환율을 목표로 움직입니다.
          </p>
        </div>

        {/* 4 Cards Grid - Fully beautiful and polished */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-slate-900 border border-slate-800/80 hover:border-amber-400/40 rounded-2xl p-6 transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Upper row: Icon & Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="h-12 w-12 rounded-xl bg-amber-400/10 group-hover:bg-amber-400 group-hover:text-slate-950 flex items-center justify-center transition-colors">
                    {getIcon(item.number)}
                  </div>
                  <span className="text-3xl font-black text-slate-800/50 group-hover:text-amber-400/25 font-mono select-none transition-colors">
                    {item.number}
                  </span>
                </div>

                {/* Card Title & Desc */}
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-amber-400 tracking-tight transition-colors">
                  {item.title}
                </h3>
                <p className="text-amber-400 group-hover:text-amber-300 text-xs font-semibold mt-1 transition-colors">
                  {item.desc}
                </p>
                <p className="text-slate-400 group-hover:text-slate-300 text-xs sm:text-[13px] leading-relaxed mt-4 font-sans transition-colors">
                  {item.subText}
                </p>
              </div>

              {/* Arrow Indicator */}
              <div className="mt-8 flex justify-end">
                <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

            </motion.div>
          ))}
        </div>

        {/* Extra Action Banner under the grid */}
        <div className="mt-12 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="relative flex h-3 w-3 select-none">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400"></span>
            </span>
            <p className="text-xs sm:text-sm font-semibold text-slate-300 tracking-tight leading-relaxed">
              지금 귀사 상태의 마케팅 병목 현상 리포트를 단 15분 만에 무료로 진단 전송받아보세요.
            </p>
          </div>
          <button
            onClick={() => onScrollToSection('diagnosis')}
            className="whitespace-nowrap bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-extrabold px-6 py-3 rounded-lg border border-[#C9A227]/20 transition-all active:scale-95 cursor-pointer"
          >
            15분 무료 마케팅 진단하기
          </button>
        </div>

      </div>
    </section>
  );
}
