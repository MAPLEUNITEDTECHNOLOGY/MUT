'use client';
import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ServiceItem { title: string; desc: string; imageSrc: string; tag?: string; }

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }} whileHover="hover" variants={{ hover: { y: -8, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } } }} className="group relative bg-[#0B0F19] border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col cursor-pointer shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-500 hover:border-red-500/40 hover:shadow-[0_20px_60px_-15px_rgba(224,16,48,0.15)]">
      <div className="relative w-full h-[240px] overflow-hidden shrink-0">
        <motion.img src={service.imageSrc} alt={service.title} className="w-full h-full object-cover origin-center" loading="lazy" variants={{ hover: { scale: 1.05, filter: "brightness(1.1)" } }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/40 to-transparent pointer-events-none" />
        <motion.div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-[#e01030]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        {service.tag && (
          <div className="absolute top-6 left-6 z-20">
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500 bg-red-500/10 px-4 py-2 rounded-full border border-red-500/20 backdrop-blur-md">{service.tag}</div>
          </div>
        )}
      </div>
      <div className="p-6 lg:p-8 flex flex-col flex-1">
        <h3 className="text-xl md:text-2xl font-black text-white mb-4 leading-[1.1] tracking-tight group-hover:text-red-500 transition-colors duration-300">{service.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed font-medium flex-1 group-hover:text-slate-300 transition-colors duration-300">{service.desc}</p>
        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-red-500 transition-colors duration-300">Explore Details</span>
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#020617] transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function NetTelecomServicesGrid({ services }: { services: ServiceItem[] }) {
  return (
    <section className="relative w-full bg-[#020617] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '48px 48px' }} />
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.span initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-[#e01030] text-[10px] font-black tracking-[0.25em] uppercase mb-4">
            <span className="w-8 h-px bg-[#e01030]/60" />Enterprise Networking Capabilities
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mb-6">
            End-to-End Network & Telecom.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-[#e01030]">One Partner.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-white/40 leading-relaxed font-medium max-w-2xl">
            From SD-WAN to unified communications — every capability you need to connect your people, applications, and customers at wire speed.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <Link key={service.title} href="/contact?service=networking-telecom" className="block">
              <ServiceCard service={service} index={idx} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
