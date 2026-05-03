'use client';
import React from 'react';

export default function TestimonialsSection() {
  const TESTIMONIALS = [
    {
      quote: "MU Technologies eliminated our latency problem entirely. What used to take 200ms now happens in under 4ms. Their cloud migration team operates at a level we haven't seen from any other vendor.",
      name: "Sarah Chen",
      title: "CTO, Apex Financial Group",
      metric: "98% latency reduction"
    },
    {
      quote: "After partnering with MU for our Zero-Trust implementation, we achieved full HIPAA compliance across all 400 campuses within six months. Their security architects think three moves ahead.",
      name: "Dr. Marcus Webb",
      title: "CISO, National Care Alliance",
      metric: "100% compliance rate"
    },
    {
      quote: "The predictive routing engine MU built for our supply chain has fundamentally changed how we operate. We're preempting delays before our competitors even know they exist.",
      name: "James Okafor",
      title: "VP Operations, Trans-Con Logistics",
      metric: "42% efficiency gain"
    }
  ];

  return (
    <section className="bg-[#060d1f] py-32 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(224,16,48,0.06)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#e01030]"></div>
            <span className="text-[#e01030] text-[11px] font-black tracking-[0.3em] uppercase">Client Testimonials</span>
            <div className="h-px w-8 bg-[#e01030]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Trusted by Enterprise Leaders.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-10 hover:bg-white/[0.06] transition-all duration-300 flex flex-col group">
              <svg className="w-8 h-8 text-[#e01030]/40 mb-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>

              <p className="text-white/70 text-base leading-relaxed font-medium mb-8 flex-grow">{t.quote}</p>

              <div className="border-t border-white/[0.06] pt-6 mt-auto">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs font-medium mt-1">{t.title}</p>
                  </div>
                  <span className="text-[#e01030] text-[10px] font-black tracking-widest uppercase bg-[#e01030]/10 px-3 py-1.5 rounded-full border border-[#e01030]/20">{t.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
