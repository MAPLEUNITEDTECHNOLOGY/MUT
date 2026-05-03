'use client';
import React from 'react';
import { motion } from 'motion/react';

interface ProcessStep {
  number: string;
  title: string;
  desc: string;
  imageSrc: string;
}

interface CloudProcessProps {
  sectionLabel: string;
  headline: string;
  steps: ProcessStep[];
}

export default function CloudProcess({
  sectionLabel,
  headline,
  steps,
}: CloudProcessProps) {
  return (
    <motion.section 
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className="relative w-full bg-[#0B0F19] z-20 -mt-10 md:-mt-20 rounded-t-[40px] md:rounded-t-[60px] shadow-[0_-20px_40px_rgba(0,0,0,0.3)] border-t border-white/5"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
        {/* Section header */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-[#22d3ee] text-[10px] font-black tracking-[0.25em] uppercase mb-4"
          >
            <span className="w-8 h-px bg-[#22d3ee]/60" />
            {sectionLabel}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]"
          >
            {headline}
          </motion.h2>
        </div>

        {/* Timeline steps */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-[20px] md:left-[29px] top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative pl-14 md:pl-20 group"
                >
                  {/* Number circle on the timeline */}
                  <div className="absolute left-0 md:left-[5px] top-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0B0F19] border-2 border-white/20 flex items-center justify-center z-10 group-hover:border-[#22d3ee] transition-colors duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                    <span className="text-[#22d3ee] text-xs md:text-sm font-black">
                      {step.number}
                    </span>
                  </div>

                  {/* Content grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Text */}
                    <div className={`lg:col-span-7 ${!isEven ? 'lg:order-2' : ''}`}>
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3 group-hover:text-[#22d3ee] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-white/60 text-[15px] leading-relaxed font-medium max-w-lg">
                        {step.desc}
                      </p>
                    </div>

                    {/* Image */}
                    <div className={`lg:col-span-5 ${!isEven ? 'lg:order-1' : ''}`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                        className="relative overflow-hidden rounded-2xl aspect-[16/10] border border-white/10 shadow-2xl"
                      >
                        <img
                          src={step.imageSrc}
                          alt={step.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0F19]/60 via-transparent to-transparent pointer-events-none" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
