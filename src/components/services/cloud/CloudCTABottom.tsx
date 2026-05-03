'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface CTAData {
  headline: string;
  subline: string;
  primaryButton: string;
  primaryHref: string;
  secondaryButton: string;
  secondaryHref: string;
  imageSrc: string;
}

interface CloudCTABottomProps {
  cta: CTAData;
}

export default function CloudCTABottom({ cta }: CloudCTABottomProps) {
  return (
    <section className="relative w-full bg-[#020617] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={cta.imageSrc}
          alt=""
          className="w-full h-full object-cover object-center opacity-25"
          loading="lazy"
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/80 to-[#020617]" />
      <div className="absolute top-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#e01030]/8 rounded-full blur-[80px] md:blur-[180px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#22d3ee]/5 rounded-full blur-[80px] md:blur-[180px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section label */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-[#22d3ee] text-[10px] font-black tracking-[0.25em] uppercase mb-6"
          >
            <span className="w-8 h-px bg-[#22d3ee]/60" />
            Start Your Cloud Journey
            <span className="w-8 h-px bg-[#22d3ee]/60" />
          </motion.span>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mb-6"
          >
            {cta.headline}
          </motion.h2>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/50 text-base md:text-lg leading-relaxed font-medium max-w-2xl mx-auto mb-12"
          >
            {cta.subline}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary CTA */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={cta.primaryHref}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#e01030] to-[#b00c25] text-white text-base font-bold rounded-xl shadow-[0_8px_30px_rgba(224,16,48,0.3)] hover:shadow-[0_12px_40px_rgba(224,16,48,0.45)] transition-shadow duration-300"
              >
                {cta.primaryButton}
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={cta.secondaryHref}
                className="group inline-flex items-center gap-2 px-8 py-4 border border-white/10 hover:border-white/25 text-white text-base font-bold rounded-xl bg-white/[0.03] backdrop-blur-sm transition-colors duration-300"
              >
                {cta.secondaryButton}
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
