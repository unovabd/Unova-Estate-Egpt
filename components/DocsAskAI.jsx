'use client';

import { useState, useRef, useEffect } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.estate.unova.app';

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

const SUGGESTIONS = [
  'নতুন lead কীভাবে create করব?',
  'Payroll generate করব কীভাবে?',
  'Employee এর leave approve করব কীভাবে?',
  'Sales order এ commission কীভাবে দেখব?',
  'Role এবং permission কীভাবে set করব?',
];

export default function DocsAskAI() {
  const [open, setOpen]         = useState(false);
  const [input, setInput]       = useState('');
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! আমি Unova Estate এর AI assistant। Software use করতে কোনো সাহায্য লাগলে জিজ্ঞেস করুন — Bangla, English, বা Banglish এ।' },
  ]);
  const [loading, setLoading]   = useState(false);
  const bottomRef = useRef(null);
  const inputRef  = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  const send = async (text) => {
    const msg = (text || input).trim();
    if (!msg || loading) return;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: msg }]);
    setLoading(true);

    const history = messages
      .filter((m, idx) => !(m.role === 'bot' && idx === 0))
      .slice(-4)
      .map(m => ({ role: m.role, text: m.text }));

    try {
      const res = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ message: msg, history, mode: 'docs' }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'bot', text: data.reply || data.error || 'Sorry, try again.' }]);
    } catch {
      setMessages(prev => [...prev, { role: 'bot', text: 'Connection error. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating trigger */}
      <button
        onClick={() => setOpen(v => !v)}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold shadow-lg transition-all duration-200 ${
          open
            ? 'bg-indigo-600 text-white shadow-indigo-500/20'
            : 'bg-white/[0.06] text-gray-300 border border-white/[0.08] hover:border-indigo-500/30 hover:text-indigo-300'
        }`}
      >
        <GeminiIcon className="w-4 h-4" />
        Ask AI
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" onClick={() => setOpen(false)} />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 z-50 h-screen w-[380px] flex flex-col bg-[#0b0b18] border-l border-white/[0.06] shadow-2xl transition-transform duration-300 ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}>

        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.05] bg-gradient-to-r from-indigo-600/15 to-violet-600/8 flex-shrink-0">
          <div className="w-9 h-9 rounded-lg bg-indigo-500/15 flex items-center justify-center text-indigo-400 flex-shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-xs font-black text-white">AI Assistant</p>
            <p className="text-[10px] text-indigo-400">User Manual Helper</p>
          </div>
          <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-white transition-colors p-1">
            <CloseIcon />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-3 text-sm">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {m.role !== 'user' && (
                <div className="w-6 h-6 rounded-md bg-indigo-500/15 flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">
                  <GeminiIcon className="w-3.5 h-3.5" />
                </div>
              )}
              <div className={`max-w-[82%] px-3.5 py-2 rounded-xl leading-relaxed whitespace-pre-wrap text-xs ${
                m.role === 'user'
                  ? 'bg-indigo-600/90 text-white rounded-br-sm'
                  : 'bg-white/[0.05] text-gray-300 border border-white/[0.06] rounded-bl-sm'
              }`}>
                {m.text}
              </div>
            </div>
          ))}

          {/* Suggestions */}
          {messages.length === 1 && !loading && (
            <div className="space-y-2 pt-2">
              <p className="text-[10px] text-gray-600 font-semibold uppercase tracking-wider">Try asking:</p>
              {SUGGESTIONS.map((s, i) => (
                <button key={i} onClick={() => send(s)}
                  className="block w-full text-left text-xs text-gray-500 bg-white/[0.03] hover:bg-indigo-500/10 hover:text-indigo-300 border border-white/[0.06] hover:border-indigo-500/20 rounded-lg px-3.5 py-2 transition-all">
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Loading dots */}
          {loading && (
            <div className="flex justify-start">
              <div className="w-6 h-6 rounded-md bg-indigo-500/15 flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">
                <GeminiIcon className="w-3.5 h-3.5" />
              </div>
              <div className="bg-white/[0.05] border border-white/[0.06] rounded-xl rounded-bl-sm px-4 py-3 flex gap-1.5 items-center">
                {[0, 1, 2].map(i => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce"
                    style={{ animationDelay: `${i * 150}ms` }} />
                ))}
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="flex-shrink-0 border-t border-white/[0.05] p-4">
          <div className="flex items-end gap-2 bg-white/[0.03] border border-white/[0.07] rounded-lg px-4 py-2.5 focus-within:border-indigo-500/30 transition-colors">
            <textarea
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value.slice(0, 300))}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
              placeholder="কোনো feature সম্পর্কে জিজ্ঞেস করুন..."
              rows={1}
              className="flex-1 bg-transparent text-xs text-white placeholder-gray-600 outline-none resize-none leading-relaxed max-h-24"
              style={{ fieldSizing: 'content' }}
            />
            <button
              onClick={() => send()}
              disabled={!input.trim() || loading}
              className="w-7 h-7 rounded-md bg-indigo-600/90 hover:bg-indigo-500 disabled:opacity-25 disabled:cursor-not-allowed flex items-center justify-center text-white flex-shrink-0 transition-all"
            >
              <SendIcon />
            </button>
          </div>
          <p className="text-[10px] text-gray-700 mt-2 text-center">Powered by Unova AI · Press Enter to send</p>
        </div>
      </div>
    </>
  );
}
