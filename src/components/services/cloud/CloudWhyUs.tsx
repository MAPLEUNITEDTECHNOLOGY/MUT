'use client';
import React from 'react';
import { motion } from 'motion/react';

interface Differentiator {
  title: string;
  desc: string;
  stat: string;
  statLabel: string;
}

interface CloudWhyUsProps {
  sectionLabel: string;
  headline: string;
  differentiators: Differentiator[];
}

export default function CloudWhyUs({
  sectionLabel,
  headline,
  differentiators,
}: CloudWhyUsProps) {
  return (
    <motion.section 
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full bg-[#020617] overflow-hidden z-20 -mt-10 md:-mt-20 rounded-t-[40px] md:rounded-t-[60px] shadow-[0_-20px_40px_rgba(0,0,0,0.3)]"
    >
      {/* Background glow orbs */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#e01030]/5 rounded-full blur-[80px] md:blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#e01030]/3 rounded-full blur-[80px] md:blur-[150px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-[#e01030] text-[10px] font-black tracking-[0.25em] uppercase mb-4"
          >
            <span className="w-8 h-px bg-[#e01030]/60" />
            {sectionLabel}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]"
          >
            {headline}
          </motion.h2>
        </div>

        {/* Differentiator cards â€” 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {differentiators.map((diff, idx) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="group relative bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.1] rounded-2xl p-8 lg:p-10 transition-colors duration-500 overflow-hidden"
            >
              {/* Card number */}
              <div className="absolute top-6 right-8 text-[60px] md:text-[80px] font-black text-white/[0.02] leading-none select-none pointer-events-none">
                {idx + 1}
              </div>

              {/* Stat */}
              <div className="flex items-baseline gap-1.5 mb-4">
                <span className="text-3xl md:text-4xl lg:text-5xl font-black text-[#e01030] tracking-tighter">
                  {diff.stat}
                </span>
                <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#e01030]/50">
                  {diff.statLabel}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 tracking-tight">
                {diff.title}
              </h3>

              {/* Description */}
              <p className="text-white/40 text-sm leading-relaxed font-medium">
                {diff.desc}
              </p>

              {/* Hover accent line */}
              <div className="mt-6 w-0 group-hover:w-16 h-px bg-gradient-to-r from-[#e01030] to-transparent transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

