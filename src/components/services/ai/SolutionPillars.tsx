'use client';
import React, { useRef, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
import Image from 'next/image';
import { CheckCircle2, ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';

const solutions = [
  {
    title: "Intelligent Process Automation (IPA)",
    image: "/images/ai/pillars/ipa.png",
    challenge: "Manual operational friction causing scalability bottlenecks.",
    resolution: "Cognitive AI engines that handle judgment-based tasks at hyper-scale.",
    roi: "40% OPEX Reduction",
    features: ["Judgment-based task handling", "Hyper-scale operations", "Cognitive engine integration"],
    icon: <Zap className="w-6 h-6 text-cyan-400" />
  },
  {
    title: "Conversational AI & Virtual Assistants",
    image: "/images/ai/pillars/conv-ai.png",
    challenge: "Customer experience fragmentation across global touchpoints.",
    resolution: "Hyper-contextual agents resolving 65%+ of enterprise queries autonomously.",
    roi: "3.5x CX Velocity",
    features: ["Hyper-contextual responses", "Multi-channel resolution", "65%+ autonomous handling"],
    icon: <Target className="w-6 h-6 text-indigo-400" />
  },
  {
    title: "Enterprise Workflow Automation",
    image: "/images/ai/pillars/workflow.png",
    challenge: "Fragmented legacy ecosystems and cross-departmental data silos.",
    resolution: "End-to-end orchestration synchronizing ERP, CRM, and cloud architectures.",
    roi: "25% Process Efficiency",
    features: ["Cross-departmental sync", "Legacy system integration", "End-to-end orchestration"],
    icon: <TrendingUp className="w-6 h-6 text-emerald-400" />
  },
  {
    title: "Predictive Analytics & Insight Solutions",
    image: "/images/ai/pillars/predictive.png",
    challenge: "Reactive strategic planning driven by latent historical data.",
    resolution: "Real-time predictive signaling for supply chains and market volatility.",
    roi: "15% Cost Mitigation",
    features: ["Real-time predictive signaling", "Market volatility analysis", "Supply chain optimization"],
    icon: <Zap className="w-6 h-6 text-amber-400" />
  },
  {
    title: "Custom AI Model Development",
    image: "/images/ai/pillars/models.png",
    challenge: "Off-the-shelf models failing to meet specialized security mandates.",
    resolution: "Proprietary LLMs fine-tuned for industry-specific data and compliance.",
    roi: "99.9% Model Fidelity",
    features: ["Proprietary LLM training", "Security-first architecture", "Industry-specific tuning"],
    icon: <Target className="w-6 h-6 text-rose-400" />
  },
  {
    title: "AI-Powered Document Intelligence",
    image: "/images/ai/pillars/doc-intel.png",
    challenge: "Structural data loss within petabytes of unstructured documents.",
    resolution: "Neural OCR systems extracting insights with zero manual intervention.",
    roi: "500% Extraction Speed",
    features: ["Neural OCR processing", "Zero manual intervention", "Unstructured data extraction"],
    icon: <TrendingUp className="w-6 h-6 text-purple-400" />
  }
];

export default function SolutionPillars() {
  const [activeCard, setActiveCard] = useState(0);

  const handleActive = useCallback((idx: number) => {
    setActiveCard(idx);
  }, []);

  return (
    <section className="relative bg-[#F8FAFC] w-full pb-24 lg:pb-32">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 -left-1/4 w-[50vw] h-[50vw] bg-slate-200/50 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 -right-1/4 w-[50vw] h-[50vw] bg-cyan-100/30 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl pt-24 lg:pt-32 pb-12">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-cyan-600 font-bold uppercase tracking-[0.3em] text-xs mb-6"
          >
            <span className="w-8 h-[1px] bg-cyan-600" />
            Our Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[0.95]"
          >
            Architecting specialized <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600">
              intelligence layers.
            </span>
          </motion.h2>
        </div>

        {/* Main Content Area with Sticky Navigation */}
        <div className="relative flex w-full">
          {/* Side Sticky Navigation */}
          <div className="hidden lg:flex w-24 sticky top-0 h-[100dvh] flex-col justify-center items-center z-50 shrink-0">
            <div className="relative flex flex-col gap-6">
              {solutions.map((_, idx) => (
                <div key={idx} className="w-2 h-10 rounded-full bg-slate-200" />
              ))}
              {/* Animated Pill */}
              <motion.div 
                className="absolute top-0 left-0 w-2 h-10 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                animate={{ y: activeCard * 64 }} // 40px (h-10) + 24px (gap-6) = 64px
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>
          </div>

          {/* Cards Container */}
          <div className="flex-1 w-full relative">
            {solutions.map((item, idx) => (
              <SolutionCard 
                key={idx} 
                item={item} 
                index={idx} 
                total={solutions.length} 
                onActive={handleActive} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const SolutionCard = React.memo(({ item, index, total, onActive }: { item: any, index: number, total: number, onActive: (i: number) => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track when this card is active (center of screen)
  const { scrollYProgress: activeProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  useMotionValueEvent(activeProgress, "change", (latest) => {
    if (latest > 0 && latest < 1) {
      onActive(index);
    }
  });

  // Track shrink effect when next card slides over
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Scale down as it scrolls up
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  // Darken the card as it goes to the background instead of making it transparent
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.6]);

  return (
    <div ref={containerRef} className="h-[100dvh] sticky top-0 flex items-center justify-center py-8 w-full overflow-hidden">
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl max-h-[85vh] h-full bg-[#0B0F19] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col relative"
      >
        {/* Darkening Overlay for Depth Effect */}
        <motion.div 
          style={{ opacity: overlayOpacity }} 
          className="absolute inset-0 bg-black z-50 pointer-events-none"
        />
        {/* Card Split Layout */}
        <div className="flex flex-col lg:flex-row h-full">
          {/* Image Side */}
          <div className="lg:w-1/2 relative h-[30vh] min-h-[250px] lg:h-full shrink-0">
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#0B0F19] via-transparent to-transparent z-10" />
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover opacity-80"
              />
            </motion.div>
            
            {/* Index Counter */}
            <div className="absolute top-6 left-6 lg:top-10 lg:left-10 z-20 flex items-center gap-4">
              <span className="text-white/30 font-black text-5xl lg:text-7xl tracking-tighter">0{index + 1}</span>
              <div className="w-12 lg:w-20 h-[2px] bg-white/20" />
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 p-6 md:p-8 lg:p-12 xl:p-16 flex flex-col justify-center h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="mb-6 flex items-center gap-4 shrink-0">
              <div className="p-3 bg-white/5 rounded-2xl border border-white/10 shadow-inner">
                {item.icon}
              </div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400 bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20">
                {item.roi}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-6 lg:mb-8 leading-[1.1] tracking-tight shrink-0">
              {item.title}
            </h3>

            <div className="space-y-6 lg:space-y-8 flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40">The Challenge</span>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">
                    {item.challenge}
                  </p>
                </div>
                <div className="space-y-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">The Resolution</span>
                  <p className="text-white text-sm leading-relaxed font-bold">
                    {item.resolution}
                  </p>
                </div>
              </div>

              {/* Feature List */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4">
                {item.features.map((feature: string, fIdx: number) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span className="text-sm text-slate-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 lg:pt-8 pb-4 shrink-0">
                <motion.button
                  whileHover={{ x: 10 }}
                  className="inline-flex items-center gap-4 text-white font-bold group/btn"
                >
                  <span className="text-sm tracking-widest uppercase">Explore Solution</span>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-[#020617] transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
});

SolutionCard.displayName = "SolutionCard";
