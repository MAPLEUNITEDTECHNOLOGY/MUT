'use client';
import React from 'react';

export default function CTABannerSection() {
  return (
    <section className="relative overflow-hidden bg-[#eff3f7] py-32 border-t border-slate-200">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Clean abstract image or empty space */}
          <div className="lg:w-1/2 w-full flex justify-center">
             <img src="/images/abstract_cloud_grid.png" alt="Cloud Grid Infrastructure" className="w-full max-w-lg object-contain mix-blend-multiply opacity-80 mix-blend-darken" />
          </div>

          {/* Right: Minimalist Form */}
          <div className="lg:w-1/2 w-full">
            <form className="w-full max-w-xl mx-auto bg-white rounded-xl p-10 md:p-14 shadow-[0_8px_40px_rgba(0,0,0,0.04)] border border-slate-200 relative">
              <h3 className="text-3xl font-light text-[#0f1a37] tracking-tight mb-10 pb-6 border-b border-slate-100 font-serif">Start a Conversation</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                   <label className="text-slate-400 text-[10px] font-bold uppercase tracking-widest ml-1">Full Name</label>
                   <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-[#0f1a37] text-sm focus:border-[#0f1a37] outline-none transition-all placeholder:text-slate-300" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                   <label className="text-slate-400 text-[10px] font-bold uppercase tracking-widest ml-1">Company</label>
                   <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-[#0f1a37] text-sm focus:border-[#0f1a37] outline-none transition-all placeholder:text-slate-300" placeholder="Acme Corp" />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                 <label className="text-slate-400 text-[10px] font-bold uppercase tracking-widest ml-1">Work Email</label>
                 <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-[#0f1a37] text-sm focus:border-[#0f1a37] outline-none transition-all placeholder:text-slate-300" placeholder="jane@acmecorp.com" />
              </div>

              <div className="space-y-2 mb-10">
                 <label className="text-slate-400 text-[10px] font-bold uppercase tracking-widest ml-1">Area of Interest</label>
                 <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-slate-700 text-sm focus:border-[#0f1a37] outline-none transition-all">
                    <option>AI & Intelligent Automation</option>
                    <option>Cloud Infrastructure</option>
                    <option>Cybersecurity & Compliance</option>
                    <option>Network Architecture</option>
                    <option>Managed IT Services</option>
                 </select>
              </div>

              <button type="button" className="w-full bg-[#0f1a37] hover:bg-[#b40022] text-white py-4 rounded-lg font-black text-[11px] tracking-[0.2em] uppercase transition-colors shadow-lg shadow-[#0f1a37]/10">
                 Send Request
              </button>
              <p className="text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-6">Your information is kept confidential</p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
