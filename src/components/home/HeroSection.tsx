'use client';
import React from 'react';
import Link from 'next/link';
import HeroBackground from './HeroBackground';

export default function HeroSection() {
  return (
    <>
      {/* ── Cinematic Hero Section ── */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden flex items-center bg-[#0f1a37]">
        {/* Automatic Crossfading Backgrounds Component */}
        <HeroBackground />

        {/* Hero Content — LEFT aligned, restoring original font colors */}
        <div className="relative z-20 pt-20 px-12 md:px-16 lg:px-24 max-w-[1920px] w-full mx-auto flex flex-col items-start">
          
          {/* Badge */}
          <div className="mb-6">
            <span className="inline-block bg-[#b40022]/10 text-[#ffb3b0] px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border border-[#b40022]/20 backdrop-blur-sm">
              Enterprise IT Solutions
            </span>
          </div>

          <h1 className="text-[#faf8ff] font-black leading-[1.05] tracking-tighter mb-6 hero-text-shadow" style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}>
            IT Infrastructure<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-red-500/50">
              Built for Scale.
            </span>
          </h1>

          <p className="text-[#dae1ff] font-medium max-w-2xl mb-10 tracking-tight opacity-90 leading-relaxed" style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)' }}>
            We design, deploy, and manage enterprise cloud, network, and security infrastructure for organizations that demand reliability, performance, and compliance at every layer.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link href="/contact" className="relative overflow-hidden bg-gradient-to-br from-[#b40022] to-[#e01030] text-white px-10 py-4 lg:py-5 rounded-lg text-[13px] font-black tracking-widest uppercase shadow-xl transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(224,16,48,0.4)] active:scale-[0.98]">
              Schedule a Consultation
            </Link>
            <Link href="#services" className="flex items-center gap-3 text-white font-semibold py-4 px-6 hover:bg-white/5 transition-colors rounded-lg group">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#ffb3b0] group-hover:scale-110 transition-transform flex-shrink-0">
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
              </svg>
              <span>View Our Services</span>
            </Link>
          </div>
        </div>
        
        {/* Scroll line indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-50">
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white to-white/0" />
        </div>
      </section>

      {/* ── 1: STATS STRIP (Automatic Marquee) ── */}
      <div className="relative z-20 bg-gradient-to-r from-[#f1f5f9] via-[#e2e8f0] to-[#f1f5f9] border-y border-white/20 overflow-hidden flex items-center py-6 shadow-2xl">
        {/* Fading Edges for the marquee */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f1f5f9] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f1f5f9] to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-fit animate-marquee hover:animation-play-state-paused">
          {/* Array of Stats duplicated twice for seamless loop */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center">
              <div className="flex items-center px-12 group cursor-default">
                <h4 className="text-4xl font-black text-[#0f1a37] group-hover:text-[#e01030] transition-colors">15+</h4>
                <p className="ml-4 text-xs font-bold text-slate-500 uppercase tracking-[0.2em] group-hover:text-[#0f1a37] transition-colors">Years in Operation</p>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#e01030]/50" />
              
              <div className="flex items-center px-12 group cursor-default">
                <h4 className="text-4xl font-black text-[#0f1a37] group-hover:text-[#e01030] transition-colors">250+</h4>
                <p className="ml-4 text-xs font-bold text-slate-500 uppercase tracking-[0.2em] group-hover:text-[#0f1a37] transition-colors">Enterprise Clients</p>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#e01030]/50" />

              <div className="flex items-center px-12 group cursor-default">
                <h4 className="text-4xl font-black text-[#0f1a37] group-hover:text-[#e01030] transition-colors">10M+</h4>
                <p className="ml-4 text-xs font-bold text-slate-500 uppercase tracking-[0.2em] group-hover:text-[#0f1a37] transition-colors">Threats Mitigated</p>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#e01030]/50" />

              <div className="flex items-center px-12 group cursor-default">
                <h4 className="text-4xl font-black text-[#0f1a37] group-hover:text-[#e01030] transition-colors">99.99%</h4>
                <p className="ml-4 text-xs font-bold text-slate-500 uppercase tracking-[0.2em] group-hover:text-[#0f1a37] transition-colors">Uptime SLA</p>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#e01030]/50" />

              <div className="flex items-center px-12 group cursor-default">
                <h4 className="text-4xl font-black text-[#0f1a37] group-hover:text-[#e01030] transition-colors">50+</h4>
                <p className="ml-4 text-xs font-bold text-slate-500 uppercase tracking-[0.2em] group-hover:text-[#0f1a37] transition-colors">Certified Architects</p>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#e01030]/50" />

              <div className="flex items-center px-12 group cursor-default">
                <h4 className="text-4xl font-black text-[#0f1a37] group-hover:text-[#e01030] transition-colors">24/7</h4>
                <p className="ml-4 text-xs font-bold text-slate-500 uppercase tracking-[0.2em] group-hover:text-[#0f1a37] transition-colors">Global NOC Support</p>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#e01030]/50" />

              <div className="flex items-center px-12 group cursor-default">
                <h4 className="text-4xl font-black text-[#0f1a37] group-hover:text-[#e01030] transition-colors">Sub-ms</h4>
                <p className="ml-4 text-xs font-bold text-slate-500 uppercase tracking-[0.2em] group-hover:text-[#0f1a37] transition-colors">Network Latency</p>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#e01030]/50" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
