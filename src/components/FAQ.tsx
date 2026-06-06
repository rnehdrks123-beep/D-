/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_ITEMS } from '../data';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    if (openIdx === idx) {
      setOpenIdx(null);
    } else {
      setOpenIdx(idx);
    }
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 text-slate-900 border-b border-slate-150">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-3 font-mono">
            QUESTIONS & ANSWERS
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
            자주 묻는 질문 (FAQ)
          </h2>
          <div className="h-1 w-12 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
            디와이먼스에 문의하기에 앞서 고객분들이 가장 빈번하게 질문해 주시는 내용을 모았습니다.
          </p>
        </div>

        {/* Custom Collapsible Accordion Group */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? 'border-amber-400 bg-white shadow-md'
                    : 'border-slate-200/80 bg-white hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                {/* Header/Question bar */}
                <button
                  id={`faq-btn-${idx}`}
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left px-5 sm:px-6 py-5 flex items-center justify-between gap-4 font-sans select-none focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-amber-500 font-extrabold text-lg shrink-0 font-mono">Q.</span>
                    <span className="text-slate-800 font-bold text-sm sm:text-base leading-tight">
                      {item.question}
                    </span>
                  </div>
                  
                  {/* Plus/Minus Indicator */}
                  <div
                    className={`h-7 w-7 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-amber-400 border-amber-400 text-slate-950 rotate-180' : 'text-slate-500'
                    }`}
                  >
                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </button>

                {/* Answer drawer collapsing */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-drawer-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-100 flex gap-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                        <span className="text-blue-500 font-black text-lg shrink-0 font-mono">A.</span>
                        <div className="space-y-2 whitespace-pre-line text-[13px] md:text-sm font-sans pt-1">
                          {item.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
