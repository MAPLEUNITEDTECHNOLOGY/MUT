'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem { q: string; a: string; }

export default function ManagedFAQ({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((f) => ({
      '@type': 'Question',
      'name': f.q,
      'acceptedAnswer': { '@type': 'Answer', 'text': f.a }
    }))
  };

  return (
    <section className="relative w-full bg-[#faf8ff] overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <div className="max-w-3xl mb-16">
          <motion.span initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-[#e01030] text-[10px] font-black tracking-[0.25em] uppercase mb-4">
            <span className="w-8 h-px bg-[#e01030]/60" />Frequently Asked Questions
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f1a37] tracking-tight leading-[1.05] mb-6">Got Questions? We&apos;ve Got Answers.</motion.h2>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqs.map((faq, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.08 }}>
              <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)} className="w-full text-left py-6 flex justify-between items-start gap-4 group">
                <span className="text-lg font-black text-[#0f1a37] group-hover:text-[#e01030] transition-colors pr-4">{faq.q}</span>
                <span className={`text-2xl font-light flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-45 text-[#e01030]' : 'text-slate-300 group-hover:text-[#e01030]'}`}>+</span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <p className="text-slate-500 leading-relaxed font-medium pb-6">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
