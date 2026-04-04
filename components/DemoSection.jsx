'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  || 'YOUR_PUBLIC_KEY';

const CONTACT = {
  phones:   [{ label: 'Sales', number: '+880 1711-432284' }, { label: 'Support', number: '+880 1711-432285' }],
  emails:   [{ label: 'Sales', address: 'sales@unovaestate.com' }, { label: 'Support', address: 'support@unovaestate.com' }],
  location: 'House 12, Road 5, Banani, Dhaka-1213, Bangladesh',
  hours:    'Sunday – Thursday (09 am – 06 pm)',
  whatsapp: 'https://wa.me/8801711432284',
};

const PhoneIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const formMeta = {
  consultant: {
    title: 'Book a Free Consultant',
    desc: "Tell us about your business and we'll connect you with the right consultant — at no cost.",
  },
  demo: {
    title: 'Request for Demo',
    desc: "Fill in your details and we'll schedule a personalized demo for you.",
  },
};

export default function DemoSection({ formType }) {
  const [form, setForm] = useState({
    subject: '', firstName: '', lastName: '', email: '', phone: '', jobTitle: '', company: '', message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError]     = useState('');

  useEffect(() => {
    setForm(prev => ({
      ...prev,
      subject: formType === 'consultant' ? 'Book a Free Consultant' : formType === 'demo' ? 'Request for Demo' : '',
    }));
  }, [formType]);

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name:     `${form.firstName} ${form.lastName}`,
        email:    form.email,
        phone:    form.phone,
        company:  form.company,
        jobTitle: form.jobTitle,
        message:  form.message,
      }, EMAILJS_PUBLIC_KEY);
      setSuccess(true);
    } catch {
      setError('Something went wrong. Please try again or contact us on WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  const inputCls = 'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none focus:border-indigo-500/50 focus:bg-white/[0.08] transition-all';
  const labelCls = 'block text-xs font-semibold text-gray-400 mb-1.5';

  return (
    <section id="demo" className="relative z-10 py-24 px-5 border-t border-white/5 bg-[#0a0a14]">

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[300px] bg-indigo-600/[0.08] blur-[100px] rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[250px] bg-violet-600/[0.08] blur-[100px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">

        {/* LEFT — contact info */}
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs font-semibold text-indigo-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Contact Us
          </div>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
            <span className="text-indigo-400">Get In Touch</span><br />
            <span className="text-white">With Our Team</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-10">
            Fill out the form and our team will get back to you within 1–2 business days.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 hover:border-indigo-500/25 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/15 text-indigo-400 flex items-center justify-center flex-shrink-0">
                  <LocationIcon />
                </div>
                <p className="text-xs font-bold text-white">Head Office</p>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">{CONTACT.location}</p>
            </div>

            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 hover:border-indigo-500/25 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/15 text-indigo-400 flex items-center justify-center flex-shrink-0">
                  <PhoneIcon />
                </div>
                <p className="text-xs font-bold text-white">Call Center</p>
              </div>
              {CONTACT.phones.map((p, i) => (
                <a key={i} href={`tel:${p.number.replace(/\s|-/g, '')}`}
                  className="block text-xs text-gray-400 hover:text-indigo-300 transition-colors leading-relaxed">
                  {p.number}
                </a>
              ))}
            </div>

            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 hover:border-indigo-500/25 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/15 text-indigo-400 flex items-center justify-center flex-shrink-0">
                  <EmailIcon />
                </div>
                <p className="text-xs font-bold text-white">Email</p>
              </div>
              {CONTACT.emails.map((em, i) => (
                <a key={i} href={`mailto:${em.address}`}
                  className="block text-xs text-gray-400 hover:text-indigo-300 transition-colors leading-relaxed">
                  {em.address}
                </a>
              ))}
            </div>

            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 hover:border-indigo-500/25 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/15 text-indigo-400 flex items-center justify-center flex-shrink-0">
                  <ClockIcon />
                </div>
                <p className="text-xs font-bold text-white">Working Hours</p>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">{CONTACT.hours}</p>
            </div>
          </div>

          <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
            className="mt-6 flex items-center gap-3 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/15 hover:border-emerald-500/35 transition-all group">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-emerald-400">Chat on WhatsApp</p>
              <p className="text-xs text-gray-500">Usually replies within minutes</p>
            </div>
            <svg className="w-4 h-4 text-gray-600 ml-auto group-hover:text-emerald-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* RIGHT — Form */}
        <div className="bg-[#0d0d1c] rounded-3xl overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)]"
          style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}>
          <div className="h-2 bg-gradient-to-r from-indigo-600 via-violet-500 to-indigo-500" />

          <div className="p-6 md:p-7">
            {success ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="text-5xl mb-5">🎉</div>
                <h3 className="text-xl font-black text-white mb-2">Request Received!</h3>
                <p className="text-sm text-gray-400 mb-6 max-w-xs">
                  We&apos;ll contact you at <span className="text-white font-semibold">{form.email}</span> within a few hours.
                </p>
                <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl transition-all">
                  Chat on WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">

                {formType ? (
                  <div className="flex items-start gap-3 px-4 py-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                    <span className="text-lg leading-none mt-0.5">✅</span>
                    <div>
                      <p className="text-sm font-black text-white">{formMeta[formType]?.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{formMeta[formType]?.desc}</p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className={labelCls}>Subject <span className="text-rose-400">*</span></label>
                    <input name="subject" value={form.subject} onChange={handleChange} required
                      placeholder="e.g. Request a Demo" className={inputCls} />
                  </div>
                )}

                <div>
                  <label className={labelCls}>Name <span className="text-rose-400">*</span></label>
                  <input name="firstName" value={form.firstName} onChange={handleChange} required
                    placeholder="Rafiq Ahmed" className={inputCls} />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Email <span className="text-rose-400">*</span></label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required
                      placeholder="you@company.com" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Phone Number <span className="text-rose-400">*</span></label>
                    <input name="phone" value={form.phone} onChange={handleChange} required
                      placeholder="+880 17XX XXXXXX" className={inputCls} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Job Title</label>
                    <input name="jobTitle" value={form.jobTitle} onChange={handleChange}
                      placeholder="Managing Director" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Company Name <span className="text-rose-400">*</span></label>
                    <input name="company" value={form.company} onChange={handleChange} required
                      placeholder="Skyline Developers" className={inputCls} />
                  </div>
                </div>

                <div>
                  <label className={labelCls}>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                    placeholder="Tell us about your team size, current challenges..."
                    className={`${inputCls} resize-none`} />
                </div>

                {error && <p className="text-xs text-rose-400">{error}</p>}

                <button type="submit" disabled={loading}
                  className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all flex items-center justify-center gap-2 text-sm">
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </>
                  ) : 'Submit'}
                </button>

              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
