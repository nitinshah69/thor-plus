import React, { useState } from 'react';
import { Star, ShoppingBag, Headset, CheckCircle, ClipboardList, TrendingUp, ArrowRight, MessageCircle, Shield, Zap, Timer } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Product() {
  const { t } = useLanguage();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAlAc-dmCHqZiqr48ySP9nF0pu2DKkE-706iltkxfsX9aQTivEfY4fWOjpgaiQCFno33XgAM6guyTkULB41UCAflkUBjqM0_lkk8YyZLFA4keTohJi2DnZihgY93aJ1HnlRvCRrV-aQsU31Xnh3GhmkTjFrUn9K1464E4NbXIB_8UJ5027lpkaIt94WivHFwVuFYQeiOhUXdpz2Y59PoO25ds0vpEkr6-vxGM7iHOtgJVKS_hIRiYGcj5L6-kart86PJkon_1yjnstU"
  );

  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 59, seconds: 59 });
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  const formatTime = (v: number) => v.toString().padStart(2, '0');

  const thumbnails = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAX-zuLuU_53eMxZKRosOUo1xMz41HXNCkVQVsogS_Rzc3FJZU7MKVRDNMlkz18TPsNchfojiSm3ovSTv3uhRS6gB6_0TVnbm5IpoXhPb5mc881ZgVLJJ2xNi0Q4D8X2mBMHt8SJMRd5ypWMjxQTl0ONa7inuEqIBTLrInFtBx_L3apS-I0IiWehdkGnFs4SGtMkj4uWmyiRZKuIUyoPdHK2tm7Ayencat408GHFcqFs6eGdGBDsp47mZk7Mh7jmxMTeXGX5igDek4q",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCPDqqLENIm-8RPQqbmXWraFuoexURTSCgGkn3SP4VPTPwe-7idELRV-8iRSmM3JjHBZ-K2MP-tq7rrbTyhsBPPTaqw4xgDoseLdXx6bEeLtBXtiliiCUMDp-5FKlZyirmb9DLKvbGrqALDnvGi3s4Wg81XV6g9vNX9UaryeBCIyydgR3ePdyV-Y_gupWw85YXEa-2iPxvQLYlkRqxk3HsTT2E7dy0YhuQD8V1Lcn81f_gDI8DpkNqkPZjjhu9K_8-0biT51RPu3yZ6",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCEXIqTzpdzq-76syxEhIe21MCGIuAi8CfhmUxJ518cXGQ92pZ-zGXRvut0KD6n8duyvHIlV1Y3Tz2FAqxt9qH7P_MepxGESXWiAZfiebxh8w-6_I0n1NsASsIwrkMa3-MMgNFrwFY1hqjrDlRclJup5aWKHOcwZLx5lLzlElhNiv5kORQcQpfTlrw2sMJm2mxuT9wk6W3GtDyUke3DPV1D54VzcZr8pjIzFUMbNfkg_pBlzGZHZEz4XD8Bv-qBdQejqoBxObgvy8hI",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDXczWmEQ1MtlCmm2EfTucpPKBCyNHeKfgzjcvFhptdPqbLF3fY_YsGfY9nsYqIFuelDH0MfvnolzBasRgwCe1jl7FoaFkl1boF5qXRg7k070A8dmgRk3ZTGqhm2E4FDRPTz8wxSY5GTyOo1jeQYJY-WJghZLeBIYMCXwed_2K4_WNNpN4T5LGcbTMwnMSMPvhwwmBxnC-n1Utv9uy97rY3pDiqdyl_4ZAiXj6plGYTTv-wuTuNk4NS8i-w1FN9AOpIM4b3QNcC7cTv"
  ];

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-container-padding py-section-gap">
      {/* Breadcrumbs */}
      <nav className="mb-base flex items-center gap-2 text-label-sm text-on-surface-variant uppercase">
        <Link to="/" className="hover:text-primary">{(t('breadcrumbs') as any)?.home || 'Home'}</Link>
        <span>/</span>
        <span className="hover:text-primary cursor-pointer">{(t('breadcrumbs') as any)?.category || 'Supplements'}</span>
        <span>/</span>
        <span className="text-primary font-bold">{(t('breadcrumbs') as any)?.name || 'AyurPeak Power Plus'}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-section-gap">
        {/* Product Visual Column */}
        <div className="lg:col-span-7 space-y-base">
          <div className="clinical-card p-base relative overflow-hidden group">
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
              <span className="bg-secondary text-on-secondary text-[10px] font-bold px-3 py-1 uppercase tracking-tighter rounded-full text-center">{(t('badges') as any)?.clinical || 'Clinically Confirmed'}</span>
              <span className="bg-primary text-on-primary text-[10px] font-bold px-3 py-1 uppercase tracking-tighter rounded-full text-center">{(t('badges') as any)?.rated || 'Top Rated 2024'}</span>
            </div>
            <div className="aspect-square herbal-gradient flex items-center justify-center p-section-gap">
              <img 
                className="max-h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" 
                alt={t('title', 'product')} 
                src={activeImage} 
                referrerPolicy="no-referrer" 
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-base">
            <div 
              className="clinical-card aspect-square border-primary/20 bg-white p-2 cursor-pointer hover:border-primary"
              onClick={() => setActiveImage("https://lh3.googleusercontent.com/aida-public/AB6AXuAlAc-dmCHqZiqr48ySP9nF0pu2DKkE-706iltkxfsX9aQTivEfY4fWOjpgaiQCFno33XgAM6guyTkULB41UCAflkUBjqM0_lkk8YyZLFA4keTohJi2DnZihgY93aJ1HnlRvCRrV-aQsU31Xnh3GhmkTjFrUn9K1464E4NbXIB_8UJ5027lpkaIt94WivHFwVuFYQeiOhUXdpz2Y59PoO25ds0vpEkr6-vxGM7iHOtgJVKS_hIRiYGcj5L6-kart86PJkon_1yjnstU")}
            >
              <img className="w-full h-full object-contain" alt="Thumb" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlAc-dmCHqZiqr48ySP9nF0pu2DKkE-706iltkxfsX9aQTivEfY4fWOjpgaiQCFno33XgAM6guyTkULB41UCAflkUBjqM0_lkk8YyZLFA4keTohJi2DnZihgY93aJ1HnlRvCRrV-aQsU31Xnh3GhmkTjFrUn9K1464E4NbXIB_8UJ5027lpkaIt94WivHFwVuFYQeiOhUXdpz2Y59PoO25ds0vpEkr6-vxGM7iHOtgJVKS_hIRiYGcj5L6-kart86PJkon_1yjnstU" referrerPolicy="no-referrer" />
            </div>
            {thumbnails.map((thumb, idx) => (
              <div 
                key={idx} 
                className="clinical-card aspect-square bg-white p-2 opacity-60 hover:opacity-100 cursor-pointer"
                onClick={() => setActiveImage(thumb)}
              >
                <img className="w-full h-full object-contain mix-blend-multiply" alt="Thumb" src={thumb} referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info Column */}
        <div className="lg:col-span-5 flex flex-col gap-base">
          <div className="space-y-stack-sm">
            <h2 className="text-label-sm text-secondary uppercase tracking-[0.2em] font-bold">{t('heritage', 'product')}</h2>
            <h1 className="text-headline-lg lg:text-display-lg text-on-surface leading-tight">{t('title', 'product')}</h1>
            <p className="text-body-lg text-on-surface-variant font-semibold">{t('subtitle', 'product')}</p>
          </div>
          
          <div className="flex items-center gap-4 py-base">
            <div className="flex text-secondary">
              <Star className="w-5 h-5 fill-secondary" />
              <Star className="w-5 h-5 fill-secondary" />
              <Star className="w-5 h-5 fill-secondary" />
              <Star className="w-5 h-5 fill-secondary" />
              <Star className="w-5 h-5 fill-secondary" />
            </div>
            <span className="text-label-sm text-on-surface-variant underline cursor-pointer">{t('reviews', 'product')}</span>
          </div>
          
          <div className="bg-surface-marker p-base border border-outline-variant flex justify-between items-center bg-surface-container-low">
            <div>
              <span className="text-headline-lg text-primary">{t('price', 'product')}</span>
              <span className="text-body-md text-on-surface-variant line-through ml-2 opacity-60">{t('oldPrice', 'product')}</span>
            </div>
            <div className="text-right">
              <p className="text-label-sm text-secondary uppercase font-bold">{t('stock', 'product')}</p>
              <p className="text-[10px] text-on-surface-variant">{t('shipping', 'product')}</p>
            </div>
          </div>

          {/* Inline Checkout Offer Countdown */}
          <div className="bg-secondary/10 border border-secondary/30 p-4 rounded-lg flex items-center justify-between mt-2 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
            <div className="flex items-center gap-3">
              <Timer className="w-5 h-5 text-secondary animate-pulse" />
              <div className="flex flex-col">
                <span className="font-bold text-sm text-secondary uppercase tracking-wider">Flash Sale</span>
                <span className="text-xs text-on-surface-variant font-medium">Extra 40% Off Ends In:</span>
              </div>
            </div>
            <div className="flex items-center gap-1 font-mono font-bold text-lg bg-white px-3 py-1.5 rounded-md shadow-sm border border-outline-variant/50 text-primary">
              <span>{formatTime(timeLeft.hours)}</span>
              <span className="opacity-50 animate-pulse">:</span>
              <span>{formatTime(timeLeft.minutes)}</span>
              <span className="opacity-50 animate-pulse">:</span>
              <span className="text-secondary">{formatTime(timeLeft.seconds)}</span>
            </div>
          </div>
          
          <div className="space-y-base py-base">
            <div className="flex flex-col gap-stack-sm">
              <label className="text-label-sm uppercase text-on-surface-variant">{t('qty', 'product')}</label>
              <div className="flex items-center border border-outline w-fit">
                <button className="px-4 py-2 hover:bg-surface-container-highest transition-colors" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <input className="w-12 text-center border-none bg-transparent focus:ring-0 text-body-md outline-none" min="1" type="number" value={quantity} readOnly />
                <button className="px-4 py-2 hover:bg-surface-container-highest transition-colors" onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>
            <Link to="/order" className="w-full bg-primary text-on-primary text-title-md h-[60px] flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all uppercase tracking-widest rounded mt-4">
              <ShoppingBag className="w-5 h-5" />
              {t('checkoutBtn', 'product')}
            </Link>
            <button 
              onClick={() => {
                const message = encodeURIComponent(`Hello! I would like to order ${quantity}x ${t('title', 'product')}. Could you guide me?`);
                window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
              }}
              className="w-full bg-[#25D366] text-white text-title-md h-[60px] flex items-center justify-center gap-2 hover:bg-[#20BE5C] focus:ring-4 focus:ring-[#25D366]/50 active:scale-[0.98] transition-all uppercase tracking-widest rounded mt-2"
            >
              <MessageCircle className="w-5 h-5" />
              {t('whatsappBtn', 'product')}
            </button>
            <button className="w-full border-2 border-primary text-primary text-label-sm h-12 flex items-center justify-center gap-2 hover:bg-primary/5 transition-all uppercase tracking-widest font-bold rounded mt-2">
              {t('shopPayBtn', 'product')}
            </button>
          </div>
          
          <div className="clinical-card p-gutter bg-surface-container mt-base rounded-xl">
            <div className="flex items-start gap-4">
              <div className="bg-secondary p-3 rounded-full">
                <Headset className="w-6 h-6 text-on-secondary" />
              </div>
              <div>
                <h3 className="text-title-md text-on-surface mb-1">{t('consultTitle', 'product')}</h3>
                <p className="text-body-md text-on-surface-variant mb-4">{t('consultDesc', 'product')}</p>
                <Link to="/contact" className="text-primary font-bold flex items-center gap-1 hover:underline transition-all text-label-sm uppercase">
                  {t('consultBtn', 'product')}
                  <ArrowRight className="w-4 h-4 text-sm" />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-base mt-base">
            <div className="flex items-center gap-3 p-3 border border-outline-variant bg-white">
              <CheckCircle className="w-5 h-5 text-secondary" />
              <span className="text-[10px] font-bold uppercase leading-tight text-on-surface">{t('guaranteeBanner', 'product')}</span>
            </div>
            <div className="flex items-center gap-3 p-3 border border-outline-variant bg-white">
              <ClipboardList className="w-5 h-5 text-secondary" />
              <span className="text-[10px] font-bold uppercase leading-tight text-on-surface">{t('clinicalBanner', 'product')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* NEW CONTENT RICH SECTION: The AyurPeak Experience */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mt-section-gap pt-section-gap bg-surface-container-lowest border-y border-outline-variant/50 py-16 px-8 rounded-3xl"
      >
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 order-2 lg:order-1 space-y-6">
            <h2 className="text-display-sm text-on-surface mb-4">Precision Engineering for Men</h2>
            <p className="text-body-lg text-on-surface-variant mb-6">Experience the perfect synergy of ancient adaptogens and cutting-edge extraction methods. We source only the top 1% of raw materials globally to ensure unmatched purity.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-surface-container rounded-xl border border-outline-variant/30">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary"><Zap className="w-6 h-6"/></div>
                <div><h4 className="font-bold">Maximum Potency</h4><p className="text-sm text-on-surface-variant">Standardized to exact compound percentages.</p></div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-surface-container rounded-xl border border-outline-variant/30">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary"><Shield className="w-6 h-6"/></div>
                <div><h4 className="font-bold">No Proprietary Blends</h4><p className="text-sm text-on-surface-variant">Full transparency. Know exactly what you're taking.</p></div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <img className="w-full h-80 object-cover rounded-2xl shadow-lg border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz5YC-vfwubdXkhXBZmxdIWBgp1SESqJTyQixeX8E0OEQcSVe86Uy4n3fqmYHp4Yx6NoD54nPSnJoTjv4QSYUhCumVn_ytn9AX7ur4VwBC0Ok0V0nVgFq_FuyFnOgU_WORV-rblNSUxCYwXxplJt8AaSj5emTR5GPYWi1l7HEwiBpV-xOjz5UauvW-8iIAXb93At_LM0AsLU8gOAkOJIxokyDvyardDnIgc8NpECTQQEJq2ntGC0dbPwLYdLgWGhwdLsW7js0Xm_ve" alt="AyurPeak Lifestyle" referrerPolicy="no-referrer" />
          </div>
        </div>
      </motion.section>

      {/* Detailed Info */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mt-section-gap pt-section-gap"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="space-y-base">
            <h3 className="text-title-md text-on-surface border-b-2 border-primary w-fit pb-1 inline-block">{t('integrityTitle', 'product')}</h3>
            <p className="text-body-md text-on-surface-variant mt-3">{t('integrityDesc', 'product')}</p>
            <ul className="space-y-2 mt-4">
              <li className="flex items-center gap-2 text-on-surface-variant text-body-md">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                {t('gmp', 'product')}
              </li>
              <li className="flex items-center gap-2 text-on-surface-variant text-body-md">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                {t('lab', 'product')}
              </li>
            </ul>
          </div>
          
          <div className="space-y-base">
            <h3 className="text-title-md text-on-surface border-b-2 border-primary w-fit pb-1 inline-block">{t('ingredientsTitle', 'product')}</h3>
            <div className="bg-surface-container-high p-4 border border-outline-variant rounded mt-3">
              <div className="flex justify-between text-label-sm mb-2 opacity-60">
                <span>{t('component', 'product')}</span>
                <span>{t('strength', 'product')}</span>
              </div>
              <div className="space-y-2 text-body-md text-on-surface">
                <div className="flex justify-between border-b border-outline-variant/30 pb-1">
                  <span>Ashwagandha KSM-66</span>
                  <span className="font-bold">600mg</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/30 pb-1">
                  <span>Tribulus Terrestris (95% Sap.)</span>
                  <span className="font-bold">450mg</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/30 pb-1">
                  <span>Tongkat Ali Root (200:1)</span>
                  <span className="font-bold">300mg</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/30 pb-1">
                  <span>Panax Ginseng Extract</span>
                  <span className="font-bold">200mg</span>
                </div>
              </div>
              <p className="mt-4 text-[10px] text-on-surface-variant uppercase font-bold tracking-wide">{t('serving', 'product')}</p>
            </div>
          </div>
          
          <div className="space-y-base">
            <h3 className="text-title-md text-on-surface border-b-2 border-primary w-fit pb-1 inline-block">{t('effectivenessTitle', 'product')}</h3>
            <div className="status-banner-success p-gutter rounded flex gap-4 mt-3">
              <TrendingUp className="w-6 h-6 text-secondary flex-shrink-0" />
              <div className="space-y-2">
                <p className="text-sm font-bold text-on-secondary-container">{t('rate', 'product')}</p>
                <p className="text-sm text-on-secondary-container">{t('rateDesc', 'product')}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 border border-outline-variant mt-4 rounded">
              <img className="h-10" alt="EU Shield" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbc_F2RroNUMRFyFZESeuj1pcEc9L-DFNVdPdax9GN9DroCMUHKvDfGkBHRJei7ix45QEe-kLRBbALEU5EvEfVtenpDw5kyKOYrWQTO70BFmA6sKbSu2vbf6RQyyiPClnUhUiSpc_aSh5JjKgevwjMrObzhIukgQTCnQJLpxK20RoTZhsH3OFkMRcgnkgPjq5of9l2EfoPCMsk9f0XqU6B4yW_uRYyLjrEVMhvVJpWTPGYKaOQCsO3q22t9-5_EyVUtRYqElgY3NgQ" referrerPolicy="no-referrer" />
              <p className="text-[11px] font-bold text-on-surface-variant uppercase">{t('euDesc', 'product')}</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Guarantee Banner */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mt-section-gap p-section-gap bg-surface-container-highest border border-outline-variant flex flex-col md:flex-row items-center gap-gutter text-center md:text-left rounded-xl"
      >
        <img className="w-32 h-32" alt="Guarantee Seal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgUH8X7tyKV11H2PPAOXPZm8FSaW3Pm_iirNu54OznECAKVmxKSUFtvXq01GrUMGTWAY7ClTxMKioVXhFyVzf0h1ntegPg-Uv2oY47qjH94qVingBOWB--L3SUxN-UzpCSZ4yuoDzofge7Z7qM1yPPuaKXStrzyqS1-BoW2QsqTSscivnoH_rujLvEvS5arLIenPqe7iNdTzVPTkLbvBxTqdTw--RRCO-O9X_SVFgThg0sCfH5aayGSIkHJ8j2VMIM5UJ70tV08YYd" referrerPolicy="no-referrer" />
        <div className="flex-1">
          <h2 className="text-headline-lg text-on-surface mb-2">{t('qualityTitle', 'product')}</h2>
          <p className="text-body-lg text-on-surface-variant">{t('qualityDesc', 'product')}</p>
        </div>
        <button className="bg-primary text-on-primary text-label-sm px-8 py-4 uppercase tracking-widest font-bold whitespace-nowrap hover:opacity-90 active:scale-95 transition-all rounded">{t('termsBtn', 'product')}</button>
      </motion.section>
      </div>
    </PageTransition>
  );
}
