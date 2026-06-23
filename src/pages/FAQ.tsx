import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

import PageTransition from '../components/PageTransition';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const faqs = [
    {
      question: "Are your supplements FDA approved?",
      answer: "While dietary supplements are not strictly 'approved' by the FDA, all our products are manufactured in highly regulated, FDA-registered, and GMP-certified facilities. We follow strict international quality controls."
    },
    {
      question: "How long does it take to see clinical results?",
      answer: "While individual metabolisms vary, our clinical trials indicate that most users begin noting improved vitality and sustained energy markers within 14 to 21 days of consistent daily usage."
    },
    {
      question: "Can I take Power of Thor Plus with other medications?",
      answer: "If you are currently on prescription medication, particularly for blood pressure or endocrine conditions, we strongly advise consulting with your primary healthcare provider before introducing any new supplement."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 365-day, 100% money-back guarantee. If you are not satisfied with your clinical results, simply contact our support team to initiate a hassle-free return, no questions asked."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, our global distribution network currently serves over 45 countries with temperature-controlled logistics to ensure product stability upon arrival."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PageTransition>
      <div className="w-full max-w-4xl mx-auto px-container-padding py-section-gap min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-section-gap"
      >
        <h1 className="text-headline-lg md:text-display-lg text-on-surface mb-stack-md">Frequently Asked Questions</h1>
        <p className="text-body-lg text-on-surface-variant">
          Clear, clinical answers to your most common inquiries.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="space-y-4"
      >
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="clinical-card bg-white rounded-xl overflow-hidden border border-outline-variant transition-all duration-300"
          >
            <button 
              className="w-full px-6 py-5 text-left flex justify-between items-center bg-surface-container-low hover:bg-surface-container transition-colors"
              onClick={() => toggleFaq(index)}
            >
              <h3 className="text-title-md text-on-surface font-bold pr-8">{faq.question}</h3>
              {openIndex === index ? (
                <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
              ) : (
                <ChevronDown className="w-6 h-6 text-on-surface-variant flex-shrink-0" />
              )}
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 overflow-hidden"
                >
                  <p className="text-body-md text-on-surface-variant leading-relaxed py-5">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>
      </div>
    </PageTransition>
  );
}
