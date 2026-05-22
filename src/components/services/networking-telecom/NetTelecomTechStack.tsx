'use client';
import React from 'react';
import { motion } from 'motion/react';

interface Tech { name: string; category: string; }

export default function NetTelecomTechStack({ techStack }: { techStack: Tech[] }) {
  return (
    <section className="relative w-full bg-[#faf8ff] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <div className="max-w-3xl mb-16">
          <motion.span initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-[#e01030] text-[10px] font-black tracking-[0.25em] uppercase mb-4">
            <span className="w-8 h-px bg-[#e01030]/60" />Technology Stack
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f1a37] tracking-tight leading-[1.05] mb-6">Platforms We Deploy & Operate Daily</motion.h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techStack.map((tech, idx) => (
            <motion.div key={tech.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }} className="group bg-white border border-gray-100 rounded-xl p-6 text-center hover:border-[#e01030]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <span className="block text-sm font-black text-[#0f1a37] group-hover:text-[#e01030] transition-colors">{tech.name}</span>
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mt-2">{tech.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
