'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import { GridPattern } from '@/components/ui/GridPattern';

const faqs = [
  {
    question: "How long does a typical AI transformation take?",
    answer: "Our deployment timelines vary based on complexity. Proof of Concepts (PoCs) are typically delivered within 2-4 weeks. Enterprise-scale transformations involving custom model training and deep integration generally reach full autonomy within 90 days, backed by our Autonomy Guarantee."
  },
  {
    question: "Is my proprietary data secure when training custom models?",
    answer: "Absolute security is our baseline. We architect zero-trust, air-gapped environments or deploy directly within your secure VPC. Your data is never used to train public models, and we employ SOC 2 Type II compliant pipelines with end-to-end encryption."
  },
  {
    question: "What is the expected ROI, and how is it measured?",
    answer: "Our clients average a 50x ROI within the first year. We establish strict KPIs during the Strategy phase—focusing on hours saved, operational cost reduction, and net new revenue generation. We provide live dashboards to track these metrics in real-time."
  },
  {
    question: "Do we need an internal data science team to maintain this?",
    answer: "No. Our solutions are designed to be fully autonomous and operable by your existing business teams. We provide comprehensive training during the Handoff phase, and offer ongoing premium support for model drift monitoring and periodic fine-tuning if desired."
  },
  {
    question: "How does the 90-day Autonomy Guarantee work?",
    answer: "If the deployed AI system does not achieve the pre-defined autonomy and accuracy KPIs within 90 days of deployment, we will dedicate our engineering resources at no additional cost until those metrics are met. We tie our success directly to yours."
  },
  {
    question: "Can your AI solutions integrate with our legacy on-premise systems?",
    answer: "Yes. We specialize in building secure bridge architectures. Whether you run on modern cloud infrastructure or legacy mainframes, our API gateways and custom middleware ensure seamless, real-time data ingestion and execution without disrupting your current operations."
  },
  {
    question: "How do you handle AI hallucinations and accuracy guarantees?",
    answer: "We employ deterministic guardrails, multi-agent validation loops, and Retrieval-Augmented Generation (RAG) strictly bounded by your authoritative data. This hybrid approach practically eliminates hallucinations, ensuring outputs are consistently accurate and compliant."
  }
];

export default function AIFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 lg:py-24 bg-[#f8fafc] relative">
      {/* Premium Animated Separator */}
      <div className="absolute top-0 left-0 w-full flex justify-center z-20">
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"
        />
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="absolute -top-[1px] w-1/4 h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[2px] origin-center"
        />
      </div>

      {/* Subtle Light Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none">
        <GridPattern />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Heading + Image (Sticky) */}
          <div className="lg:w-1/2 w-full lg:sticky lg:top-32 flex flex-col px-4 lg:px-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col w-full max-w-xl mx-auto lg:mx-0"
            >
              <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-cyan-600 block mb-1 lg:mb-2">
                Clarity & Confidence
              </span>
              <h2 className="text-3xl md:text-[2.5rem] font-black text-slate-900 tracking-tighter mb-2 lg:mb-4 leading-[1.1]">
                Frequently <br />
                <span className="text-slate-400">Asked.</span>
              </h2>

              {/* Added Stats Image */}
              <div className="relative w-full aspect-[16/7] md:aspect-[16/8] lg:aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200 shadow-xl mb-3 lg:mb-4 shrink-0">
                <Image 
                  src="/images/ai/stats-ai.jpg" 
                  alt="AI Analytics & Stats" 
                  fill 
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>
              
              <p className="text-sm lg:text-base text-slate-600 font-medium leading-relaxed mb-4 lg:mb-6">
                Everything you need to know about integrating enterprise-grade AI autonomy into your operations.
              </p>
              
              <div className="h-[1px] w-12 bg-slate-300" />
            </motion.div>
          </div>

          {/* Right Column: Dark Accordion Items (Scrolling) */}
          <div className="lg:w-1/2 relative lg:py-6 w-full space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-[#020617] rounded-xl overflow-hidden transition-all duration-500 border ${
                    isOpen ? 'border-cyan-500/50 shadow-[0_0_20px_rgba(34,211,238,0.15)]' : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 md:p-5 text-left focus:outline-none"
                  >
                    <span className={`text-sm md:text-base font-bold tracking-tight transition-colors pr-4 ${isOpen ? 'text-white' : 'text-slate-300'}`}>
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`flex-shrink-0 rounded-full p-1 border ${isOpen ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' : 'bg-slate-800 border-slate-700 text-slate-400'}`}
                    >
                      <Plus className="w-3 h-3 md:w-4 md:h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-4 md:px-5 pb-4 md:pb-5 text-xs md:text-sm text-slate-400 font-medium leading-relaxed border-t border-slate-800/50 mt-1 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
