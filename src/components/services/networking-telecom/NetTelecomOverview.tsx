'use client';
import React from 'react';
import { motion } from 'motion/react';

interface OverviewRow { imageSrc: string; imageAlt: string; heading: string; body: string; }
interface PainPoint { title: string; desc: string; imageSrc: string; }

interface NetTelecomOverviewProps {
  sectionLabel: string; headline: string; subline: string;
  rows: OverviewRow[]; painPoints: PainPoint[];
}

export default function NetTelecomOverview({ sectionLabel, headline, subline, rows, painPoints }: NetTelecomOverviewProps) {
  return (
    <section className="relative w-full bg-[#faf8ff]">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mb-20">
          <span className="inline-flex items-center gap-2 text-[#e01030] text-[10px] font-black tracking-[0.25em] uppercase mb-4">
            <span className="w-8 h-px bg-[#e01030]/60" />{sectionLabel}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f1a37] tracking-tight leading-[1.05] mb-6">{headline}</h2>
          <p className="text-lg text-slate-500 leading-relaxed font-medium max-w-2xl">{subline}</p>
        </motion.div>

        {rows.map((row, idx) => {
          const isReversed = idx % 2 === 1;
          return (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, delay: idx * 0.15 }} className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-20 items-center mb-20 last:mb-0`}>
              <div className="lg:w-1/2 overflow-hidden rounded-2xl">
                <img src={row.imageSrc} alt={row.imageAlt} className="w-full h-[340px] object-cover rounded-2xl" loading="lazy" />
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#0f1a37] tracking-tight mb-6">{row.heading}</h3>
                <p className="text-base md:text-lg text-slate-500 leading-relaxed font-medium">{row.body}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="bg-[#0f1a37] py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="text-[#e01030] text-[10px] font-black tracking-[0.25em] uppercase">The Pain Points</span>
            <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mt-4">What Holds Most Networks Back</h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((point, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.15 }} className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500">
                <div className="h-48 overflow-hidden">
                  <img src={point.imageSrc} alt={point.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-black text-white mb-4 tracking-tight">{point.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed font-medium">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
