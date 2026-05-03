'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Play, Search, User, Star, Clock, Calendar, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import BlurText from '@/components/ui/BlurText';

export default function AITestHero() {
  return (
    <section className="relative w-full h-[100vh] min-h-[800px] overflow-hidden bg-black text-white font-body selection:bg-white/30">
      
      {/* Background Video - Premium CloudFront Stream */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 scale-105 animate-pulse-slow"
        poster="/images/ai/hero-ai.jpg"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4" type="video/mp4" />
      </video>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 z-[1] bg-black/10" />
      <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-black via-black/40 to-transparent z-[2]" />
      <div className="absolute inset-0 z-[3] backdrop-blur-xl blur-mask-bottom pointer-events-none" />

      {/* Navbar - Floating Glass */}
      <nav className="fixed top-6 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-4 animate-blur-fade-up">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 liquid-glass-strong rounded-xl flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,1)]" />
          </div>
          <span className="text-lg font-bold tracking-tighter uppercase font-body">MU Transformation</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-1 liquid-glass rounded-full px-2 py-1.5 border border-white/5">
          {['Solutions', 'Methodology', 'Case Studies', 'Pricing'].map((link) => (
            <a 
              key={link} 
              href="#" 
              className="px-6 py-2 text-[13px] font-medium text-white/50 hover:text-white transition-all rounded-full hover:bg-white/5"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full liquid-glass text-xs font-bold tracking-widest uppercase border border-white/10 hover:bg-white/5 transition-all">
            <Search size={14} />
            <span>Search</span>
          </button>
          <button className="px-6 py-2.5 bg-white text-black rounded-full text-xs font-bold tracking-widest uppercase hover:scale-105 transition-all flex items-center gap-2 shadow-2xl">
            Get Started
            <ArrowUpRight size={14} />
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center z-10 px-8 md:px-16 pt-20">
        <div className="grid lg:grid-cols-[1fr,400px] items-center w-full gap-24">
          
          <div className="max-w-4xl space-y-12">
            {/* Metadata Tag */}
            <div className="flex flex-wrap items-center gap-6 animate-blur-fade-up" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full pl-1.5 pr-5 py-1.5 border border-white/10">
                <div className="bg-white text-black text-[10px] font-black px-2 py-0.5 rounded-full uppercase">Top Firm</div>
                <span className="text-[11px] font-bold tracking-widest uppercase">Enterprise AI Excellence 2026</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-white/40 uppercase">
                <Clock size={14} />
                <span>5 Day Delivery Avg</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[0.85] text-white">
              <BlurText text="Engineering the" className="block" delay={400} />
              <BlurText text="Next Era of" className="block" delay={600} />
              <span className="italic font-serif block mt-4">
                <BlurText text="Intelligence." delay={900} />
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-white/50 max-w-2xl font-light leading-relaxed animate-blur-fade-up" style={{ animationDelay: '1200ms' }}>
              We architect production-ready intelligence that scales. Bridging the gap between AI hype and measurable enterprise value.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6 animate-blur-fade-up" style={{ animationDelay: '1400ms' }}>
              <button className="group relative px-10 py-5 bg-white text-black rounded-full font-bold text-sm tracking-[0.2em] uppercase transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.2)]">
                <span className="relative z-10 flex items-center gap-3">
                  Start Transformation
                  <ArrowUpRight size={18} />
                </span>
              </button>
              <button className="px-10 py-5 liquid-glass-strong rounded-full font-bold text-sm tracking-[0.2em] uppercase text-white hover:bg-white/5 transition-all">
                Watch Methodology
              </button>
            </div>
          </div>

          {/* Right Side Visual/Metric (Desktop) */}
          <div className="hidden lg:block animate-blur-fade-up" style={{ animationDelay: '1600ms' }}>
            <div className="liquid-glass-strong p-10 rounded-[48px] border border-white/10 space-y-12">
              <div className="space-y-4">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/30 block">Current Capacity</span>
                <div className="text-6xl font-light text-white italic font-serif">94%</div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '94%' }}
                    transition={{ duration: 2, delay: 2, ease: "circOut" }}
                    className="h-full bg-white shadow-[0_0_10px_white]"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                {[
                  { label: "Deployment Velocity", val: "2.4x" },
                  { label: "Token Efficiency", val: "99.9%" }
                ].map((m, i) => (
                  <div key={i} className="flex justify-between items-center border-t border-white/5 pt-4">
                    <span className="text-[11px] font-bold tracking-widest text-white/40 uppercase">{m.label}</span>
                    <span className="text-xl font-light">{m.val}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full liquid-glass flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group">
                  <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                </div>
                <div className="w-12 h-12 rounded-full liquid-glass flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group">
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Partners Pill */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-blur-fade-up" style={{ animationDelay: '1800ms' }}>
        <div className="liquid-glass rounded-full px-8 py-4 border border-white/5 flex items-center gap-8 whitespace-nowrap">
          <span className="text-[10px] font-bold tracking-widest text-white/20 uppercase border-r border-white/10 pr-8">Engineered For</span>
          {['Stripe', 'Linear', 'Notion', 'Figma', 'Vercel'].map((p) => (
            <span key={p} className="text-sm font-bold tracking-tighter text-white/40 hover:text-white/80 transition-colors cursor-default">
              {p.toUpperCase()}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
