'use client';
import React from 'react';
import { motion } from 'motion/react';

interface TestimonialData {
  quote: string;
  name: string;
  role: string;
  company: string;
  imageSrc: string;
}

interface CloudTestimonialProps {
  testimonial: TestimonialData;
}

export default function CloudTestimonial({ testimonial }: CloudTestimonialProps) {
  return (
    <motion.section 
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full bg-white z-20 -mt-10 md:-mt-20 rounded-t-[40px] md:rounded-t-[60px] shadow-[0_-20px_40px_rgba(0,0,0,0.15)]"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          {/* Quotation mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#e01030] text-8xl md:text-9xl font-serif leading-none mb-6 select-none"
          >
            &ldquo;
          </motion.div>

          {/* Quote text */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xl md:text-2xl lg:text-3xl text-[#0F172A] leading-[1.4] font-medium mb-10"
          >
            {testimonial.quote}
          </motion.blockquote>

          {/* Author */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-5"
          >
            {/* Photo */}
            <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-200 border-2 border-white shadow-md shrink-0">
              <img
                src={testimonial.imageSrc}
                alt={testimonial.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Name + Role */}
            <div>
              <span className="block text-[#0F172A] text-base font-bold tracking-tight">
                {testimonial.name}
              </span>
              <span className="block text-slate-500 text-sm font-medium">
                {testimonial.role}, {testimonial.company}
              </span>
            </div>

            {/* Decorative line */}
            <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent ml-4" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
