/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Gem, Phone, Mail, MapPin } from 'lucide-react';
import officeMap from '../assets/images/office_map_location_1780761490736.png';

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
              <div className="h-11 w-11 rounded-full bg-gradient-to-b from-[#FAF9F5] to-[#EBE8DF] border border-[#D5D2C9] flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300 relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-neutral-100/15 mix-blend-overlay pointer-events-none" />
                <svg className="h-9.5 w-9.5 text-amber-500" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="luxuryGoldPrimaryF1" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#705219" />
                      <stop offset="15%" stopColor="#C5A059" />
                      <stop offset="30%" stopColor="#FDF1D0" />
                      <stop offset="45%" stopColor="#D8B263" />
                      <stop offset="55%" stopColor="#9C7730" />
                      <stop offset="75%" stopColor="#FEECA8" />
                      <stop offset="100%" stopColor="#5E4311" />
                    </linearGradient>
                    
                    <linearGradient id="luxuryGoldSecondaryF1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FDF0BD" />
                      <stop offset="50%" stopColor="#B48D37" />
                      <stop offset="100%" stopColor="#553A04" />
                    </linearGradient>

                    <filter id="luxuryEngraveF1" x="-10%" y="-10%" width="120%" height="120%">
                      <feDropShadow dx="0.5" dy="1.1" stdDeviation="0.4" flood-color="#2D1F08" flood-opacity="0.55" />
                      <feDropShadow dx="-0.3" dy="-0.3" stdDeviation="0.15" flood-color="#FFFFFF" flood-opacity="0.95" />
                    </filter>
                  </defs>

                  <g filter="url(#luxuryEngraveF1)">
                    <path 
                      d="M 43.5 45 C 31 45 23 51.5 23 62 C 23 72.5 31 79 43.5 79 C 43.5 79 43.5 76.2 43.5 76.2 C 34.5 76.2 28.2 71.8 28.2 62 C 28.2 52.2 34.5 47.8 43.5 47.8 Z" 
                      fill="url(#luxuryGoldPrimaryF1)" 
                      fillRule="evenodd" 
                    />
                    <path 
                      d="M 40.5 25 H 49.5 L 48.5 27 C 46 27 46 28.2 46 32 V 75.5 C 46 78 47.2 79 50.5 79 H 51.5 V 81 H 38.5 V 79 H 39.5 C 42.8 79 43.5 78 43.5 75.5 V 32 C 43.5 28.2 43.5 27 41.5 27 L 40.5 25 Z" 
                      fill="url(#luxuryGoldSecondaryF1)" 
                    />
                    <path 
                      d="M 46.5 54.5 C 51.5 53 56.5 51.5 59.5 56.5 C 61.2 59.5 62.5 62 62.5 62" 
                      stroke="url(#luxuryGoldPrimaryF1)" 
                      strokeWidth="1.6" 
                      strokeLinecap="round" 
                    />
                    <path 
                      d="M 74.5 50.5 C 76.5 54.5 75.5 57 71 66 L 62.5 83 C 57 91.5 49 95 38 95 C 24 95 17 88.5 17 81.5 C 17 76.5 20 74.2 23 74.2 C 26 74.2 28 76.5 28 80 C 28 85 32 90.5 37.5 90.5 C 44 90.5 49.5 85.5 53.5 76.5 L 59.5 64.5 C 57.2 59.5 53 55.5 48.5 51.2 Z" 
                      fill="url(#luxuryGoldPrimaryF1)" 
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
        <div className="flex flex-col items-center justify-center gap-2 mb-6 select-none">
          <div className="h-18 w-18 rounded-full bg-gradient-to-b from-[#FAF9F5] to-[#EBE8DF] border-2 border-[#D5D2C9] flex items-center justify-center shadow-2xl relative overflow-hidden shrink-0">
            <div className="absolute inset-0 bg-neutral-100/15 mix-blend-overlay pointer-events-none" />
            <svg className="h-15 w-15 text-amber-500" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="luxuryGoldPrimaryF2" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#705219" />
                  <stop offset="15%" stopColor="#C5A059" />
                  <stop offset="30%" stopColor="#FDF1D0" />
                  <stop offset="45%" stopColor="#D8B263" />
                  <stop offset="55%" stopColor="#9C7730" />
                  <stop offset="75%" stopColor="#FEECA8" />
                  <stop offset="100%" stopColor="#5E4311" />
                </linearGradient>
                
                <linearGradient id="luxuryGoldSecondaryF2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FDF0BD" />
                  <stop offset="50%" stopColor="#B48D37" />
                  <stop offset="100%" stopColor="#553A04" />
                </linearGradient>

                <filter id="luxuryEngraveF2" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0.5" dy="1.1" stdDeviation="0.4" flood-color="#2D1F08" flood-opacity="0.55" />
                  <feDropShadow dx="-0.3" dy="-0.3" stdDeviation="0.15" flood-color="#FFFFFF" flood-opacity="0.95" />
                </filter>
              </defs>

              <g filter="url(#luxuryEngraveF2)">
                <path 
                  d="M 43.5 45 C 31 45 23 51.5 23 62 C 23 72.5 31 79 43.5 79 C 43.5 79 43.5 76.2 43.5 76.2 C 34.5 76.2 28.2 71.8 28.2 62 C 28.2 52.2 34.5 47.8 43.5 47.8 Z" 
                  fill="url(#luxuryGoldPrimaryF2)" 
                  fillRule="evenodd" 
                />
                <path 
                  d="M 40.5 25 H 49.5 L 48.5 27 C 46 27 46 28.2 46 32 V 75.5 C 46 78 47.2 79 50.5 79 H 51.5 V 81 H 38.5 V 79 H 39.5 C 42.8 79 43.5 78 43.5 75.5 V 32 C 43.5 28.2 43.5 27 41.5 27 L 40.5 25 Z" 
                  fill="url(#luxuryGoldSecondaryF2)" 
                />
                <path 
                  d="M 46.5 54.5 C 51.5 53 56.5 51.5 59.5 56.5 C 61.2 59.5 62.5 62 62.5 62" 
                  stroke="url(#luxuryGoldPrimaryF2)" 
                  strokeWidth="1.6" 
                  strokeLinecap="round" 
                />
                <path 
                  d="M 74.5 50.5 C 76.5 54.5 75.5 57 71 66 L 62.5 83 C 57 91.5 49 95 38 95 C 24 95 17 88.5 17 81.5 C 17 76.5 20 74.2 23 74.2 C 26 74.2 28 76.5 28 80 C 28 85 32 90.5 37.5 90.5 C 44 90.5 49.5 85.5 53.5 76.5 L 59.5 64.5 C 57.2 59.5 53 55.5 48.5 51.2 Z" 
                  fill="url(#luxuryGoldPrimaryF2)" 
                  fillRule="evenodd" 
                />
              </g>
            </svg>
          </div>
          <span className="text-xl sm:text-2xl font-extrabold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 font-sans mt-1">
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

        {/* Dynamic & Glowing Office Location Map Section */}
        <div className="mt-8 max-w-xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0e1118]/80 p-2.5 shadow-2xl transition-all duration-300 hover:border-amber-500/30">
            <div className="text-left px-3 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-900/60 mb-2 gap-1.5">
              <span className="text-[11px] font-semibold text-amber-400 tracking-wider flex items-center gap-1.5 font-sans">
                <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse shrink-0" />
                DYMONTH 오피스 위치 정보
              </span>
              <span className="text-[10px] text-slate-500 font-sans">인천광역시 남동구 만수동46 312동 104호</span>
            </div>
            <img
              src={officeMap}
              alt="DyMonth Office Location Map in Mansu-dong"
              className="w-full h-auto rounded-lg shadow-inner filter grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ease-out"
              referrerPolicy="no-referrer"
            />
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
