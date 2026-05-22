'use client';
import React from 'react';
import { motion } from 'motion/react';

interface DiffItem { title: string; desc: string; stat: string; statLabel: string; }

interface ManagedDifferentiatorsProps { sectionLabel: string; headline: string; subline: string; items: DiffItem[]; }

export default function ManagedDifferentiators({ sectionLabel, headline, subline, items }: ManagedDifferentiatorsProps) {
  return (
    <section className="relative w-full bg-[#020617] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '48px 48px' }} />
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.span initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-[#e01030] text-[10px] font-black tracking-[0.25em] uppercase mb-4">
            <span className="w-8 h-px bg-[#e01030]/60" />{sectionLabel}
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mb-6">{headline}</motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-lg text-white/40 leading-relaxed font-medium max-w-2xl">{subline}</motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 hover:bg-white/[0.06] hover:border-red-500/20 transition-all duration-500">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_center,rgba(224,16,48,0.05)_0%,transparent_70%)] pointer-events-none" />
              <div className="relative z-10">
                <div className="mb-6">
                  <span className="text-4xl font-black text-white tracking-tighter">{item.stat}</span>
                  <span className="block text-[10px] font-bold text-[#e01030]/60 uppercase tracking-[0.2em] mt-1">{item.statLabel}</span>
                </div>
                <h4 className="text-xl font-black text-white mb-3 tracking-tight">{item.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

