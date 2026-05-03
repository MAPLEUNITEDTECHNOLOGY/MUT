'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Target } from 'lucide-react';

const cards = [
  {
    icon: <Target className="text-white" />,
    title: "Precision Objective",
    description: "Aligning AI capabilities with core business outcomes, moving beyond experimentation to absolute utility.",
    color: "bg-white/[0.03]"
  },
  {
    icon: <Zap className="text-white" />,
    title: "Velocity First",
    description: "Deploying high-frequency iterations that compound value at the speed of current market evolution.",
    color: "bg-white/[0.05]"
  },
  {
    icon: <Shield className="text-white" />,
    title: "Sovereign Security",
    description: "Architecting systems where data integrity and model sovereignty are non-negotiable foundations.",
    color: "bg-white/[0.08]"
  }
];

export default function AITestStart() {
  return (
    <section className="bg-black py-32 md:py-64 font-body">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="grid lg:grid-cols-2 gap-24 md:gap-32 items-center">
          
          <div className="space-y-12">
            <div className="flex items-center gap-3 animate-blur-fade-up">
              <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_white]" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40">The Baseline</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-light tracking-tight text-white leading-[0.9]">
              Beyond <br />
              <span className="italic font-serif text-white/90">Automation.</span>
            </h2>

            <p className="text-white/40 text-xl font-light max-w-xl leading-relaxed">
              True transformation isn't about replacing human effort—it's about removing the architectural friction that limits human potential.
            </p>

            <div className="pt-8 border-t border-white/5">
              <div className="text-4xl font-serif italic text-white/80">98%</div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/20 mt-2">Implementation Success Rate</p>
            </div>
          </div>

          <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 100, rotate: 5 }}
                whileInView={{ 
                  opacity: 1, 
                  x: idx * 20, 
                  y: idx * -20,
                  rotate: idx * -2,
                  zIndex: cards.length - idx 
                }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.2, ease: "easeOut" }}
                className={`absolute w-full max-w-[400px] p-8 md:p-12 rounded-[40px] border border-white/10 liquid-glass-strong ${card.color} shadow-2xl backdrop-blur-xl group hover:border-white/30 transition-colors`}
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:bg-white/10 transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-light text-white mb-6">{card.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-light group-hover:text-white/60 transition-colors">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
