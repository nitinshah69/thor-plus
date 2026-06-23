import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, section?: string) => string;
}

const translations = {
  en: {
    nav: {
      products: "Products",
      ingredients: "Ingredients",
      about: "About Us",
      faq: "FAQ",
      contact: "Contact",
      shopNow: "Shop Now"
    },
    hero: {
      tag: "Pharmaceutical Grade Supplements",
      title: "Advanced Wellness for the Modern Man.",
      subtitle: "AyurPeak combines ancient herbal wisdom with clinical precision to deliver unmatched male performance and vitality. Validated by science, trusted by professionals.",
      cta: "Explore the Lineup",
      cta2: "View Clinical Data",
      reviews: "from 10,000+ men",
      cardTitle: "AyurPeak Power Plus",
      cardSub: "Men's Health Specialist",
      price: "₹2,999"
    },
    problem: {
      title: "Running on Empty?",
      subtitle: "The demands of modern life shouldn't dictate your energy levels. If you're experiencing these challenges, you're not alone.",
      c1Title: "Mid-Day Slumps",
      c1Desc: "Relying on caffeine just to make it through the afternoon meetings.",
      c2Title: "Reduced Stamina",
      c2Desc: "Struggling to find the motivation and physical endurance for workouts or family time.",
      c3Title: "Brain Fog",
      c3Desc: "Difficulty concentrating and maintaining mental sharpness during critical tasks."
    },
    benefits: {
      title: "Fuel Your Potential",
      subtitle: "Comprehensive support designed specifically for male physiology to help you perform at your peak, naturally and sustainably.",
      b1Title: "Energy Support",
      b1Desc: "Sustains natural energy levels throughout the day without the sudden crashes associated with stimulants.",
      b2Title: "Active Lifestyle",
      b2Desc: "Provides foundational nutrients required for peak physical performance and active recovery.",
      b3Title: "Confidence Support",
      b3Desc: "Promotes an overall sense of well-being, balance, and masculine vitality.",
      b4Title: "Mental Clarity",
      b4Desc: "Supports cognitive function, helping you stay sharp and focused under pressure."
    },
    howitworks: {
      title: "The Daily Routine for Success",
      w1Title: "Consistency is Key",
      w1Desc: "Take two capsules daily with water, preferably alongside a meal. Make it a non-negotiable part of your morning routine.",
      w2Title: "Cellular Absorption",
      w2Desc: "Our advanced delivery system ensures that key phytonutrients are actively absorbed into your bloodstream rather than wasted.",
      w3Title: "Cumulative Benefits",
      w3Desc: "While some feel an immediate difference, the true power of AyurPeak builds over 3-4 weeks of consistent daily usage."
    },
    science: {
      title: "The Science of Ayurveda",
      subtitle: "Our unique blend combines ancient Ayurvedic wisdom with modern scientific extraction for maximum bioavailability.",
      s1Title: "Ashwagandha KSM-66",
      s1Desc: "The world's most clinically studied Ashwagandha root extract, proven to reduce stress and enhance natural energy levels.",
      s2Title: "Shilajit Extract",
      s2Desc: "Sourced from the high Himalayas, rich in Fulvic Acid to support cellular energy production and overall vitality.",
      s3Title: "Safed Musli",
      s3Desc: "A potent adaptogen traditionally used in Ayurveda to build strength, endurance, and robust physical performance."
    },
    philosophy: {
      title: "The Intersection of Ancient Wisdom and Modern Clinical Science",
      p1: "For over 3,000 years, Ayurvedic practitioners have understood that male vitality is not merely the absence of fatigue, but a holistic state of robust endocrine health, mental clarity, and sustained physical endurance. At AyurPeak, we do not simply rely on historical texts; we subject these ancient formulations to rigorous modern scientific scrutiny.",
      p2: "Our foundational approach is rooted in the concept of 'Rasayana' (rejuvenation therapy). By selecting specific adaptogenic herbs like Ashwagandha KSM-66 and Shilajit, we target the body's physiological response to stress. High cortisol levels (the stress hormone) actively suppress testosterone production and accelerate fatigue. Our synergistic blend actively lowers cortisol, thereby creating an optimal internal environment for natural vitality to flourish.",
      p3: "Unlike conventional supplements that use 'proprietary blends' to hide low dosages, our formulation strategy is built on complete transparency and clinical efficacy. Every ingredient is extracted using high-performance liquid chromatography (HPLC) to ensure maximum concentration of active alkaloids and saponins. This means you aren't just ingesting raw root powder; you are receiving the precise, concentrated active compounds necessary to trigger genuine physiological improvements.",
      p4: "This meticulous commitment to dual-validation—where an ingredient must be both revered in classical Ayurveda and proven in modern double-blind placebo-controlled trials—is what elevates AyurPeak Power Plus from a standard supplement to a premium clinical intervention."
    },
    why: {
      title: "Why Choose AyurPeak?",
      subtitle: "We believe in transparency and science-backed formulations.",
      f1Title: "Clinical Dosages",
      f1Desc: "No proprietary blends. You get the exact clinical dose required for actual results.",
      f2Title: "Premium Sourcing",
      f2Desc: "We travel the world to source the highest quality, most bioavailable raw materials.",
      f3Title: "Synergistic Formula",
      f3Desc: "Ingredients that work together to amplify each other's benefits for maximum efficacy."
    },
    timeline: {
      title: "What to Expect",
      subtitle: "Real wellness isn't an overnight fix. It's a journey of consistent nutritional support.",
      week: "Week",
      w1: "Foundational Phase",
      w1d: "Your body begins adapting to consistent nutrient support. Notice subtle improvements in morning alertness.",
      w3: "Momentum Phase",
      w3d: "Experience more consistent daily energy and improved focus during demanding tasks.",
      w5: "Optimization Phase",
      w5d: "Enjoy sustained vitality, supported physical stamina, and a reinforced sense of daily well-being."
    },
    trust: {
      title: "Validated Quality Standards",
      t1: "Every AyurPeak product specialist ensures clarity and rigorous clinical adherence for your wellness journey. Professional pharmaceutical grade supplements delivered with precision.",
      t2: "Every batch is independently tested for purity, potency, and heavy metals.",
      t3: "100% natural formula free from synthetic additives, fillers, and artificial colors.",
      t4: "Developed by clinical herbalists and nutritional experts.",
      cta: "View Our Ingredients",
      guarantee: "365-Day Guarantee",
      guaranteeDesc: "100% satisfaction or full refund.",
      thirdParty: "Clinically Confirmed",
      thirdPartyDesc: "Product safety & effectiveness tested.",
      global: "Global Standards",
      globalDesc: "International pharma-grade compliance."
    },
    whatsapp: {
      title: "AyurPeak Specialist",
      status: "Online",
      welcome: "Hello! Welcome to AyurPeak. How can I help you today?",
      options: "Here are some things you can ask me:",
      opt1: "What is AyurPeak Power Plus?",
      opt2: "What are the ingredients?",
      opt3: "How much does it cost?",
      opt4: "I want to place an order",
      ans1: "AyurPeak Power Plus is a clinical-grade, premium Ayurvedic supplement designed to boost male stamina, endurance, and overall vitality.",
      ans2: "Our formula includes high-yield extracts of Ashwagandha KSM-66, Tribulus Terrestris, Tongkat Ali, and Panax Ginseng. All 3rd-party tested!",
      ans3: "A one-month supply of AyurPeak Power Plus is ₹2,999 with Free Express Shipping.",
      ans4: "Great! Let's complete your order on WhatsApp securely.",
      placeholder: "Type a message...",
      send: "Send",
      connectWhatsApp: "Connect with us on WhatsApp to continue this conversation!"
    },
    faq: {
      title: "Frequently Asked Questions",
      q1: "Is this a replacement for my medication?",
      a1: "No. Our supplements are designed to support general wellness and are not intended to diagnose, treat, cure, or prevent any disease. Always consult your healthcare provider before starting any new supplement regimen.",
      q2: "How long until I feel a difference?",
      a2: "While individual results vary, most men report feeling more balanced energy levels and improved focus within 3-4 weeks of consistent daily use.",
      q3: "Are the ingredients tested for safety?",
      a3: "Yes. Every batch undergoes rigorous third-party laboratory testing to ensure purity, potency, and compliance with our strict safety standards.",
      q4: "How should I take the supplement?",
      a4: "For optimal results, take two capsules daily with water, preferably with a meal. Consistency is key for achieving the best outcomes."
    },
    testimonials: {
      title: "Trusted by Men Worldwide",
      t1: "After 3 weeks of taking this daily, the mid-afternoon crashes are gone. I feel more balanced and ready to tackle both work and the gym.",
      t2: "I was skeptical at first, but the sustained energy is real. It's not a jittery feeling, just a solid baseline of vitality throughout the day.",
      t3: "Great addition to my routine. The transparency about ingredients and the actual results have made me a loyal customer. Highly recommended.",
      verified: "Verified Buyer"
    },
    finalCta: {
      title: "Ready to Take Control?",
      desc: "Join thousands of men who have upgraded their daily routine with AyurPeak. Backed by our 365-day guarantee.",
      btn: "ORDER NOW RISK-FREE"
    },
    product: {
      breadcrumbs: { home: "Home", category: "Supplements", name: "AyurPeak Power Plus" },
      badges: { clinical: "Clinically Confirmed", rated: "Top Rated 2024" },
      heritage: "AyurPeak Heritage",
      title: "AyurPeak Power Plus",
      subtitle: "WORLD BEST MALE PERFORMANCE",
      reviews: "4.9/5 (1,248 Verified Reviews)",
      price: "₹2,999",
      oldPrice: "₹4,999",
      stock: "In Stock",
      shipping: "Ships within 24 hours",
      qty: "Quantity",
      checkoutBtn: "Proceed to Checkout",
      whatsappBtn: "Order via WhatsApp",
      shopPayBtn: "Buy with Shop Pay",
      consultTitle: "Consult a Specialist",
      consultDesc: "Our AyurPeak medical team is ready to answer your questions and clarify delivery details for Power Plus.",
      consultBtn: "Start Consultation",
      guaranteeBanner: "365 Days Guarantee",
      clinicalBanner: "Clinically Tested",
      integrityTitle: "Scientific Integrity",
      integrityDesc: "AyurPeak utilizes a proprietary extraction process to maintain the bio-activity of every herb. Designed to support endocrine function and metabolic vitality.",
      gmp: "GMP Certified Facility",
      lab: "Third-Party Lab Tested",
      ingredientsTitle: "Ingredients",
      component: "Component",
      strength: "Strength",
      serving: "Serving Size: 2 Veg Capsules. 30 Servings per bottle.",
      effectivenessTitle: "Clinical Effectiveness",
      rate: "98.2% Confirmation Rate",
      rateDesc: "Clinical trials indicated significant improvement in vitality markers within 14 days of consistent usage.",
      euDesc: "Product safety and effectiveness are clinically confirmed.",
      qualityTitle: "Our Quality Commitment",
      qualityDesc: "We stand by the pharmaceutical efficacy of AyurPeak. If you are not 100% satisfied with the results, we offer a full refund within 365 days of purchase. No questions asked.",
      termsBtn: "View Terms"
    },
    ingredients: {
      title: "Clinical Formulations",
      subtitle: "Transparency is our standard. Every ingredient in the AyurPeak line is rigorously tested for purity, potency, and bioavailability.",
      i1Name: "Ashwagandha KSM-66",
      i1Desc: "A highly concentrated, highly bioavailable extract of Ashwagandha root. Clinically proven to reduce stress, improve sleep quality, and enhance natural vitality.",
      i2Name: "Tribulus Terrestris",
      i2Desc: "Standardized to 95% Saponins. Known for its ability to support metabolic function and maintain healthy endocrine balance in men.",
      i3Name: "Tongkat Ali Root",
      i3Desc: "A 200:1 high-potency extract. Extensively researched for its positive effects on stamina, muscular endurance, and combatting fatigue.",
      i4Name: "Panax Ginseng Extract",
      i4Desc: "A potent adaptogen that helps the body combat physical and mental stress while boosting cognitive performance and physical resilience.",
      processTitle: "Our Validation Process",
      processSubtitle: "From raw material sourcing to final capsule assembly, our 4-step verification protocol ensures absolute clinical integrity.",
      p1Title: "1. Origin Tracing",
      p1Desc: "We source herbs from their native environments for maximal potency.",
      p2Title: "2. HPLC Testing",
      p2Desc: "Active compounds are verified using High-Performance Liquid Chromatography.",
      p3Title: "3. Microbial Screening",
      p3Desc: "Every batch is checked for heavy metals, pesticides, and biological contaminants.",
      p4Title: "4. Final Verification",
      p4Desc: "Third-party labs confirm the final product matches label claims exactly."
    },
    order: {
      back: "Back to Product",
      secureCheckout: "Secure Checkout",
      checkoutDesc: "Complete your order of AyurPeak Power Plus.",
      shippingStep: "Shipping",
      confirmStep: "Confirmation",
      whatsappTitle: "Fast & Secure WhatsApp Checkout",
      whatsappDesc: "Fill in your shipping details below. You will be redirected to WhatsApp to confirm your order and securely complete your payment with our team.",
      shippingInfo: "Shipping Information",
      email: "Email Address",
      firstName: "First Name",
      lastName: "Last Name",
      address: "Address",
      city: "City",
      postalCode: "Postal Code",
      placeOrder: "Place Order via WhatsApp",
      orderSent: "Order Sent!",
      orderSentDesc: "Your order details have been sent. Please check your WhatsApp to complete the payment and finalize your purchase with our team.",
      returnHome: "Return to Home",
      orderSummary: "Order Summary",
      supply: "1x Month Supply",
      subtotal: "Subtotal",
      shipping: "Shipping",
      free: "FREE",
      taxes: "Taxes",
      total: "Total",
      guarantee: "365-Day Money-Back Guarantee",
      ssl: "Secure 256-bit SSL Encryption",
      express: "Free Express Shipping Worldwide"
    }
  },
  hi: {
    nav: {
      products: "उत्पाद",
      ingredients: "सामग्री",
      about: "हमारे बारे में",
      faq: "सामान्य प्रश्न",
      contact: "संपर्क करें",
      shopNow: "अभी खरीदें"
    },
    hero: {
      tag: "फार्मास्युटिकल ग्रेड सप्लीमेंट",
      title: "आधुनिक आदमी के लिए उन्नत कल्याण।",
      subtitle: "आयुषपीक बेजोड़ पुरुष प्रदर्शन और जीवन शक्ति प्रदान करने के लिए नैदानिक परिशुद्धता के साथ प्राचीन हर्बल ज्ञान को जोड़ता है। विज्ञान द्वारा मान्य, पेशेवरों द्वारा विश्वसनीय।",
      cta: "लाइनअप एक्सप्लोर करें",
      cta2: "नैदानिक डेटा देखें",
      reviews: "10,000+ पुरुषों से",
      cardTitle: "आयुषपीक पावर प्लस",
      cardSub: "पुरुषों के स्वास्थ्य विशेषज्ञ",
      price: "₹2,999"
    },
    problem: {
      title: "थका हुआ महसूस कर रहे हैं?",
      subtitle: "आधुनिक जीवन की माँगें आपकी ऊर्जा के स्तर को तय नहीं करनी चाहिए। यदि आप इन चुनौतियों का सामना कर रहे हैं, तो आप अकेले नहीं हैं।",
      c1Title: "दोपहर की थकान",
      c1Desc: "दोपहर की बैठकों को पार करने के लिए कैफीन पर निर्भर रहना।",
      c2Title: "कम सहनशक्ति",
      c2Desc: "व्यायाम या परिवार के समय के लिए प्रेरणा और शारीरिक सहनशक्ति खोजने में संघर्ष करना।",
      c3Title: "मानसिक धुंध",
      c3Desc: "महत्वपूर्ण कार्यों के दौरान ध्यान केंद्रित करने और मानसिक तीक्ष्णता बनाए रखने में कठिनाई।"
    },
    benefits: {
      title: "अपनी क्षमता को बढ़ावा दें",
      subtitle: "विशेष रूप से पुरुष शरीर क्रिया विज्ञान के लिए डिज़ाइन किया गया व्यापक समर्थन, जो आपको स्वाभाविक और स्थायी रूप से अपने चरम पर प्रदर्शन करने में मदद करता है।",
      b1Title: "ऊर्जा समर्थन",
      b1Desc: "उत्तेजक पदार्थों से जुड़ी अचानक गिरावट के बिना पूरे दिन प्राकृतिक ऊर्जा के स्तर को बनाए रखता है।",
      b2Title: "सक्रिय जीवन शैली",
      b2Desc: "चरम शारीरिक प्रदर्शन और सक्रिय पुनर्प्राप्ति के लिए आवश्यक मूलभूत पोषक तत्व प्रदान करता है।",
      b3Title: "आत्मविश्वास समर्थन",
      b3Desc: "समग्र कल्याण, संतुलन और मर्दाना जीवन शक्ति की भावना को बढ़ावा देता है।",
      b4Title: "मानसिक स्पष्टता",
      b4Desc: "संज्ञानात्मक कार्य का समर्थन करता है, जिससे आप दबाव में भी तेज और केंद्रित रह सकते हैं।"
    },
    howitworks: {
      title: "सफलता के लिए दैनिक दिनचर्या",
      w1Title: "निरंतरता महत्वपूर्ण है",
      w1Desc: "रोजाना दो कैप्सूल पानी के साथ लें, अधिमानतः भोजन के साथ। इसे अपनी सुबह की दिनचर्या का एक अनिवार्य हिस्सा बनाएं।",
      w2Title: "सेलुलर अवशोषण",
      w2Desc: "हमारी उन्नत वितरण प्रणाली यह सुनिश्चित करती है कि प्रमुख फाइटोन्यूट्रिएंट्स आपके रक्तप्रवाह में सक्रिय रूप से अवशोषित हों।",
      w3Title: "संचयी लाभ",
      w3Desc: "हालांकि कुछ को तत्काल अंतर महसूस होता है, आयुषपीक की असली शक्ति 3-4 सप्ताह के निरंतर दैनिक उपयोग से बनती है।"
    },
    science: {
      title: "आयुर्वेद का विज्ञान",
      subtitle: "हमारा अनूठा मिश्रण अधिकतम जैव उपलब्धता के लिए आधुनिक वैज्ञानिक निष्कर्षण के साथ प्राचीन आयुर्वेदिक ज्ञान को जोड़ता है।",
      s1Title: "अश्वगंधा KSM-66",
      s1Desc: "दुनिया का सबसे अधिक चिकित्सकीय रूप से अध्ययन किया गया अश्वगंधा जड़ का अर्क, जो तनाव को कम करने और प्राकृतिक ऊर्जा के स्तर को बढ़ाने के लिए सिद्ध है।",
      s2Title: "शिलाजीत का अर्क",
      s2Desc: "उच्च हिमालय से प्राप्त, फुल्विक एसिड से भरपूर जो सेलुलर ऊर्जा उत्पादन और समग्र जीवन शक्ति का समर्थन करता है।",
      s3Title: "सफेद मूसली",
      s3Desc: "एक शक्तिशाली एडॉप्टोजेन जिसका पारंपरिक रूप से आयुर्वेद में ताकत, सहनशक्ति और मजबूत शारीरिक प्रदर्शन के निर्माण के लिए उपयोग किया जाता है।"
    },
    philosophy: {
      title: "प्राचीन ज्ञान और आधुनिक नैदानिक विज्ञान का संगम",
      p1: "3,000 से अधिक वर्षों से, आयुर्वेदिक चिकित्सकों ने समझा है कि पुरुष जीवन शक्ति केवल थकान की अनुपस्थिति नहीं है, बल्कि मजबूत अंतःस्रावी स्वास्थ्य, मानसिक स्पष्टता और निरंतर शारीरिक सहनशक्ति की एक समग्र स्थिति है। आयुषपीक में, हम केवल ऐतिहासिक ग्रंथों पर निर्भर नहीं हैं; हम इन प्राचीन योगों को कठोर आधुनिक वैज्ञानिक जांच के अधीन करते हैं।",
      p2: "हमारा मूलभूत दृष्टिकोण 'रसायन' (कायाकल्प चिकित्सा) की अवधारणा में निहित है। अश्वगंधा KSM-66 और शिलाजीत जैसी विशिष्ट एडाप्टोजेनिक जड़ी-बूटियों का चयन करके, हम तनाव के प्रति शरीर की शारीरिक प्रतिक्रिया को लक्षित करते हैं। उच्च कोर्टिसोल स्तर (तनाव हार्मोन) सक्रिय रूप से टेस्टोस्टेरोन उत्पादन को दबाते हैं और थकान को तेज करते हैं। हमारा सहक्रियात्मक मिश्रण सक्रिय रूप से कोर्टिसोल को कम करता है, जिससे प्राकृतिक जीवन शक्ति को पनपने के लिए एक इष्टतम आंतरिक वातावरण बनता है।",
      p3: "पारंपरिक पूरक के विपरीत जो कम खुराक को छिपाने के लिए 'मालिकाना मिश्रण' का उपयोग करते हैं, हमारी सूत्रीकरण रणनीति पूर्ण पारदर्शिता और नैदानिक प्रभावकारिता पर बनाई गई है। सक्रिय अल्कलॉइड और सैपोनिन की अधिकतम सांद्रता सुनिश्चित करने के लिए उच्च प्रदर्शन तरल क्रोमैटोग्राफी (HPLC) का उपयोग करके हर घटक निकाला जाता है। इसका मतलब है कि आप सिर्फ कच्चा जड़ पाउडर नहीं ले रहे हैं; आप वास्तविक शारीरिक सुधारों को ट्रिगर करने के लिए आवश्यक सटीक, केंद्रित सक्रिय यौगिक प्राप्त कर रहे हैं।",
      p4: "दोहरी-सत्यापन के प्रति यह सावधानीपूर्वक प्रतिबद्धता—जहां एक घटक को शास्त्रीय आयुर्वेद में सम्मानित किया जाना चाहिए और आधुनिक डबल-ब्लाइंड प्लेसबो-नियंत्रित परीक्षणों में सिद्ध होना चाहिए—यही आयुषपीक पावर प्लस को एक मानक पूरक से एक प्रीमियम नैदानिक हस्तक्षेप तक बढ़ाता है।"
    },
    why: {
      title: "आयुषपीक क्यों चुनें?",
      subtitle: "हम पारदर्शिता और विज्ञान-समर्थित योगों में विश्वास करते हैं।",
      f1Title: "नैदानिक खुराक",
      f1Desc: "कोई मालिकाना मिश्रण नहीं। आपको वास्तविक परिणामों के लिए आवश्यक सटीक नैदानिक खुराक मिलती है।",
      f2Title: "प्रीमियम सोर्सिंग",
      f2Desc: "हम उच्चतम गुणवत्ता, सबसे अधिक जैव उपलब्ध कच्चे माल को प्राप्त करने के लिए दुनिया भर की यात्रा करते हैं।",
      f3Title: "सहक्रियात्मक सूत्र",
      f3Desc: "ऐसी सामग्री जो अधिकतम प्रभावकारिता के लिए एक दूसरे के लाभों को बढ़ाने के लिए एक साथ काम करती है।"
    },
    timeline: {
      title: "क्या उम्मीद करें",
      subtitle: "वास्तविक कल्याण रातोंरात ठीक नहीं होता है। यह निरंतर पोषण समर्थन की एक यात्रा है।",
      week: "सप्ताह",
      w1: "मूलभूत चरण",
      w1d: "आपका शरीर निरंतर पोषक तत्वों के समर्थन के अनुकूल होने लगता है। सुबह की सतर्कता में सूक्ष्म सुधार देखें।",
      w3: "गति चरण",
      w3d: "मांग वाले कार्यों के दौरान अधिक निरंतर दैनिक ऊर्जा और बेहतर फोकस का अनुभव करें।",
      w5: "अनुकूलन चरण",
      w5d: "निरंतर जीवन शक्ति, समर्थित शारीरिक सहनशक्ति और दैनिक कल्याण की मजबूत भावना का आनंद लें।"
    },
    trust: {
      title: "मान्य गुणवत्ता मानक",
      t1: "प्रत्येक आयुषपीक उत्पाद विशेषज्ञ आपकी कल्याण यात्रा के लिए स्पष्टता और कठोर नैदानिक अनुपालन सुनिश्चित करता है। पेशेवर फार्मास्युटिकल ग्रेड सप्लीमेंट्स सटीक रूप से वितरित किए जाते हैं।",
      t2: "पवित्रता, क्षमता और भारी धातुओं के लिए प्रत्येक बैच का स्वतंत्र रूप से परीक्षण किया जाता है।",
      t3: "सिंथेटिक एडिटिव्स, फिलर्स और कृत्रिम रंगों से मुक्त 100% प्राकृतिक सूत्र।",
      t4: "नैदानिक हर्बलिस्ट और पोषण विशेषज्ञों द्वारा विकसित।",
      cta: "हमारी सामग्री देखें",
      guarantee: "365-दिन की गारंटी",
      guaranteeDesc: "100% संतुष्टि या पूर्ण धनवापसी।",
      thirdParty: "चिकित्सकीय रूप से पुष्टि",
      thirdPartyDesc: "उत्पाद सुरक्षा और प्रभावशीलता का परीक्षण किया गया।",
      global: "वैश्विक मानक",
      globalDesc: "अंतर्राष्ट्रीय फार्मा-ग्रेड अनुपालन।"
    },
    whatsapp: {
      title: "आयुषपीक विशेषज्ञ",
      status: "ऑनलाइन",
      welcome: "नमस्ते! आयुषपीक में आपका स्वागत है। आज मैं आपकी कैसे मदद कर सकता हूँ?",
      options: "यहां कुछ चीजें हैं जो आप मुझसे पूछ सकते हैं:",
      opt1: "आयुषपीक पावर प्लस क्या है?",
      opt2: "सामग्री क्या हैं?",
      opt3: "इसकी कीमत कितनी है?",
      opt4: "मैं ऑर्डर देना चाहता हूं",
      ans1: "आयुषपीक पावर प्लस एक नैदानिक-ग्रेड, प्रीमियम आयुर्वेदिक पूरक है जो पुरुष सहनशक्ति, धीरज और समग्र जीवन शक्ति को बढ़ावा देने के लिए डिज़ाइन किया गया है।",
      ans2: "हमारे सूत्र में अश्वगंधा KSM-66, गोक्षुर, टोंगकैट अली और पैनाक्स जिनसेंग के उच्च-उपज वाले अर्क शामिल हैं। सभी 3 पार्टी द्वारा परीक्षण किए गए हैं!",
      ans3: "आयुषपीक पावर प्लस की एक महीने की आपूर्ति मुफ्त एक्सप्रेस शिपिंग के साथ ₹2,999 है।",
      ans4: "बहुत बढ़िया! आइए आपका ऑर्डर सुरक्षित रूप से WhatsApp पर पूरा करें।",
      placeholder: "एक संदेश टाइप करें...",
      send: "भेजें",
      connectWhatsApp: "इस बातचीत को जारी रखने के लिए हमसे WhatsApp पर जुड़ें!"
    },
    faq: {
      title: "सामान्य प्रश्न (FAQ)",
      q1: "क्या यह मेरी दवा का विकल्प है?",
      a1: "नहीं। हमारे पूरक सामान्य कल्याण का समर्थन करने के लिए डिज़ाइन किए गए हैं और इनका उद्देश्य किसी भी बीमारी का निदान, उपचार, इलाज या रोकथाम करना नहीं है। कोई भी नया पूरक आहार शुरू करने से पहले हमेशा अपने स्वास्थ्य सेवा प्रदाता से परामर्श लें।",
      q2: "मुझे अंतर महसूस होने में कितना समय लगेगा?",
      a2: "हालांकि व्यक्तिगत परिणाम भिन्न होते हैं, अधिकांश पुरुष लगातार दैनिक उपयोग के 3-4 सप्ताह के भीतर अधिक संतुलित ऊर्जा स्तर और बेहतर फोकस महसूस करने की रिपोर्ट करते हैं।",
      q3: "क्या सुरक्षा के लिए सामग्री का परीक्षण किया गया है?",
      a3: "हाँ। शुद्धता, शक्ति और हमारे सख्त सुरक्षा मानकों के अनुपालन को सुनिश्चित करने के लिए हर बैच कठोर तृतीय-पक्ष प्रयोगशाला परीक्षण से गुजरता है।",
      q4: "मुझे पूरक कैसे लेना चाहिए?",
      a4: "इष्टतम परिणामों के लिए, रोजाना दो कैप्सूल पानी के साथ लें, अधिमानतः भोजन के साथ। सर्वोत्तम परिणाम प्राप्त करने के लिए निरंतरता महत्वपूर्ण है।"
    },
    testimonials: {
      title: "दुनिया भर के पुरुषों द्वारा विश्वसनीय",
      t1: "इसे रोजाना लेने के 3 सप्ताह बाद, दोपहर की थकान दूर हो गई है। मैं अधिक संतुलित महसूस करता हूं और काम और जिम दोनों से निपटने के लिए तैयार हूं।",
      t2: "मैं पहले संशय में था, लेकिन निरंतर ऊर्जा वास्तविक है। यह घबराहट की भावना नहीं है, बल्कि पूरे दिन जीवन शक्ति का एक ठोस आधार है।",
      t3: "मेरी दिनचर्या में शानदार अतिरिक्त। सामग्री के बारे में पारदर्शिता और वास्तविक परिणामों ने मुझे एक वफादार ग्राहक बना दिया है। अत्यधिक अनुशंसित।",
      verified: "सत्यापित खरीदार"
    },
    finalCta: {
      title: "नियंत्रण लेने के लिए तैयार हैं?",
      desc: "उन हजारों पुरुषों में शामिल हों जिन्होंने AyurPeak के साथ अपनी दैनिक दिनचर्या को अपग्रेड किया है। हमारी 365-दिन की गारंटी द्वारा समर्थित।",
      btn: "अब बिना जोखिम के ऑर्डर करें"
    },
    product: {
      breadcrumbs: { home: "होम", category: "सप्लीमेंट्स", name: "आयुषपीक पावर प्लस" },
      badges: { clinical: "नैदानिक रूप से प्रमाणित", rated: "शीर्ष रेटेड 2024" },
      heritage: "आयुषपीक विरासत",
      title: "आयुषपीक पावर प्लस",
      subtitle: "दुनिया का सर्वश्रेष्ठ पुरुष प्रदर्शन",
      reviews: "4.9/5 (1,248 सत्यापित समीक्षाएँ)",
      price: "₹2,999",
      oldPrice: "₹4,999",
      stock: "स्टॉक में",
      shipping: "24 घंटे के भीतर जहाज",
      qty: "मात्रा",
      checkoutBtn: "चेकआउट के लिए आगे बढ़ें",
      whatsappBtn: "WhatsApp के माध्यम से ऑर्डर करें",
      shopPayBtn: "Shop Pay से खरीदें",
      consultTitle: "एक विशेषज्ञ से परामर्श लें",
      consultDesc: "हमारी आयुषपीक चिकित्सा टीम आपके सवालों के जवाब देने और पावर प्लस के वितरण विवरण को स्पष्ट करने के लिए तैयार है।",
      consultBtn: "परामर्श शुरू करें",
      guaranteeBanner: "365 दिन की गारंटी",
      clinicalBanner: "नैदानिक रूप से परीक्षण किया गया",
      integrityTitle: "वैज्ञानिक अखंडता",
      integrityDesc: "आयुषपीक प्रत्येक जड़ी बूटी की जैव-सक्रियता को बनाए रखने के लिए एक मालिकाना निष्कर्षण प्रक्रिया का उपयोग करता है। अंतःस्रावी कार्य और चयापचय जीवन शक्ति का समर्थन करने के लिए डिज़ाइन किया गया।",
      gmp: "जीएमपी प्रमाणित सुविधा",
      lab: "थर्ड-पार्टी लैब टेस्टेड",
      ingredientsTitle: "सामग्री",
      component: "घटक",
      strength: "क्षमता",
      serving: "सर्विंग साइज: 2 वेज कैप्सूल। प्रति बोतल 30 सर्विंग्स।",
      effectivenessTitle: "नैदानिक प्रभावशीलता",
      rate: "98.2% पुष्टि दर",
      rateDesc: "नैदानिक परीक्षणों ने लगातार उपयोग के 14 दिनों के भीतर जीवन शक्ति मार्करों में महत्वपूर्ण सुधार का संकेत दिया।",
      euDesc: "उत्पाद सुरक्षा और प्रभावशीलता नैदानिक रूप से प्रमाणित हैं।",
      qualityTitle: "हमारी गुणवत्ता प्रतिबद्धता",
      qualityDesc: "हम आयुषपीक की औषधीय प्रभावकारिता के साथ खड़े हैं। यदि आप परिणामों से 100% संतुष्ट नहीं हैं, तो हम खरीद के 365 दिनों के भीतर पूर्ण धनवापसी की पेशकश करते हैं। कोई सवाल नहीं पूछा जाएगा।",
      termsBtn: "शर्तें देखें"
    },
    ingredients: {
      title: "नैदानिक योग",
      subtitle: "पारदर्शिता हमारा मानक है। आयुषपीक लाइन के प्रत्येक घटक का शुद्धता, शक्ति और जैव उपलब्धता के लिए कड़ाई से परीक्षण किया जाता है।",
      i1Name: "अश्वगंधा KSM-66",
      i1Desc: "अश्वगंधा जड़ का अत्यधिक संकेंद्रित, अत्यधिक जैव उपलब्ध अर्क। तनाव को कम करने, नींद की गुणवत्ता में सुधार करने और प्राकृतिक जीवन शक्ति को बढ़ाने के लिए चिकित्सकीय रूप से सिद्ध।",
      i2Name: "गोक्षुर (Tribulus Terrestris)",
      i2Desc: "95% सैपोनिन के लिए मानकीकृत। चयापचय समारोह का समर्थन करने और पुरुषों में स्वस्थ अंतःस्रावी संतुलन बनाए रखने की क्षमता के लिए जाना जाता है।",
      i3Name: "टोंगकैट अली रूट",
      i3Desc: "एक 200:1 उच्च शक्ति वाला अर्क। सहनशक्ति, मांसपेशियों के धीरज और थकान से निपटने पर इसके सकारात्मक प्रभावों के लिए बड़े पैमाने पर शोध किया गया।",
      i4Name: "पैनाक्स जिनसेंग एक्सट्रैक्ट",
      i4Desc: "एक शक्तिशाली एडॉप्टोजेन जो संज्ञानात्मक प्रदर्शन और शारीरिक लचीलापन को बढ़ावा देते हुए शरीर को शारीरिक और मानसिक तनाव से निपटने में मदद करता है।",
      processTitle: "हमारी सत्यापन प्रक्रिया",
      processSubtitle: "कच्चे माल की सोर्सिंग से लेकर अंतिम कैप्सूल असेंबली तक, हमारा 4-चरणीय सत्यापन प्रोटोकॉल पूर्ण नैदानिक अखंडता सुनिश्चित करता है।",
      p1Title: "1. उत्पत्ति ट्रेसिंग",
      p1Desc: "हम अधिकतम शक्ति के लिए जड़ी-बूटियों को उनके मूल वातावरण से प्राप्त करते हैं।",
      p2Title: "2. HPLC परीक्षण",
      p2Desc: "सक्रिय यौगिकों को उच्च-प्रदर्शन तरल क्रोमैटोग्राफी का उपयोग करके सत्यापित किया जाता है।",
      p3Title: "3. माइक्रोबियल स्क्रीनिंग",
      p3Desc: "भारी धातुओं, कीटनाशकों और जैविक संदूषकों के लिए प्रत्येक बैच की जाँच की जाती है।",
      p4Title: "4. अंतिम सत्यापन",
      p4Desc: "तृतीय-पक्ष प्रयोगशालाएं पुष्टि करती हैं कि अंतिम उत्पाद लेबल दावों से बिल्कुल मेल खाता है।"
    },
    order: {
      back: "उत्पाद पर वापस जाएँ",
      secureCheckout: "सुरक्षित चेकआउट",
      checkoutDesc: "आयुषपीक पावर प्लस का अपना ऑर्डर पूरा करें।",
      shippingStep: "शिपिंग",
      confirmStep: "पुष्टि",
      whatsappTitle: "तेज़ और सुरक्षित WhatsApp चेकआउट",
      whatsappDesc: "नीचे अपना शिपिंग विवरण भरें। आपको अपना ऑर्डर कन्फर्म करने और हमारी टीम के साथ अपना भुगतान सुरक्षित रूप से पूरा करने के लिए WhatsApp पर रीडायरेक्ट किया जाएगा।",
      shippingInfo: "शिपिंग जानकारी",
      email: "ईमेल पता",
      firstName: "पहला नाम",
      lastName: "अंतिम नाम",
      address: "पता",
      city: "शहर",
      postalCode: "पोस्टल कोड",
      placeOrder: "WhatsApp के माध्यम से ऑर्डर करें",
      orderSent: "ऑर्डर भेजा गया!",
      orderSentDesc: "आपके ऑर्डर का विवरण भेज दिया गया है। भुगतान पूरा करने और हमारी टीम के साथ अपनी खरीदारी को अंतिम रूप देने के लिए कृपया अपना WhatsApp जांचें।",
      returnHome: "होम पर वापस जाएँ",
      orderSummary: "ऑर्डर सारांश",
      supply: "1x महीने की आपूर्ति",
      subtotal: "उप-योग",
      shipping: "शिपिंग",
      free: "मुफ़्त",
      taxes: "कर",
      total: "कुल",
      guarantee: "365-दिन की मनी-बैक गारंटी",
      ssl: "सुरक्षित 256-बिट एसएसएल एन्क्रिप्शन",
      express: "दुनिया भर में मुफ्त एक्सप्रेस शिपिंग"
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('hi');

  const t = (key: string, section: string = 'nav') => {
    try {
      return (translations as any)[language][section][key] || key;
    } catch (e) {
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
