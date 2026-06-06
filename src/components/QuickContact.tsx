/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageSquare, ClipboardCheck, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface QuickContactProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenKakaoChat: () => void;
  onShowSuccessToast: (msg: string) => void;
}

export default function QuickContact({ onScrollToSection, onOpenKakaoChat, onShowSuccessToast }: QuickContactProps) {
  
  const handlePhoneClick = () => {
    // In preview we'll copy to clipboard or open a quick prompt to prevent blank routing
    const phoneNumber = '010-XXXX-XXXX';
    navigator.clipboard.writeText(phoneNumber).then(() => {
      onShowSuccessToast(`디와이먼스 상담 센터 연락처가 복사되었습니다 (${phoneNumber}). 즉시 유선 연락 하실 수 있습니다!`);
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quick Contacts Banner layout */}
        <div className="max-w-5xl mx-auto bg-slate-900 text-slate-100 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-slate-800">
          {/* Accent light decoration */}
          <div className="absolute top-0 right-0 h-48 w-48 bg-amber-500/10 blur-2xl z-0 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            
            {/* Header info */}
            <div className="space-y-4 max-w-md text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 text-[10px] text-amber-400 font-extrabold uppercase tracking-widest bg-amber-400/10 border border-amber-500/20 px-3 py-1 rounded-full">
                FAST TRACK
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                지금 마케팅 성공 궤도에 탑승하십시오.
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                오래 걸릴 이유가 없습니다. 실시간 연결 장치를 통하여 원하는 최선 형태의 소통 채널을 클릭하세요.
              </p>
            </div>

            {/* 3 Buttons Row / Column structure */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-auto self-stretch lg:self-center shrink-0">
              
              {/* Button 1: Phone call */}
              <button
                id="quick-phone-btn"
                onClick={handlePhoneClick}
                className="bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-200 hover:text-white rounded-2xl p-5 flex flex-col items-center justify-center text-center gap-3 active:scale-95 transition-all text-xs cursor-pointer group"
              >
                <div className="h-10 w-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400">
                  <Phone className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-1">
                  <p className="font-extrabold">📞 유선 전화 상담</p>
                  <p className="text-[10px] text-slate-500 font-mono group-hover:text-amber-400/80 transition-colors">클릭 시 번호복사 연결</p>
                </div>
              </button>

              {/* Button 2: Kakao Chat */}
              <button
                id="quick-kakao-btn"
                onClick={onOpenKakaoChat}
                className="bg-amber-400 hover:bg-amber-500 text-slate-950 rounded-2xl p-5 flex flex-col items-center justify-center text-center gap-3 active:scale-95 transition-all text-xs cursor-pointer group"
              >
                <div className="h-10 w-10 rounded-full bg-slate-950 flex items-center justify-center text-amber-400">
                  <MessageSquare className="h-4.5 w-4.5 fill-current" />
                </div>
                <div className="space-y-1">
                  <p className="font-extrabold text-slate-900">💬 카카오톡 상담</p>
                  <p className="text-[10px] text-slate-800 font-medium group-hover:text-slate-900 transition-colors">실시간 대화 시작</p>
                </div>
              </button>

              {/* Button 3: Free Diagnosis */}
              <button
                id="quick-diagnosis-btn"
                onClick={() => onScrollToSection('diagnosis')}
                className="bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-200 hover:text-white rounded-2xl p-5 flex flex-col items-center justify-center text-center gap-3 active:scale-95 transition-all text-xs cursor-pointer group"
              >
                <div className="h-10 w-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400">
                  <ClipboardCheck className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-1">
                  <p className="font-extrabold">📋 무료 진단 신청</p>
                  <p className="text-[10px] text-slate-500 group-hover:text-amber-400/80 transition-colors">정밀 웹 진단서 수집</p>
                </div>
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
