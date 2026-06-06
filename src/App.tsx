/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyDyMonth from './components/WhyDyMonth';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';
import FreeDiagnosis from './components/FreeDiagnosis';
import QuickContact from './components/QuickContact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingKakao from './components/FloatingKakao';
import Notification from './components/Notification';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');
  const [isToastOpen, setIsToastOpen] = useState(false);

  // Scroll handler with active-section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'portfolio', 'reviews', 'diagnosis', 'contact', 'faq'];
      const scrollPosition = window.scrollY + 180; // offset header padding

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  const showSuccessToast = (msg: string) => {
    setToastType('success');
    setToastMessage(msg);
    setIsToastOpen(true);
  };

  const showErrorToast = (msg: string) => {
    setToastType('error');
    setToastMessage(msg);
    setIsToastOpen(true);
  };

  const triggerKakaoFirstConsult = () => {
    // Locate the kakao floating button and trigger opening
    const btn = document.getElementById('kakao-floating-btn');
    if (btn) {
      btn.click();
      showSuccessToast('💬 1초 카카오 상담 챗봇이 하단에 활성화되었습니다. 즉각 문의를 작성하여 본부장 매칭을 신청해 보세요!');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans select-none tracking-tight">
      
      {/* Premium Notification Center */}
      <Notification
        message={toastMessage}
        type={toastType}
        isOpen={isToastOpen}
        onClose={() => setIsToastOpen(false)}
      />

      {/* Header navbar */}
      <Header
        onScrollToSection={handleScrollToSection}
        activeSection={activeSection}
      />

      {/* Hero section */}
      <Hero
        onScrollToSection={handleScrollToSection}
      />

      {/* Why DyMonth Grid section */}
      <WhyDyMonth
        onScrollToSection={handleScrollToSection}
      />

      {/* Services detailed card list */}
      <Services
        onScrollToSection={handleScrollToSection}
      />

      {/* Success Portfolio and metrics case studies */}
      <Portfolio
        onScrollToSection={handleScrollToSection}
      />

      {/* Verified Client Reviews Touch Slider */}
      <Reviews />

      {/* Conversion funnel - Free Diagnosing Input form with local list tracking */}
      <FreeDiagnosis
        onShowSuccessToast={showSuccessToast}
        onShowErrorToast={showErrorToast}
      />

      {/* Fast contact actions (3 major button structure) */}
      <QuickContact
        onScrollToSection={handleScrollToSection}
        onOpenKakaoChat={triggerKakaoFirstConsult}
        onShowSuccessToast={showSuccessToast}
      />

      {/* Frequently Asked Accordions FAQ */}
      <FAQ />

      {/* Corporate transperancy sitemap Footer */}
      <Footer
        onScrollToSection={handleScrollToSection}
      />

      {/* Floating interactive 1sec consult Kakao assistant */}
      <FloatingKakao
        onOpenDiagnosis={() => handleScrollToSection('diagnosis')}
      />

    </div>
  );
}
