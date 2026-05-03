import React from 'react';
import Link from 'next/link';

interface Stat {
  value: string;
  label: string;
}

interface ServicePageTemplateProps {
  title: string;
  highlightWord?: string;
  subtitle: string;
  stats: Stat[];
  body: string;
  methodology: string[];
}

export const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  title,
  highlightWord,
  subtitle,
  stats,
  body,
  methodology
}) => {
  // Simple extraction if highlightWord matches a part of title, though we can conditionally render
  return (
    <div className="bg-[#faf8ff] min-h-screen pt-[76px] pb-32">
      <div className="bg-[#0f1a37] py-24 lg:py-32 relative overflow-hidden">
        {/* Abstract Background pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="inline-block mb-6">
            <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#e01030] block mb-3">Service Capability</span>
            <div className="w-8 h-[2px] bg-gradient-to-r from-[#e01030] to-[#b00c25]" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.05] max-w-4xl mb-6">
            {title.split(' ').map((word, i) => (
              <span key={i} className={word === highlightWord ? 'text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-[#e01030]' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>
          <p className="text-xl md:text-2xl font-medium text-white/70 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-16 relative z-20">
        <div className="bg-white border border-gray-100 shadow-xl rounded-[24px] p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center pt-8 md:pt-0">
                <span className="text-4xl md:text-5xl font-black text-[#0f1a37] mb-2">{stat.value}</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-black text-[#0f1a37] mb-6 tracking-tight">Overview</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
              {body}
            </p>
            <div className="bg-[#f2f3ff] p-8 rounded-2xl relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#e01030] rounded-l-2xl opacity-80"></div>
              <p className="text-[#0f1a37] font-semibold italic">
                Our approach rejects out-of-the-box configurations. We engineer the exact architecture your enterprise requires—and nothing less.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <h3 className="text-xl font-black text-[#0f1a37] mb-8 tracking-tight">Deployment Methodology</h3>
              <div className="space-y-6 text-[#0f1a37]">
                {methodology.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#eaedff] text-[#e01030] flex items-center justify-center font-black flex-shrink-0 text-sm border border-[#e01030]/10">
                      0{idx + 1}
                    </div>
                    <p className="font-bold text-[15px] pt-1">
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-12 border-t border-gray-200">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Ready to architect?</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded text-[11px] font-black tracking-widest uppercase bg-gradient-to-r from-[#e01030] to-[#b00c25] text-white hover:scale-[1.02] transition-transform">
                  Request Consultation <span className="text-lg">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
