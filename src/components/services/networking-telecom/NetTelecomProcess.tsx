'use client';
import React from 'react';
import { motion } from 'motion/react';

interface ProcessStep { number: string; title: string; desc: string; imageSrc: string; }
interface NetTelecomProcessProps { sectionLabel: string; headline: string; steps: ProcessStep[]; }

export default function NetTelecomProcess({ sectionLabel, headline, steps }: NetTelecomProcessProps) {
  return (
    <section className="relative w-full bg-[#faf8ff] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <div className="max-w-3xl mb-20">
          <motion.span initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-[#e01030] text-[10px] font-black tracking-[0.25em] uppercase mb-4">
            <span className="w-8 h-px bg-[#e01030]/60" />{sectionLabel}
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f1a37] tracking-tight leading-[1.05] mb-6">{headline}</motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-9 left-0 w-full h-[2px] bg-slate-200 z-0" />
          {steps.map((step, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.15 }} className="flex flex-col items-center text-center group relative z-10">
              <div className="rounded-full bg-[#faf8ff] border-2 border-slate-200 flex items-center justify-center text-slate-400 font-black text-xl group-hover:border-[#e01030] group-hover:text-[#e01030] group-hover:shadow-[0_0_20px_rgba(224,16,48,0.15)] transition-all duration-300 mb-8 w-[72px] h-[72px]">
                {step.number}
              </div>
              <h4 className="text-xl font-black text-[#0f1a37] mb-4 tracking-tight">{step.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
