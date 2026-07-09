import React from 'react';
import { Compass, ChevronDown, MapPin, Sparkles } from 'lucide-react';
import { HERO_BANNER_IMAGE } from '../data';

export default function Hero() {
  const scrollToExplore = () => {
    const element = document.getElementById('about');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-900"
    >
      {/* Background Image with elegant slow zoom animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={HERO_BANNER_IMAGE}
          alt="Sapa Golden Hour Terraces"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80';
          }}
          className="w-full h-full object-cover opacity-65 scale-105 animate-subtle-zoom"
          referrerPolicy="no-referrer"
        />
        {/* Dynamic Vignette & Rich Warm Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f6] via-stone-900/60 to-stone-900/40 z-0" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-16">
        {/* Top Accent badge */}
        <div 
          id="hero-badge"
          className="inline-flex items-center space-x-2 bg-amber-500/30 border border-amber-400/50 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 animate-pulse-slow"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-amber-100">
            Blog Chia Sẻ Trải Nghiệm Du Lịch Cá Nhân
          </span>
        </div>

        {/* Majestic Title with Playfair Serif */}
        <h1 
          id="hero-main-title"
          className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight drop-shadow-lg"
        >
          Travel <span className="text-amber-400 italic">With Hà</span>
        </h1>

        {/* Subtitle */}
        <p 
          id="hero-subtitle"
          className="text-lg sm:text-2xl text-stone-100 font-light max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow"
        >
          Lưu giữ những khoảnh khắc tuyệt mỹ, sẻ chia trọn vẹn lịch trình, chi phí thực tế và nguồn cảm hứng bất tận cho hành trình khám phá Việt Nam của bạn.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="hero-explore-btn"
            onClick={scrollToExplore}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-600 text-stone-900 hover:text-white px-8 py-4 rounded-full font-semibold text-base shadow-lg shadow-amber-500/20 transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            <Compass className="w-5 h-5 animate-spin-slow" />
            <span>Khám Phá Ngay</span>
          </button>
          <button
            id="hero-about-btn"
            onClick={() => {
              const el = document.getElementById('destinations');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium text-base transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            <MapPin className="w-5 h-5 text-amber-300" />
            <span>Xem Địa Điểm</span>
          </button>
        </div>

        {/* Decorative Grid of Highlight Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto border-t border-white/20 pt-8 text-stone-200">
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-amber-400">06+</p>
            <p className="text-xs sm:text-sm text-stone-300 font-medium uppercase tracking-wider">Kỳ Quan Việt Nam</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-amber-400">100%</p>
            <p className="text-xs sm:text-sm text-stone-300 font-medium uppercase tracking-wider">Trải Nghiệm Thực Tế</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-amber-400">Phi TM</p>
            <p className="text-xs sm:text-sm text-stone-300 font-medium uppercase tracking-wider">Không Kinh Doanh</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-amber-400">Free</p>
            <p className="text-xs sm:text-sm text-stone-300 font-medium uppercase tracking-wider">Lịch Trình Chi Tiết</p>
          </div>
        </div>
      </div>

      {/* Pulse Anchor Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <span className="text-xs uppercase text-stone-400 tracking-widest mb-2 font-medium">Cuộn xuống</span>
        <button
          id="hero-scroll-down-arrow"
          onClick={scrollToExplore}
          className="p-2 rounded-full bg-stone-800/40 border border-stone-700/50 backdrop-blur text-amber-400 animate-bounce cursor-pointer hover:bg-stone-700/60"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
