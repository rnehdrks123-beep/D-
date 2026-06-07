/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, User, ChevronRight, Check } from 'lucide-react';

interface FloatingKakaoProps {
  onOpenDiagnosis: () => void;
}

export default function FloatingKakao({ onOpenDiagnosis }: FloatingKakaoProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'ai' | 'user'; text: string; time: string }>>([
    {
      sender: 'ai',
      text: '안녕하세요! 디와이먼스(DYMonth)의 수석 마케팅 컨설턴트입니다. 🤝✨\n현재 운영 중이신 사업의 플레이스 노출 부족, 리드 및 문의 수 감소 등 마케팅 관련 고민을 안고 계신가요?\n\n편하게 질문해 주시면 업종 분석과 상위 노출, 성과 창출을 위한 핵심 원인 진단을 도와드리겠습니다!',
      time: '오후 2:24'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatTime = () => {
    const d = new Date();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const ampm = hours >= 12 ? '오후' : '오전';
    const dispHours = hours % 12 || 12;
    const dispMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${ampm} ${dispHours}:${dispMinutes}`;
  };

  const executeSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isSubmitting) return;

    const userTime = formatTime();
    const updatedMessages = [...messages, { sender: 'user' as const, text: textToSend, time: userTime }];
    setMessages(updatedMessages);
    setIsSubmitting(true);

    try {
      // Send the entire chat history so Gemini has complete context
      const chatPayload = updatedMessages.map(m => ({ sender: m.sender, text: m.text }));
      
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: chatPayload }),
      });

      if (!response.ok) {
        throw new Error('API communication error');
      }

      const data = await response.json();
      const aiReply = data.text || '죄송합니다. 메시지 분석 도중 오류가 발생했습니다.';
      
      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: aiReply, time: formatTime() }
      ]);
    } catch (error) {
      console.error('Failed to get AI response:', error);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: '죄송합니다. 수석 마케팅 컨설턴트와의 일시적인 통신 지연이 발생하고 있습니다.\n\n더 안정적이고 정교한 진단을 위해, 우측 하단의 [무료 진단 폼 바로가기] 전용 접수나 일대일 전문가 대면 미팅 신청을 활용해 주시길 권장해 드립니다.',
          time: formatTime()
        }
      ]);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const val = inputValue;
    if (!val.trim()) return;
    setInputValue('');
    executeSendMessage(val);
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* Subtle helper tooltip */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              id="kakao-floating-tooltip"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-slate-900 text-slate-100 hover:bg-slate-800 border border-slate-700 pointer-events-auto rounded-full py-2 px-4 shadow-lg text-xs font-semibold tracking-tight transition-all cursor-pointer flex items-center gap-2"
              onClick={() => setIsOpen(true)}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span>1초 카카오 상담 챗봇</span>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          id="kakao-floating-btn"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`pointer-events-auto flex items-center justify-center h-14 w-14 rounded-full bg-amber-400 shadow-xl border border-amber-500 text-slate-900 cursor-pointer focus:outline-none transition-all ${
            isOpen ? 'bg-slate-900 border-slate-800 text-amber-400' : ''
          }`}
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6 fill-current" />}
        </motion.button>
      </div>

      {/* Kakao-style Drawer Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="kakao-chat-window"
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed bottom-24 right-6 z-55 w-80 md:w-96 rounded-2xl border border-amber-500/30 bg-slate-950/98 shadow-2xl backdrop-blur-lg overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 px-5 py-4 border-b border-amber-500/20 flex items-center gap-3">
              <div className="relative">
                <div className="h-9 w-9 rounded-full bg-amber-400 flex items-center justify-center font-bold text-slate-950 text-xs">
                  DM
                </div>
                <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-slate-950"></div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-100 flex items-center gap-1.5 leading-none">
                  DyMonth AI 마케팅
                </h4>
                <p className="text-[10px] text-amber-400/90 font-medium leading-none mt-1">상담 자동화 지능 엔진 오퍼레이팅</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="ml-auto rounded-lg p-1 text-slate-400 hover:text-slate-100 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-1 p-4 h-[350px] overflow-y-auto space-y-4 text-xs font-sans">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex gap-2 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {m.sender === 'ai' && (
                    <div className="h-6 w-6 rounded-full bg-amber-400/20 border border-amber-500/20 flex items-center justify-center text-[10px] font-bold text-amber-400 shrink-0 select-none">
                      AI
                    </div>
                  )}
                  <div className={`flex flex-col max-w-[80%] ${m.sender === 'user' ? 'items-end' : 'items-start'}`}>
                    <div
                      className={`p-3 rounded-2xl whitespace-pre-line leading-relaxed ${
                        m.sender === 'user'
                          ? 'bg-amber-400 text-slate-950 rounded-tr-sm font-semibold'
                          : 'bg-slate-900 text-slate-200 border border-slate-800 rounded-tl-sm'
                      }`}
                    >
                      {m.text}
                    </div>
                    <span className="text-[9px] text-slate-500 mt-1 select-none">{m.time}</span>
                  </div>
                </div>
              ))}

              {isSubmitting && (
                <div className="flex gap-2 justify-start items-center">
                  <div className="h-6 w-6 rounded-full bg-amber-400/20 flex items-center justify-center text-[10px] font-bold text-amber-400 font-mono">
                    AI
                  </div>
                  <div className="bg-slate-900 border border-slate-800 p-3 rounded-2xl text-slate-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
            </div>

            {/* Quick CTAs */}
            <div className="px-4 py-2 border-t border-slate-800 bg-slate-900/40 flex flex-wrap gap-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenDiagnosis();
                }}
                className="text-[10px] bg-slate-900 border border-amber-500/40 hover:border-amber-400 text-amber-400 font-semibold py-1 px-2.5 rounded-full flex items-center gap-1 transition-all"
              >
                무료 진단 폼 바로가기 <ChevronRight className="h-3 w-3" />
              </button>
              <button
                onClick={() => {
                  executeSendMessage('디와이먼스 마케팅의 대표 포트폴리오 성공사례와 그 핵심 원인 분석을 설명해 주십시오.');
                }}
                className="text-[10px] bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 font-medium py-1 px-2.5 rounded-full transition-all"
              >
                📁 대표 포트폴리오
              </button>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-800 bg-slate-950 flex gap-2">
              <input
                id="kakao-chat-input"
                type="text"
                placeholder="마케팅 질문을 입력하세요..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 bg-slate-900 text-slate-100 rounded-xl px-3 py-2 text-xs border border-slate-800 focus:outline-none focus:border-amber-400 placeholder:text-slate-500 text-sans"
              />
              <button
                id="kakao-send-btn"
                type="submit"
                className="bg-amber-400 text-slate-950 p-2 rounded-xl hover:bg-amber-300 transition-colors shrink-0"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
