import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { INSIGHTS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Insights | MU Technologies',
  description: 'Intelligence for IT Leaders. Research, analysis, and field intelligence from the engineers building enterprise infrastructure.',
};

export default function InsightsPage() {
  return (
    <div className="bg-[#f4f6f9] min-h-screen relative overflow-hidden flex flex-col">
      {/* ── SECTION A: HERO ── */}
      <section className="bg-[#060d1f] relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32 shrink-0 border-b border-white/[0.05]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute -top-[20%] left-[20%] w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(224,16,48,0.15)_0%,transparent_70%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-6 flex items-center justify-center gap-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/20">/</span>
            <span className="text-[#e01030] tracking-[0.25em]">Insights</span>
          </div>

          <div className="inline-block mt-4 mb-8">
            <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#e01030] mb-3 block">PUBLICATION</span>
            <div className="w-8 h-[2px] bg-[#e01030] mx-auto" />
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white mb-6">
            Intelligence for <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-[#e01030]">IT Leaders</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-12">
            Research, analysis, and field intelligence from the engineers building enterprise infrastructure.
          </p>
        </div>
      </section>

      {/* ── SECTION B: INSIGHTS GRID ── */}
      <section className="py-32 bg-[#faf8ff] relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INSIGHTS.map((insight, i) => (
              <Link key={i} href={`#`} className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:border-[#e01030]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col group">
                 <div className="flex items-center justify-between mb-8">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] font-black tracking-widest uppercase text-[#0f1a37] group-hover:bg-[#e01030]/10 group-hover:text-[#e01030] transition-colors">{insight.category}</span>
                    <span className="text-gray-400 text-xs font-bold flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> {insight.readTime}</span>
                 </div>
                 
                 <h3 className="text-2xl font-black tracking-tight text-[#0f1a37] leading-snug mb-6 group-hover:text-[#e01030] transition-colors flex-grow">
                   {insight.title}
                 </h3>
                 
                 <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <span className="text-[#0f1a37] font-bold text-sm tracking-wide">Read Publication</span>
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#e01030] group-hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </div>
                 </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
