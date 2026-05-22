'use client';
import React from 'react';
import { motion } from 'motion/react';

interface TestimonialData { quote: string; name: string; role: string; company: string; imageSrc: string; }

export default function NetTelecomTestimonial({ testimonial }: { testimonial: TestimonialData }) {
  return (
    <section className="relative w-full bg-[#faf8ff] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-4xl mx-auto text-center">
          <span className="text-[#e01030] text-[10px] font-black tracking-[0.25em] uppercase mb-6 block">Client Testimonial</span>
          <p className="text-2xl md:text-3xl lg:text-4xl font-black text-[#0f1a37] leading-[1.2] mb-10 tracking-tight">&ldquo;{testimonial.quote}&rdquo;</p>
          <div className="flex items-center justify-center gap-4">
            <img src={testimonial.imageSrc} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover border-2 border-[#e01030]/20" loading="lazy" />
            <div className="text-left">
              <span className="block text-[#0f1a37] font-black">{testimonial.name}</span>
              <span className="block text-slate-500 text-sm font-medium">{testimonial.role}, {testimonial.company}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
