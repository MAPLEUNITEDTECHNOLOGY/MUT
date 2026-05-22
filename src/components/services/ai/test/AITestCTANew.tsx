'use client';
import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function AITestCTANew() {
  return (
    <section className="py-40 bg-white relative overflow-hidden">
      {/* Decorative Warp Effect */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-50 skew-x-[-20deg] translate-x-20 z-0" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <span className="text-red-700 text-[11px] font-black uppercase tracking-[0.5em] mb-10">
            Next Evolution
          </span>
          <h2 className="text-[#020617] text-5xl md:text-8xl font-black tracking-[calc(-0.04em)] leading-[0.8] mb-16 uppercase">
            Initialize <br />
            <span className="text-red-700">Transformation</span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <Link
              href="/contact"
              className="px-12 py-6 bg-[#020617] text-white rounded-sm font-black uppercase tracking-widest text-[13px] hover:scale-105 transition-transform shadow-2xl"
            >
              BOOK TECHNICAL AUDIT
            </Link>
            
            <Link
              href="/services"
              className="px-12 py-6 bg-transparent border-2 border-[#020617] text-[#020617] rounded-sm font-black uppercase tracking-widest text-[13px] hover:bg-[#020617] hover:text-white transition-all"
            >
              EXPLORE ECOSYSTEM
            </Link>
          </div>

          <p className="mt-16 text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
            ISO 27001 Certified Implementation Partner
          </p>
        </motion.div>
      </div>
    </section>
  );
}

