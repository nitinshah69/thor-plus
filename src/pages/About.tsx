import React from 'react';
import { BadgeCheck, BookOpen, Leaf, ShieldCheck } from 'lucide-react';

import PageTransition from '../components/PageTransition';
import { motion } from 'motion/react';

export default function About() {
  return (
    <PageTransition>
      <div className="w-full max-w-7xl mx-auto px-container-padding py-section-gap">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-section-gap"
      >
        <div className="bg-surface-container-low rounded-xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden border border-outline-variant">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 bg-secondary-container px-3 py-1 rounded-full text-on-secondary-container text-label-sm">
              <BadgeCheck className="w-4 h-4 fill-secondary/20 text-secondary" />
              CLINICALLY VALIDATED PARTNERSHIP
            </div>
            
            <h1 className="text-display-lg text-on-surface leading-tight">
              Bridging Heritage with <span className="text-primary underline decoration-primary/20">Pharmaceutical Precision</span>.
            </h1>
            
            <p className="text-body-lg text-on-surface-variant max-w-2xl">
              Aegis Healthcare Worldwide Healthcare is the exclusive global distributor for Apex Elements, integrating ancient herbal wisdom into a modern, clinical framework of excellence.
            </p>
            
            <div className="flex gap-4">
              <button className="bg-primary text-on-primary px-8 py-3 rounded-lg text-title-md hover:opacity-90 transition-all">
                Our Clinical Standards
              </button>
              <button className="border border-outline text-on-surface px-8 py-3 rounded-lg text-title-md hover:bg-surface-variant transition-all">
                Partnerships
              </button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <img 
              className="w-full h-[400px] object-cover rounded-xl shadow-lg border border-outline-variant" 
              alt="Lab Microscope" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOQxYHOuIOTs0vU4V0mco8isNj0WW2SnyIct7fug9LfNCSMx1xv7zERMT_KnffZpa3C8me3sIKUmrKI52WNxw8KyGkP8S291cax5MO75pITqzsCYz5yzbxAw828PW5R0vJBpz10Wyvf-A6UDO9dIGrXbHaZINuVH7GgWIEWwX-aEVeJS2eOSd0ya0FJWIcisuxlCLGLH8pVWvs8XXm17jDBaxmd-8XYMqrQbQGNOE_h0-TlTINrpz9ElbLvo6ki3LDnT9NVVt1nYvX" 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </motion.section>

      {/* Our Heritage Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-section-gap"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-headline-lg text-on-surface">Our Heritage</h2>
            <p className="text-body-md text-on-surface-variant mt-2">Decades of logistical mastery meeting centuries of herbal knowledge.</p>
          </div>
          <div className="h-px flex-1 bg-outline-variant mx-8 hidden md:block"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="clinical-card p-8 rounded-xl bg-white space-y-4">
            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-title-md text-on-surface">Scientific Lineage</h3>
            <p className="text-body-md text-on-surface-variant">Founded on the principle that natural supplements require the same rigorous scrutiny as pharmaceutical grade drugs.</p>
          </div>
          
          <div className="clinical-card p-8 rounded-xl bg-white space-y-4">
            <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-lg">
              <Leaf className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-title-md text-on-surface">Apex Elements Alliance</h3>
            <p className="text-body-md text-on-surface-variant">Exclusive partnership with Apex Elements to bring standardized, high-potency herbal formulas to the global medical market.</p>
          </div>
          
          <div className="clinical-card p-8 rounded-xl bg-white space-y-4">
            <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center rounded-lg">
              <ShieldCheck className="w-6 h-6 text-on-surface" />
            </div>
            <h3 className="text-title-md text-on-surface">Integrity First</h3>
            <p className="text-body-md text-on-surface-variant">Our distribution network is certified under global GDP (Good Distribution Practice) standards for healthcare products.</p>
          </div>
        </div>
      </motion.section>

      {/* Global Reach Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-section-gap"
      >
        <div className="bg-inverse-surface text-inverse-on-surface rounded-xl overflow-hidden">
          <div className="p-8 md:p-12 border-b border-white/10">
            <h2 className="text-headline-lg">Global Distribution Excellence</h2>
            <p className="text-body-lg opacity-80 mt-2">Serving 45+ countries with temperature-controlled logistics and clinical-grade security.</p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 p-8 md:p-12 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-display-lg text-secondary">45+</span>
                  <span className="text-label-sm uppercase tracking-widest opacity-60">Nations<br/>Served</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-display-lg text-primary">12</span>
                  <span className="text-label-sm uppercase tracking-widest opacity-60">Regional Hubs<br/>Worldwide</span>
                </div>
              </div>
              <div className="pt-8 border-t border-white/10">
                <h4 className="text-title-md mb-4">Core Logistics Centers</h4>
                <ul className="grid grid-cols-2 gap-4">
                  <li className="flex items-center gap-2 text-body-md opacity-80">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> London, UK (HQ)
                  </li>
                  <li className="flex items-center gap-2 text-body-md opacity-80">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Mumbai, IN
                  </li>
                  <li className="flex items-center gap-2 text-body-md opacity-80">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> New Jersey, USA
                  </li>
                  <li className="flex items-center gap-2 text-body-md opacity-80">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Singapore, SG
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-[1.5] relative h-[400px] lg:h-auto overflow-hidden">
               {/* Map placeholder */}
               <div className="absolute inset-0 bg-primary/5 mix-blend-overlay z-10 pointer-events-none"></div>
               <div className="w-full h-full bg-surface-container flex items-center justify-center text-on-surface-variant font-bold opacity-30 text-2xl tracking-widest uppercase">
                  Global Logistics Network Active
               </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* R&D Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-section-gap"
      >
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/3 space-y-6">
            <h2 className="text-headline-lg text-on-surface">Research & Development</h2>
            <p className="text-body-md text-on-surface-variant">We don't just ship; we validate. Every batch distributed by Aegis Healthcare undergoes independent third-party clinical testing for purity, potency, and safety.</p>
            <div className="bg-secondary/10 p-6 rounded-xl border border-secondary/20">
              <div className="flex items-center gap-3 text-secondary mb-3">
                <BookOpen className="w-6 h-6" />
                <span className="text-title-md">Apex Elements Labs</span>
              </div>
              <p className="text-label-sm text-on-surface-variant leading-relaxed">Our partnership allows us direct oversight of the cultivation and extraction processes, ensuring zero contamination from farm to pharmacy.</p>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <img 
                className="w-full h-64 object-cover rounded-xl border border-outline-variant" 
                alt="Pipette" 
                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3umhTlRmeySIF53uvLlET8_MXMLGddlUpRetYlkO41VS26Q3_WXzECVBSEb9jzEcm0DnRF3goxA6Erqd7cpgLFnu_cdiAlfcE36CKCy5FEFB1uT5IUv4-PPhuiPG2bWJUHs2W6FUwgTaYvy5XEnOjjOQ1smOdcrOVYIG57-Nd2q83Jm-kjYon-LUudLWcHYgb_rEU1VSZUL6ypr8zBJvb2VhCxqsnKEv28Hzgd4bafJl3Uf_1Z6HU26nleEw5CPkG06yLdJRSzShr" 
                referrerPolicy="no-referrer"
              />
              <h4 className="text-title-md text-on-surface">Quality Control Protocol</h4>
              <p className="text-body-md text-on-surface-variant">Three-stage verification including HPLC analysis and microbial screening on all arrivals.</p>
            </div>
            <div className="space-y-4">
              <img 
                className="w-full h-64 object-cover rounded-xl border border-outline-variant" 
                alt="Boardroom" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAho_oUtSATIx2ewGA7tmLUfTC9fWDrU8tnLQoM-FBLjs15-8dqFR2Lxmj8E-zpVgRar8wVArJvgQ9CB05TzZD4EihL5GyigNrx5yy8Kzp4rBg30LyHuekQ7qH296gogGpoqVWxnfARER6P1B_kt5beyaSLvZ0y9pRjhphghDRsX3rfO5CUfC24wV8w0pUON_rvE8YhnrQEAMopz_jZtqq8PTyrPB8u1_hS3EC9VxqTNOj_xv72clpLKiPwxWC6keB4JMYvRG3lYI6T" 
                referrerPolicy="no-referrer"
              />
              <h4 className="text-title-md text-on-surface">Medical Advisory Board</h4>
              <p className="text-body-md text-on-surface-variant">A global panel of physicians and herbalists ensuring product formulations meet modern healthcare needs.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action Banner */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mt-section-gap"
      >
        <div className="bg-primary text-on-primary rounded-xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10">
            <ShieldCheck className="w-[300px] h-[300px] -mt-16 -mr-16" strokeWidth={0.5} />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-headline-lg">Partner with Aegis Healthcare Worldwide</h2>
            <p className="text-body-lg opacity-90">Are you a healthcare provider or retail institution looking to provide the world's most trusted herbal supplements? Join our distribution network today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg text-title-md hover:bg-surface-container transition-all">
                Become a Distributor
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-3 rounded-lg text-title-md hover:bg-white/10 transition-all">
                Download Media Kit
              </button>
            </div>
          </div>
        </div>
      </motion.section>
      </div>
    </PageTransition>
  );
}
