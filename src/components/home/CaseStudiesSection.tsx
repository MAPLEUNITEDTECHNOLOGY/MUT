'use client';
import React from 'react';

export default function CaseStudiesSection() {
  return (
    <section className="bg-[#0f1a37] py-16 lg:py-20 relative z-20">
      {/* ── 4: CASE STUDIES (Bento Editorial) ── */}
      <div className="max-w-[1920px] mx-auto px-8 md:px-12 lg:px-24">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-[#e01030] text-xs font-black tracking-[0.3em] uppercase mb-3 flex items-center gap-4">
              <div className="w-8 h-px bg-[#e01030]"></div> Enterprise Deployments
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">Real-World Results.</h3>
          </div>
          <a href="/case-studies" className="hidden md:inline-flex items-center gap-2 text-white font-black uppercase tracking-[0.15em] border-b-2 border-transparent hover:border-[#e01030] hover:text-[#e01030] transition-colors pb-1 text-xs">
            View All Case Studies <span className="text-base leading-none">&rarr;</span>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* 1. Finance */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col">
            <div className="flex justify-between items-start mb-8 relative z-10">
              <span className="bg-[#0f1a37] text-white text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded border border-black/10">Finance</span>
              <span className="text-[#e01030] font-black text-xl group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
            </div>
            <div className="relative z-10 flex-1 flex flex-col">
              <h4 className="text-2xl font-black text-[#0f1a37] tracking-tight mb-3 leading-tight">Global Financial Exchange</h4>
              <p className="text-slate-500 font-semibold mb-6 text-sm leading-relaxed">Migrated legacy on-premise trading systems to a hybrid-cloud architecture, reducing transaction latency by 98%.</p>
              <div className="border-t border-slate-100 pt-6 mt-auto group-hover:border-[#0f1a37]/10 transition-colors">
                <span className="block text-[#e01030] text-[10px] font-black tracking-[0.2em] uppercase mb-1">Key Metric</span>
                <span className="text-4xl font-black text-[#0f1a37] tracking-tighter">0.04ms</span>
                <span className="block text-xs font-bold text-slate-400 mt-1">Transaction Latency</span>
              </div>
            </div>
            <a href="/case-studies/finance" className="absolute inset-0 z-20" aria-label="View Finance Case Study"></a>
          </div>

          {/* 2. Healthcare (Dark Centerpiece) */}
          <div className="group relative bg-[#060d1f] rounded-3xl p-8 shadow-[0_20px_50px_rgba(6,13,31,0.3)] hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-white/10 flex flex-col">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/40 via-[#060d1f] to-[#060d1f] pointer-events-none group-hover:scale-105 transition-transform duration-1000"></div>
            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-8">
                <span className="bg-white/5 backdrop-blur-md text-white text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded border border-white/20">Healthcare</span>
                <span className="text-white opacity-40 font-black text-xl group-hover:opacity-100 group-hover:text-[#e01030] group-hover:translate-x-2 transition-all duration-300">&rarr;</span>
              </div>
              <h4 className="text-2xl font-black text-white tracking-tight mb-3 leading-tight">National Care Network</h4>
              <p className="text-white/60 font-semibold mb-6 text-sm leading-relaxed">Deployed zero-trust security across 400 hospital campuses, securing millions of connected medical devices and achieving full regulatory compliance.</p>
              <div className="border-t border-white/10 pt-6 mt-auto">
                <span className="block text-[#e01030] text-[10px] font-black tracking-[0.2em] uppercase mb-1">Key Metric</span>
                <span className="text-4xl font-black text-white tracking-tighter">100%</span>
                <span className="block text-xs font-bold text-white/40 mt-1">HIPAA Compliance</span>
              </div>
            </div>
            <a href="/case-studies/healthcare" className="absolute inset-0 z-20" aria-label="View Healthcare Case Study"></a>
          </div>

          {/* 3. Logistics */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col">
            <div className="flex justify-between items-start mb-8 relative z-10">
              <span className="bg-[#0f1a37] text-white text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded border border-black/10">Logistics</span>
              <span className="text-[#e01030] font-black text-xl group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
            </div>
            <div className="relative z-10 flex-1 flex flex-col">
              <h4 className="text-2xl font-black text-[#0f1a37] tracking-tight mb-3 leading-tight">Trans-Con Logistics</h4>
              <p className="text-slate-500 font-semibold mb-6 text-sm leading-relaxed">Built a predictive analytics platform that anticipates supply chain disruptions across 40 countries, improving operational efficiency by 42%.</p>
              <div className="border-t border-slate-100 pt-6 mt-auto group-hover:border-[#0f1a37]/10 transition-colors">
                <span className="block text-[#e01030] text-[10px] font-black tracking-[0.2em] uppercase mb-1">Key Metric</span>
                <span className="text-4xl font-black text-[#0f1a37] tracking-tighter">42%</span>
                <span className="block text-xs font-bold text-slate-400 mt-1">Efficiency Improvement</span>
              </div>
            </div>
            <a href="/case-studies/logistics" className="absolute inset-0 z-20" aria-label="View Logistics Case Study"></a>
          </div>

        </div>

        {/* NDA Vault Strategy (Project Manager Solution) */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-sm">
              <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            </div>
            <div>
              <span className="block text-white font-black text-sm uppercase tracking-widest">NDA-Protected Projects</span>
              <p className="text-white/50 text-xs font-medium mt-1">Displaying 3 of 42 total engagements. Most client projects are subject to non-disclosure agreements.</p>
            </div>
          </div>

          <a href="/#contact" className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#e01030] text-white px-8 py-3 rounded font-black tracking-widest text-[10px] uppercase hover:bg-white hover:text-[#0f1a37] transition-colors whitespace-nowrap">
            Request a Briefing <span className="text-sm border-l border-white/20 pl-3 leading-none">&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
