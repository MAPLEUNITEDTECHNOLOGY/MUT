import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { INDUSTRIES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Industries | MU Technologies',
  description: "We don't apply generic IT playbooks. We go deep into your industry's compliance, threat model, and operational reality.",
};

export default function IndustriesPage() {
  return (
    <div className="bg-[#f4f6f9] min-h-screen relative overflow-hidden flex flex-col">
      {/* ── SECTION A: HERO ── */}
      <section className="bg-[#060d1f] relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32 shrink-0">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute -top-[20%] left-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(224,16,48,0.15)_0%,transparent_70%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-6 flex items-center justify-center gap-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/20">/</span>
            <span className="text-[#e01030] tracking-[0.25em]">Industries</span>
          </div>

          <div className="inline-block mt-4 mb-8">
            <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#e01030] mb-3 block">SECTOR FOCUS</span>
            <div className="w-8 h-[2px] bg-[#e01030] mx-auto" />
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white mb-6">
            Sector <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-[#e01030]">Intelligence.</span><br/>Enterprise Execution.
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-12">
            We don&apos;t apply generic IT playbooks. We go deep into your industry&apos;s compliance, threat model, and operational reality.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-black tracking-widest text-[12px] uppercase bg-gradient-to-r from-[#e01030] to-[#b00c25] text-white hover:shadow-[0_0_30px_rgba(224,16,48,0.4)] hover:scale-[1.02] transition-all duration-300">
               Discuss Your Sector
             </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION B: INDUSTRIES GRID ── */}
      <section className="py-32 bg-[#faf8ff] relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((ind, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-[#e01030]/30 transition-all duration-300 flex flex-col group overflow-hidden relative">
                 <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#e01030]/5 rounded-full blur-2xl group-hover:bg-[#e01030]/20 transition-all"></div>
                 
                 <div className="mb-6 z-10">
                   <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 text-[#0f1a37] group-hover:text-[#e01030] group-hover:bg-[#e01030]/5 transition-colors">
                     {/* Generic Icon mapping - uses pseudo elements to stay lightweight */}
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                   </div>
                 </div>

                 <h3 className="text-xl font-black tracking-tight text-[#0f1a37] mb-3 z-10 pr-4">{ind.name}</h3>
                 <p className="text-gray-500 font-medium text-sm leading-relaxed z-10">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION E: MINI CTA ── */}
      <section className="bg-[#0b1529] py-16 border-t border-white/[0.05] text-center shrink-0">
         <div className="max-w-4xl mx-auto px-6">
           <Link href="/contact" className="group inline-flex flex-col md:flex-row items-center gap-4 text-2xl md:text-3xl font-black tracking-tight text-white/50 hover:text-white transition-colors">
              Need industry-specific architecture? <span className="text-[#e01030] group-hover:-translate-y-0.5 transition-transform flex items-center gap-2 border-b-2 border-[#e01030]/20 group-hover:border-[#e01030] pb-1">Talk to an architect <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
           </Link>
         </div>
      </section>
    </div>
  );
}
