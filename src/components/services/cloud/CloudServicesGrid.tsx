'use client';
import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ServiceItem {
  title: string;
  desc: string;
  imageSrc: string;
  tag?: string;
}

interface CloudServicesGridProps {
  services: ServiceItem[];
}

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover="hover"
      variants={{
        hover: { y: -8, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
      }}
      className="group relative bg-[#0B0F19] liquid-glass border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col cursor-pointer shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_20px_60px_-15px_rgba(34,211,238,0.15)] isolate"
    >
      {/* ── Image area: fixed 240px ── */}
      <div className="relative w-full h-[240px] overflow-hidden shrink-0 z-10">
        <motion.img
          src={service.imageSrc}
          alt={service.title}
          className="w-full h-full object-cover origin-center"
          loading="lazy"
          variants={{
            hover: { scale: 1.05, filter: "brightness(1.1)" }
          }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Gradient overlay — darkens bottom, tint appears on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/40 to-transparent pointer-events-none" />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-indigo-500/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        />

        {/* Tag badge — AI Page Style */}
        {service.tag && (
          <motion.div 
            className="absolute top-6 left-6 z-20"
            variants={{ hover: { y: -2, x: 2 } }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400 bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20 backdrop-blur-md">
              {service.tag}
            </div>
          </motion.div>
        )}
      </div>

      {/* ── Content ── */}
      <div className="p-6 lg:p-8 flex flex-col flex-1 z-10 relative">
        <h3 className="text-xl md:text-2xl font-black text-white mb-4 leading-[1.1] tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed font-medium flex-1 group-hover:text-slate-300 transition-colors duration-300">
          {service.desc}
        </p>

        {/* Arrow link — AI Page Button Style */}
        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-cyan-400 transition-colors duration-300">
            Explore Details
          </span>
          
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#020617] transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CloudServicesGrid({ services }: CloudServicesGridProps) {
  return (
    <section className="relative w-full bg-[#020617] overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-[#22d3ee] text-[10px] font-black tracking-[0.25em] uppercase mb-4"
          >
            <span className="w-8 h-px bg-[#22d3ee]/60" />
            Enterprise Cloud Capabilities
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mb-6"
          >
            End-to-End Cloud Services.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
              One Partner.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/40 leading-relaxed font-medium max-w-2xl"
          >
            From strategy to 24/7 operations — every capability you need to build, migrate,
            secure, and optimize your cloud environment.
          </motion.p>
        </div>

        {/* Services grid — 4 cols on lg+, 2 on md, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <Link key={service.title} href="/contact?service=cloud" className="block">
              <ServiceCard service={service} index={idx} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
