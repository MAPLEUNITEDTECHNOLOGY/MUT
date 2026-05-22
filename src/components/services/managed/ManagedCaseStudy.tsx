'use client';
import React from 'react';
import { motion } from 'motion/react';

interface Outcome { metric: string; label: string; }
interface TestimonialRef { quote: string; name: string; role: string; company: string; }

interface ManagedCaseStudyProps {
  label: string; headline: string; industry: string;
  challenge: string; solution: string; outcome: Outcome[];
  imageSrc: string; testimonial: TestimonialRef;
}

export default function ManagedCaseStudy({ label, headline, industry, challenge, solution, outcome, imageSrc, testimonial }: ManagedCaseStudyProps) {
  return (
    <section className="relative w-full bg-[#0B0F19] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={imageSrc} alt="" className="w-full h-full object-cover opacity-20" loading="lazy" />
        <div className="absolute inset-0 bg-[#0B0F19]/80" />
      </div>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32 relative z-10">
        <motion.span initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-[#e01030] text-[10px] font-black tracking-[0.25em] uppercase mb-4">
          <span className="w-8 h-px bg-[#e01030]/60" />{label}
        </motion.span>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mb-8 max-w-4xl">{headline}</motion.h2>
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="text-[#e01030]/70 text-sm font-bold uppercase tracking-[0.2em]">{industry}</motion.span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <h4 className="text-white font-black text-lg mb-3 uppercase tracking-[0.2em] text-[11px]">The Challenge</h4>
            <p className="text-white/50 leading-relaxed font-medium mb-8">{challenge}</p>
            <h4 className="text-white font-black text-lg mb-3 uppercase tracking-[0.2em] text-[11px]">Our Solution</h4>
            <p className="text-white/50 leading-relaxed font-medium">{solution}</p>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-6 mb-10">
              {outcome.map((o, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.15 }} className="text-center p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
                  <span className="block text-3xl md:text-4xl font-black text-[#e01030] tracking-tighter mb-1">{o.metric}</span>
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.15em]">{o.label}</span>
                </motion.div>
              ))}
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <p className="text-white/80 text-lg leading-relaxed font-medium italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
              <div>
                <span className="block text-white font-black text-sm">{testimonial.name}</span>
                <span className="block text-white/40 text-xs font-medium">{testimonial.role}, {testimonial.company}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

