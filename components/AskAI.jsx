'use client';

import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useLanguage } from '@/context/LanguageContext';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api-estate-unova.free.laravel.cloud';

const GeminiIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#6366F1" />
    <path d="M19 2L20.1 5.9L24 7L20.1 8.1L19 12L17.9 8.1L14 7L17.9 5.9L19 2Z" fill="#A855F7" />
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
  'Why do real estate developers need Unova Estate?',
  'What key features are included in Unova Estate?',
  'How does installment collection automation work?',
  'How does it prevent lead leakage in sales teams?',
  'How are agent commissions calculated?',
];

const SUGGESTIONS_AR = [
  'لماذا تحتاج شركات التطوير العقاري لنظام يونوفا؟',
  'ما هي أهم مميزات وأقسام نظام يونوفا إستيت؟',
  'كيف تعمل أتمتة وتحصيل الأقساط الشهرية؟',
  'كيف يمنع النظام ضياع عملاء المبيعات؟',
  'كيف يتم حساب عمولات مسوقي العقارات؟',
];

export default function AskAI({ open: externalOpen, isOpen, onOpenChange }) {
  const { t, isRtl } = useLanguage();
  const isControlled = externalOpen !== undefined || isOpen !== undefined;
  const activeOpenProp = externalOpen !== undefined ? externalOpen : isOpen;

  const [internalOpen, setInternalOpen] = useState(false);
  const open = isControlled ? activeOpenProp : internalOpen;

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef  = useRef(null);

  useEffect(() => {
    setMessages([
      {
        role: 'bot',
        text: isRtl
          ? "مرحباً بك! أنا المساعد الذكي لنظام يونوفا إستيت. يمكنك سؤالي عن المميزات والأسعار أو كيفية التشغيل! 😊"
          : "Hi! I'm the Unova Estate AI assistant. Ask me anything about the software features, pricing, or deployment! 😊"
      }
    ]);
  }, [isRtl]);

  const toggle = (v) => {
    const next = typeof v === 'function' ? v(open) : v;
    if (!isControlled) {
      setInternalOpen(next);
    }
    onOpenChange?.(next);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  const historyForAPI = () =>
    messages
      .filter(m => m.role !== 'error')
      .slice(-4)
      .map(m => ({ role: m.role === 'bot' ? 'model' : 'user', text: m.text }));

  const send = async (text) => {
    const msg = text || input.trim();
    if (!msg || loading) return;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: msg }]);
    setLoading(true);
    try {
      const { data } = await axios.post(`${API_URL}/api/chat`, {
        message: msg,
        history: historyForAPI(),
      });
      setMessages(prev => [...prev, { role: 'bot', text: data.reply }]);
    } catch (err) {
      const errMsg = err.response?.status === 429
        ? (isRtl ? 'رسائل كثيرة. يرجى الانتظار دقيقة.' : 'Too many messages. Please wait a moment.')
        : (isRtl ? 'حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.' : 'Something went wrong. Please try again.');
      setMessages(prev => [...prev, { role: 'error', text: errMsg }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  };

  const suggestions = isRtl ? SUGGESTIONS_AR : SUGGESTIONS_EN;

  return (
    <>
      {/* Nav trigger */}
      <button
        onClick={() => toggle(v => !v)}
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
          open
            ? 'bg-indigo-600 text-white shadow-sm'
            : 'bg-indigo-50/90 text-indigo-700 border border-indigo-200/80 hover:bg-indigo-100 shadow-sm'
        }`}
      >
        <GeminiIcon className="w-4 h-4 shrink-0" />
        <span>{t('askAi.triggerText')}</span>
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/10 backdrop-blur-sm"
          onClick={() => toggle(false)}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 ${isRtl ? 'left-0 border-r' : 'right-0 border-l'} z-50 h-screen w-[380px] flex flex-col bg-white border-slate-200 shadow-2xl transition-transform duration-300 ${
        open ? 'translate-x-0' : isRtl ? '-translate-x-full' : 'translate-x-full'
      }`}>

        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100 bg-gradient-to-r from-indigo-50/50 to-violet-50/20 flex-shrink-0">
          <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-xs font-black text-slate-900">{t('askAi.modalTitle')}</p>
            <p className="text-[10px] text-indigo-600">{t('askAi.modalSubtitle')}</p>
          </div>
          <button onClick={() => toggle(false)} className="text-slate-400 hover:text-slate-800 transition-colors p-1">
            <CloseIcon />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-3 text-sm">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {m.role !== 'user' && (
                <div className={`w-6 h-6 rounded-md bg-indigo-50 flex items-center justify-center flex-shrink-0 ${isRtl ? 'ml-2' : 'mr-2'} mt-0.5`}>
                  <GeminiIcon className="w-3.5 h-3.5" />
                </div>
              )}
              <div className={`max-w-[80%] px-3.5 py-2 rounded-xl leading-relaxed whitespace-pre-wrap text-xs ${
                m.role === 'user'
                  ? 'bg-indigo-600 text-white rounded-br-sm shadow-sm'
                  : m.role === 'error'
                  ? 'bg-rose-50 text-rose-800 border border-rose-100 rounded-bl-sm'
                  : 'bg-slate-100 text-slate-700 border border-slate-200 rounded-bl-sm'
              }`}>
                {m.text}
              </div>
            </div>
          ))}

          {/* Loading dots */}
          {loading && (
            <div className="flex justify-start">
              <div className={`w-6 h-6 rounded-md bg-indigo-50 flex items-center justify-center flex-shrink-0 ${isRtl ? 'ml-2' : 'mr-2'} mt-0.5`}>
                <GeminiIcon className="w-3.5 h-3.5" />
              </div>
              <div className="bg-slate-100 border border-slate-200 rounded-xl rounded-bl-sm px-4 py-3 flex gap-1.5 items-center">
                {[0, 1, 2].map(i => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }} />
                ))}
              </div>
            </div>
          )}

          {/* Suggestions */}
          {messages.length === 1 && !loading && (
            <div className="space-y-2 pt-2">
              <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">{isRtl ? 'مقترحات للأسئلة:' : 'Try asking:'}</p>
              {suggestions.map((s, i) => (
                <button key={i} onClick={() => send(s)}
                  className="block w-full text-left text-xs text-slate-600 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-600 border border-slate-200 hover:border-indigo-200 rounded-lg px-3.5 py-2 transition-all">
                  {s}
                </button>
              ))}
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="flex-shrink-0 border-t border-slate-100 p-4">
          <div className="flex items-end gap-2 bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 focus-within:border-indigo-200 transition-colors">
            <textarea
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder={t('askAi.placeholder')}
              maxLength={300}
              rows={1}
              className="flex-1 bg-transparent text-xs text-slate-800 placeholder-slate-400 outline-none resize-none leading-relaxed max-h-24"
              style={{ fieldSizing: 'content' }}
            />
            <button
              onClick={() => send()}
              disabled={!input.trim() || loading}
              className="w-7 h-7 rounded-md bg-indigo-600 hover:bg-indigo-500 disabled:opacity-25 disabled:cursor-not-allowed flex items-center justify-center text-white flex-shrink-0 transition-all"
            >
              <SendIcon />
            </button>
          </div>
          <p className="text-[10px] text-slate-400 mt-2 text-center">Powered by Unova AI · Egypt & MENA</p>
        </div>
      </div>
    </>
  );
}
