'use client';

import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api-estate-unova.free.laravel.cloud';

const GeminiIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gemini-grad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#818cf8" />
        <stop offset="50%" stopColor="#a78bfa" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>
    </defs>
    <path
      d="M14 2C14 2 15.2 8.8 18.5 11.5C21.8 14.2 26 14 26 14C26 14 21.8 13.8 18.5 16.5C15.2 19.2 14 26 14 26C14 26 12.8 19.2 9.5 16.5C6.2 13.8 2 14 2 14C2 14 6.2 14.2 9.5 11.5C12.8 8.8 14 2 14 2Z"
      fill="url(#gemini-grad)"
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

const SUGGESTIONS = [
  'Unova Estate কেন দরকার?',
  'Unova Estate কী কী করতে পারে?',
  'Unova Estate এর advantage কী?',
  'এটা use করলে sales কীভাবে বাড়বে?',
  'Commission ও payroll কীভাবে কাজ করে?',
];

export default function AskAI({ onOpenChange }) {
  const [open, setOpen]         = useState(false);
  const [input, setInput]       = useState('');
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hi! I'm the Unova Estate AI assistant. Ask me anything about the software — in Bangla, English, or Banglish! 😊" },
  ]);
  const [loading, setLoading]   = useState(false);
  const bottomRef = useRef(null);
  const inputRef  = useRef(null);

  const toggle = (v) => {
    const next = typeof v === 'function' ? v(open) : v;
    setOpen(next);
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
        ? 'Too many messages. Please wait a moment.'
        : 'Something went wrong. Please try again.';
      setMessages(prev => [...prev, { role: 'error', text: errMsg }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  };

  return (
    <>
      {/* Nav trigger */}
      <button
        onClick={() => toggle(v => !v)}
        className={`flex items-center gap-0.5 text-sm font-semibold transition-colors ${
          open ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-950'
        }`}
      >
        <GeminiIcon />
        Ask AI
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/10 backdrop-blur-sm"
          onClick={() => toggle(false)}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 z-50 h-screen w-[380px] flex flex-col bg-white border-l border-slate-200 shadow-2xl transition-transform duration-300 ${
        open ? 'translate-x-0' : 'translate-x-full'
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
            <p className="text-xs font-black text-slate-900">Unova AI Assistant</p>
            <p className="text-[10px] text-indigo-600">Ask anything about the software</p>
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
                <div className="w-6 h-6 rounded-md bg-indigo-50 flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">
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
              <div className="w-6 h-6 rounded-md bg-indigo-50 flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">
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
              <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Try asking:</p>
              {SUGGESTIONS.map((s, i) => (
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
              placeholder="Ask a question..."
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
          <p className="text-[10px] text-slate-400 mt-2 text-center">Powered by Unova AI · Press Enter to send</p>
        </div>
      </div>
    </>
  );
}
