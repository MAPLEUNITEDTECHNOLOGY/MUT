'use client';
import React from 'react';
import { motion } from 'motion/react';

interface Outcome {
  metric: string;
  label: string;
}

interface CaseStudyTestimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

interface CloudCaseStudyProps {
  label: string;
  headline: string;
  industry: string;
  challenge: string;
  solution: string;
  outcome: Outcome[];
  imageSrc: string;
  testimonial: CaseStudyTestimonial;
}

export default function CloudCaseStudy({
  label,
  headline,
  industry,
  challenge,
  solution,
  outcome,
  imageSrc,
  testimonial,
}: CloudCaseStudyProps) {
  return (
    <motion.section 
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className="relative w-full bg-[#0B0F19] overflow-hidden z-20 -mt-10 md:-mt-20 rounded-t-[40px] md:rounded-t-[60px] shadow-[0_-20px_40px_rgba(0,0,0,0.3)]"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt={industry}
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0B0F19] via-[#0B0F19]/80 to-[#0B0F19]" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-[#22d3ee] text-[10px] font-black tracking-[0.25em] uppercase mb-4"
          >
            <span className="w-8 h-px bg-[#22d3ee]" />
            {label}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mb-4"
          >
            {headline}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-block bg-white/[0.04] border border-white/[0.08] rounded-full px-5 py-2 text-white/60 text-[11px] font-bold tracking-[0.1em] uppercase backdrop-blur-sm">
              {industry}
            </span>
          </motion.div>
        </div>

        {/* Challenge + Solution grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 lg:p-10 backdrop-blur-sm hover:bg-white/[0.03] hover:border-white/10 transition-colors duration-300"
          >
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#22d3ee]/70 mb-4 block">
              The Challenge
            </span>
            <p className="text-white/50 text-[15px] leading-relaxed font-medium">
              {challenge}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="bg-[#22d3ee]/[0.03] border border-[#22d3ee]/20 rounded-2xl p-8 lg:p-10 backdrop-blur-sm shadow-[0_0_30px_rgba(34,211,238,0.05)] hover:bg-[#22d3ee]/[0.05] hover:border-[#22d3ee]/30 transition-all duration-300"
          >
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#22d3ee] mb-4 block">
              Our Solution
            </span>
            <p className="text-white/70 text-[15px] leading-relaxed font-medium">
              {solution}
            </p>
          </motion.div>
        </div>

        {/* Outcome stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {outcome.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
              className="flex flex-col items-center text-center bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 backdrop-blur-sm shadow-lg hover:bg-white/[0.04] transition-colors duration-300"
            >
              <span className="text-4xl md:text-5xl font-black text-[#22d3ee] tracking-tighter mb-2 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                {item.metric}
              </span>
              <span className="text-white/50 text-[11px] font-bold tracking-[0.15em] uppercase">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Testimonial quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative border-l-2 border-[#22d3ee] pl-8 md:pl-10 max-w-3xl"
        >
          <p className="text-white/80 text-lg md:text-xl leading-relaxed font-medium italic mb-6">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <footer className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#22d3ee]/20 to-[#4f46e5]/20 border border-[#22d3ee]/30 flex items-center justify-center text-[#22d3ee] text-sm font-black shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              {testimonial.name.charAt(0)}
            </div>
            <div>
              <span className="block text-white text-sm font-bold">{testimonial.name}</span>
              <span className="block text-[#22d3ee]/60 text-xs font-medium">
                {testimonial.role}, {testimonial.company}
              </span>
            </div>
          </footer>
        </motion.blockquote>
      </div>
    </motion.section>
  );
}
