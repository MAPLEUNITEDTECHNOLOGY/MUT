import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | MU Technologies',
  description: 'Built on Precision. Driven by Purpose. We believe enterprise IT should be a competitive weapon, not a liability.',
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen relative overflow-hidden flex flex-col">
      {/* ── SECTION A: HERO ── */}
      <section className="bg-[#060d1f] relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32 shrink-0">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute -top-[20%] right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(224,16,48,0.15)_0%,transparent_70%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-6 flex items-center justify-center gap-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/20">/</span>
            <span className="text-[#e01030] tracking-[0.25em]">About</span>
          </div>

          <div className="inline-block mt-4 mb-8">
            <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#e01030] mb-3 block">OUR STORY</span>
            <div className="w-8 h-[2px] bg-[#e01030] mx-auto" />
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white mb-6">
            Built on <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-[#e01030]">Precision.</span><br/>Driven by Purpose.
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-12">
            MU Technologies was founded with a singular belief: enterprise IT should be a competitive weapon, not a liability.
          </p>
        </div>
      </section>

      {/* ── SECTION B: VALUES ── */}
      <section className="py-24 bg-[#faf8ff] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { t: "Engineered Accountability", d: "We don't do vague SLAs. If an outage occurs within our fabric, our compensation drops. We assume risk alongside you." },
                { t: "Security Without Compromise", d: "Identity-first zero-trust methodology woven into every commit, switch configuration, and cloud policy." },
                { t: "Client-First Architecture", d: "Vendor-agnostic design. We sell outcomes, not licenses. If an open-source solution beats an enterprise one, we deploy it." }
              ].map((val, i) => (
                <div key={i} className="bg-white border border-gray-100 p-8 rounded-2xl hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded-full bg-[#e01030]/10 text-[#e01030] flex items-center justify-center font-bold text-sm mb-6 pb-0.5">0{i+1}</div>
                  <h3 className="text-xl font-black tracking-tight text-[#0f1a37] mb-3">{val.t}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">{val.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── SECTION C: TIMELINE ── */}
      <section className="py-32 bg-white relative">
         <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="mb-20 text-center">
              <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#e01030] mb-3 block">MILESTONES</span>
              <div className="w-8 h-[2px] bg-[#e01030] mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-black text-[#0f1a37] tracking-tight">Our Trajectory.</h2>
            </div>
            
            <div className="space-y-12">
               {[
                 { year: '2015', text: 'Founded to solve chronic latency issues in financial trading ecosystems.' },
                 { year: '2018', text: 'Secured first Fortune-500 contract, successfully migrating 10,000+ workloads with zero downtime.' },
                 { year: '2021', text: 'Expanded footprint to 3 continents, opening NOCs in London, Singapore, and New York.' },
                 { year: '2024', text: 'Surpassed 200+ active enterprise clients with a maintained 99.97% Uptime SLA.' }
               ].map((tl, i) => (
                 <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
                    <h3 className="text-5xl md:text-7xl font-black text-[#f4f6f9] md:w-48 text-right shrink-0 relative">
                       {tl.year}
                       <div className="absolute inset-x-0 bottom-4 h-1 bg-gradient-to-r from-transparent to-[#e01030]/20 hidden md:block"></div>
                    </h3>
                    <p className="text-[#0f1a37]/70 text-lg md:text-xl font-medium leading-relaxed">{tl.text}</p>
                 </div>
               ))}
            </div>

            <div className="mt-20 text-center">
               <Link href="/heritage" className="text-[#e01030] font-bold uppercase tracking-widest text-[11px] border-b-2 border-[#e01030]/30 hover:border-[#e01030] pb-1 transition-all">
                  Read Our Full Heritage &rarr;
               </Link>
            </div>
         </div>
      </section>

      {/* ── SECTION E: MINI CTA ── */}
      <section className="bg-[#0b1529] py-16 border-t border-white/[0.05] text-center shrink-0">
         <div className="max-w-4xl mx-auto px-6">
           <Link href="/contact" className="group inline-flex flex-col md:flex-row items-center gap-4 text-2xl md:text-3xl font-black tracking-tight text-white/50 hover:text-white transition-colors">
              Want to partner with us? <span className="text-[#e01030] group-hover:-translate-y-0.5 transition-transform flex items-center gap-2 border-b-2 border-[#e01030]/20 group-hover:border-[#e01030] pb-1">Reach out <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
           </Link>
         </div>
      </section>
    </div>
  );
}
