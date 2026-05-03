'use client';
import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

const solutions = [
  {
    title: "Intelligent Process Automation",
    image: "/images/ai/pillars/ipa.png",
    challenge: "Manual operational friction causing scalability bottlenecks.",
    resolution: "Cognitive AI engines handling judgment-based tasks at scale.",
    roi: "40% OPEX Reduction",
    size: "lg"
  },
  {
    title: "Conversational AI",
    image: "/images/ai/pillars/conv-ai.png",
    roi: "3.5x CX Velocity",
    size: "md"
  },
  {
    title: "Enterprise Workflow",
    image: "/images/ai/pillars/workflow.png",
    roi: "25% Efficiency",
    size: "sm"
  },
  {
    title: "Predictive Analytics",
    image: "/images/ai/pillars/predictive.png",
    roi: "15% Cost Mitigation",
    size: "sm"
  },
  {
    title: "Custom AI Models",
    image: "/images/ai/pillars/models.png",
    challenge: "Security mandates failing off-the-shelf models.",
    resolution: "Proprietary LLMs fine-tuned for industry data.",
    roi: "99.9% Fidelity",
    size: "md"
  },
  {
    title: "Document Intelligence",
    image: "/images/ai/pillars/doc-intel.png",
    roi: "500% Speed",
    size: "sm"
  }
];

export default function AITestSolutionsGrid() {
  return (
    <section className="py-32 bg-[#f8fafc] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col items-start mb-20">
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-cyan-600 mb-6 block">
            Capabilities Ecosystem
          </span>
          <h2 className="text-[#020617] text-4xl md:text-6xl font-black tracking-tighter mb-8 max-w-3xl leading-[0.9]">
            Architecting specialized <br />
            <span className="text-cyan-600 underline decoration-cyan-400/30">intelligence layers.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 h-[1000px] md:h-[800px]">
          {/* Large Card 1 */}
          <BentoCard item={solutions[0]} className="md:col-span-4 lg:col-span-3 lg:row-span-2" />
          
          {/* Medium Card 1 */}
          <BentoCard item={solutions[4]} className="md:col-span-2 lg:col-span-3 lg:row-span-1" />
          
          {/* Small Cards */}
          <BentoCard item={solutions[1]} className="md:col-span-2 lg:col-span-2 lg:row-span-1" />
          <BentoCard item={solutions[2]} className="md:col-span-2 lg:col-span-1 lg:row-span-1" />
          <BentoCard item={solutions[3]} className="md:col-span-2 lg:col-span-2 lg:row-span-1" />
          <BentoCard item={solutions[5]} className="md:col-span-2 lg:col-span-1 lg:row-span-1" />
        </div>
      </div>
    </section>
  );
}

function BentoCard({ item, className }: { item: any, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`glass-card-light rounded-3xl p-8 flex flex-col relative overflow-hidden group cursor-pointer hover:border-cyan-400/40 transition-colors duration-500 ${className}`}
    >
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-start justify-between mb-8">
          <div className="relative w-16 h-16 group-hover:scale-110 transition-transform duration-500">
            <Image src={item.image} alt={item.title} fill className="object-contain" />
          </div>
          <span className="text-[10px] font-black text-cyan-600 uppercase tracking-widest bg-cyan-50 px-3 py-1.5 rounded-full">
            {item.roi}
          </span>
        </div>

        <h3 className="text-[#020617] text-2xl font-black mb-4 leading-tight">
          {item.title}
        </h3>

        {item.challenge && (
          <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm mt-auto">
            {item.challenge}
          </p>
        )}
      </div>

      {/* Decorative Grid Overlay on Hover */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  );
}
