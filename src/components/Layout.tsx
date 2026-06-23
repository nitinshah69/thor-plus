import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dna, ShoppingCart, User, Search, MessageSquare, Globe } from 'lucide-react';
import WhatsAppPopup from './WhatsAppPopup';
import { useLanguage } from '../contexts/LanguageContext';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation Bar */}
      <header className="bg-surface sticky top-0 z-50 border-b border-outline-variant">
        <div className="flex justify-between items-center h-20 px-container-padding w-full max-w-7xl mx-auto flex-wrap md:flex-nowrap">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="text-title-md font-black text-primary tracking-tight flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
                <Dna className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform duration-500" />
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-container">AYURPEAK</span>
            </div>
            <div className="hidden xl:block h-6 w-px bg-outline-variant mx-4"></div>
            <div className="hidden xl:block text-label-sm text-on-surface-variant opacity-70 uppercase tracking-wide">
              Ayurvedic Performance Nutrition
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className={`text-label-sm uppercase tracking-widest transition-all relative group ${isActive('/') ? 'text-primary font-bold' : 'text-on-surface hover:text-primary'}`}>
              {t('products')}
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transition-transform duration-300 ${isActive('/') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
            <Link to="/about" className={`text-label-sm uppercase tracking-widest transition-all relative group ${isActive('/about') ? 'text-primary font-bold' : 'text-on-surface hover:text-primary'}`}>
              {t('about')}
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transition-transform duration-300 ${isActive('/about') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
            <Link to="/faq" className={`text-label-sm uppercase tracking-widest transition-all relative group ${isActive('/faq') ? 'text-primary font-bold' : 'text-on-surface hover:text-primary'}`}>
              {t('faq')}
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transition-transform duration-300 ${isActive('/faq') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
            <Link to="/contact" className={`text-label-sm uppercase tracking-widest transition-all relative group ${isActive('/contact') ? 'text-primary font-bold' : 'text-on-surface hover:text-primary'}`}>
              {t('contact')}
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transition-transform duration-300 ${isActive('/contact') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-surface-container-high rounded-full p-1 border border-outline-variant shadow-sm mr-2">
              <button 
                onClick={() => setLanguage('en')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${language === 'en' ? 'bg-primary text-on-primary shadow-md' : 'text-on-surface-variant hover:text-primary'}`}
              >
                ENG
              </button>
              <button 
                onClick={() => setLanguage('hi')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${language === 'hi' ? 'bg-primary text-on-primary shadow-md' : 'text-on-surface-variant hover:text-primary'}`}
              >
                हिंदी
              </button>
            </div>
            <button className="text-on-surface-variant hover:text-primary transition-all hidden sm:block p-2">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-on-surface-variant hover:text-primary transition-all p-2">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button className="text-on-surface-variant hover:text-primary transition-all hidden sm:block p-2">
              <User className="w-5 h-5" />
            </button>
            <Link to="/product" className="bg-primary text-on-primary text-label-sm px-4 py-3 rounded hover:opacity-90 active:scale-95 transition-all uppercase tracking-widest hidden md:block">
              {t('shopNow')}
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low border-t border-outline-variant w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-section-gap px-container-padding w-full max-w-7xl mx-auto gap-base">
          <div className="space-y-4 max-w-md">
            <div className="flex items-center gap-2">
              <Dna className="w-6 h-6 text-primary" />
              <span className="text-title-md font-bold text-primary">AYURPEAK</span>
            </div>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              © 2024 AyurPeak. All rights reserved. Premium Ayurvedic supplements for maximum performance.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-gutter mt-section-gap md:mt-0">
            <div className="flex flex-col gap-2">
              <span className="text-label-sm uppercase text-on-surface-variant opacity-60 mb-2">Legal</span>
              <a href="#" className="text-label-sm text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-label-sm text-on-surface-variant hover:text-primary transition-colors">Terms of Service</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-label-sm uppercase text-on-surface-variant opacity-60 mb-2">Science</span>
              <a href="#" className="text-label-sm text-on-surface-variant hover:text-primary transition-colors">Clinical Studies</a>
              <a href="#" className="text-label-sm text-on-surface-variant hover:text-primary transition-colors">Regulatory Info</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-label-sm uppercase text-on-surface-variant opacity-60 mb-2">Help</span>
              <Link to="/contact" className="text-label-sm text-on-surface-variant hover:text-primary transition-colors">Contact Support</Link>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Persistent WhatsApp Popup */}
      <WhatsAppPopup />
    </div>
  );
}
