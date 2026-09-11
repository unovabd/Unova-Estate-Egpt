'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const GeminiIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="dg" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#818cf8" />
        <stop offset="50%" stopColor="#a78bfa" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>
    </defs>
    <path
      d="M14 2C14 2 15.2 8.8 18.5 11.5C21.8 14.2 26 14 26 14C26 14 21.8 13.8 18.5 16.5C15.2 19.2 14 26 14 26C14 26 12.8 19.2 9.5 16.5C6.2 13.8 2 14 2 14C2 14 6.2 14.2 9.5 11.5C12.8 8.8 14 2 14 2Z"
      fill="url(#dg)"
    />
  </svg>
);

const SendIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const SUGGESTIONS_EN = [
  'How do I create a new lead in the CRM?',
  'How do I generate monthly payroll?',
  'How do I approve an employee leave request?',
  'How are agent commissions calculated on sales orders?',
  'How do I configure role-based access permissions?',
];

const SUGGESTIONS_AR = [
  'كيف أقوم بإنشاء عميل محتمل جديد في النظام؟',
  'كيف يتم إعداد وحساب مسير المرتبات الشهري؟',
  'كيف يتم الاعتماد والموافقة على إجازات الموظفين؟',
  'كيف تظهر وتُحسب العمولات على أوامر البيع؟',
  'كيف يتم تحديد الأدوار وصلاحيات الوصول للشركاء؟',
];

export default function DocsAskAI() {
  const { isRtl } = useLanguage();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    setMessages([
      {
        role: 'bot',
        text: isRtl
          ? "مرحباً بك! أنا مساعد التوثيق الذكي من يونوفا إستيت. يمكنك سؤالي عن طريقة تشغيل وأتمتة أيا من وحدات النظام! 😊"
          : "Hi! I'm the Unova Estate Docs AI assistant. Ask me anything about how to use modules, configure permissions, or set up workflows!"
      }
    ]);
  }, [isRtl]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  const send = async (text) => {
    const msg = text || input.trim();
    if (!msg || loading) return;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: msg }]);
    setLoading(true);
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          role: 'bot',
          text: isRtl
            ? 'يمكنك الاطلاع على دليل الاستخدام في القائمة الجانبية أو التحدث مباشرة مع فريق الدعم الفني في مصر على الواتساب!'
            : 'You can check the User Documentation sections on the left or contact our support team directly for guided assistance.'
        }
      ]);
      setLoading(false);
    }, 800);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  };

  const suggestions = isRtl ? SUGGESTIONS_AR : SUGGESTIONS_EN;

  return (
    <>
      <button
        onClick={() => setOpen(v => !v)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white rounded-full shadow-[0_4px_20px_rgba(99,102,241,0.4)] transition-all font-medium text-xs hover:scale-105"
      >
        <GeminiIcon className="w-4 h-4" />
        <span>{isRtl ? 'مساعد التوثيق الذكي' : 'Docs AI Assistant'}</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 ${isRtl ? 'left-0 border-r' : 'right-0 border-l'} z-50 h-screen w-[380px] flex flex-col bg-white border-slate-200 shadow-2xl transition-transform duration-300 ${
          open ? 'translate-x-0' : isRtl ? '-translate-x-full' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100 bg-gradient-to-r from-indigo-50/50 to-violet-50/20 flex-shrink-0">
          <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
            <GeminiIcon className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-black text-slate-900">{isRtl ? 'مساعد التوثيق الذكي' : 'Unova Docs AI Assistant'}</p>
            <p className="text-[10px] text-indigo-600">{isRtl ? 'دليل وشرح مميزات النظام' : 'Ask anything about software features & setup'}</p>
          </div>
          <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-slate-800 transition-colors p-1">
            <CloseIcon />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-3 text-xs">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {m.role !== 'user' && (
                <div className="w-6 h-6 rounded-md bg-indigo-50 flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">
                  <GeminiIcon className="w-3.5 h-3.5" />
                </div>
              )}
              <div
                className={`max-w-[80%] px-3.5 py-2.5 rounded-xl leading-relaxed whitespace-pre-wrap ${
                  m.role === 'user'
                    ? 'bg-indigo-600 text-white rounded-br-sm shadow-sm'
                    : 'bg-slate-100 text-slate-700 border border-slate-200/80 rounded-bl-sm'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="w-6 h-6 rounded-md bg-indigo-50 flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">
                <GeminiIcon className="w-3.5 h-3.5" />
              </div>
              <div className="bg-slate-100 border border-slate-200 rounded-xl rounded-bl-sm px-4 py-3 flex gap-1.5 items-center">
                {[0, 1, 2].map(i => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                ))}
              </div>
            </div>
          )}

          {messages.length === 1 && !loading && (
            <div className="space-y-2 pt-2">
              <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">{isRtl ? 'أسئلة مقترحة:' : 'Suggested questions:'}</p>
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => send(s)}
                  className="block w-full text-left text-xs text-slate-600 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-600 border border-slate-200/80 hover:border-indigo-200 rounded-xl px-3.5 py-2.5 transition-all leading-snug"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="flex-shrink-0 border-t border-slate-100 p-4">
          <div className="flex items-end gap-2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus-within:border-indigo-200 transition-colors">
            <textarea
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder={isRtl ? 'اسأل سؤالاً حول المستندات...' : 'Ask a documentation question...'}
              rows={1}
              className="flex-1 bg-transparent text-xs text-slate-800 placeholder-slate-400 outline-none resize-none leading-relaxed"
            />
            <button
              onClick={() => send()}
              disabled={!input.trim() || loading}
              className="w-7 h-7 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-25 flex items-center justify-center text-white flex-shrink-0 transition-all"
            >
              <SendIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
