'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

interface CloudHeroProps {
  headline: string;
  subline: string;
  imageSrc: string;
  imageAlt: string;
  badge: string;
  cta: {
    primary: string;
    primaryHref: string;
    secondary: string;
    secondaryHref: string;
  };
  socialProof: string;
}

export default function CloudHero({
  headline,
  subline,
  imageSrc,
  imageAlt,
  badge,
  cta,
  socialProof,
}: CloudHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const prefersReduced = useReducedMotion();

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100vh] min-h-[600px] md:min-h-[820px] overflow-hidden flex flex-col bg-[#0B0F19]"
    >
      {/* ── Background Image ── */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${imageSrc})`,
          y: prefersReduced ? '0%' : y
        }}
      />

      {/* Very minimal bottom gradient for text contrast only */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-50" />

      {/* ── Content ── */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-20 flex-1 flex flex-col justify-between pt-8 pb-16 md:pt-10 md:pb-28">
        {/* ── TOP: Breadcrumbs + Badge ── */}
        <div className="flex flex-col items-start w-full">
          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 text-[#22d3ee] text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] mb-2"
          >
            <Link href="/" className="hover:text-white transition-colors duration-200">
              HOME
            </Link>
            <span className="text-[#22d3ee]/40">/</span>
            <Link href="/services" className="hover:text-white transition-colors duration-200">
              SERVICES
            </Link>
            <span className="text-[#22d3ee]/40">/</span>
            <span className="text-[#22d3ee]">CLOUD INFRASTRUCTURE</span>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 bg-[#0a1128]/40 border border-white/5 rounded-full px-5 py-2 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-slate-300">
                {badge}
              </span>
            </div>
          </motion.div>
        </div>

        {/* ── BOTTOM-CENTER: Headline + Subline + CTAs ── */}
        <div className="flex flex-col items-start text-left max-w-4xl w-full mt-auto">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[42px] md:text-6xl lg:text-[68px] font-black text-white tracking-tight leading-[1.03] mb-6 hero-text-shadow max-w-3xl"
          >
            {headline}
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-white text-lg md:text-xl lg:text-[22px] font-normal leading-relaxed mb-10 max-w-2xl drop-shadow-xl"
          >
            {subline}
          </motion.p>

          {/* CTAs + Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
          >
            {/* Primary CTA */}
            <Link
              href={cta.primaryHref}
              className="group relative px-8 py-4 bg-white text-black rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-[0.98] font-black uppercase tracking-widest text-[12px] md:text-[13px] shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                {cta.primary}
              </span>
            </Link>

            {/* Secondary CTA */}
            <Link
              href={cta.secondaryHref}
              className="group relative px-8 py-4 bg-transparent border border-white/20 text-white rounded-full overflow-hidden transition-all duration-300 hover:bg-white/5 hover:border-white/40 font-bold uppercase tracking-widest text-[12px] md:text-[13px]"
            >
              <span className="relative z-10 flex items-center gap-2">
                {cta.secondary}
              </span>
            </Link>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex items-center gap-3 pl-0 sm:pl-6 sm:border-l border-white/10"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#0B0F19] bg-gradient-to-br from-slate-400 to-slate-600"
                  />
                ))}
              </div>
              <span className="text-white/60 text-[11px] font-bold tracking-[0.1em] uppercase">
                {socialProof}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Shadow */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0B0F19] to-transparent z-10" />
    </section>
  );
}
