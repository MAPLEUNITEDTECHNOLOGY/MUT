'use client';
import React from 'react';
import Image from 'next/image';

export default function WhoWeAreSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1920px] mx-auto relative z-10 overflow-hidden bg-[#eff3f7]">
      {/* Subtle light background structural pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#64748b 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Text Content */}
        <div className="lg:w-1/2 xl:w-7/12 max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#e01030]"></div>
            <span className="text-[#e01030] text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase">Who We Are</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f1a37] tracking-tight leading-tight mb-8">
            Enterprise IT, engineered for what comes next.
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6 font-medium">
            MU Technologies partners with enterprise organizations to build, secure, and manage the IT infrastructure that runs their business. From cloud platforms and network architecture to cybersecurity and AI integration, we deliver solutions designed for long-term reliability.
          </p>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-10 font-medium">
            Our team of certified architects and engineers works alongside your organization to reduce complexity, strengthen security posture, and ensure your technology scales with your growth.
          </p>
          <a href="/heritage" className="inline-flex items-center gap-2 text-[#e01030] font-bold hover:text-[#0f1a37] transition-colors uppercase tracking-widest text-xs md:text-sm pb-1 border-b-2 border-[#e01030] hover:border-[#0f1a37]">
            Learn More About Us <span className="text-lg leading-none">&rarr;</span>
          </a>
        </div>

        {/* High-End Image Slider (Showcasing all IT services) */}
        <div className="lg:w-1/2 xl:w-5/12 relative group w-full pt-8 lg:pt-0">
          <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5 group-hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)] transition duration-700 bg-[#0f1a37]">
            {/* Image 1: Main Infrastructure */}
            <Image
              src="/images/about_us.png"
              alt="Enterprise Data Center Infrastructure"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover absolute inset-0 z-10"
              style={{ animation: "cf4FadeInOut 16s infinite 0s", opacity: 0 }}
            />
            {/* Image 2: Server Aisle / Hardware */}
            <Image
              src="/images/about_us_2.png"
              alt="Enterprise Server Aisle"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover absolute inset-0 z-10"
              style={{ animation: "cf4FadeInOut 16s infinite 4s", opacity: 0 }}
            />
            {/* Image 3: Cloud / Networking Rendering */}
            <Image
              src="/images/cs_finance.png"
              alt="Global Cloud Networking"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover absolute inset-0 z-10"
              style={{ animation: "cf4FadeInOut 16s infinite 8s", opacity: 0 }}
            />
            {/* Image 4: Cybersecurity Shield */}
            <Image
              src="/images/cs_healthcare.png"
              alt="Cybersecurity Zero Trust Network"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover absolute inset-0 z-10"
              style={{ animation: "cf4FadeInOut 16s infinite 12s", opacity: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
