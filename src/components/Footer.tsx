/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Gem, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  return (
    <footer id="main-app-footer" className="bg-[#0b101f] text-slate-400 border-t border-slate-900/60 font-sans">
      
      {/* Top Footer Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Logo & Slogan Column */}
          <div className="lg:col-span-4 space-y-6">
            <div
              onClick={() => onScrollToSection('hero')}
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
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              디와이먼스(DyMonth)는 단순 정액 마케팅 비용 소진 구조를 전면 탈피하고, 구매로 직행하는 타겟 검색 장악력을 바탕으로 성과와 가치를 극대화합니다.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-extrabold">사업분야 (Services)</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => onScrollToSection('services')} className="hover:text-amber-400 transition-colors">
                  네이버 플레이스 최적화
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('services')} className="hover:text-amber-400 transition-colors">
                  브랜드 블로그 홍보 기획
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('services')} className="hover:text-amber-400 transition-colors">
                  프리미엄 블로그 브랜드 디자인
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('services')} className="hover:text-amber-400 transition-colors">
                  AI 메신저 자동 상담 구축
                </button>
              </li>
            </ul>
          </div>

          {/* Sitemaps */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-extrabold">주요메뉴 (Sitemap)</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => onScrollToSection('about')} className="hover:text-amber-400 transition-colors">
                  회사소개 (브랜드)
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('portfolio')} className="hover:text-amber-400 transition-colors">
                  포트폴리오 성공사례
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('reviews')} className="hover:text-amber-400 transition-colors">
                  고객 후기 모음
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('diagnosis')} className="hover:text-amber-400 transition-colors text-amber-400 font-extrabold">
                  무료 자가 진단
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-extrabold font-sans">상담 정보 (Contact)</h4>
            <ul className="space-y-3.5 text-xs font-sans">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-amber-400 shrink-0" />
                <span>대표전화: 0507-1370-0253</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-amber-400 shrink-0" />
                <span>이메일: dymonth.place@gmail.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <span>주소: 인천광역시 남동구 만수동46 312동 104호</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Corporate Info Footer Bottom styled exactly like the provided image */}
      <div className="bg-[#13151A] py-12 border-t border-slate-900/80 text-center px-4 font-sans">
        {/* Brand Logo & Name Area as seen in the uploaded picture */}
        <div className="flex items-center justify-center gap-3 mb-6 select-none">
          <svg className="h-8 w-10 text-slate-300" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 15H42C62 15 72 26 72 40C72 54 62 65 42 65H15V15Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="miter"/>
            <path d="M34 15L50 40L66 15" stroke="currentColor" strokeWidth="5" strokeLinejoin="miter"/>
            <path d="M34 65L50 40L66 65" stroke="currentColor" strokeWidth="5" strokeLinejoin="miter"/>
          </svg>
          <span className="text-xl sm:text-2xl font-bold tracking-wider text-slate-200">
            DYMONTH
          </span>
        </div>

        {/* Corporate Details Grid/Lists to match spacing from the photo */}
        <div className="max-w-4xl mx-auto space-y-1 text-xs text-slate-400 tracking-wide font-normal">
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-y-1.5 gap-x-4">
            <span>
              <span className="text-slate-500 font-medium">상호명 :</span> <span className="text-slate-400 font-medium">DyMonth</span>
            </span>
            <span className="hidden sm:inline text-slate-800">|</span>
            <span>
              <span className="text-slate-500 font-medium">대표자 :</span> <span className="text-slate-400 font-medium">구동건</span>
            </span>
            <span className="hidden sm:inline text-slate-800">|</span>
            <span>
              <span className="text-slate-500 font-medium">주소 :</span> <span className="text-slate-400 font-medium">인천광역시 남동구 만수동46 312동 104호</span>
            </span>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-y-1.5 gap-x-4">
            <span>
              <span className="text-slate-500 font-medium">문의전화 :</span> <span className="text-slate-400 font-medium">0507-1370-0253</span>
            </span>
            <span className="hidden sm:inline text-slate-800">|</span>
            <span>
              <span className="text-slate-500 font-medium">이메일 :</span> <span className="text-slate-400 font-medium">dymonth.place@gmail.com</span>
            </span>
            <span className="hidden sm:inline text-slate-800">|</span>
            <span>
              <span className="text-slate-500 font-medium">사업자번호 :</span> <span className="text-slate-400 font-medium">575-34-01814</span>
            </span>
          </div>
        </div>

        {/* Copyright notice formatted exactly like the photo */}
        <div className="mt-8 text-xs text-slate-500 tracking-widest font-normal">
          COPYRIGHT(C) DYMONTH ALL RIGHT RESERVED. <span className="text-slate-600">created by sinbiweb</span>
        </div>
      </div>

    </footer>
  );
}
