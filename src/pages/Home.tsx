import React, { useState } from 'react';
import { BadgeCheck, ShieldCheck, Globe, ArrowRight, Zap, Battery, Activity, CheckCircle2, Clock, Star, FlaskConical, Target, ChevronDown, Shield, Leaf, Beaker } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t } = useLanguage();

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: t('q1', 'faq'),
      a: t('a1', 'faq')
    },
    {
      q: t('q2', 'faq'),
      a: t('a2', 'faq')
    },
    {
      q: t('q3', 'faq'),
      a: t('a3', 'faq')
    },
    {
      q: t('q4', 'faq'),
      a: t('a4', 'faq')
    }
  ];

  return (
    <PageTransition>
      {/* 1. HERO SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative bg-surface-container-lowest overflow-hidden py-16 lg:py-24"
      >
        <div className="max-w-7xl mx-auto px-container-padding grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <div className="z-10">
            <div className="inline-flex items-center gap-2 bg-secondary/10 px-3 py-1 rounded-full mb-6">
              <ShieldCheck className="text-secondary w-4 h-4" />
              <span className="text-[11px] font-semibold text-secondary uppercase tracking-widest">
                {t('tag', 'hero')}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-[48px] font-bold mb-6 text-primary leading-[1.1] tracking-[-0.02em]">
              {t('title', 'hero')}
            </h1>
            
            <p className="text-lg text-on-surface-variant mb-10 max-w-lg">
              {t('subtitle', 'hero')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/product" className="bg-secondary text-on-primary h-14 px-10 rounded font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all flex items-center justify-center">
                {t('cta', 'hero')}
              </Link>
              <button className="border border-primary text-primary h-14 px-10 rounded font-bold text-sm uppercase tracking-widest hover:bg-primary/5 transition-all flex items-center justify-center cursor-pointer">
                {t('cta2', 'hero')}
              </button>
            </div>
            
            <div className="flex items-center gap-2 px-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-surface-container-high flex items-center justify-center overflow-hidden">
                    <Star className="w-4 h-4 text-secondary fill-secondary" />
                  </div>
                ))}
              </div>
              <div className="text-sm text-on-surface-variant ml-2">
                <span className="font-bold text-on-surface">4.9/5</span> {t('reviews', 'hero')}
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -z-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50"></div>
            <div className="relative z-10 w-full max-w-md clinical-card p-6 rounded-xl shadow-lg border-primary/10 bg-surface-container-lowest">
              <Link to="/product" className="block cursor-pointer">
                <img 
                  className="w-full h-auto object-contain transition-transform hover:scale-105 duration-500" 
                  alt="Professional studio photograph of the supplement bottle." 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0pywMSyjWb3k4UbAEidT9IRDrVC5Q9TbhQRHy2p97G_e3ELUDdLYY1dID1AExSmGb0MLxDzapRvOb4-cgIvQ2kApHVqs0zd-4H8q1w95yxdg-OuiTAVpehtZNZAY3kF2ypT79kvPmTBH_VSS9iuLiKul5KtQWav6xrtF_mWyeSOZQgMXeINvVUfBrVetD9DmLNzxHzj5R0id6vqp-t3G92i5lomeDyFOVqhp7P2jm4SG0zyYSLD0slPtnEvhOTghWRqBXqf_98JeZ" 
                  referrerPolicy="no-referrer"
                />
              </Link>
              <div className="mt-6 flex justify-between items-center px-2">
                <div>
                  <h3 className="text-xl font-bold text-primary">{t('cardTitle', 'hero')}</h3>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest mt-1">{t('cardSub', 'hero')}</p>
                </div>
                <span className="text-secondary font-bold text-xl">{t('price', 'hero')}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 1.5 PRODUCT COLLAGE SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-surface py-12 lg:py-24 border-t border-outline-variant/30 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 items-center">
            {/* Collage Item 1: Herbs */}
            <div className="flex flex-col gap-4 lg:gap-6 mt-8 lg:mt-16">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-lg relative group">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 duration-500 pointer-events-none"></div>
                <img src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80" alt="Ayurvedic Herbs" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="bg-surface-container-low p-3 lg:p-4 rounded-xl text-center border border-outline-variant">
                <span className="text-[10px] lg:text-xs uppercase tracking-widest text-primary font-bold">Pure Extracts</span>
              </div>
            </div>
            
            {/* Collage Item 2: Science */}
            <div className="flex flex-col gap-4 lg:gap-6">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-lg relative group">
                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors z-10 duration-500 pointer-events-none"></div>
                <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80" alt="Clinical Science" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="bg-surface-container-low p-3 lg:p-4 rounded-xl text-center border border-outline-variant">
                <span className="text-[10px] lg:text-xs uppercase tracking-widest text-secondary font-bold">Lab Tested</span>
              </div>
            </div>

            {/* Collage Item 3: The Bottle */}
            <div className="flex flex-col gap-4 lg:gap-6 -mt-8 lg:-mt-16 z-20">
              <Link to="/product" className="rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl relative bg-gradient-to-b from-surface-container-lowest to-surface-container p-4 lg:p-6 flex flex-col items-center justify-center border border-primary/20 group cursor-pointer hover:shadow-primary/20 transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0pywMSyjWb3k4UbAEidT9IRDrVC5Q9TbhQRHy2p97G_e3ELUDdLYY1dID1AExSmGb0MLxDzapRvOb4-cgIvQ2kApHVqs0zd-4H8q1w95yxdg-OuiTAVpehtZNZAY3kF2ypT79kvPmTBH_VSS9iuLiKul5KtQWav6xrtF_mWyeSOZQgMXeINvVUfBrVetD9DmLNzxHzj5R0id6vqp-t3G92i5lomeDyFOVqhp7P2jm4SG0zyYSLD0slPtnEvhOTghWRqBXqf_98JeZ" alt="AyurPeak Bottle" className="w-full h-auto object-contain z-10 transform group-hover:scale-105 transition-transform" />
              </Link>
              <div className="bg-primary text-on-primary p-3 lg:p-4 rounded-xl text-center shadow-lg">
                <span className="text-[10px] lg:text-xs uppercase tracking-widest font-bold">Premium Grade</span>
              </div>
            </div>

            {/* Collage Item 4: Lifestyle */}
            <div className="flex flex-col gap-4 lg:gap-6 mt-8 lg:mt-24">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-lg relative group">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 duration-500 pointer-events-none"></div>
                <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80" alt="Active Lifestyle" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="bg-surface-container-low p-3 lg:p-4 rounded-xl text-center border border-outline-variant">
                <span className="text-[10px] lg:text-xs uppercase tracking-widest text-primary font-bold">Peak Vitality</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 2. PROBLEM SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-surface py-20 border-y border-outline-variant/30"
      >
        <div className="max-w-7xl mx-auto px-container-padding text-center">
          <h2 className="text-headline-lg mb-4">{t('title', 'problem')}</h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
            {t('subtitle', 'problem')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-surface-container-low border border-outline-variant/50">
              <Battery className="w-10 h-10 text-primary mx-auto mb-4 opacity-50" />
              <h3 className="text-title-md mb-2">{t('c1Title', 'problem')}</h3>
              <p className="text-body-md text-on-surface-variant">{t('c1Desc', 'problem')}</p>
            </div>
            <div className="p-8 rounded-xl bg-surface-container-low border border-outline-variant/50">
              <Activity className="w-10 h-10 text-primary mx-auto mb-4 opacity-50" />
              <h3 className="text-title-md mb-2">{t('c2Title', 'problem')}</h3>
              <p className="text-body-md text-on-surface-variant">{t('c2Desc', 'problem')}</p>
            </div>
            <div className="p-8 rounded-xl bg-surface-container-low border border-outline-variant/50">
              <Target className="w-10 h-10 text-primary mx-auto mb-4 opacity-50" />
              <h3 className="text-title-md mb-2">{t('c3Title', 'problem')}</h3>
              <p className="text-body-md text-on-surface-variant">{t('c3Desc', 'problem')}</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* NEW CONTENT: WHY AYURPEAK SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-surface-container-lowest py-20"
      >
        <div className="max-w-7xl mx-auto px-container-padding">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg mb-4">{t('title', 'why')}</h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              {t('subtitle', 'why')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                <Beaker className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-title-lg font-bold mb-3">{t('f1Title', 'why')}</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                {t('f1Desc', 'why')}
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6 border border-secondary/20">
                <Leaf className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-title-lg font-bold mb-3">{t('f2Title', 'why')}</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                {t('f2Desc', 'why')}
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-title-lg font-bold mb-3">{t('f3Title', 'why')}</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                {t('f3Desc', 'why')}
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. BENEFITS SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-surface-container-low py-20"
      >
        <div className="max-w-7xl mx-auto px-container-padding">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg mb-4">{t('title', 'benefits')}</h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              {t('subtitle', 'benefits')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="clinical-card bg-surface-container-lowest p-6 rounded-xl">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-title-md mb-2">{t('b1Title', 'benefits')}</h3>
              <p className="text-body-md text-on-surface-variant">{t('b1Desc', 'benefits')}</p>
            </div>
            <div className="clinical-card bg-surface-container-lowest p-6 rounded-xl">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-title-md mb-2">{t('b2Title', 'benefits')}</h3>
              <p className="text-body-md text-on-surface-variant">{t('b2Desc', 'benefits')}</p>
            </div>
            <div className="clinical-card bg-surface-container-lowest p-6 rounded-xl">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-title-md mb-2">{t('b3Title', 'benefits')}</h3>
              <p className="text-body-md text-on-surface-variant">{t('b3Desc', 'benefits')}</p>
            </div>
            <div className="clinical-card bg-surface-container-lowest p-6 rounded-xl">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-title-md mb-2">{t('b4Title', 'benefits')}</h3>
              <p className="text-body-md text-on-surface-variant">{t('b4Desc', 'benefits')}</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. HOW IT WORKS */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-surface py-20"
      >
        <div className="max-w-7xl mx-auto px-container-padding">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-video lg:aspect-square clinical-card">
                 <img className="absolute inset-0 w-full h-full object-cover" alt="Man with healthy lifestyle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz5YC-vfwubdXkhXBZmxdIWBgp1SESqJTyQixeX8E0OEQcSVe86Uy4n3fqmYHp4Yx6NoD54nPSnJoTjv4QSYUhCumVn_ytn9AX7ur4VwBC0Ok0V0nVgFq_FuyFnOgU_WORV-rblNSUxCYwXxplJt8AaSj5emTR5GPYWi1l7HEwiBpV-xOjz5UauvW-8iIAXb93At_LM0AsLU8gOAkOJIxokyDvyardDnIgc8NpECTQQEJq2ntGC0dbPwLYdLgWGhwdLsW7js0Xm_ve" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-headline-lg mb-8">{t('title', 'howitworks')}</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-title-md mb-1">{t('w1Title', 'howitworks')}</h3>
                    <p className="text-body-md text-on-surface-variant">{t('w1Desc', 'howitworks')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-title-md mb-1">{t('w2Title', 'howitworks')}</h3>
                    <p className="text-body-md text-on-surface-variant">{t('w2Desc', 'howitworks')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-title-md mb-1">{t('w3Title', 'howitworks')}</h3>
                    <p className="text-body-md text-on-surface-variant">{t('w3Desc', 'howitworks')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5. RESULTS TIMELINE */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-primary text-on-primary py-20"
      >
        <div className="max-w-7xl mx-auto px-container-padding">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg mb-4">{t('title', 'timeline')}</h2>
            <p className="text-body-lg text-on-primary/80 max-w-2xl mx-auto">
              {t('subtitle', 'timeline')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-primary-container z-0"></div>
            
            <div className="relative z-10 text-center">
              <div className="w-24 h-24 mx-auto bg-surface-container-lowest text-primary rounded-full flex flex-col items-center justify-center mb-6 border-4 border-primary-container shadow-lg">
                <span className="text-sm font-bold opacity-70">{t('week', 'timeline')}</span>
                <span className="text-2xl font-bold">1-2</span>
              </div>
              <h3 className="text-title-md mb-2 text-secondary">{t('w1', 'timeline')}</h3>
              <p className="text-body-md text-on-primary/80">{t('w1d', 'timeline')}</p>
            </div>
            
            <div className="relative z-10 text-center">
              <div className="w-24 h-24 mx-auto bg-surface-container-lowest text-primary rounded-full flex flex-col items-center justify-center mb-6 border-4 border-primary-container shadow-lg">
                <span className="text-sm font-bold opacity-70">{t('week', 'timeline')}</span>
                <span className="text-2xl font-bold">3-4</span>
              </div>
              <h3 className="text-title-md mb-2 text-secondary">{t('w3', 'timeline')}</h3>
              <p className="text-body-md text-on-primary/80">{t('w3d', 'timeline')}</p>
            </div>
            
            <div className="relative z-10 text-center">
              <div className="w-24 h-24 mx-auto bg-surface-container-lowest text-primary rounded-full flex flex-col items-center justify-center mb-6 border-4 border-primary-container shadow-lg">
                <span className="text-sm font-bold opacity-70">{t('week', 'timeline')}</span>
                <span className="text-2xl font-bold">5+</span>
              </div>
              <h3 className="text-title-md mb-2 text-secondary">{t('w5', 'timeline')}</h3>
              <p className="text-body-md text-on-primary/80">{t('w5d', 'timeline')}</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* NEW SECTION: Ingredients Highlights */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-20 lg:py-32 bg-surface-container-lowest border-b border-outline-variant/30"
      >
        <div className="max-w-7xl mx-auto px-container-padding">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg lg:text-display-sm text-on-surface mb-4">{t('title', 'science')}</h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              {t('subtitle', 'science')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="clinical-card bg-surface-container p-8 rounded-xl flex flex-col items-center text-center hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <FlaskConical className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-title-lg text-on-surface font-bold mb-3">{t('s1Title', 'science')}</h3>
              <p className="text-body-md text-on-surface-variant">
                {t('s1Desc', 'science')}
              </p>
            </div>
            <div className="clinical-card bg-surface-container p-8 rounded-xl flex flex-col items-center text-center hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-title-lg text-on-surface font-bold mb-3">{t('s2Title', 'science')}</h3>
              <p className="text-body-md text-on-surface-variant">
                {t('s2Desc', 'science')}
              </p>
            </div>
            <div className="clinical-card bg-surface-container p-8 rounded-xl flex flex-col items-center text-center hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-title-lg text-on-surface font-bold mb-3">{t('s3Title', 'science')}</h3>
              <p className="text-body-md text-on-surface-variant">
                {t('s3Desc', 'science')}
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5.5 AYURVEDIC PHILOSOPHY DEEP DIVE */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-20 lg:py-32 bg-surface border-b border-outline-variant/30"
      >
        <div className="max-w-4xl mx-auto px-container-padding">
          <div className="mb-12">
            <h2 className="text-headline-lg lg:text-display-sm text-on-surface mb-8 leading-tight">{t('title', 'philosophy')}</h2>
            <div className="w-24 h-1 bg-primary mb-12"></div>
          </div>
          
          <div className="space-y-8 text-body-lg text-on-surface-variant leading-relaxed">
            <p className="first-letter:text-7xl first-letter:font-display first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]">{t('p1', 'philosophy')}</p>
            <p>{t('p2', 'philosophy')}</p>
            <p>{t('p3', 'philosophy')}</p>
            <div className="bg-surface-container p-8 border-l-4 border-secondary rounded-r-xl italic text-on-surface font-medium text-xl my-10 shadow-sm">
              "{t('p4', 'philosophy')}"
            </div>
          </div>
        </div>
      </motion.section>

      {/* 6. TRUST & SAFETY */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-surface py-16"
      >
        <div className="max-w-7xl mx-auto px-container-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary text-on-primary p-8 rounded-xl flex items-start gap-6 col-span-1 md:col-span-3 mb-4 shadow-xl">
              <ShieldCheck className="text-secondary w-10 h-10 shrink-0" />
              <div>
                <h4 className="text-2xl font-bold text-on-primary mb-2">{t('title', 'trust')}</h4>
                <p className="text-on-primary/80 leading-relaxed text-sm lg:text-base">{t('t1', 'trust')}</p>
              </div>
            </div>

            <div className="clinical-card p-6 rounded-xl flex items-center gap-4 bg-surface-container-lowest">
              <div className="flex-shrink-0 w-16 h-16 bg-surface-container-low rounded flex items-center justify-center border border-outline-variant">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuClyCS6eeIZQFpdQ_iloXPwEL2D2jswEMZOZusjWrq6OSdEV_dvL-5sX4BKhaAGbRw1w3pAPGZNUVMDlvhuz5X5KmJs0JW3VRbU4m2qhHonHy4S8A4bKu3IYXB6_gOtdF7GAo5JHi4YwYXOnI8tBjZ0TOkylCAO5CWgSi6TCGD0yafe4c6VUr-FHNqZtkZQpgXr0OGCoE42P06914Ywd-1IXzFudxlS5rr9sKnH17DrSW4zL7Q5VnQqiw6et0KJdc4eSDYopMuVFRp3" alt="365 Day Guarantee" className="w-12 h-12" />
              </div>
              <div>
                <p className="text-lg font-bold text-primary">{t('guarantee', 'trust')}</p>
                <p className="text-xs text-on-surface-variant pt-1">{t('guaranteeDesc', 'trust')}</p>
              </div>
            </div>

            <div className="clinical-card p-6 rounded-xl flex items-center gap-4 bg-surface-container-lowest">
              <div className="flex-shrink-0 w-16 h-16 bg-surface-container-low rounded flex items-center justify-center border border-outline-variant">
                <Target className="text-secondary w-8 h-8" />
              </div>
              <div>
                <p className="text-lg font-bold text-primary">{t('thirdParty', 'trust')}</p>
                <p className="text-xs text-on-surface-variant pt-1">{t('thirdPartyDesc', 'trust')}</p>
              </div>
            </div>

            <div className="clinical-card p-6 rounded-xl flex items-center gap-4 bg-surface-container-lowest">
              <div className="flex-shrink-0 w-16 h-16 bg-surface-container-low rounded flex items-center justify-center border border-outline-variant">
                <Globe className="text-secondary w-8 h-8" />
              </div>
              <div>
                <p className="text-lg font-bold text-primary">{t('global', 'trust')}</p>
                <p className="text-xs text-on-surface-variant pt-1">{t('globalDesc', 'trust')}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 7. TESTIMONIALS */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-surface-container-low py-20"
      >
        <div className="max-w-7xl mx-auto px-container-padding text-center">
          <h2 className="text-headline-lg mb-12">{t('title', 'testimonials')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { name: "David M.", age: "42", quote: t('t1', 'testimonials') },
              { name: "Michael T.", age: "35", quote: t('t2', 'testimonials') },
              { name: "Robert J.", age: "50", quote: t('t3', 'testimonials') }
            ].map((testimonial, i) => (
              <div key={i} className="clinical-card bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-secondary fill-secondary" />)}
                  </div>
                  <p className="text-body-md italic text-on-surface-variant mb-6">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-primary">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">{testimonial.name}</p>
                    <p className="text-label-sm text-on-surface-variant">{t('verified', 'testimonials')}, {testimonial.age}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 8. FAQ SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-surface py-20"
      >
        <div className="max-w-3xl mx-auto px-container-padding">
          <h2 className="text-headline-lg text-center mb-12">{t('title', 'faq')}</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="clinical-card bg-surface-container-lowest rounded-xl overflow-hidden">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-4 flex items-center justify-between font-bold text-left hover:bg-surface-container-low transition-colors"
                >
                  {faq.q}
                  <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-4 text-on-surface-variant text-body-md"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 9. FINAL CTA */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-primary text-center py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-3xl mx-auto px-container-padding relative z-10">
          <h2 className="text-display-lg text-on-primary mb-6">{t('title', 'finalCta')}</h2>
          <p className="text-body-lg text-on-primary/80 mb-10">
            {t('desc', 'finalCta')}
          </p>
          <Link to="/product" className="inline-flex bg-secondary text-on-secondary h-14 px-10 text-label-sm rounded-lg hover:bg-secondary/90 transition-all items-center justify-center font-bold tracking-wider shadow-[0_0_20px_rgba(212,175,55,0.4)]">
            {t('btn', 'finalCta')}
          </Link>
        </div>
      </motion.section>
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-surface-container-lowest border-t border-outline-variant z-50 md:hidden shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <Link to="/product" className="w-full bg-primary text-on-primary h-12 rounded-lg flex items-center justify-center font-bold text-sm tracking-wide">
          {t('btn', 'finalCta')}
        </Link>
      </div>

    </PageTransition>
  );
}
