import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, Bot, PhoneCall, Check, CheckCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';

type Message = {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  isButton?: boolean;
  time: string;
};

export default function WhatsAppPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const phoneNumber = "1234567890";

  // Helper to get current time formatted
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  useEffect(() => {
    // Show the popup toggle after a short delay
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, isOpen]);

  useEffect(() => {
    // Initialize welcome message when opened
    if (isOpen && messages.length === 0) {
      setMessages([
        { id: 1, text: t('welcome', 'whatsapp'), sender: 'bot', time: getCurrentTime() }
      ]);
    }
  }, [isOpen, messages.length, t]);

  const handleOptionClick = (optionId: number) => {
    let userMsg = '';
    let botReply = '';

    switch (optionId) {
      case 1:
        userMsg = t('opt1', 'whatsapp');
        botReply = t('ans1', 'whatsapp');
        break;
      case 2:
        userMsg = t('opt2', 'whatsapp');
        botReply = t('ans2', 'whatsapp');
        break;
      case 3:
        userMsg = t('opt3', 'whatsapp');
        botReply = t('ans3', 'whatsapp');
        break;
      case 4:
        userMsg = t('opt4', 'whatsapp');
        botReply = t('ans4', 'whatsapp');
        break;
    }

    // Add user message
    setMessages(prev => [...prev, { id: Date.now(), text: userMsg, sender: 'user', time: getCurrentTime() }]);
    
    // Simulate typing then add bot reply
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { id: Date.now(), text: botReply, sender: 'bot', time: getCurrentTime() },
        { id: Date.now() + 1, text: t('connectWhatsApp', 'whatsapp'), sender: 'bot', isButton: true, time: getCurrentTime() }
      ]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;

    // Add the user's typed message to the chat UI
    setMessages(prev => [...prev, { id: Date.now(), text: inputText.trim(), sender: 'user', time: getCurrentTime() }]);
    setInputText('');

    // Simulate typing and suggest moving to WhatsApp
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { id: Date.now() + 1, text: t('connectWhatsApp', 'whatsapp'), sender: 'bot', isButton: true, time: getCurrentTime() }
      ]);
      setIsTyping(false);
    }, 1000);
  };

  // ONLY open WhatsApp when explicitly clicked by the user
  const openRealWhatsApp = () => {
    // Build context from the last user message or default
    const userMessages = messages.filter(m => m.sender === 'user');
    const lastUserMsg = userMessages.length > 0 
      ? userMessages[userMessages.length - 1].text 
      : "Hello! I would like to consult with an AyurPeak specialist.";
    
    const contextText = `*Chat History context:* \n"${lastUserMsg}"\n\nHi AyurPeak Team, I'd like to continue this conversation!`;
    const encodedMsg = encodeURIComponent(contextText);
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMsg}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant mb-4 w-[360px] h-[550px] max-h-[80vh] flex flex-col overflow-hidden relative"
          >
            {/* Header */}
            <div className="bg-[#075E54] p-4 flex items-center justify-between shadow-md z-20">
              <div className="flex items-center gap-3">
                <div className="relative">
                  {/* Premium Support Avatar */}
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100&h=100" 
                    alt="AyurPeak Support" 
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#25D366]"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] rounded-full border-2 border-[#075E54]"></div>
                </div>
                <div>
                  <h4 className="font-bold text-white text-title-md leading-tight">{t('title', 'whatsapp')}</h4>
                  <p className="text-white/80 text-[11px] font-medium tracking-wider uppercase mt-0.5">{t('status', 'whatsapp')}</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto bg-[#E5DDD5] flex flex-col gap-4 relative custom-scrollbar scroll-smooth">
              {/* WhatsApp background pattern */}
              <div 
                className="absolute inset-0 opacity-[0.06] pointer-events-none z-0" 
                style={{ 
                  backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
                  backgroundSize: '16px 16px' 
                }}
              ></div>
              
              {/* Today Date Badge */}
              <div className="flex justify-center z-10 my-2">
                <div className="bg-white/60 backdrop-blur-sm px-3 py-1 rounded-lg text-[11px] text-gray-600 shadow-sm">
                  TODAY
                </div>
              </div>

              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} relative z-10`}>
                  {msg.isButton ? (
                    <button 
                      onClick={openRealWhatsApp}
                      className="bg-[#25D366] text-white px-5 py-3 rounded-xl rounded-tl-sm text-sm font-bold shadow-md flex items-center gap-2 hover:bg-[#20BE5C] transition-colors active:scale-95 group"
                    >
                      <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      {msg.text}
                    </button>
                  ) : (
                    <div className={`max-w-[85%] px-3 py-2 rounded-xl shadow-sm text-[15px] flex flex-col ${
                      msg.sender === 'user' 
                        ? 'bg-[#DCF8C6] text-gray-800 rounded-tr-sm' 
                        : 'bg-white text-gray-800 rounded-tl-sm'
                    }`}>
                      <span className="leading-relaxed whitespace-pre-wrap">{msg.text}</span>
                      <div className={`flex items-center gap-1 mt-1 justify-end ${msg.sender === 'user' ? 'text-[#53bdeb]' : 'text-gray-400'}`}>
                        <span className="text-[10px]">{msg.time}</span>
                        {msg.sender === 'user' && <CheckCheck className="w-3 h-3" />}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start relative z-10">
                  <div className="bg-white rounded-xl rounded-tl-sm px-4 py-3 shadow-sm flex items-center gap-1.5 h-10">
                    <div className="w-2 h-2 bg-[#25D366]/60 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#25D366]/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-[#25D366]/60 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              )}
              
              {/* Quick Reply Options */}
              {messages.length === 1 && !isTyping && (
                <div className="flex flex-col gap-2 mt-2 relative z-10">
                  <p className="text-[11px] text-center text-gray-500 mb-1 font-medium bg-white/50 py-1 rounded-full w-max mx-auto px-4">{t('options', 'whatsapp')}</p>
                  {[1, 2, 3, 4].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleOptionClick(opt)}
                      className="bg-white border-l-4 border-[#25D366] hover:bg-[#f0fdf4] transition-colors px-4 py-2.5 rounded-lg text-[13px] font-medium text-left shadow-sm flex items-center justify-between group"
                    >
                      <span className="text-gray-700 group-hover:text-[#075E54] transition-colors">{t(`opt${opt}` as any, 'whatsapp')}</span>
                      <Send className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              )}
              
              <div ref={messagesEndRef} className="h-1" />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="bg-[#f0f0f0] p-3 flex gap-2 items-center z-10">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={t('placeholder', 'whatsapp')}
                className="flex-1 bg-white px-4 py-2.5 rounded-full text-[15px] outline-none focus:ring-1 focus:ring-[#25D366]/50 transition-all border-none shadow-sm placeholder:text-gray-400"
              />
              <button 
                type="submit"
                disabled={!inputText.trim()}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  inputText.trim() 
                    ? 'bg-[#25D366] text-white hover:bg-[#20BE5C] scale-100 shadow-md' 
                    : 'bg-transparent text-gray-400 scale-95'
                }`}
              >
                <Send className="w-5 h-5 ml-1" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#25D366] text-white w-14 h-14 rounded-full shadow-lg shadow-[#25D366]/30 hover:scale-110 active:scale-95 transition-all flex items-center justify-center group relative overflow-hidden"
        >
          {/* Notification Dot */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full animate-pulse z-10"></span>
          
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
            alt="WhatsApp" 
            className="w-8 h-8 object-contain"
          />
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 bg-surface-container-lowest text-on-surface px-4 py-2 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-outline-variant">
            Chat with us!
            <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-surface-container-lowest border-r border-t border-outline-variant rotate-45"></div>
          </div>
        </button>
      )}
    </div>
  );
}
