'use client';
import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

interface CTAData { headline: string; subline: string; primaryButton: string; primaryHref: string; secondaryButton: string; secondaryHref: string; imageSrc: string; }

export default function NetTelecomCTABottom({ cta }: { cta: CTAData }) {
  return (
    <section className="relative w-full bg-[#020617] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={cta.imageSrc} alt="" className="w-full h-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent" />
      </div>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32 relative z-10 text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mb-6 max-w-4xl mx-auto">{cta.headline}</motion.h2>
        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="text-lg text-white/50 leading-relaxed font-medium max-w-2xl mx-auto mb-12">{cta.subline}</motion.p>
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href={cta.primaryHref} className="group relative px-10 py-5 bg-white text-black rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-[0.98] font-black uppercase tracking-widest text-[12px] md:text-[13px] shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            <span className="relative z-10 flex items-center gap-2">{cta.primaryButton}</span>
          </Link>
          <Link href={cta.secondaryHref} className="group relative px-10 py-5 bg-transparent border border-white/20 text-white rounded-full overflow-hidden transition-all duration-300 hover:bg-white/5 hover:border-white/40 font-bold uppercase tracking-widest text-[12px] md:text-[13px]">
            <span className="relative z-10 flex items-center gap-2">{cta.secondaryButton}</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
