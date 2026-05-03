'use client';
import React from 'react';
import GlobeVideo from './GlobeVideo';

export default function GlobalNetworkSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 pb-0 z-10 border-t border-slate-200">
      {/* ── 5: GLOBAL NETWORK OF PRECISION ── */}
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Minimalist Typography */}
          <div className="lg:w-5/12 text-left pt-[5%]">
            <h2 className="text-5xl md:text-6xl lg:text-[72px] font-light text-[#1f2937] tracking-tight leading-[1.05] mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Global<br/>Presence,<br/>Local Expertise
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-sm leading-relaxed mb-16 font-light">
              Headquartered in Stockholm with regional offices across three continents. We deliver consistent service quality while meeting local regulatory and compliance requirements.
            </p>
            
            <div className="space-y-10">
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

          {/* Right Column: Standard Image Globe */}
          <div className="lg:w-7/12 w-full lg:-mr-24 relative flex items-center justify-center">
            {/* 
              Replaced the WebGL canvas with a standard image relative to your public folder.
              Instructions: Save your image to the `public/` directory as `global-presence-globe.png`.
            */}
            <img 
              src="/global-presence-globe.png" 
              alt="Global Presence Map" 
              className="w-full max-w-[600px] object-contain drop-shadow-2xl opacity-90 transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
