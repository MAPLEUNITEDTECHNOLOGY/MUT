'use client';
import React from 'react';

export default function GlobalNetworkSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-24 z-10 border-t border-slate-200">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
          
          <div className="flex flex-col justify-center h-full text-left max-w-xl">
            <h2 className="text-5xl md:text-6xl lg:text-[68px] font-light text-[#1f2937] tracking-tight leading-[1.05] mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Global<br />Presence,<br />Local Expertise
            </h2>

            <p className="text-gray-500 text-lg md:text-xl max-w-md leading-relaxed mb-12 font-light">
              Headquartered in Stockholm with regional offices across three continents. We deliver consistent service quality while meeting local regulatory and compliance requirements.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-8 lg:gap-9">
              <div>
                <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#9ca3af] mb-1.5 block">European Hub</span>
                <h4 className="text-xl font-light text-[#1f2937] tracking-tight">Stockholm, SE</h4>
              </div>

              <div>
                <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#9ca3af] mb-1.5 block">Americas Hub</span>
                <h4 className="text-xl font-light text-[#1f2937] tracking-tight">Austin, US</h4>
              </div>

              <div>
                <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#9ca3af] mb-1.5 block">APAC Hub</span>
                <h4 className="text-xl font-light text-[#1f2937] tracking-tight">Singapore, SG</h4>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <img 
              src="/global-presence-globe.png" 
              alt="Global Presence Map" 
              className="w-full max-w-[720px] h-[420px] md:h-[520px] lg:h-[620px] object-cover shadow-2xl opacity-95 transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
