'use client';

import React from 'react';
import { motion } from 'motion/react';

const steps = [
  {
    title: "Strategic Discovery",
    description: "High-bandwidth diagnostics to identify architectural bottlenecks and high-impact AI opportunities within your current workflows.",
    phase: "01",
    label: "Discovery"
  },
  {
    title: "Architecture Blueprinting",
    description: "Engineering the multi-agent coordination systems, secure data orchestration, and custom model selection tailored to your scale.",
    phase: "02",
    label: "Blueprint"
  },
  {
    title: "Rapid Implementation",
    description: "Agile, high-velocity development cycles to build, validate, and integrate production-ready AI solutions into your environment.",
    phase: "03",
    label: "Deployment"
  },
  {
    title: "Continuous Evolution",
    description: "Real-time monitoring, iterative fine-tuning, and proactive optimization to ensure your AI assets get smarter every day.",
    phase: "04",
    label: "Optimization"
  }
];

export default function AITestProcess() {
  return (
    <section className="bg-black py-32 md:py-64 font-body overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-32 md:mb-48">
          <div className="flex items-center gap-3 mb-8 animate-blur-fade-up">
            <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_white]" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40">The Methodology</span>
          </div>
          <h2 className="text-6xl md:text-9xl font-light tracking-tight text-white leading-[0.85] mb-12">
            Engineering <br />
            <span className="italic font-serif text-white/90">Predictability.</span>
          </h2>
          <p className="text-white/40 text-xl md:text-2xl font-light max-w-2xl leading-relaxed">
            Our deployment framework is a disciplined orchestration of strategy, engineering, and iterative refinement.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid lg:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group relative bg-black p-12 md:p-20 flex flex-col justify-between min-h-[450px] overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-white/[0.05] transition-colors duration-700" />
              
              <div className="relative z-10 space-y-12">
                <div className="flex justify-between items-start">
                  <span className="text-7xl md:text-9xl font-serif italic text-white/5 group-hover:text-white/10 transition-colors duration-700 leading-none">
                    {step.phase}
                  </span>
                  <div className="px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 group-hover:border-white/20 transition-colors">
                    {step.label}
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-light text-white tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-white/40 text-lg font-light leading-relaxed max-w-md group-hover:text-white/60 transition-colors">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Decorative Line */}
              <div className="absolute bottom-0 left-0 h-1 bg-white/10 group-hover:bg-white/40 transition-all duration-700 w-0 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
