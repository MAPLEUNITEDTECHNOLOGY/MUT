import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Result {
  value: string;
  label: string;
}

interface CaseStudyTemplateProps {
  title: string;
  highlightWord?: string;
  industrySlug: string;
  industryName: string;
  imageSrc: string;
  results: Result[];
}

export const CaseStudyTemplate: React.FC<CaseStudyTemplateProps> = ({
  title,
  highlightWord,
  industrySlug,
  industryName,
  imageSrc,
  results
}) => {
  return (
    <div className="bg-[#faf8ff] min-h-screen pt-[76px] pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="flex-1">
            <Link href="/industries" className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#e01030] uppercase tracking-widest mb-8 transition-colors">
              &larr; Back to Industries
            </Link>
            
            <div className="mb-6">
              <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#e01030] block mb-3">Case Study &bull; {industryName}</span>
              <div className="w-8 h-[2px] bg-gradient-to-r from-[#e01030] to-[#b00c25]" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f1a37] tracking-tight leading-[1.1] mb-8">
              {title.split(' ').map((word, i) => {
                const cleanWord = word.replace(/[^a-zA-Z0-9%]/g, '');
                return (
                  <span key={i} className={cleanWord === highlightWord ? 'text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-[#e01030]' : ''}>
                    {word}{' '}
                  </span>
                );
              })}
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-10 max-w-lg">
              Learn how our architected infrastructure provided unparalleled scalability, security, and velocity for this {industryName} leader.
            </p>
            
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded text-[11px] font-black tracking-widest uppercase bg-gradient-to-r from-[#e01030] to-[#b00c25] text-white hover:shadow-[0_4px_24px_rgba(224,16,48,0.3)] hover:scale-[1.02] transition-all">
              Download Architecture Brief <span className="text-lg">&rarr;</span>
            </Link>
          </div>
          
          <div className="flex-1 w-full relative">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl bg-[#0f1a37] border border-gray-200/50 group">
              {/* Optional slight scale on hover for the image to give it life */}
              <Image 
                src={`/images/${imageSrc}`} 
                alt={`${industryName} case study deployment`}
                fill
                quality={90}
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a37]/80 via-transparent to-transparent opacity-80" />
            </div>
            
            <div className="absolute -bottom-8 -left-8 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 z-10 w-full max-w-[240px]">
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-400 block mb-4">Quantifiable Impact</span>
              <div className="space-y-6">
                {results.map((res, idx) => (
                  <div key={idx} className="border-l-2 border-[#e01030]/20 pl-4">
                    <span className="block text-2xl font-black text-[#0f1a37]">{res.value}</span>
                    <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">{res.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
};
