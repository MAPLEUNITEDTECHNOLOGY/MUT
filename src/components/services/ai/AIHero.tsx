'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';

export default function AIHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={containerRef} className="relative w-full h-[100vh] min-h-[800px] overflow-hidden flex flex-col">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/images/ai/hero-ai.jpg")',
          y
        }}
      />
      
      {/* Very minimal bottom gradient for text contrast only */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-50" />
      
      {/* Content Layout matching screenshot */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-20 flex-1 flex flex-col justify-between pt-8 pb-16 md:pt-10 md:pb-24">
        
        {/* Top-Left Section: Breadcrumbs and Tag */}
        <div className="flex flex-col items-start w-full">
          
          {/* 1. Breadcrumbs */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 text-[#e01030] text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] mb-2"
          >
            <Link href="/" className="hover:text-white transition-colors">HOME</Link>
            <span className="text-[#e01030]/40">/</span>
            <Link href="/services" className="hover:text-white transition-colors">SERVICES</Link>
            <span className="text-[#e01030]/40">/</span>
            <span className="text-[#e01030]">AI & AUTOMATION</span>
          </motion.div>

          {/* 2. Feature Tag */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 bg-[#0a1128]/40 border border-white/5 rounded-full px-5 py-2 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[#e01030] shadow-[0_0_8px_rgba(224,16,48,0.8)]" />
              <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-slate-300">
                ENTERPRISE AI & TRANSFORMATION
              </span>
            </div>
          </motion.div>

        </div>

        {/* Bottom-Center Section: Subtext and CTA */}
        <div className="flex flex-col items-center text-center max-w-4xl w-full mx-auto mt-auto">
          
          {/* 4. Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white text-base md:text-xl lg:text-[22px] font-normal mb-10 leading-relaxed max-w-3xl mx-auto drop-shadow-xl"
          >
            We bridge the gap between AI hype and enterprise value. Architecting
            robust, production-ready intelligence that scales with your ambition.
          </motion.p>

          {/* 5. CTA & Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 items-center justify-center"
          >
            <Link
              href="/contact"
              className="group relative px-8 py-4 bg-white text-black rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-[0.98] font-black uppercase tracking-widest text-[12px] md:text-[13px] shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <span className="relative z-10">
                START YOUR TRANSFORMATION
              </span>
            </Link>
            
            <div className="flex flex-col items-start justify-center bg-[#050b1a]/80 border border-white/5 px-6 py-3.5 rounded-md backdrop-blur-sm">
               <span className="text-white font-bold text-[14px] tracking-tight">50+ Global Implementations</span>
               <span className="text-[#e01030] font-black uppercase tracking-widest mt-1 text-[10px]">ENTERPRISE GRADE</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative Bottom Shadow */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020617] to-transparent z-10" />
    </section>
  );
}

