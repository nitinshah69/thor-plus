import React, { useState, useEffect } from 'react';
import { Timer, Tag } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

export default function OfferBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 59,
    seconds: 59
  });
  const { language } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number) => value.toString().padStart(2, '0');

  return (
    <div className="bg-gradient-to-r from-primary-container via-primary to-primary-container text-on-primary py-2 px-4 shadow-md relative z-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 relative z-10">
        <div className="flex items-center gap-2">
          <Tag className="w-4 h-4 text-secondary animate-pulse" />
          <span className="text-sm font-bold tracking-wide">
            {language === 'en' ? 'LIMITED TIME OFFER: GET 40% OFF!' : 'सीमित समय की पेशकश: 40% की छूट पाएं!'}
          </span>
        </div>
        
        <div className="flex items-center gap-2 bg-surface-container-lowest/20 px-3 py-1 rounded-full border border-white/20">
          <Timer className="w-4 h-4 text-secondary" />
          <div className="flex items-center text-sm font-bold font-mono tracking-wider">
            <span>{formatTime(timeLeft.hours)}</span>
            <span className="mx-1 opacity-70">:</span>
            <span>{formatTime(timeLeft.minutes)}</span>
            <span className="mx-1 opacity-70">:</span>
            <span className="text-secondary">{formatTime(timeLeft.seconds)}</span>
          </div>
        </div>

        <Link to="/product" className="hidden md:flex bg-secondary text-on-secondary px-4 py-1 rounded text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors shadow-sm">
          {language === 'en' ? 'Claim Offer' : 'ऑफर प्राप्त करें'}
        </Link>
      </div>
    </div>
  );
}
