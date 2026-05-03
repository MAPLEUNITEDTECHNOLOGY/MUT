'use client';
import { motion } from 'motion/react';

const stats = [
  { value: "$500M+", label: "Value Generated" },
  { value: "10M+", label: "Hours Saved" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "Zero", label: "Data Leaks" },
  { value: "< 10ms", label: "Inference Latency" },
  { value: "50x", label: "ROI Average" },
  { value: "SOC 2", label: "Type II Certified" },
];

export default function StatsTicker() {
  return (
    <div className="py-8 bg-[#020617] border-y border-white/5 overflow-hidden flex relative z-10">
       <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
       <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />
       
       <motion.div
         className="flex gap-16 md:gap-32 pr-16 md:pr-32 w-max"
         animate={{ x: ["0%", "-50%"] }}
         transition={{
           duration: 40,
           ease: "linear",
           repeat: Infinity,
         }}
       >
          {[...stats, ...stats].map((stat, idx) => (
             <div key={idx} className="flex items-baseline gap-3 whitespace-nowrap">
                <span className="text-2xl md:text-3xl font-black text-cyan-400 tracking-tighter">{stat.value}</span>
                <span className="text-sm md:text-base font-medium text-slate-400 uppercase tracking-widest">{stat.label}</span>
             </div>
          ))}
       </motion.div>
    </div>
  );
}
