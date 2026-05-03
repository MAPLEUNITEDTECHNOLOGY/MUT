'use client';
import React from 'react';
import { motion } from 'motion/react';

interface TechItem {
  name: string;
  category: string;
}

interface CloudTechStackProps {
  techStack: TechItem[];
}

// Group tech items by category
function groupByCategory(items: TechItem[]): Record<string, TechItem[]> {
  return items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, TechItem[]>);
}

export default function CloudTechStack({ techStack }: CloudTechStackProps) {
  const grouped = groupByCategory(techStack);
  const categories = Object.keys(grouped);

  return (
    <motion.section 
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full bg-[#020617] z-20 py-24 md:py-32 overflow-hidden border-t border-white/5"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.05)_0%,transparent_70%)] pointer-events-none blur-3xl z-0" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-cyan-400 text-[10px] font-black tracking-[0.25em] uppercase mb-4"
          >
            <span className="w-8 h-px bg-cyan-400/60" />
            Technology Ecosystem
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mb-6"
          >
            Tools We Deploy{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
              Every Day
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-slate-400 leading-relaxed font-medium max-w-2xl"
          >
            We're certified across every major cloud provider and DevOps platform. No vendor lock-in — just the right tool for the job.
          </motion.p>
        </div>

        {/* Category groups */}
        <div className="space-y-10 md:space-y-14 relative">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/20 via-indigo-500/10 to-transparent hidden md:block" />

          {categories.map((category, catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="relative md:pl-10"
            >
              <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-cyan-400 hidden md:block shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              
              {/* Category label */}
              <h3 className="text-[10px] md:text-[11px] font-black tracking-[0.25em] uppercase text-slate-400 mb-5 flex items-center gap-3">
                <span className="w-6 h-px bg-white/10 md:hidden" />
                {category}
              </h3>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-3">
                {grouped[category].map((tech, idx) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIdx * 0.1 + idx * 0.04 }}
                    whileHover={{ scale: 1.05, y: -2, transition: { duration: 0.2 } }}
                    className="bg-[#0B0F19] border border-white/10 hover:border-cyan-400/40 hover:bg-white/[0.02] shadow-lg rounded-xl px-5 py-3 cursor-default transition-all duration-300"
                  >
                    <span className="text-[13px] md:text-sm font-bold text-slate-200 tracking-tight group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
