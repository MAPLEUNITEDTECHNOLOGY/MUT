'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Zap, BarChart3, Database, ArrowRight } from 'lucide-react';

const pillars = [
  {
    title: "Intelligent Automation",
    description: "Beyond basic scripts. We deploy autonomous LLM agents that handle complex decision-making, multi-step reasoning, and cross-platform integration to liberate your workforce.",
    icon: Zap,
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4",
    tag: "Efficiency"
  },
  {
    title: "Predictive Analytics",
    description: "Don't just react to data—anticipate it. Our custom statistical models identify hidden patterns in your market behavior, giving you a crystal ball for forecasting and risk mitigation.",
    icon: BarChart3,
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4",
    tag: "Intelligence"
  },
  {
    title: "Generative Infrastructure",
    description: "Robust, production-ready AI backends designed for scale. From model quantizing to high-throughput serving, we build the engine that powers your future-proof applications.",
    icon: Database,
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4",
    tag: "Scalability"
  }
];

export default function AITestPillars() {
  return (
    <section className="bg-black py-24 md:py-48 font-body">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Section Header */}
        <div className="mb-32">
          <div className="flex items-center gap-3 mb-8 animate-blur-fade-up">
            <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_white]" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40">Core Pillars</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-light tracking-tight text-white mb-8 leading-none">
            The foundation of <br />
            <span className="italic font-serif">Enterprise Value.</span>
          </h2>
          <p className="text-white/40 text-xl font-light max-w-xl">
            We don't just build features; we architect strategic assets that drive structural growth.
          </p>
        </div>

        {/* Features Chess Layout */}
        <div className="space-y-40 md:space-y-64">
          {pillars.map((pillar, idx) => (
            <motion.div 
              key={pillar.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`flex flex-col lg:flex-row items-center gap-16 md:gap-32 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Text Side */}
              <div className="flex-1 space-y-12">
                <div className="liquid-glass-strong w-16 h-16 rounded-3xl flex items-center justify-center border border-white/10 shadow-2xl">
                  <pillar.icon size={28} className="text-white" />
                </div>
                
                <div className="space-y-6">
                  <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/30">{pillar.tag}</span>
                  <h3 className="text-4xl md:text-6xl font-normal tracking-tight text-white leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <button className="group flex items-center gap-3 text-xs font-bold tracking-[0.3em] uppercase text-white/60 hover:text-white transition-all border-b border-white/10 pb-2 hover:border-white">
                  Exploration Details
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Visual Side */}
              <div className="flex-1 w-full aspect-square md:aspect-[4/3] relative rounded-[48px] overflow-hidden liquid-glass border border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] group">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[2s] scale-105 group-hover:scale-100"
                >
                  <source src={pillar.image} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-1000" />
                
                {/* Floating Badge on Image */}
                <div className="absolute bottom-8 left-8 liquid-glass px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white/60">Live Environment v2.4</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
