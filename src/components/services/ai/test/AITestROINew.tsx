'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function AITestROINew() {
  const [scale, setScale] = useState(50);

  return (
    <section className="py-32 bg-[#020617] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(rgba(224,16,48,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(224,16,48,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="flex flex-col items-start">
            <span className="text-red-500 text-[11px] font-black uppercase tracking-[0.4em] mb-6">
              Economic Impact
            </span>
            <h2 className="text-white text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.9] uppercase">
              The ROI of <br />
              <span className="text-red-500">Autonomous</span> <br />
              Operations
            </h2>
            <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-xl">
              Our neural architectures don't just solve problemsâ€”they reshape 
              your economic bottom line with predictable, scalable yield metrics.
            </p>
          </div>

          <div className="glass-card-dark p-8 md:p-12 rounded-[2rem] border-red-500/20 glow-cyan">
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[10px] font-black tracking-widest text-red-500 uppercase">Live Simulation</span>
              </div>
              <span className="text-[10px] font-black tracking-widest text-slate-500 uppercase">Model: v4.2-Neural</span>
            </div>

            <div className="space-y-12">
              {/* ROI Slider */}
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <span className="text-white text-sm font-black uppercase tracking-wider">Deployment Scale</span>
                  <span className="text-red-500 text-2xl font-black">{scale}%</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={scale} 
                  onChange={(e) => setScale(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-full appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8">
                <div className="p-6 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest block mb-2">Cost Reduction</span>
                  <motion.span 
                    key={scale}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-white text-3xl font-black"
                  >
                    {Math.round(scale * 0.4)}%
                  </motion.span>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest block mb-2">Process Velocity</span>
                  <motion.span 
                    key={scale}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-white text-3xl font-black"
                  >
                    {Math.round(scale * 0.85)}x
                  </motion.span>
                </div>
              </div>

              <button className="w-full py-5 bg-transparent border border-red-500/30 text-red-500 rounded-sm font-black uppercase tracking-widest text-[11px] hover:bg-red-500/10 transition-colors">
                DOWNLOAD FISCAL IMPACT REPORT
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

