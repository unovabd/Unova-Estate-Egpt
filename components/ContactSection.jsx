'use client';

import Link from 'next/link';

const CONTACT = {
  phones:   [{ label: 'Sales', number: '+880 1766-774016' }, { label: 'Support', number: '+880 1766-774016' }],
  emails:   [{ label: 'Sales', address: 'sales@unovaestate.com' }, { label: 'Support', address: 'support@unovaestate.com' }],
  location: 'Flat: B-5, House: 12, Road: 02, Block: J, Baridhara, Vatara, Dhaka-1212',
  hours:    'Sunday – Thursday (09 am – 06 pm)',
  whatsapp: 'https://wa.me/8801766774016',
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

export default function ContactSection() {
  return (
    <section id="contact" className="relative z-10 py-24 px-5 md:px-12 lg:px-24 border-t border-slate-200 bg-slate-50">

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[300px] bg-indigo-600/[0.04] blur-[100px] rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[250px] bg-violet-600/[0.04] blur-[100px] rounded-full" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto relative grid lg:grid-cols-[1fr_1.1fr] gap-16 items-stretch">

        {/* LEFT — Contact Info */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-600 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              Contact Us
            </div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4 text-slate-900">
              <span className="text-indigo-600">Get In Touch</span><br />
              <span>With Our Team</span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-10">
              Reach out to us directly via phone, email, or chat, or schedule a live personalized walkthrough of the ERP.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:border-indigo-500/25 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                    <LocationIcon />
                  </div>
                  <p className="text-xs font-bold text-slate-900">Head Office</p>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{CONTACT.location}</p>
              </div>

              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:border-indigo-500/25 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                    <PhoneIcon />
                  </div>
                  <p className="text-xs font-bold text-slate-900">Call Center</p>
                </div>
                {CONTACT.phones.map((p, i) => (
                  <a key={i} href={`tel:${p.number.replace(/\s|-/g, '')}`}
                    className="block text-xs text-slate-500 hover:text-indigo-600 transition-colors leading-relaxed">
                    {p.number}
                  </a>
                ))}
              </div>

              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:border-indigo-500/25 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                    <EmailIcon />
                  </div>
                  <p className="text-xs font-bold text-slate-900">Email</p>
                </div>
                {CONTACT.emails.map((em, i) => (
                  <a key={i} href={`mailto:${em.address}`}
                    className="block text-xs text-slate-500 hover:text-indigo-600 transition-colors leading-relaxed">
                    {em.address}
                  </a>
                ))}
              </div>

              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:border-indigo-500/25 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                    <ClockIcon />
                  </div>
                  <p className="text-xs font-bold text-slate-900">Working Hours</p>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{CONTACT.hours}</p>
              </div>
            </div>
          </div>

          <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
            className="mt-8 flex items-center gap-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-100 hover:bg-emerald-100/50 hover:border-emerald-200 transition-all group">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-emerald-600">Chat on WhatsApp</p>
              <p className="text-xs text-slate-500">Usually replies within minutes</p>
            </div>
            <svg className="w-4 h-4 text-slate-400 ml-auto group-hover:text-emerald-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* RIGHT — Demo CTA Card */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-[0_15px_50px_-15px_rgba(0,0,0,0.06)] border border-slate-200 p-8 md:p-10 flex flex-col justify-between relative group hover:border-indigo-500/40 transition-all duration-300">
          
          {/* Top colored accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-600 via-violet-500 to-indigo-500" />
          
          {/* Subtle bg glow */}
          <div className="absolute inset-0 pointer-events-none bg-indigo-50/[0.1] group-hover:bg-indigo-50/[0.2] transition-colors" />

          <div className="space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-600">
              ⚡ Live Product Walkthrough
            </div>

            <h3 className="text-3xl font-black text-slate-900 leading-tight">
              Ready to increase your real estate sales by 20%?
            </h3>

            <p className="text-slate-500 text-sm leading-relaxed">
              Book a live, 30-minute tailored tour of Unova Estate with our product experts and see the platform in action. No manual setup or complex forms needed.
            </p>

            <div className="space-y-3.5 pt-2">
              {[
                'Explore the lead pipeline & CRM system',
                'See property inventory & booking status live',
                'Learn how payroll and salary structures work',
                'Get direct answers to technical & pricing queries'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 relative z-10">
            <Link href="/demo"
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all flex items-center justify-center gap-2 text-sm group-hover:scale-[1.01]">
              Schedule a Live Demo
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
