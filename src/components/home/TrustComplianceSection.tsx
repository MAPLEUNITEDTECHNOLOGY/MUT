'use client';
import React from 'react';

const CERTIFICATIONS = [
  {
    abbr: 'ISO',
    number: '27001',
    name: 'ISO 27001',
    desc: 'Information Security Management',
    status: 'Certified',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    abbr: 'SOC',
    number: '2',
    name: 'SOC 2 Type II',
    desc: 'Security & Availability Controls',
    status: 'Audited',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    abbr: 'NIST',
    number: 'CSF',
    name: 'NIST Framework',
    desc: 'Cybersecurity Standards Alignment',
    status: 'Compliant',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    abbr: 'HIPAA',
    number: '',
    name: 'HIPAA',
    desc: 'Health Data Protection & Privacy',
    status: 'Compliant',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

export default function TrustComplianceSection() {
  return (
    <section className="relative overflow-hidden bg-[#060d1f] py-20 lg:py-24">
      {/* Background textures */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(224,16,48,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-8 bg-[#e01030]" />
            <span className="text-[#e01030] text-[11px] font-black tracking-[0.3em] uppercase">
              Trust & Compliance
            </span>
            <div className="h-px w-8 bg-[#e01030]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
            Certified. Audited. Proven.
          </h2>
          <p className="text-white/40 text-sm md:text-base max-w-xl mx-auto font-medium leading-relaxed">
            Every engagement is governed by internationally recognized security and compliance standards.
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.name}
              className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6 md:p-8 hover:bg-white/[0.07] hover:border-white/[0.12] transition-all duration-500 text-center flex flex-col items-center"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_center,rgba(224,16,48,0.05)_0%,transparent_70%)] pointer-events-none" />

              {/* Icon */}
              <div className="relative z-10 w-14 h-14 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-5 text-white/50 group-hover:text-[#e01030] group-hover:border-[#e01030]/20 group-hover:bg-[#e01030]/[0.06] transition-all duration-500">
                {cert.icon}
              </div>

              {/* Label */}
              <div className="relative z-10">
                <h4 className="text-white font-black text-base md:text-lg tracking-tight mb-1">
                  {cert.abbr}
                  {cert.number && (
                    <span className="text-white/40 font-bold ml-1">{cert.number}</span>
                  )}
                </h4>
                <p className="text-white/35 text-xs font-semibold leading-snug mb-4">
                  {cert.desc}
                </p>
                <span className="inline-block text-[9px] font-black tracking-[0.2em] uppercase text-[#e01030] bg-[#e01030]/10 border border-[#e01030]/15 rounded-full px-3 py-1">
                  {cert.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust line */}
        <div className="mt-10 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-center gap-6 text-center">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/50 text-xs font-bold uppercase tracking-widest">
              All systems operational
            </span>
          </div>
          <span className="hidden md:block text-white/10">|</span>
          <span className="text-white/30 text-xs font-medium">
            Last audit completed: March 2026 &middot; Next scheduled: September 2026
          </span>
        </div>
      </div>
    </section>
  );
}
