'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

interface CloudFAQProps {
  faqs: FAQItem[];
}

export default function CloudFAQ({ faqs }: CloudFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <motion.section 
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full bg-[#f8fafc] z-20 -mt-10 md:-mt-20 rounded-t-[40px] md:rounded-t-[60px] shadow-[0_-20px_40px_rgba(0,0,0,0.15)]"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-[#e01030] text-[10px] font-black tracking-[0.25em] uppercase mb-4">
              <span className="w-6 h-px bg-[#e01030]/60" />
              Got Questions?
              <span className="w-6 h-px bg-[#e01030]/60" />
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.05]">
              Cloud Infrastructure{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e01030] to-[#b00c25]">
                FAQs
              </span>
            </h2>
          </motion.div>

          {/* FAQ accordion */}
          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`bg-white rounded-xl overflow-hidden border transition-all duration-500 ${
                    isOpen
                      ? 'border-[#e01030]/20 shadow-[0_8px_30px_rgba(224,16,48,0.06)]'
                      : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                  >
                    <span
                      className={`text-[15px] md:text-base font-bold tracking-tight pr-6 transition-colors duration-300 ${
                        isOpen ? 'text-[#0F172A]' : 'text-slate-700'
                      }`}
                    >
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-colors duration-300 ${
                        isOpen
                          ? 'bg-[#e01030]/5 border-[#e01030]/20 text-[#e01030]'
                          : 'bg-slate-50 border-slate-200 text-slate-400'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-[15px] text-slate-500 font-medium leading-relaxed border-t border-slate-100 pt-4">
                          {faq.a}
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
    </motion.section>
  );
}
