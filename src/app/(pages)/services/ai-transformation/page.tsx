'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'motion/react';
import { CustomCursor } from '@/components/ui/CustomCursor';

// Premium Redesigned Components
const AIHero = dynamic(() => import('@/components/services/ai/AIHero'), { ssr: false });
const StatsTicker = dynamic(() => import('@/components/services/ai/StatsTicker'), { ssr: false });
const SolutionPillars = dynamic(() => import('@/components/services/ai/SolutionPillars'), { ssr: false });
const ROICalculator = dynamic(() => import('@/components/services/ai/ROICalculator'), { ssr: false });
const DeliveryProcess = dynamic(() => import('@/components/services/ai/DeliveryProcess'), { ssr: false });
const AIFAQ = dynamic(() => import('@/components/services/ai/AIFAQ'), { ssr: false });
const FinalCTA = dynamic(() => import('@/components/services/ai/FinalCTA'), { ssr: false });

export default function AITransformationPage() {
  return (
    <div className="relative bg-white selection:bg-cyan-500/30">
      {/* Premium Cursor for heightened interactivity */}
      <CustomCursor />

      <main className="relative">
        {/* Flow: Dark -> Dark -> Light -> Dark -> Light -> Dark -> Dark */}
        
        {/* Obsidian Dark Hero */}
        <section id="hero">
          <AIHero />
        </section>

        {/* Obsidian Dark Stats Marquee */}
        <motion.section 
          id="stats"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <StatsTicker />
        </motion.section>

        {/* Metallic Light Pillars */}
        <motion.section 
          id="pillars"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <SolutionPillars />
        </motion.section>

        {/* Obsidian Dark ROI */}
        <motion.section 
          id="roi"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <ROICalculator />
        </motion.section>

        {/* Metallic Light Process */}
        <motion.section 
          id="process"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <DeliveryProcess />
        </motion.section>

        {/* Mixed Light/Dark FAQ */}
        <motion.section 
          id="faq"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <AIFAQ />
        </motion.section>

        {/* Obsidian Dark Final CTA */}
        <motion.section 
          id="cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <FinalCTA />
        </motion.section>
      </main>
    </div>
  );
}