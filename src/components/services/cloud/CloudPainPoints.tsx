'use client';
import React from 'react';
import { motion } from 'motion/react';
import { DollarSign, Server, ShieldAlert, AlertCircle } from 'lucide-react';

interface PainPoint {
  title: string;
  desc: string;
  icon: string;
}

interface CloudPainPointsProps {
  sectionLabel: string;
  headline: string;
  subline: string;
  points: PainPoint[];
}

const iconMap: Record<string, React.ReactNode> = {
  DollarSign: <DollarSign className="w-6 h-6" />,
  Server: <Server className="w-6 h-6" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6" />,
};

function getIcon(iconName: string): React.ReactNode {
  return iconMap[iconName] ?? <AlertCircle className="w-6 h-6" />;
}

export default function CloudPainPoints({
  sectionLabel,
  headline,
  subline,
  points,
}: CloudPainPointsProps) {
  return (
    <motion.section 
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className="relative w-full bg-[#0B0F19] overflow-hidden z-20 -mt-10 md:-mt-20 rounded-t-[40px] md:rounded-t-[60px] shadow-[0_-20px_40px_rgba(0,0,0,0.3)]"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/services/cloud/problem_bg_cloud.png"
          alt="Dark abstract infrastructure backdrop conveying technical complexity and risk"
          className="w-full h-full object-cover opacity-60"
          loading="lazy"
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0B0F19] via-[#0B0F19]/40 to-[#0B0F19]" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-[#e01030] text-[10px] font-black tracking-[0.25em] uppercase mb-4"
          >
            <span className="w-8 h-px bg-[#e01030]" />
            {sectionLabel}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mb-6"
          >
            {headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/50 leading-relaxed font-medium"
          >
            {subline}
          </motion.p>
        </div>

        {/* Pain point cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {points.map((point, idx) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 * idx }}
              className="group relative bg-[#0B0F19]/60 border border-white/5 rounded-2xl p-8 lg:p-10 backdrop-blur-md hover:bg-white/[0.03] hover:border-white/20 transition-all duration-500 overflow-hidden shadow-lg"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#e01030]/0 to-[#4f46e5]/0 group-hover:from-[#e01030]/5 group-hover:to-[#4f46e5]/5 transition-colors duration-500 z-0 pointer-events-none" />

              {/* Icon */}
              <div className="relative z-10 w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#e01030] group-hover:bg-[#e01030]/10 group-hover:border-[#e01030]/20 group-hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(224,16,48,0.1)] group-hover:shadow-[0_0_20px_rgba(224,16,48,0.3)]">
                {getIcon(point.icon)}
              </div>

              {/* Content */}
              <h3 className="relative z-10 text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#e01030] transition-colors duration-300">
                {point.title}
              </h3>
              <p className="relative z-10 text-white/60 text-sm leading-relaxed font-medium group-hover:text-white/80 transition-colors duration-300">
                {point.desc}
              </p>

              {/* Bottom accent line â€” appears on hover */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#e01030]/0 to-transparent group-hover:via-[#e01030]/60 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

