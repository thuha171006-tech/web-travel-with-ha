import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import DestinationList from './components/DestinationList';
import Itineraries from './components/Itineraries';
import CostCalculator from './components/CostCalculator';
import PhotoGallery from './components/PhotoGallery';
import Comments from './components/Comments';
import ContactForm from './components/ContactForm';
import { Compass, Heart, MapPin, Mail, Sparkles, ChevronUp, Github, ArrowUp } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // 1. Intersection Observer to highlight navbar links on scroll
    const sections = ['home', 'about', 'destinations', 'itineraries', 'costs', 'gallery', 'comments', 'contact'];
    const observers = sections.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies the mid viewport
        }
      );
      observer.observe(element);
      return { observer, element };
    });

    // 2. Track scroll to display 'Back to Top' button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.element);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div id="app-root-container" className="min-h-screen flex flex-col relative overflow-x-hidden select-none selection:bg-amber-500/20 selection:text-amber-900">
      
      {/* Sticky Header with Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* 1. Hero banner */}
        <Hero />

        {/* 2. About Me section */}
        <AboutMe />

        {/* 3. Destinations section */}
        <DestinationList />

        {/* 4. Suggested Itineraries */}
        <Itineraries />

        {/* 5. Cost Reference and Calculator */}
        <CostCalculator />

        {/* 6. Photos album gallery with Lightbox */}
        <PhotoGallery />

        {/* 7. Comments and ratings board */}
        <Comments />

        {/* 8. Contact suggestions form with received email inbox */}
        <ContactForm />
      </main>

      {/* Beautiful Footer */}
      <footer id="app-footer" className="bg-stone-900 text-stone-100 border-t border-stone-800">
        
        {/* Top footer section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Col 1: Brand Info (5 columns) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 rounded-full bg-amber-500 text-stone-900">
                <Compass className="w-5 h-5 animate-spin-slow" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight">
                Travel <span className="text-amber-400">With Hà</span>
              </span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm text-justify">
              Blog chia sẻ trải nghiệm du lịch cá nhân phi thương mại. Hy vọng những lịch trình chi tiết và máy tính chi phí dự phòng của Hà sẽ giúp chuyến đi sắp tới của bạn thêm phần thảnh thơi và trọn vẹn!
            </p>
            <div className="flex items-center space-x-2 text-xs text-amber-400 bg-amber-400/5 border border-amber-400/20 px-3 py-1.5 rounded-xl w-fit">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Chân thực • Tự túc • Trọn vẹn</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 columns) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-amber-400">Đường Dẫn Nhanh</h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <span>•</span> <span>Giới thiệu về Hà</span>
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <span>•</span> <span>Địa điểm nổi tiếng</span>
                </a>
              </li>
              <li>
                <a href="#itineraries" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <span>•</span> <span>Lịch trình gợi ý</span>
                </a>
              </li>
              <li>
                <a href="#costs" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <span>•</span> <span>Dự toán chi phí</span>
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <span>•</span> <span>Thư viện ảnh xê dịch</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal / Disclaimer (4 columns) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-amber-400">Cam Kết Phi Thương Mại</h4>
            <p className="text-stone-400 text-xs leading-relaxed text-justify">
              Website này được xây dựng với mục đích phi lợi nhuận, chia sẻ cẩm nang và lưu trữ kỷ niệm. Hà không liên kết quảng cáo, bán sản phẩm dịch vụ hay đặt tour. Mọi đánh giá đều xuất phát từ trải nghiệm khách quan 100%.
            </p>
            <div className="flex items-center space-x-1.5 text-xs text-stone-300">
              <Mail className="w-4 h-4 text-amber-500" />
              <span className="font-mono">thuha171006@gmail.com</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright statement */}
        <div className="border-t border-stone-800 py-6 text-center text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Travel With Hà. Tất cả quyền được bảo lưu.</p>
          <p className="mt-1 flex items-center justify-center space-x-1">
            <span>Thiết kế bằng cả</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
            <span>cho cộng đồng yêu xê dịch Việt Nam</span>
          </p>
        </div>

      </footer>

      {/* Floating Back-To-Top Button */}
      {showScrollTop && (
        <button
          id="scroll-to-top-floating-btn"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 bg-amber-500 hover:bg-amber-600 text-stone-950 p-3.5 rounded-full shadow-lg shadow-amber-500/20 transform hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-amber-400"
          title="Cuộn lên đầu trang"
        >
          <ArrowUp className="w-5 h-5 font-bold" />
        </button>
      )}

    </div>
  );
}
