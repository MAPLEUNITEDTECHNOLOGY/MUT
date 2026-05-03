'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import BlurText from '@/components/ui/BlurText';

export default function AITestFinalCTA() {
  return (
    <section className="relative w-full py-32 md:py-64 overflow-hidden bg-black flex items-center justify-center font-body">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30 grayscale"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        
        <div className="max-w-5xl mx-auto text-center space-y-16">
          
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="px-6 py-2 rounded-full liquid-glass border border-white/10 flex items-center gap-3">
                <Sparkles size={14} className="text-white/60" />
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/60">Final Protocol</span>
              </div>
            </motion.div>

            <h2 className="text-6xl md:text-[140px] font-light tracking-tighter text-white leading-[0.85] py-8">
              <BlurText 
                text="TRANSFORM" 
                delay={0.2}
                className="block"
              />
              <span className="italic font-serif text-white/90">
                <BlurText 
                  text="EVERYTHING." 
                  delay={0.6}
                  className="block mt-4"
                />
              </span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="flex flex-col md:flex-row justify-center items-center gap-8"
          >
            <button className="group relative px-16 py-8 bg-white text-black font-bold tracking-[0.3em] uppercase rounded-full overflow-hidden transition-all hover:scale-105 active:scale-[0.98] shadow-[0_0_80px_rgba(255,255,255,0.25)]">
              <span className="relative z-10 flex items-center gap-4">
                Execute Strategy
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
              </span>
              <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
            
            <button className="px-16 py-8 liquid-glass-strong rounded-full font-bold tracking-[0.3em] uppercase text-white/80 hover:text-white transition-all hover:bg-white/5 border border-white/10">
              Technical Audit
            </button>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4 }}
            className="text-white/20 text-xs font-bold tracking-[0.5em] uppercase"
          >
            Onboarding Q3 / 2026 Partners
          </motion.p>
        </div>

      </div>

      {/* Decorative Orbs */}
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
