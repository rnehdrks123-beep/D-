/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { REVIEW_ITEMS } from '../data';

export default function Reviews() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left slide, 1 for right slide
  const autoPlayRef = useRef<(() => void) | null>(null);

  const prevSlide = () => {
    setDirection(-1);
    setActiveIdx((prev) => (prev === 0 ? REVIEW_ITEMS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection(1);
    setActiveIdx((prev) => (prev === REVIEW_ITEMS.length - 1 ? 0 : prev + 1));
  };

  autoPlayRef.current = nextSlide;

  useEffect(() => {
    const play = () => {
      if (autoPlayRef.current) autoPlayRef.current();
    };
    const timer = setInterval(play, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section id="reviews" className="py-24 bg-slate-950 text-white relative overflow-hidden border-b border-slate-900">
      
      {/* Absolute Decorative Graphic Elements */}
      <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-10 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-3 font-mono">
            CLIENT REVIEWS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
            현장의 사장님들께서 입증해 주신 신뢰
          </h2>
          <div className="h-1 w-12 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-5 text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
            포장만 가득한 광고 대행사의 성과가 아닙니다.<br className="hidden sm:inline" />
            치열한 자영업 및 전문직 시장에서 매출 성장 구조를 직접 확인하신 리얼 후기입니다.
          </p>
        </div>

        {/* Carousel/Slide Section */}
        <div className="relative max-w-4xl mx-auto min-h-[350px] md:min-h-[300px] flex items-center justify-center px-4">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIdx}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 350, damping: 30 },
                opacity: { duration: 0.25 }
              }}
              className="w-full bg-slate-900/60 border border-slate-800/80 rounded-3xl p-8 md:p-12 shadow-2xl relative"
            >
              <Quote className="absolute top-6 right-8 h-12 w-12 text-amber-500/10 stroke-[1.5]" />
              
              {/* Star Rating Rendering */}
              <div className="flex items-center gap-1.5 mb-6">
                {[...Array(REVIEW_ITEMS[activeIdx].stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400 stroke-[1.5]" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-base sm:text-lg md:text-xl font-bold font-sans text-slate-200 leading-relaxed max-w-3xl mb-8 whitespace-pre-line">
                "{REVIEW_ITEMS[activeIdx].text}"
              </blockquote>

              {/* Review Creator Profile */}
              <div className="flex items-center justify-between border-t border-slate-800/60 pt-6">
                <div>
                  <p className="text-sm font-extrabold text-slate-100">{REVIEW_ITEMS[activeIdx].author}</p>
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    {REVIEW_ITEMS[activeIdx].bizType}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left/Right Carousel Actions */}
          <button
            id="review-prev-slide-btn"
            onClick={prevSlide}
            className="absolute left-[-15px] sm:left-[-30px] p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-400 transition-all shadow-xl active:scale-90 focus:outline-none cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            id="review-next-slide-btn"
            onClick={nextSlide}
            className="absolute right-[-15px] sm:right-[-30px] p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-400 transition-all shadow-xl active:scale-90 focus:outline-none cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Bullet Progress Indicators */}
        <div className="flex justify-center items-center gap-2.5 mt-10">
          {REVIEW_ITEMS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > activeIdx ? 1 : -1);
                setActiveIdx(idx);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === activeIdx ? 'w-8 bg-amber-400' : 'w-2.5 bg-slate-800 hover:bg-slate-700'
              }`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
}
