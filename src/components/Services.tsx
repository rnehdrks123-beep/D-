/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, FileText, Laptop, Cpu, TrendingUp, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { SERVICE_ITEMS } from '../data';

interface ServicesProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Services({ onScrollToSection }: ServicesProps) {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'MapPin':
        return <MapPin className="h-6 w-6" />;
      case 'FileText':
        return <FileText className="h-6 w-6" />;
      case 'Laptop':
        return <Laptop className="h-6 w-6" />;
      case 'Cpu':
        return <Cpu className="h-6 w-6" />;
      case 'TrendingUp':
        return <TrendingUp className="h-6 w-6" />;
      default:
        return <Laptop className="h-6 w-6" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-950 text-white border-b border-slate-900 relative">
      {/* Light glow elements */}
      <div className="absolute top-1/2 left-0 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-3 font-mono">
            WHAT WE DO
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
            비즈니스 스케일업을 위한<br className="sm:hidden" /> 최고 수준의 디지털 마케팅
          </h2>
          <div className="h-1 w-12 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-5 text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
            포털 검색 점령부터 웹 제작, 실시간 AI 응대 체계 구축까지<br className="hidden sm:inline" />
            각 업종 특수성을 극대화하여 실제 문의 전화가 발생하는 고효율 마케팅을 제안합니다.
          </p>
        </div>

        {/* Services Grid (Strictly 1 column on Mobile, Grid on Desktop) */}
        {/* Adheres strictly to: '서비스 4열 금지, 모바일은 1열 카드, 1열 카드...' */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_ITEMS.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredService(srv.id)}
              onMouseLeave={() => setHoveredService(null)}
              className="relative rounded-2xl bg-slate-900 border border-slate-800/80 p-8 flex flex-col justify-between hover:border-amber-400/50 hover:bg-slate-900/90 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Ribbon Badge */}
                {srv.badge && (
                  <span className="absolute top-4 right-4 text-[10px] bg-amber-400 text-slate-950 font-black tracking-normal px-2.5 py-0.5 rounded-full uppercase">
                    {srv.badge}
                  </span>
                )}

                {/* Service Header: Icon & title */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-amber-400/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                    {getIcon(srv.iconName)}
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 tracking-tight">{srv.title}</h3>
                </div>

                <p className="text-sm font-semibold text-amber-400/90 leading-relaxed mb-6 font-sans">
                  {srv.desc}
                </p>

                {/* Details List */}
                <ul className="space-y-3.5 mb-8">
                  {srv.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-[13px] text-slate-300 leading-relaxed">
                      <Check className="h-4 w-4 text-amber-500 shrink-0 mt-0.5 stroke-[3]" />
                      <span className="font-sans">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Prompt */}
              <div className="pt-6 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-semibold group-hover:text-amber-300 transition-colors">
                <button
                  onClick={() => onScrollToSection('diagnosis')}
                  className="hover:text-amber-400 flex items-center gap-1.5 cursor-pointer selection:bg-slate-800 text-slate-300 font-bold"
                >
                  상세 진단 신청하기 <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
