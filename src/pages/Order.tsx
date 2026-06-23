import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle, ShieldCheck, Truck, Lock, ArrowLeft, MessageCircle } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { useLanguage } from '../contexts/LanguageContext';

export default function Order() {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
    if (!formData.firstName || !formData.address) {
      alert("Please fill in your name and address.");
      return;
    }
    
    const text = `*New Order: AyurPeak Power Plus*
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Address: ${formData.address}, ${formData.city}, ${formData.postalCode}

Hello! I would like to place my order and proceed with the payment.`;
    
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(text)}`, '_blank');
    setStep(2); // Show confirmation
  };

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-container-padding py-section-gap">
        <Link to="/product" className="inline-flex items-center gap-2 text-label-sm text-on-surface-variant uppercase tracking-widest hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          {t('back', 'order')}
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-section-gap">
          {/* Checkout Form */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2 mb-8">
              <h1 className="text-headline-lg text-on-surface">{t('secureCheckout', 'order')}</h1>
              <p className="text-body-md text-on-surface-variant">{t('checkoutDesc', 'order')}</p>
            </div>

            {/* Stepper */}
            <div className="flex items-center justify-between border-b border-outline-variant pb-8">
              <div className="flex flex-col items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-label-sm font-bold ${step >= 1 ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-on-surface-variant'}`}>1</div>
                <span className="text-[10px] uppercase font-bold text-on-surface">{t('shippingStep', 'order')}</span>
              </div>
              <div className={`flex-1 h-px mx-4 ${step >= 2 ? 'bg-primary' : 'bg-outline-variant'}`}></div>
              <div className="flex flex-col items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-label-sm font-bold ${step >= 2 ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-on-surface-variant'}`}>2</div>
                <span className="text-[10px] uppercase font-bold text-on-surface">{t('confirmStep', 'order')}</span>
              </div>
            </div>

            {/* Step 1: Shipping */}
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <div className="bg-[#25D366]/10 border border-[#25D366] p-4 rounded-lg flex items-start gap-4 mb-6">
                  <MessageCircle className="w-6 h-6 text-[#25D366] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-on-surface">{t('whatsappTitle', 'order')}</h3>
                    <p className="text-sm text-on-surface-variant mt-1">{t('whatsappDesc', 'order')}</p>
                  </div>
                </div>

                <h2 className="text-title-md text-on-surface border-b border-outline-variant pb-2">{t('shippingInfo', 'order')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t('email', 'order')} className="col-span-1 md:col-span-2 w-full bg-surface-container p-4 border border-outline-variant focus:border-primary outline-none transition-colors" />
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder={t('firstName', 'order')} className="w-full bg-surface-container p-4 border border-outline-variant focus:border-primary outline-none transition-colors" />
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder={t('lastName', 'order')} className="w-full bg-surface-container p-4 border border-outline-variant focus:border-primary outline-none transition-colors" />
                  <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder={t('address', 'order')} className="col-span-1 md:col-span-2 w-full bg-surface-container p-4 border border-outline-variant focus:border-primary outline-none transition-colors" />
                  <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder={t('city', 'order')} className="w-full bg-surface-container p-4 border border-outline-variant focus:border-primary outline-none transition-colors" />
                  <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} placeholder={t('postalCode', 'order')} className="w-full bg-surface-container p-4 border border-outline-variant focus:border-primary outline-none transition-colors" />
                </div>
                <button onClick={handleOrder} className="w-full bg-[#25D366] text-white h-14 flex items-center justify-center gap-2 text-label-sm uppercase tracking-widest font-bold hover:bg-[#20BE5C] transition-all mt-4 rounded-md shadow-lg">
                  <MessageCircle className="w-5 h-5" />
                  {t('placeOrder', 'order')}
                </button>
              </motion.div>
            )}

            {/* Step 2: Review/Confirmation */}
            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6 text-center py-12">
                <CheckCircle className="w-20 h-20 text-[#25D366] mx-auto mb-6" />
                <h2 className="text-headline-lg text-on-surface">{t('orderSent', 'order')}</h2>
                <p className="text-body-md text-on-surface-variant max-w-md mx-auto">
                  {t('orderSentDesc', 'order')}
                </p>
                <Link to="/" className="inline-block mt-8 bg-primary text-on-primary px-8 h-12 leading-[48px] text-label-sm uppercase tracking-widest font-bold hover:opacity-90 transition-all">
                  {t('returnHome', 'order')}
                </Link>
              </motion.div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-5">
            <div className="clinical-card bg-surface-container-lowest p-6 sticky top-28">
              <h3 className="text-title-md text-on-surface mb-6 border-b border-outline-variant pb-4">{t('orderSummary', 'order')}</h3>
              
              <div className="flex gap-4 mb-6">
                <div className="w-20 h-20 bg-surface-container herbal-gradient flex items-center justify-center p-2 rounded">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlAc-dmCHqZiqr48ySP9nF0pu2DKkE-706iltkxfsX9aQTivEfY4fWOjpgaiQCFno33XgAM6guyTkULB41UCAflkUBjqM0_lkk8YyZLFA4keTohJi2DnZihgY93aJ1HnlRvCRrV-aQsU31Xnh3GhmkTjFrUn9K1464E4NbXIB_8UJ5027lpkaIt94WivHFwVuFYQeiOhUXdpz2Y59PoO25ds0vpEkr6-vxGM7iHOtgJVKS_hIRiYGcj5L6-kart86PJkon_1yjnstU" alt="Product" className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-on-surface">AyurPeak Power Plus</h4>
                  <p className="text-label-sm text-on-surface-variant uppercase mt-1">{t('supply', 'order')}</p>
                  <p className="text-title-md text-primary mt-2">₹2,999</p>
                </div>
              </div>

              <div className="space-y-3 text-body-md text-on-surface-variant border-y border-outline-variant py-4 mb-4">
                <div className="flex justify-between">
                  <span>{t('subtotal', 'order')}</span>
                  <span>₹2,999</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('shipping', 'order')}</span>
                  <span className="text-secondary font-bold">{t('free', 'order')}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('taxes', 'order')}</span>
                  <span>₹0.00</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-8">
                <span className="text-title-md text-on-surface font-bold">{t('total', 'order')}</span>
                <span className="text-headline-lg text-primary font-bold">₹2,999</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-label-sm text-on-surface-variant">
                  <ShieldCheck className="w-5 h-5 text-secondary" />
                  <span>{t('guarantee', 'order')}</span>
                </div>
                <div className="flex items-center gap-3 text-label-sm text-on-surface-variant">
                  <Lock className="w-5 h-5 text-secondary" />
                  <span>{t('ssl', 'order')}</span>
                </div>
                <div className="flex items-center gap-3 text-label-sm text-on-surface-variant">
                  <Truck className="w-5 h-5 text-secondary" />
                  <span>{t('express', 'order')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
