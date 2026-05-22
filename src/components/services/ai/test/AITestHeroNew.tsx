'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import AITest3D from './AITest3D';

export default function AITestHeroNew() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-[#020617] overflow-hidden flex items-center">
      {/* Original Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 grayscale-[0.5]"
        style={{ 
          backgroundImage: 'url("/images/ai/hero-ai.jpg")',
          y: backgroundY
        }}
      />
      
      {/* Technical Overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent" />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(rgba(224,16,48,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(224,16,48,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-32">
        
        {/* Left Side: Technical Content */}
        <motion.div 
          style={{ y: contentY }}
          className="flex flex-col items-start"
        >
          {/* Breadcrumbs */}
          <div className="flex items-center gap-3 text-red-500 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] mb-8">
            <span>HOME</span>
            <span className="opacity-30">/</span>
            <span>SERVICES</span>
            <span className="opacity-30">/</span>
            <span className="text-white">AI TEST CASE</span>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black tracking-[calc(-0.04em)] leading-[0.9] mb-8 uppercase">
              Neural <br />
              <span className="text-red-500">Intelligence</span> <br />
              Architectures
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl font-medium tracking-tight max-w-xl mb-12 leading-relaxed"
          >
            We bridge the gap between AI hype and enterprise value. Architecting 
            production-ready intelligence that scales with your ambition through 
            proprietary neural optimization.
          </motion.p>

          {/* Action Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-6"
          >
            <Link
              href="/contact"
              className="group relative px-10 py-5 bg-red-500 text-[#020617] rounded-sm overflow-hidden font-black uppercase tracking-widest text-[12px] shadow-[0_0_30px_rgba(224,16,48,0.3)] hover:scale-105 transition-transform"
            >
              INITIALIZE PROJECT
            </Link>
            
            <div className="flex flex-col justify-center border-l-2 border-red-500/30 pl-6">
              <span className="text-white font-black text-xl leading-none">0.04ms</span>
              <span className="text-red-500 font-black uppercase tracking-widest text-[9px] mt-1">PEAK LATENCY</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Interactive 3D/Neural Mesh */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="hidden lg:block relative h-full"
        >
          <AITest3D />
        </motion.div>
      </div>

      {/* Decorative Bottom Shadow */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020617] to-transparent z-10" />
    </section>
  );
}

