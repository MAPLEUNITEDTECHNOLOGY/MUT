'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import Image from 'next/image';

const steps = [
  {
    title: "Strategic Assessment",
    description: "Multi-layered audit of data infrastructure to identify high-impact, low-latency AI use cases that bridge strategic gaps.",
  },
  {
    title: "Architecture & Prototyping",
    description: "Engineering localized MVPs in isolated environments to validate model fidelity and performance against real-world datasets.",
  },
  {
    title: "Enterprise Deployment",
    description: "Production-grade migration with full-stack integration into legacy ERP/CRM systems, ensuring zero-downtime transition.",
  },
  {
    title: "Continuous MLOps",
    description: "Algorithmic refinement and automated retraining pipelines to ensure system accuracy evolves at the speed of your market.",
  }
];

export default function DeliveryProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Glowing light position
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative bg-[#f8fafc] py-24 lg:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Header Section (Sticky Left) */}
          <div className="lg:w-1/2 w-full lg:sticky lg:top-24 flex flex-col px-4 lg:px-0">
            <div className="flex flex-col w-full max-w-xl mx-auto lg:mx-0">
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-[9px] font-bold tracking-[0.3em] uppercase text-cyan-600 block mb-1"
              >
                The Roadmap to Autonomy
              </motion.span>
              <h2 className="text-[#020617] text-3xl md:text-[2.5rem] font-black tracking-tighter mb-2 lg:mb-3 leading-[1.1]">
                From Pilot <br />
                <span className="text-cyan-600">to Global Production.</span>
              </h2>
              
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 mb-2 lg:mb-3 shadow-lg shrink-0">
                <Image 
                  src="/images/ai/global-ai.jpg" 
                  alt="Global Deployment" 
                  fill 
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc] via-transparent to-transparent z-10 opacity-20" />
              </div>

              <div className="flex items-center gap-3 p-3 lg:p-4 glass-card-light rounded-xl border border-slate-200/50 shrink-0 bg-white/40">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm border border-slate-100 shrink-0">
                  <span className="text-xl font-black text-[#020617]">90</span>
                </div>
                <div>
                  <p className="text-[8px] font-black uppercase tracking-widest text-cyan-600">Guarantee</p>
                  <p className="text-xs font-bold text-[#020617]">Days to Live Deployment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section (Scrollable Right) */}
          <div className="lg:w-1/2 relative lg:py-32 py-12 w-full">
            <div ref={containerRef} className="relative h-full w-full">
              {/* Background Track */}
              <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-[4px] bg-slate-200 rounded-full overflow-hidden" />
              
              {/* Animated Progress Line */}
              <motion.div 
                style={{ scaleY, originY: 0 }}
                className="absolute left-6 lg:left-8 top-0 bottom-0 w-[4px] bg-gradient-to-b from-cyan-400 via-cyan-500 to-indigo-500 z-10 rounded-full"
              />

              {/* Glowing Moving Light */}
              <motion.div 
                style={{ top: glowY }}
                className="absolute left-6 lg:left-8 w-8 h-8 -translate-x-1/2 -mt-4 bg-cyan-400 rounded-full blur-xl z-20 opacity-60"
              />

              <div className="space-y-16 lg:space-y-32">
                {steps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="relative flex gap-10 lg:gap-16 group"
                  >
                    {/* Step Marker */}
                    <div className="relative z-30 flex-shrink-0 mt-4 interactive">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-xl flex items-center justify-center group-hover:border-cyan-400 transition-colors duration-500 overflow-hidden">
                        <span className="text-lg font-black text-[#020617] group-hover:text-cyan-600 transition-colors">0{idx + 1}</span>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="glass-card-light p-8 lg:p-10 rounded-[2rem] lg:rounded-[32px] border-glow flex-1 interactive bg-white/50 backdrop-blur-xl">
                      <h3 className="text-[#020617] text-xl lg:text-2xl font-black mb-4 lg:mb-6 tracking-tight uppercase group-hover:text-cyan-600 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 font-medium leading-relaxed text-base lg:text-lg">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
