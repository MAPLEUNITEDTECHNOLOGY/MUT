'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, Users, ArrowUpRight } from 'lucide-react';

export default function AITestROI() {
  const [scale, setScale] = useState(50);
  const [employees, setEmployees] = useState(100);

  const roi = useMemo(() => {
    const savings = employees * (scale / 100) * 45000;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(savings);
  }, [scale, employees]);

  return (
    <section className="bg-black py-24 md:py-48 font-body">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="grid lg:grid-cols-[1fr,450px] gap-16 md:gap-32 items-center">
          
          <div className="space-y-12">
            <div className="flex items-center gap-3 mb-8 animate-blur-fade-up">
              <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_white]" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40">ROI Engine</span>
            </div>
            
            <h2 className="text-5xl md:text-8xl font-light tracking-tight text-white leading-none">
              Economics of <br />
              <span className="italic font-serif text-white/90">Intelligence.</span>
            </h2>

            <p className="text-white/40 text-xl font-light max-w-xl leading-relaxed">
              Precision implementation isn't just about code—it's about capital efficiency. Quantify the structural impact of AI on your bottom line.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/20">
                  <TrendingUp size={18} />
                  <span className="text-xs font-bold tracking-widest uppercase">Efficiency Lift</span>
                </div>
                <div className="text-4xl font-light text-white">400% +</div>
                <p className="text-sm text-white/30 font-light leading-relaxed">
                  Average throughput increase observed across our enterprise deployments.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/20">
                  <Users size={18} />
                  <span className="text-xs font-bold tracking-widest uppercase">Human Liberation</span>
                </div>
                <div className="text-4xl font-light text-white">12,000h</div>
                <p className="text-sm text-white/30 font-light leading-relaxed">
                  Projected annual hours reclaimed from routine operational friction.
                </p>
              </div>
            </div>
          </div>

          {/* ROI Calculator Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="liquid-glass-strong p-8 md:p-12 rounded-[48px] border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)] space-y-10"
          >
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">Enterprise Scale</label>
                  <span className="text-xl font-light text-white">{employees} Employees</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="1000" 
                  step="10"
                  value={employees}
                  onChange={(e) => setEmployees(parseInt(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-white"
                />
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">AI Integration Depth</label>
                  <span className="text-xl font-light text-white">{scale}%</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={scale}
                  onChange={(e) => setScale(parseInt(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-white"
                />
              </div>
            </div>

            <div className="pt-10 border-t border-white/5 space-y-4">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/20 block text-center">Projected Annual Impact</span>
              <AnimatePresence mode="wait">
                <motion.div 
                  key={roi}
                  initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
                  transition={{ duration: 0.4 }}
                  className="text-5xl md:text-7xl font-light text-center text-white italic font-serif tracking-tighter"
                >
                  {roi}
                </motion.div>
              </AnimatePresence>
            </div>

            <button className="w-full py-6 bg-white text-black rounded-full font-bold text-xs tracking-[0.3em] uppercase flex items-center justify-center gap-3 hover:bg-gray-200 transition-all active:scale-95 shadow-2xl">
              Download Audit
              <ArrowUpRight size={16} />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
