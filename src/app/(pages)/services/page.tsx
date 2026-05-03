import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { NAV_SERVICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Enterprise IT Services | MU Technologies',
  description: 'Seven integrated disciplines. One accountable partner. Outcomes guaranteed. Explore our enterprise infrastructure services.',
  openGraph: {
    title: 'Enterprise IT Services | MU Technologies',
    description: 'Seven integrated disciplines. One accountable partner. Outcomes guaranteed.',
    url: 'https://mutechnologies.com/services',
    siteName: 'MU Technologies',
    images: [{ url: '/images/og-services.jpg', width: 1200, height: 630, alt: 'MU Technologies Services' }],
    type: 'website',
  },
};

export default function ServicesHubPage() {
  return (
    <div className="bg-[#f4f6f9] min-h-screen relative overflow-hidden flex flex-col">
      
      {/* ── SECTION A: HERO ── */}
      <section className="bg-[#060d1f] relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32 shrink-0">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute -top-[20%] right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(224,16,48,0.15)_0%,transparent_70%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-6 flex items-center justify-center gap-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/20">/</span>
            <span className="text-[#e01030] tracking-[0.25em]">Services</span>
          </div>
          
          <div className="inline-block mt-4 mb-8">
            <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#e01030] mb-3 block">CORE CAPABILITIES</span>
            <div className="w-8 h-[2px] bg-[#e01030] mx-auto" />
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white mb-6 max-w-4xl mx-auto">
            Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-[#e01030]">Future</span> of Enterprise IT
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-12">
            Seven integrated disciplines. One accountable partner. Outcomes guaranteed.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-black tracking-widest text-[12px] uppercase bg-gradient-to-r from-[#e01030] to-[#b00c25] text-white hover:shadow-[0_0_30px_rgba(224,16,48,0.4)] hover:scale-[1.02] transition-all duration-300">
              Schedule Architecture Review
            </Link>
            <Link href="/insights" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-black tracking-widest text-[12px] uppercase border border-white/20 text-white hover:border-[#e01030]/60 hover:bg-white/[0.04] transition-all duration-300">
              Read Our Insights
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION B: SERVICES GRID ── */}
      <section className="py-32 bg-[#faf8ff] relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NAV_SERVICES.map((s, i) => (
              <Link key={i} href={s.href} className="bg-white border border-gray-100 rounded-[24px] p-8 md:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#e01030]/30 transition-all duration-300 flex flex-col group h-full">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 border border-gray-100 group-hover:bg-[#e01030]/5 group-hover:border-[#e01030]/20 transition-colors">
                  <div className="w-5 h-5 bg-[#0f1a37] group-hover:bg-[#e01030] transition-colors rounded-sm" style={{ WebkitMask: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 12h-4l-3 9L9 3l-3 9H2\"/></svg>') center/contain no-repeat", mask: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 12h-4l-3 9L9 3l-3 9H2\"/></svg>') center/contain no-repeat" }}></div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-black tracking-tight text-[#0f1a37] mb-4">{s.label}</h3>
                
                {/* Dynamically generate descriptions based on title for the hub */}
                <p className="text-gray-500 font-medium leading-relaxed mb-10 flex-grow text-[15px]">
                  {s.label === 'AI Transformation' ? 'Embed production-grade AI and ML models into your existing workflows. Predictive maintenance to intelligent document processing.' :
                   s.label === 'Cloud Economics' ? 'Cut cloud spend by 20–40% without sacrificing SLAs through multi-cloud and hybrid environment optimization.' :
                   s.label === 'Managed Services' ? '24/7 NOC monitoring 50,000+ endpoints with sub-15-minute MTTR on P1 incidents.' :
                   s.label === 'Network Architecture' ? 'SD-WAN and hyper-converged networks handling 10Gbps+ throughput with sub-5ms edge latency.' :
                   s.label === 'Zero-Trust Security' ? 'ZTNA frameworks that authenticate every workload, eliminating lateral movement and breach radius.' :
                   s.label === 'Video Surveillance & Monitoring' ? 'Enterprise-grade CCTV and IP camera systems with AI-powered analytics and centralized monitoring.' :
                   s.label === 'Digital Marketing & Growth' ? 'Data-driven performance marketing, SEO, and brand strategy engineered for measurable revenue growth.' :
                   'RPO of <15 minutes and RTO of <1 hour spanning 3 geographic zones with automated failover.'}
                </p>

                <div className="flex items-center gap-2 pt-6 border-t border-gray-100 mt-auto text-[#0f1a37] font-bold text-sm tracking-wide group-hover:text-[#e01030] transition-colors">
                  Explore Capability <span className="text-lg group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION C: PROCESS ── */}
      <section className="bg-[#060d1f] py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#e01030] mb-3 block">METHODOLOGY</span>
            <div className="w-8 h-[2px] bg-[#e01030] bg-[#e01030] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">How We Engage.</h2>
          </div>
          
          {/* Timeline Process */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
             <div className="hidden md:block absolute top-[28px] left-0 w-full h-[2px] bg-white/[0.05] -z-10"></div>
             {[
               { s: "01", t: "Discovery Call", d: "Initial architecture qualification and scope alignment." },
               { s: "02", t: "Architecture Review", d: "Deep-dive audit into systems, workflows, and gaps." },
               { s: "03", t: "Phased Delivery", d: "Structured, sprint-based deployment with zero downtime." },
               { s: "04", t: "Ongoing Excellence", d: "24/7 proactive monitoring and continuous FinOps." }
             ].map((step, i) => (
               <div key={i} className="flex flex-col items-center text-center p-6 bg-white/[0.02] border border-white/[0.05] rounded-2xl md:bg-transparent md:border-none md:rounded-none md:p-0 group">
                 <div className="w-14 h-14 rounded-full bg-[#0b1529] border border-white/10 flex items-center justify-center text-white/40 font-black tracking-widest text-lg md:mb-8 group-hover:bg-[#e01030] group-hover:text-white group-hover:border-[#e01030] transition-all duration-300 z-10 mx-auto">
                   {step.s}
                 </div>
                 <h4 className="text-white font-black text-xl mb-3 mt-6 md:mt-0">{step.t}</h4>
                 <p className="text-white/50 text-sm font-medium leading-relaxed max-w-[240px] mx-auto">{step.d}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* ── SECTION D: MINI CTA ── */}
      <section className="bg-[#0b1529] py-16 border-t border-white/[0.05] text-center">
         <div className="max-w-4xl mx-auto px-6">
           <Link href="/contact" className="group inline-flex flex-col md:flex-row items-center gap-4 text-2xl md:text-3xl font-black tracking-tight text-white/50 hover:text-white transition-colors">
              Ready to transform your stack? <span className="text-[#e01030] group-hover:-translate-y-0.5 transition-transform flex items-center gap-2 border-b-2 border-[#e01030]/20 group-hover:border-[#e01030] pb-1">Talk to an architect <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
           </Link>
         </div>
      </section>

    </div>
  );
}
