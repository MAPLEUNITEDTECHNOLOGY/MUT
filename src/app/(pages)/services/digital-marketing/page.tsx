import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Digital Marketing & Growth | MU Technologies',
  description: 'Data-driven digital marketing services — SEO, PPC, social media, content strategy, and conversion optimization. Accelerate your brand\'s digital presence with enterprise-grade marketing solutions.',
  openGraph: {
    title: 'Digital Marketing & Growth | MU Technologies',
    description: 'Data-driven digital marketing services — SEO, PPC, social media, content strategy, and conversion optimization.',
    url: 'https://mutechnologies.com/services/digital-marketing',
    siteName: 'MU Technologies',
    type: 'website',
  },
};

const SERVICES_OFFERED = [
  {
    title: 'Search Engine Optimization',
    tag: 'SEO',
    desc: 'Technical SEO audits, on-page optimization, link acquisition, and content strategy that drives organic rankings and qualified traffic at scale.',
    metrics: 'Avg. 340% organic traffic increase within 12 months',
  },
  {
    title: 'Pay-Per-Click Advertising',
    tag: 'PPC',
    desc: 'Google Ads, Microsoft Ads, and programmatic display campaigns engineered for maximum ROAS with continuous bid optimization and A/B creative testing.',
    metrics: 'Avg. 4.2x return on ad spend across verticals',
  },
  {
    title: 'Social Media Management',
    tag: 'SOCIAL',
    desc: 'Strategic content calendars, community management, and paid social campaigns across LinkedIn, Meta, X, and emerging platforms — tailored to your B2B or B2C audience.',
    metrics: '2.8x engagement lift with managed campaigns',
  },
  {
    title: 'Content Marketing & Strategy',
    tag: 'CONTENT',
    desc: 'Thought leadership articles, whitepapers, case studies, and video content designed to educate prospects and accelerate pipeline velocity.',
    metrics: '67% of leads attribute first touch to content',
  },
  {
    title: 'Conversion Rate Optimization',
    tag: 'CRO',
    desc: 'Data-driven UX analysis, A/B testing, landing page optimization, and funnel engineering to maximize conversion at every stage of the buyer journey.',
    metrics: 'Avg. 42% conversion rate improvement',
  },
  {
    title: 'Analytics & Reporting',
    tag: 'DATA',
    desc: 'Custom dashboards, attribution modeling, and executive reporting that connects marketing spend to revenue outcomes with full-funnel visibility.',
    metrics: 'Real-time dashboards with automated insights',
  },
];

const METHODOLOGY = [
  { step: '01', title: 'Discovery & Audit', desc: 'Comprehensive analysis of your current digital footprint, competitive landscape, and growth opportunities.' },
  { step: '02', title: 'Strategy & Roadmap', desc: 'Custom marketing strategy with clear KPIs, channel mix, and a phased 90-day execution plan.' },
  { step: '03', title: 'Launch & Optimize', desc: 'Campaign deployment with real-time monitoring, continuous A/B testing, and weekly optimization cycles.' },
  { step: '04', title: 'Scale & Report', desc: 'Performance scaling, executive reporting, and strategic pivots based on data-driven insights.' },
];

const RESULTS = [
  { metric: '340%', label: 'Average Organic Traffic Increase', period: '12 months' },
  { metric: '4.2x', label: 'Return on Ad Spend', period: 'Across verticals' },
  { metric: '67%', label: 'Leads from Content', period: 'First-touch attribution' },
  { metric: '42%', label: 'Conversion Rate Lift', period: 'CRO programs' },
];

export default function DigitalMarketingPage() {
  return (
    <div className="bg-[#faf8ff] min-h-screen relative overflow-hidden flex flex-col">

      {/* ── HERO ── */}
      <section className="bg-[#060d1f] relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32 shrink-0">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute -top-[20%] left-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(224,16,48,0.12)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/20">/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span className="text-white/20">/</span>
            <span className="text-[#e01030] tracking-[0.25em]">Digital Marketing</span>
          </div>

          <div className="inline-block mt-4 mb-8">
            <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#e01030] mb-3 block">GROWTH ENGINE</span>
            <div className="w-8 h-[2px] bg-[#e01030]" />
          </div>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white mb-6">
              Digital Marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-[#e01030]">& Growth</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-3xl">
              Data-driven strategies that transform digital presence into measurable revenue. From organic search dominance to precision advertising — we engineer growth that compounds.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-black tracking-widest text-[12px] uppercase bg-gradient-to-r from-[#e01030] to-[#b00c25] text-white hover:shadow-[0_0_30px_rgba(224,16,48,0.4)] hover:scale-[1.02] transition-all duration-300">
              Request Marketing Audit
            </Link>
            <Link href="#services" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-black tracking-widest text-[12px] uppercase border border-white/20 text-white hover:border-[#e01030]/60 hover:bg-white/[0.04] transition-all duration-300">
              Explore Capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* ── RESULTS BANNER ── */}
      <section className="relative z-20 -mt-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white border border-gray-100 shadow-xl rounded-[24px] p-8 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {RESULTS.map((r, i) => (
                <div key={i} className="flex flex-col items-center justify-center pt-6 md:pt-0">
                  <span className="text-3xl md:text-4xl font-black text-[#0f1a37] mb-1">{r.metric}</span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-[0.15em] text-center">{r.label}</span>
                  <span className="text-[10px] text-slate-400 font-medium mt-1">{r.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES OFFERED ── */}
      <section id="services" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#e01030] mb-3 block">WHAT WE DELIVER</span>
            <div className="w-8 h-[2px] bg-[#e01030] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-black text-[#0f1a37] tracking-tight mb-4">Full-Spectrum Digital Marketing</h2>
            <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">Every channel, every touchpoint, every conversion — engineered for measurable impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_OFFERED.map((svc, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-[24px] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#e01030]/30 transition-all duration-300 flex flex-col group">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[9px] font-black tracking-[0.2em] text-[#e01030] bg-[#e01030]/5 border border-[#e01030]/10 px-3 py-1.5 rounded-full">{svc.tag}</span>
                </div>
                <h3 className="text-xl font-black tracking-tight text-[#0f1a37] mb-3">{svc.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed text-[14px] mb-6 flex-grow">{svc.desc}</p>
                <div className="pt-4 border-t border-gray-100 mt-auto">
                  <span className="text-[12px] font-bold text-[#e01030]/80 tracking-wide">{svc.metrics}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ── */}
      <section className="bg-[#060d1f] py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#e01030] mb-3 block">OUR PROCESS</span>
            <div className="w-8 h-[2px] bg-[#e01030] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">From Audit to Scale.</h2>
            <p className="text-white/50 text-lg font-medium max-w-2xl mx-auto">A proven, repeatable methodology that turns marketing spend into compounding growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div className="hidden md:block absolute top-[28px] left-0 w-full h-[2px] bg-white/[0.05] -z-10"></div>
            {METHODOLOGY.map((m, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 bg-white/[0.02] border border-white/[0.05] rounded-2xl md:bg-transparent md:border-none md:rounded-none md:p-0 group">
                <div className="w-14 h-14 rounded-full bg-[#0b1529] border border-white/10 flex items-center justify-center text-white/40 font-black tracking-widest text-lg md:mb-8 group-hover:bg-[#e01030] group-hover:text-white group-hover:border-[#e01030] transition-all duration-300 z-10 mx-auto">
                  {m.step}
                </div>
                <h4 className="text-white font-black text-xl mb-3 mt-6 md:mt-0">{m.title}</h4>
                <p className="text-white/50 text-sm font-medium leading-relaxed max-w-[240px] mx-auto">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY MU FOR DIGITAL MARKETING ── */}
      <section className="py-24 lg:py-32 bg-[#faf8ff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#e01030] mb-3 block">WHY MU TECHNOLOGIES</span>
              <div className="w-8 h-[2px] bg-[#e01030] mb-6" />
              <h2 className="text-4xl md:text-5xl font-black text-[#0f1a37] tracking-tight mb-8 leading-[1.1]">Marketing That Speaks the Language of Revenue.</h2>
              <p className="text-slate-600 text-lg font-medium leading-relaxed mb-8">
                We don&apos;t chase vanity metrics. Every campaign we deploy is reverse-engineered from your revenue targets, mapped to your sales cycle, and optimized for pipeline impact — not just impressions.
              </p>
              <div className="space-y-4">
                {[
                  'Full-funnel attribution from first click to closed deal',
                  'Dedicated strategist with industry-specific expertise',
                  'Transparent reporting with no hidden fees or lock-ins',
                  'Enterprise-grade analytics and martech stack integration',
                  'Proven playbooks for B2B, B2C, and hybrid models',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#e01030]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#e01030]"></div>
                    </div>
                    <span className="text-[#0f1a37] font-semibold text-[15px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-[24px] p-8 md:p-10 shadow-lg">
              <h3 className="text-2xl font-black text-[#0f1a37] mb-8 tracking-tight">Industries We Serve</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'SaaS & Technology', 'Financial Services', 'Healthcare', 'E-Commerce & Retail',
                  'Manufacturing', 'Professional Services', 'Education', 'Real Estate'
                ].map((ind, i) => (
                  <div key={i} className="flex items-center gap-3 py-3 px-4 rounded-xl border border-gray-100 hover:border-[#e01030]/20 hover:bg-[#e01030]/[0.02] transition-all">
                    <div className="w-2 h-2 rounded-full bg-[#e01030]"></div>
                    <span className="text-sm font-bold text-[#0f1a37]">{ind}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0b1529] py-16 border-t border-white/[0.05] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/contact" className="group inline-flex flex-col md:flex-row items-center gap-4 text-2xl md:text-3xl font-black tracking-tight text-white/50 hover:text-white transition-colors">
            Ready to accelerate growth? <span className="text-[#e01030] group-hover:-translate-y-0.5 transition-transform flex items-center gap-2 border-b-2 border-[#e01030]/20 group-hover:border-[#e01030] pb-1">Request a marketing audit <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
          </Link>
        </div>
      </section>
    </div>
  );
}
