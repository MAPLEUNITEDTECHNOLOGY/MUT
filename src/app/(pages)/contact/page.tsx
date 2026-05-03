import React from 'react';
import { Metadata } from 'next';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact an Enterprise Architect | MU Technologies',
  description: 'Tell us about your challenge. An enterprise architect will respond within 4 hours to begin mapping your transformation roadmap.',
  openGraph: {
    title: 'Contact an Enterprise Architect | MU Technologies',
    description: 'Tell us about your challenge. An enterprise architect will respond within 4 hours.',
    url: 'https://mutechnologies.com/contact',
    siteName: 'MU Technologies',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'MU Technologies' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact an Enterprise Architect | MU Technologies',
    description: 'Tell us about your challenge. An enterprise architect will respond within 4 hours.',
  },
};

export default function ContactPage() {
  return (
    <div className="bg-[#060d1f] min-h-screen relative overflow-hidden flex flex-col">
      {/* Background Texture & Glow */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(224,16,48,0.15)_0%,transparent_70%)] pointer-events-none"></div>

      {/* Breadcrumb Area */}
      <div className="max-w-7xl mx-auto px-6 w-full pt-32 relative z-10">
         <div className="text-[#e01030] text-[10px] font-black uppercase tracking-[0.2em] mb-4">Home / Contact Us</div>
      </div>

      <main className="flex-grow flex items-center justify-center py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Heading & Info */}
          <div className="lg:w-5/12">
            <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#e01030] mb-3 block">ENTERPRISE INQUIRY</span>
            <div className="w-8 h-[2px] bg-[#e01030] mb-6" />
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white mb-6">
              Let&apos;s Architect<br/>Something <span className="text-[#e01030]">Exceptional.</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed font-medium mb-12 max-w-lg">
              Tell us about your challenge. An enterprise architect will respond within <strong className="text-white">4 hours</strong>.
            </p>

            {/* Support Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 hover:bg-white/[0.07] hover:border-[#e01030]/40 transition-all duration-300 group">
                 <div className="w-10 h-10 rounded-full bg-[#111c34] flex items-center justify-center text-[#e01030] mb-4 group-hover:scale-110 transition-transform">
                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                 </div>
                 <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-wider">Direct Line</h4>
                 <p className="text-white/60 text-sm font-medium">{COMPANY.phone}</p>
              </div>
              <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 hover:bg-white/[0.07] hover:border-[#e01030]/40 transition-all duration-300 group">
                 <div className="w-10 h-10 rounded-full bg-[#111c34] flex items-center justify-center text-[#e01030] mb-4 group-hover:scale-110 transition-transform">
                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                 </div>
                 <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-wider">Enterprise Desk</h4>
                 <p className="text-white/60 text-sm font-medium">{COMPANY.email}</p>
              </div>
            </div>

            {/* Engagement Options */}
            <div>
              <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-4">How We Engage</p>
              <div className="flex flex-col gap-3">
                 {[
                   "Schedule an Architecture Demo",
                   "Request a Compliance Proposal",
                   "Talk to a Solutions Architect"
                 ].map((opt, i) => (
                   <div key={i} className="flex items-center gap-4 py-3 px-4 rounded-xl border border-white/[0.04] bg-white/[0.01]">
                     <div className="w-2 h-2 rounded-full bg-[#e01030] animate-pulse"></div>
                     <span className="text-white/80 font-semibold text-sm">{opt}</span>
                   </div>
                 ))}
              </div>
            </div>
            
          </div>

          {/* Right Column: High-Context Form */}
          <div className="lg:w-7/12 w-full lg:max-w-[600px] ml-auto">
             <form className="bg-[#0b1529] border border-white/[0.07] rounded-[32px] p-8 md:p-12 shadow-[0_32px_80px_rgba(0,0,0,0.4)] relative">
                {/* Visual Flair */}
                <div className="absolute top-0 right-10 w-24 h-[2px] bg-[#e01030] shadow-[0_0_20px_rgba(224,16,48,1)]"></div>
                
                <h3 className="text-2xl font-black text-white tracking-tight mb-8">Secure Intake Gateway</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="text-white/50 text-[10px] font-black uppercase tracking-[0.1em] mb-3 block">Full Name *</label>
                    <input required type="text" className="w-full bg-[#111c34] border border-transparent rounded-xl px-5 py-4 text-white text-[13px] font-medium placeholder:text-white/20 focus:border-[#e01030] focus:ring-1 focus:ring-[#e01030] outline-none transition-all" placeholder="E.g., Jane Doe" />
                  </div>
                  <div>
                    <label className="text-white/50 text-[10px] font-black uppercase tracking-[0.1em] mb-3 block">Company Name *</label>
                    <input required type="text" className="w-full bg-[#111c34] border border-transparent rounded-xl px-5 py-4 text-white text-[13px] font-medium placeholder:text-white/20 focus:border-[#e01030] focus:ring-1 focus:ring-[#e01030] outline-none transition-all" placeholder="E.g., Acme Corp" />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="text-white/50 text-[10px] font-black uppercase tracking-[0.1em] mb-3 block">Work Email *</label>
                  <input required type="email" className="w-full bg-[#111c34] border border-transparent rounded-xl px-5 py-4 text-white text-[13px] font-medium placeholder:text-white/20 focus:border-[#e01030] focus:ring-1 focus:ring-[#e01030] outline-none transition-all" placeholder="jane@acmecorp.com" />
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline justify-between mb-3">
                    <label className="text-white/50 text-[10px] font-black uppercase tracking-[0.1em]">Phone Number</label>
                    <span className="text-white/20 text-[9px] font-black uppercase tracking-[0.1em]">Optional</span>
                  </div>
                  <input type="tel" className="w-full bg-[#111c34] border border-transparent rounded-xl px-5 py-4 text-white text-[13px] font-medium placeholder:text-white/20 focus:border-[#e01030] focus:ring-1 focus:ring-[#e01030] outline-none transition-all" placeholder="+1 (555) 000-0000" />
                </div>

                <div className="mb-6">
                  <label className="text-white/50 text-[10px] font-black uppercase tracking-[0.1em] mb-3 block">Service Interest *</label>
                  <select required className="w-full bg-[#111c34] border border-transparent rounded-xl px-5 py-4 text-white text-[13px] font-medium focus:border-[#e01030] focus:ring-1 focus:ring-[#e01030] outline-none cursor-pointer appearance-none transition-all">
                    <option value="" disabled selected className="text-white/20">Select an area of interest</option>
                    <option>AI Transformation</option>
                    <option>Cloud Economics</option>
                    <option>Managed Services</option>
                    <option>Network Architecture</option>
                    <option>Zero-Trust Security</option>
                    <option>Video Surveillance & Monitoring</option>
                    <option>Disaster Recovery</option>
                    <option>Digital Marketing & Growth</option>
                    <option>General Enquiry</option>
                  </select>
                </div>

                <div className="mb-10">
                  <div className="flex items-baseline justify-between mb-3">
                    <label className="text-white/50 text-[10px] font-black uppercase tracking-[0.1em]">Message</label>
                    <span className="text-white/20 text-[9px] font-black uppercase tracking-[0.1em]">Optional</span>
                  </div>
                  <textarea rows={4} className="w-full bg-[#111c34] border border-transparent rounded-xl px-5 py-4 text-white text-[13px] font-medium placeholder:text-white/20 focus:border-[#e01030] focus:ring-1 focus:ring-[#e01030] outline-none transition-all resize-none" placeholder="Briefly describe your infrastructure challenges..."></textarea>
                </div>

                <button type="submit" className="w-full inline-flex items-center justify-center gap-3 px-6 py-5 rounded-xl font-black tracking-widest text-[13px] uppercase bg-gradient-to-r from-[#e01030] to-[#b00c25] text-white hover:shadow-[0_0_30px_rgba(224,16,48,0.5)] hover:scale-[1.02] transition-all duration-300">
                  Initialize Contact Sequence
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
             </form>
          </div>

        </div>
      </main>
    </div>
  );
}
