'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface Stat { value: string; suffix: string; label: string; }

function AnimatedCounter({ value, suffix, label }: Stat) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const numericValue = parseFloat(value);
  const isDecimal = value.includes('.');

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        const duration = 2000;
        const start = performance.now();
        const animate = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = eased * numericValue;
          setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [numericValue, isDecimal]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-6 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-sm shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:bg-white/[0.04] transition-colors duration-300">
      <div className="flex items-baseline">
        <span className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter tabular-nums drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">{isDecimal ? count.toFixed(1) : count}</span>
        <span className="text-3xl md:text-4xl lg:text-5xl font-black text-[#e01030] ml-1 tabular-nums drop-shadow-[0_0_10px_rgba(224,16,48,0.5)]">{suffix}</span>
      </div>
      <span className="text-[11px] md:text-xs font-bold text-[#e01030]/80 uppercase tracking-[0.2em] mt-3">{label}</span>
    </div>
  );
}

export default function ManagedTrustStats({ stats }: { stats: Stat[] }) {
  return (
    <motion.section initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8 }} className="relative w-full bg-[#0B0F19] border-b border-white/5 z-20 -mt-10 md:-mt-20 rounded-t-[40px] md:rounded-t-[60px] shadow-[0_-20px_40px_rgba(0,0,0,0.3)]">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-28 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#e01030]/5 rounded-full blur-[120px] pointer-events-none" />
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col items-center text-center mb-16 relative z-10">
          <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#e01030] mb-3 flex items-center gap-2">
            <span className="w-6 h-px bg-[#e01030]/60" />Trusted by Enterprise Leaders<span className="w-6 h-px bg-[#e01030]/60" />
          </span>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto relative z-10">
          {stats.map((stat, idx) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }}>
              <AnimatedCounter {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

