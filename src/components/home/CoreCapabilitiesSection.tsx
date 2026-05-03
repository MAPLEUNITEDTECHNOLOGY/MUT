'use client';
import React from 'react';
import Link from 'next/link';

const CAPABILITIES = [
  {
    title: "AI & Intelligent Automation",
    img: "/images/svc_ai.jpg",
    desc: "We implement AI-driven solutions that automate operations, optimize workloads, and deliver predictive insights — helping your teams make faster, data-informed decisions.",
    highlight: "Machine Learning & AI Ops",
    href: "/services/ai-transformation"
  },
  {
    title: "Cloud Infrastructure",
    img: "/images/svc_cloud.jpg",
    desc: "We architect and manage hybrid and multi-cloud environments across AWS, Azure, and GCP — ensuring high availability, cost optimization, and seamless scalability.",
    highlight: "Hybrid & Multi-Cloud",
    href: "/services/cloud-economics"
  },
  {
    title: "Network Architecture",
    img: "/images/svc_network.jpg",
    desc: "We design resilient network topologies with built-in redundancy, SD-WAN optimization, and secure connectivity between your data centers, branches, and cloud workloads.",
    highlight: "Enterprise Networking",
    href: "/services/network-architecture"
  },
  {
    title: "Managed IT Services",
    img: "/images/svc_managed_it.jpg",
    desc: "Our 24/7 Network Operations Center provides proactive monitoring, incident response, and infrastructure management — so your team can focus on strategic initiatives.",
    highlight: "24/7 Operations Center",
    href: "/services/managed-services"
  },
  {
    title: "Cybersecurity",
    img: "/images/svc_cyber.jpg",
    desc: "We implement zero-trust security frameworks, continuous threat monitoring, and identity access management to protect your organization from evolving cyber threats.",
    highlight: "Zero-Trust Security",
    href: "/services/zero-trust"
  },
  {
    title: "Physical Security & Surveillance",
    img: "/images/svc_cctv.jpg",
    desc: "Enterprise-grade IP camera systems, access control, and biometric authentication — fully integrated with your IT infrastructure and security operations center.",
    highlight: "Integrated Access Control",
    href: "/services/video-surveillance"
  },
  {
    title: "Digital Marketing & Growth",
    img: "/images/svc_growth.jpg",
    desc: "Data-driven marketing strategies that combine SEO, paid acquisition, and analytics to accelerate customer acquisition and maximize return on investment.",
    highlight: "Performance Marketing",
    href: "/services/digital-marketing"
  }
];

export default function CoreCapabilitiesSection() {
  return (
    <section className="relative bg-[#060d1f] z-20" id="services">
      {/* Subtle grid on left side */}
      <div className="absolute top-0 bottom-0 left-0 w-full lg:w-[40%] opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row relative">

        {/* ── LEFT: Sticky Dark Cinematic Column ── */}
        <div className="lg:w-[40%] px-8 md:px-12 lg:px-16 py-20 lg:py-32 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center border-r-0 lg:border-r border-white/5 relative z-10" style={{ backgroundImage: 'radial-gradient(circle at right center, rgba(224,16,48,0.03) 0%, transparent 60%)' }}>
          <h2 className="text-[#e01030] text-xs font-bold tracking-[0.3em] uppercase mb-8 flex items-center gap-4">
            <div className="w-10 h-px bg-[#e01030]"></div> Our Services
          </h2>
          <h3 className="text-5xl md:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.05] mb-8">
            What We<br />Deliver.
          </h3>
          <p className="text-white/40 max-w-sm font-medium text-lg leading-relaxed mb-12">
            End-to-end IT solutions designed for enterprise performance, security, and reliability. Explore our core service areas.
          </p>

          <div className="hidden lg:flex flex-col gap-4 mt-auto">
            {/* Decorative elements to anchor the dark theme */}
            <div className="flex items-center gap-4 opacity-70">
              <div className="w-1.5 h-1.5 rounded-full bg-[#e01030] animate-pulse"></div>
              <span className="text-[9px] font-black tracking-[0.25em] uppercase text-white/50">All Systems Operational</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Clean Light Scroll Stack ── */}
        <div className="lg:w-[60%] bg-[#eff3f7] px-4 sm:px-8 lg:px-16 py-16 lg:py-32 flex flex-col gap-10 lg:gap-16 relative shadow-[-20px_0_50px_rgba(0,0,0,0.2)]">
          {CAPABILITIES.map((s, i) => (
            <div key={i} className="bg-white flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(4,9,20,0.06)] border border-slate-200 group hover:shadow-[0_20px_50px_rgba(4,9,20,0.12)] hover:-translate-y-1 transition-all duration-500">

              {/* Image Side - Reduced Size to allow side-by-side on desktop */}
              <div className="relative h-56 md:h-auto md:w-5/12 overflow-hidden bg-[#0a1128]">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-[1.5s] ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full shadow-sm text-[9px] font-black tracking-widest uppercase text-white border border-white/10">
                  Protocol 0{i + 1}
                </div>
              </div>

              {/* Text Side */}
              <div className="p-8 md:p-10 lg:p-12 bg-white relative md:w-7/12 flex flex-col justify-center">
                <span className="text-[#e01030] text-[9px] font-black tracking-[0.25em] uppercase mb-3 block">
                  {s.highlight}
                </span>
                <h4 className="text-2xl lg:text-3xl font-black text-[#0f1a37] tracking-tight mb-4 group-hover:text-[#e01030] transition-colors">{s.title}</h4>
                <p className="text-slate-500 text-sm lg:text-base leading-relaxed font-semibold mb-6 max-w-xl">{s.desc}</p>

                <Link href={s.href} className="inline-flex items-center gap-2 text-[#0f1a37] font-black text-[10px] uppercase tracking-[0.15em] hover:text-[#b40022] transition-colors group/link mt-auto">
                  Learn More
                  <span className="text-base leading-none group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
