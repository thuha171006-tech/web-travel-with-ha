import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, Heart, Map, MessageSquare, Image as ImageIcon, Info, DollarSign } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Trang Chủ', icon: Compass },
    { id: 'about', label: 'Giới Thiệu', icon: Info },
    { id: 'destinations', label: 'Địa Điểm', icon: Map },
    { id: 'itineraries', label: 'Lịch Trình', icon: Heart },
    { id: 'costs', label: 'Chi Phí', icon: DollarSign },
    { id: 'gallery', label: 'Thư Viện Ảnh', icon: ImageIcon },
    { id: 'comments', label: 'Bình Luận', icon: MessageSquare },
    { id: 'contact', label: 'Liên Hệ', icon: MessageSquare },
  ];

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
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
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#faf9f6]/95 backdrop-blur-md shadow-md border-b border-stone-200/50 py-3'
          : 'bg-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <button
            id="nav-logo-btn"
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className={`p-2 rounded-full transition-colors ${
              isScrolled ? 'bg-amber-100 text-amber-800' : 'bg-white/20 text-white'
            }`}>
              <Compass className="w-6 h-6 animate-spin-slow group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <span className={`font-serif text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
              isScrolled ? 'text-stone-900' : 'text-white drop-shadow-md'
            }`}>
              Travel <span className="text-amber-500">With Hà</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  id={`nav-item-${item.id}`}
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? isScrolled
                        ? 'bg-amber-500 text-white shadow-sm shadow-amber-500/20'
                        : 'bg-white text-stone-900 shadow-lg'
                      : isScrolled
                        ? 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg focus:outline-none transition-colors ${
                isScrolled ? 'text-stone-800 hover:bg-stone-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slider */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          className="lg:hidden absolute top-full left-0 w-full bg-[#faf9f6] border-b border-stone-200/80 shadow-xl px-4 py-4 space-y-1 animate-fade-in"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                id={`mobile-nav-item-${item.id}`}
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left text-base font-medium transition-all ${
                  isActive
                    ? 'bg-amber-500 text-white font-semibold'
                    : 'text-stone-700 hover:bg-stone-100 hover:text-stone-900'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
