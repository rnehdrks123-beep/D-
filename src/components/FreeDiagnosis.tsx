/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileSearch, Sparkles, Building2, UserCircle, PhoneCall, Tags, AlignLeft, CalendarClock, Trash2, CheckCircle2 } from 'lucide-react';
import { Inquiry } from '../types';

interface FreeDiagnosisProps {
  onShowSuccessToast: (msg: string) => void;
  onShowErrorToast: (msg: string) => void;
}

export default function FreeDiagnosis({ onShowSuccessToast, onShowErrorToast }: FreeDiagnosisProps) {
  const [bizName, setBizName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [industry, setIndustry] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [myInquiries, setMyInquiries] = useState<Inquiry[]>([]);

  // Fetch saved submissions
  useEffect(() => {
    try {
      const stored = localStorage.getItem('dymonth_inquiries');
      if (stored) {
        setMyInquiries(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load local inquiries', e);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bizName.trim() || !contactName.trim() || !phone.trim() || !industry.trim() || !content.trim()) {
      onShowErrorToast('모든 입력 필수 항목을 빠짐없이 채워주세요!');
      return;
    }

    setIsSubmitting(true);

    // Simulate database post response delay
    setTimeout(() => {
      const newInquiry: Inquiry = {
        id: 'inq-' + Date.now(),
        businessName: bizName,
        contactName: contactName,
        phone: phone,
        industry: industry,
        content: content,
        status: 'pending',
        createdAt: new Date().toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      const updated = [newInquiry, ...myInquiries];
      setMyInquiries(updated);
      localStorage.setItem('dymonth_inquiries', JSON.stringify(updated));

      // Clear Form Fields
      setBizName('');
      setContactName('');
      setPhone('');
      setIndustry('');
      setContent('');

      setIsSubmitting(false);
      onShowSuccessToast('무료 정밀 진단이 정상 접수되었습니다! (내역은 아래에서 확인 가능합니다)');
    }, 1500);
  };

  const handleDeleteInquiry = (id: string) => {
    const updated = myInquiries.filter((item) => item.id !== id);
    setMyInquiries(updated);
    localStorage.setItem('dymonth_inquiries', JSON.stringify(updated));
    onShowSuccessToast('접수 신청 내역이 목록에서 영구 취소되었습니다.');
  };

  return (
    <section id="diagnosis" className="py-24 bg-gradient-to-br from-[#0F1115] via-[#171A21] to-[#0F1115] text-white relative border-b border-slate-900">
      
      {/* Absolute Amber Ambient Light */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-4 font-mono flex items-center justify-center gap-2">
            <span className="relative flex h-2 w-2 select-none">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
            <span>DIAGNOSIS CENTER</span>
          </span>
          <h2 className="text-2.5xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
            우리 업체 현재 마케팅 상태가 궁금하신가요?
          </h2>
          <p className="mt-3 text-lg sm:text-xl font-medium text-amber-400 font-sans">
            포화된 시장 속 탈출구를 무료로 진단해드립니다.
          </p>
          <div className="h-1 w-12 bg-amber-400 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Diagnostic Form Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Informational Panel (Left) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900/60 border border-amber-500/20 rounded-2xl p-6">
              <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2 mb-3">
                <FileSearch className="h-4.5 w-4.5 text-amber-400" />
                <span>정밀 진단 분석 수순</span>
              </h3>
              <ul className="space-y-4 text-xs text-slate-300 font-sans">
                <li className="flex items-start gap-2.5">
                  <span className="h-5 w-5 rounded-full bg-amber-400 text-slate-950 font-bold flex items-center justify-center shrink-0">1</span>
                  <span>작성해 주신 연락처와 업종에 맞춤 키워드 현황 즉시 색출</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-5 w-5 rounded-full bg-amber-400 text-slate-950 font-bold flex items-center justify-center shrink-0">2</span>
                  <span>동일 반경 3km 내 경쟁 지표 역추적 및 노출 병목 요인 해독</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-5 w-5 rounded-full bg-amber-400 text-slate-950 font-bold flex items-center justify-center shrink-0">3</span>
                  <span>해당 결과 리포트 카카오톡 발송 및 무료 브리핑 상담 개시</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 text-center">
              <span className="text-3xl font-black text-amber-400 block font-mono">10,000+</span>
              <p className="text-xs text-slate-400 font-medium mt-1">자가 업종 매칭 분석 진단 완료 건수</p>
              <div className="mt-4 inline-flex items-center gap-1 text-[11px] text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-full">
                <Sparkles className="h-3 w-3 text-amber-400" />
                <span>실시간 데이터베이스 보안 적용 중</span>
              </div>
            </div>
          </div>

          {/* Core Interactive Form Container (Right) */}
          <div className="lg:col-span-8 bg-slate-900/40 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <h3 className="text-lg font-bold text-slate-100 mb-6 flex items-center gap-2">
              <span className="h-6 w-1 bg-amber-400 rounded-full"></span>
              <span>1분 무료 진단 입력 폼</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* 업체명 */}
                <div className="space-y-2">
                  <label htmlFor="bizName" className="text-xs font-bold text-slate-300 flex items-center gap-1.5 uppercase tracking-wide">
                    <Building2 className="h-4 w-4 text-amber-400" />
                    <span>업체명 <span className="text-amber-400">*</span></span>
                  </label>
                  <input
                    id="bizName"
                    type="text"
                    required
                    placeholder=""
                    value={bizName}
                    onChange={(e) => setBizName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none transition-all placeholder:text-slate-600 font-sans"
                  />
                </div>

                {/* 담당자명 */}
                <div className="space-y-2">
                  <label htmlFor="contactName" className="text-xs font-bold text-slate-300 flex items-center gap-1.5 uppercase tracking-wide">
                    <UserCircle className="h-4 w-4 text-amber-400" />
                    <span>담당자명 <span className="text-amber-400">*</span></span>
                  </label>
                  <input
                    id="contactName"
                    type="text"
                    required
                    placeholder=""
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none transition-all placeholder:text-slate-600 font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* 연락처 */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold text-slate-300 flex items-center gap-1.5 uppercase tracking-wide">
                    <PhoneCall className="h-4 w-4 text-amber-400" />
                    <span>연락처 <span className="text-amber-400">*</span></span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder=""
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none transition-all placeholder:text-slate-600 font-sans"
                  />
                </div>

                {/* 업종 */}
                <div className="space-y-2">
                  <label htmlFor="industry" className="text-xs font-bold text-slate-300 flex items-center gap-1.5 uppercase tracking-wide">
                    <Tags className="h-4 w-4 text-amber-400" />
                    <span>업종 선택 <span className="text-amber-400">*</span></span>
                  </label>
                  <select
                    id="industry"
                    required
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl px-4 py-3.5 text-sm text-slate-300 focus:outline-none transition-all font-sans cursor-pointer"
                  >
                    <option value="" disabled>-- 선택해 주세요 --</option>
                    <option value="청소 홈케어">청소 및 시설 홈케어</option>
                    <option value="인테리어/시공">인테리어 설계 및 시공</option>
                    <option value="뷰티/미용/샵">뷰티 샵 및 에스테틱</option>
                    <option value="외식/요식업">맛집 및 일반 프랜차이즈</option>
                    <option value="개인소상공인">기타 개인 소상공인</option>
                    <option value="기업마케팅">일반 기업 브랜드 컨설팅</option>
                  </select>
                </div>
              </div>

              {/* 문의내용 */}
              <div className="space-y-2">
                <label htmlFor="content" className="text-xs font-bold text-slate-300 flex items-center gap-1.5 uppercase tracking-wide">
                  <AlignLeft className="h-4 w-4 text-amber-400" />
                  <span>진단 요청할 고민 및 상세내용 <span className="text-amber-400">*</span></span>
                </label>
                <textarea
                  id="content"
                  required
                  rows={4}
                  placeholder="예: 근처 동종 업계 플레이스 순위가 최근 너무 밀렸습니다. 블로그와 예약 연결 장치가 시급해요."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none transition-all resize-none placeholder:text-slate-600 font-sans"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                id="submit-diagnosis-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-black text-sm py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/25 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-slate-950 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-slate-950 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span>정밀 분석 및 데이터 추출 중...</span>
                  </div>
                ) : (
                  <>
                    <span>무료 진단 신청하기</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

        {/* Real-Time interactive list of inquiries inside preview (Craftsmanship detail) */}
        {myInquiries.length > 0 && (
          <div className="max-w-4xl mx-auto mt-16 pt-12 border-t border-slate-800/80">
            <h3 className="text-sm font-bold text-amber-400 block font-mono mb-6 uppercase tracking-wider flex items-center gap-2">
              <CalendarClock className="h-4.5 w-4.5" />
              <span>실시간 내 무상 진단 자가 접수 내역 ({myInquiries.length}건)</span>
            </h3>
            
            <div className="space-y-4">
              {myInquiries.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-sans"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-sm text-amber-400">{item.businessName}</span>
                      <span className="text-[10px] bg-slate-850 px-2 py-0.5 rounded text-slate-400">{item.industry}</span>
                    </div>
                    <p className="text-slate-300">
                      <span className="text-slate-500">담당:</span> {item.contactName} ({item.phone}) • <span className="text-slate-500">요구:</span> "{item.content}"
                    </p>
                    <p className="text-[10px] text-slate-500">접수 날짜: {item.createdAt}</p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 self-stretch md:self-auto justify-between border-t md:border-t-0 border-slate-800/40 pt-3 md:pt-0">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 font-bold font-mono">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-yellow-500"></span>
                      </span>
                      <span>진단서 추출 중</span>
                    </span>

                    <button
                      onClick={() => handleDeleteInquiry(item.id)}
                      className="text-slate-500 hover:text-red-400 p-2 rounded-lg hover:bg-slate-850 transition-colors cursor-pointer"
                      title="접수 취소"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
