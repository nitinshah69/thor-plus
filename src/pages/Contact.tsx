import React from 'react';
import { Mail, Phone, MessageSquare, MapPin, Headset, ShieldCheck } from 'lucide-react';

import PageTransition from '../components/PageTransition';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <PageTransition>
      <div className="w-full max-w-7xl mx-auto px-container-padding py-section-gap">
      <div className="max-w-3xl">
        <h1 className="text-headline-lg md:text-display-lg text-on-surface mb-stack-md">Connect with our Healthcare Specialists</h1>
        <p className="text-body-lg text-on-surface-variant mb-section-gap">
          Aegis Healthcare Worldwide Healthcare provides professional-grade pharmacological support and herbal wellness expertise through Apex Elements. Our team of specialists is ready to assist your clinical and product inquiries.
        </p>
      </div>

      {/* Bento Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Inquiry Form (Large Bento) */}
        <div className="md:col-span-8 clinical-card p-8 rounded-xl bg-white">
          <h2 className="text-title-md text-primary mb-6 flex items-center gap-2">
            <Mail className="w-6 h-6" />
            Clinical Inquiry Form
          </h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div className="flex flex-col gap-stack-sm group">
                <label className="text-label-sm text-on-surface-variant uppercase group-focus-within:text-primary transition-colors">Full Name</label>
                <input 
                  className="w-full border border-outline-variant focus:border-primary outline-none focus:ring-0 rounded-lg p-3 bg-surface text-body-md transition-all" 
                  placeholder="Dr. John Doe" 
                  type="text" 
                />
              </div>
              <div className="flex flex-col gap-stack-sm group">
                <label className="text-label-sm text-on-surface-variant uppercase group-focus-within:text-primary transition-colors">Professional Email</label>
                <input 
                  className="w-full border border-outline-variant focus:border-primary outline-none focus:ring-0 rounded-lg p-3 bg-surface text-body-md transition-all" 
                  placeholder="john.doe@clinic.com" 
                  type="email" 
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-stack-sm group">
              <label className="text-label-sm text-on-surface-variant uppercase group-focus-within:text-primary transition-colors">Inquiry Type</label>
              <select className="w-full border border-outline-variant focus:border-primary outline-none focus:ring-0 rounded-lg p-3 bg-surface text-body-md transition-all">
                <option>Product Dosage & Efficacy</option>
                <option>Wholesale Pharmaceutical Supply</option>
                <option>Clinical Studies Data Request</option>
                <option>Order Fulfillment Support</option>
                <option>Other</option>
              </select>
            </div>
            
            <div className="flex flex-col gap-stack-sm group">
              <label className="text-label-sm text-on-surface-variant uppercase group-focus-within:text-primary transition-colors">Message</label>
              <textarea 
                className="w-full border border-outline-variant focus:border-primary outline-none focus:ring-0 rounded-lg p-3 bg-surface text-body-md transition-all resize-none" 
                placeholder="Describe your inquiry with as much clinical detail as possible..." 
                rows={4}
              ></textarea>
            </div>
            
            <button className="w-full md:w-auto bg-primary text-white text-label-sm uppercase px-10 py-4 rounded-lg hover:bg-surface-tint transition-all shadow-md active:scale-95 tracking-widest font-bold" type="submit">
              Send Secure Message
            </button>
          </form>
        </div>

        {/* Specialist Lines (Vertical Bento) */}
        <div className="md:col-span-4 flex flex-col gap-gutter">
          <div className="bg-secondary/20 p-8 rounded-xl flex flex-col justify-between h-full border border-secondary/30">
            <div>
              <Headset className="text-secondary mb-4 w-10 h-10" />
              <h3 className="text-title-md text-on-surface mb-2">Specialist Hotline</h3>
              <p className="text-body-md text-on-surface-variant mb-6">Direct lines for urgent product clarification and delivery logistics.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white p-4 rounded-lg border border-secondary/20 shadow-sm">
                <Phone className="w-6 h-6 text-secondary" />
                <div>
                  <p className="text-label-sm text-secondary">PHARMACEUTICAL DEPT</p>
                  <p className="font-bold text-on-surface text-lg">+1 (800) Aegis Healthcare-HC</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-lg border border-secondary/20 shadow-sm mt-4">
                <MessageSquare className="w-6 h-6 text-secondary" />
                <div>
                  <p className="text-label-sm text-secondary">Apex Elements CHAT</p>
                  <p className="font-bold text-on-surface text-lg">Online Now (24/7)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="clinical-card p-8 rounded-xl flex flex-col items-center text-center justify-center bg-white">
            <img 
              className="w-20 h-20 mb-4 opacity-80" 
              alt="Seal" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdvM8vVz-CTi_D7QCNN0ScBFypwJ4zHe8HP8F9eBfZMAeJnOPjV4aoGSs93q3mPJGx9F2on7vxGmkgsgWegchaCwCS_o7B90OoJ9anjafJokTICH83I-a_bozH-FnRysuEQ0hrGPYlGXkr2xgKwVr7yvJy2U_Jsp9vIyR7EqmtWx-WTyI3EEBSb5JIhWaLe8nveGzBsxMXeHePrnEBi1sGJkpa1szCZzvljeCMv01W9G_lxeDt2ZRc2Kjnrn-Uj1Wd97R8UOllL-V9" 
              referrerPolicy="no-referrer"
            />
            <p className="text-label-sm text-secondary uppercase tracking-widest mb-1 font-bold">Status Confirmed</p>
            <p className="text-body-md text-on-surface-variant italic">"Clinical efficacy and product safety verified by EU regulations."</p>
          </div>
        </div>
      </div>

      {/* Global Directory Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-surface-container-low py-section-gap mt-section-gap rounded-xl"
      >
        <div className="px-container-padding w-full max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-headline-lg text-on-surface mb-2">Global Office Directory</h2>
            <p className="text-on-surface-variant">Strategic logistics and distribution hubs worldwide.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="clinical-card p-6 rounded-xl overflow-hidden bg-white">
              <div className="h-32 mb-6 rounded-lg bg-gray-200 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center" 
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBelSsF76ZHNvNt21BIrewxWivqGLXeMmTJY91dIrNQouDdSc8hnNoHKAH9Wu5jJRo8id4spXEhMxOnfmNDGhr-vCZ1MA16WQ7kcsTv2Deac8u2z_wMASt6W8BNlZfYggENKsV5G7mFolIhIurwQzeDBzZpnT1HaBQNoP1f0opTqroY4dhaluMyV8bZKAwNQz8fw5By5SzeH1zqqkUHnuzA7nKdeJThWnV7WfW6wp8vw5YYUJZZyBgD2zzeYZ4W3rDRn4Q0XUwBvLyw")'}}
                ></div>
              </div>
              <h4 className="text-title-md mb-2">European Headquarters</h4>
              <p className="text-body-md text-on-surface-variant mb-4">42 Canary Wharf, Health Logistics District, London E14 5AB, UK</p>
              <div className="flex items-center gap-2 text-primary text-label-sm uppercase hover:underline cursor-pointer">
                <MapPin className="w-4 h-4" />
                View on Map
              </div>
            </div>

            <div className="clinical-card p-6 rounded-xl overflow-hidden bg-white">
              <div className="h-32 mb-6 rounded-lg bg-gray-200 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center" 
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBDV52nn9tvlp61jN-P9R7qLzKXMKMS1EQy_DNmvXPP6VaU6zzEYt2OTzGHj9emqG18-dfe4_5tVYcXbBwIvEa7BC0favB76NWXvKCgdbv_JVf46CFL0x-pwvrniUkv19iicdSe0wQMgihlbvFahH66TnacY6qRZB_AsPkShCf6Cye0yscNwLXhft_6MpY0GDYHBI_SYV9e0ywXC9wcsgOjIIR_9yonB3-IjZPVvtl_GlX-Xdy5Z1V8wQKenBdHD3ptPmlUxmTR74Ti")'}}
                ></div>
              </div>
              <h4 className="text-title-md mb-2">Apex Elements Research Hub</h4>
              <p className="text-body-md text-on-surface-variant mb-4">Ayur-Park Campus, Pharmaceutical Lane, Kerala 682021, India</p>
              <div className="flex items-center gap-2 text-primary text-label-sm uppercase hover:underline cursor-pointer">
                <MapPin className="w-4 h-4" />
                View on Map
              </div>
            </div>

            <div className="clinical-card p-6 rounded-xl overflow-hidden bg-white">
              <div className="h-32 mb-6 rounded-lg bg-gray-200 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center" 
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCl7mQBuWaBCuMSzX-9qQxYQr9MgGTToYrenspbJQGQHBv8fL6f4TfkqQK3fIKJZylzdSfQsNYjjCbgGTnFz1oaM77AcspL8oMgHiRqPirYCl9F3toPMZTU3tjKkRb9bzq7gFeT_ZHN1qxse_ovpBU3goem2mBKFAajVac_lQL4lV7iskM_REsBMisxW_Ng0Kyui97Tkc5qk8eAmMwIE5sMn4WMhEDfE4ezKoim4uYcI66dste-OFHnMtROzC86w877r39JtRQVoeLc")'}}
                ></div>
              </div>
              <h4 className="text-title-md mb-2">Americas Distribution</h4>
              <p className="text-body-md text-on-surface-variant mb-4">500 Madison Ave, Floor 14, New York, NY 10022, USA</p>
              <div className="flex items-center gap-2 text-primary text-label-sm uppercase hover:underline cursor-pointer">
                <MapPin className="w-4 h-4" />
                View on Map
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Trust Signal Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-section-gap w-full mt-8"
      >
        <div className="bg-secondary/5 border border-secondary/20 p-container-padding rounded-xl flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <img 
              className="h-20 w-auto" 
              alt="EU Guarantee Combo" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqsPChme0LDBqWfWCUZ9_4kMDvTXBupWGZj79lJ9LWIXO8oeO15s79mlRw0UP4ep03e7RlrAi_atEaakZKOfioZerw4t7sNjNgC8cn__MYvhmvwNZwVFfzkjy2pGzFLvTGQKvRFLqbpR2dCM23edqtHaJM5xTg7OEyJov1hl6Aa5zNX3jgk9_vS9f2fYYfn2FIRVBKPuYEYcDUn5HudMXrk-rc-vdHrs5yuq0JMFntjHyZjl-j-mrV_Ji8aCDYPrIp2s5o5-t6CUcO" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-title-md text-on-surface flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="w-6 h-6 text-on-surface" /> Regulatory Compliance
            </h3>
            <p className="text-body-md text-on-surface-variant opacity-80 mt-2">
              All inquiries are processed under GDPR protocols and medical confidentiality standards. Our global distribution network ensures that Apex Elements products reach you with complete clinical confirmation and efficiency.
            </p>
          </div>
        </div>
      </motion.section>
      </div>
    </PageTransition>
  );
}
