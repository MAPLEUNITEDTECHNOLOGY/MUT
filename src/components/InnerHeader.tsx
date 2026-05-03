'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_SERVICES } from '@/lib/constants';
import { motion, AnimatePresence } from 'motion/react';

/* ── Icon Components ── */
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

/* ── Service Icon Map ── */
const ServiceIcon = ({ icon, className }: { icon: string; className?: string }) => {
  const props = { className, xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (icon) {
    case 'Cpu': return <svg {...props}><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" /></svg>;
    case 'Cloud': return <svg {...props}><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" /></svg>;
    case 'Shield': return <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
    case 'Network': return <svg {...props}><rect x="2" y="2" width="6" height="6" rx="1" /><rect x="16" y="2" width="6" height="6" rx="1" /><rect x="9" y="16" width="6" height="6" rx="1" /><line x1="5" y1="8" x2="5" y2="12" /><line x1="19" y1="8" x2="19" y2="12" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="5" y1="12" x2="19" y2="12" /></svg>;
    case 'Lock': return <svg {...props}><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>;
    case 'Eye': return <svg {...props}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>;
    case 'RefreshCw': return <svg {...props}><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" /></svg>;
    default: return <svg {...props}><circle cx="12" cy="12" r="10" /></svg>;
  }
};

/* ── Framer Motion Variants ── */
const megaMenuVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.98 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94], staggerChildren: 0.03, delayChildren: 0.06 } as any
  },
  exit: { opacity: 0, y: -6, scale: 0.98, transition: { duration: 0.18, ease: 'easeIn' } as any }
};

const itemVariants = {
  hidden: { opacity: 0, x: -6 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: 'easeOut' } }
};

const dropdownVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  visible: { 
    opacity: 1, y: 0, scale: 1, 
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } as any
  },
  exit: { opacity: 0, y: 5, scale: 0.98, transition: { duration: 0.15, ease: 'easeIn' } as any }
};

/* ── Industries Data ── */
const INDUSTRIES = [
  { label: 'Financial Services', desc: 'Secure fintech & banking infrastructure', href: '/industries' },
  { label: 'Healthcare & Life Sciences', desc: 'Compliant & reliable medical systems', href: '/industries' },
  { label: 'Supply Chain & Logistics', desc: 'Optimized tracking & management networks', href: '/industries' },
  { label: 'Manufacturing & Industry', desc: 'Smart factory & industrial IoT integration', href: '/industries' },
  { label: 'Energy & Utilities', desc: 'Resilient grid & energy management tech', href: '/industries' },
  { label: 'Government & Defense', desc: 'High-security public sector systems', href: '/industries' },
];

export default function InnerHeader() {
  const pathname = usePathname();
  const [megaOpen, setMegaOpen] = useState(false);
  const [industryOpen, setIndustryOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const indTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMega = () => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };
  const closeMega = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 200);
  };

  const openInd = () => {
    if (indTimeout.current) clearTimeout(indTimeout.current);
    setIndustryOpen(true);
  };
  const closeInd = () => {
    indTimeout.current = setTimeout(() => setIndustryOpen(false), 120);
  };

  return (
    <>
      {/* Premium Mega Menu Dropdown */}
      <AnimatePresence>
        {megaOpen && (
          <div className="fixed top-[76px] left-0 w-full z-[120] pointer-events-none flex justify-center px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={megaMenuVariants}
              onMouseEnter={openMega}
              onMouseLeave={closeMega}
              className="w-full max-w-[1000px] pointer-events-auto"
            >
              <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.06)] flex bg-white relative">
                {/* Top accent line across the whole menu */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0a0f1e] via-[#e01030] to-slate-200 z-10" />

                {/* Left Pane (Dark) */}
                <div className="w-[32%] bg-gradient-to-b from-[#0a0f1e] to-[#080c18] p-8 flex flex-col justify-between border-r border-slate-200 relative overflow-hidden">
                  {/* Subtle background glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#e01030]/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-3 flex items-center gap-2">
                      <span className="w-4 h-px bg-[#e01030]/80"></span>
                      Solutions
                    </p>
                    <h3 className="text-white text-2xl font-bold mb-4 tracking-tight leading-tight">
                      Enterprise<br />Services
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-8 pr-4">
                      Discover our comprehensive suite of advanced technology solutions designed to scale, secure, and accelerate your business growth.
                    </p>
                    <Link href="/services" onClick={() => setMegaOpen(false)} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-white text-[13px] font-medium transition-all duration-300 border border-white/[0.05] hover:border-white/[0.15] group/btn">
                      Explore All Services
                      <ArrowRightIcon className="w-4 h-4 text-white/40 group-hover/btn:text-white transition-colors group-hover/btn:translate-x-0.5 duration-300" />
                    </Link>
                  </div>
                  
                  <div className="flex items-center gap-2.5 mt-8 relative z-10">
                    <div className="w-[8px] h-[8px] rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                    <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.15em]">All Systems Operational</span>
                  </div>
                </div>

                {/* Right Pane (Light) */}
                <div className="w-[68%] bg-slate-50 p-8">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                    {NAV_SERVICES.map((s, idx) => (
                      <motion.div
                        key={s.href}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 + 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] } as any}
                      >
                        <Link
                          href={s.href}
                          onClick={() => setMegaOpen(false)}
                          className="group/item flex items-start gap-3 p-3 rounded-xl hover:bg-white transition-all duration-300 hover:shadow-[0_12px_40px_rgba(224,16,48,0.08)] border border-transparent hover:border-[#e01030]/20 hover:-translate-y-1 relative overflow-hidden"
                        >
                          {/* Icon */}
                          <div className="w-10 h-10 shrink-0 rounded-xl overflow-hidden relative shadow-sm border border-slate-200 group-hover/item:border-slate-300 transition-colors duration-300">
                            <img 
                              src={s.image} 
                              alt={s.label} 
                              className="w-full h-full object-cover grayscale-[20%] group-hover/item:grayscale-0 transition-all duration-500 scale-100 group-hover/item:scale-105"
                            />
                          </div>
                          {/* Text */}
                          <div className="flex-1 min-w-0 pt-0">
                            <span className="flex items-center justify-between text-slate-900 text-[14px] font-semibold tracking-tight transition-colors mb-0.5">
                              {s.label}
                              <ArrowRightIcon className="w-4 h-4 text-slate-300 group-hover/item:text-[#e01030] -translate-x-2 group-hover/item:translate-x-0 transition-all duration-300 opacity-0 group-hover/item:opacity-100" />
                            </span>
                            <span className="block text-slate-500 text-[12px] leading-snug transition-colors pr-2 line-clamp-2">
                              {s.desc}
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Premium Industries Mega Menu Dropdown */}
      <AnimatePresence>
        {industryOpen && (
          <div className="fixed top-[76px] left-0 w-full z-[120] pointer-events-none flex justify-center px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropdownVariants}
              onMouseEnter={openInd}
              onMouseLeave={closeInd}
              className="w-full max-w-[800px] pointer-events-auto rounded-2xl overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.06)] flex bg-white relative"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0a0f1e] via-[#e01030] to-slate-200 z-10" />

              {/* Left Pane */}
              <div className="w-[32%] bg-gradient-to-b from-[#0a0f1e] to-[#080c18] p-8 border-r border-slate-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#e01030]/10 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                <div className="relative z-10">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-3 flex items-center gap-2">
                    <span className="w-4 h-px bg-[#e01030]/80"></span>
                    Sectors
                  </p>
                  <h3 className="text-white text-2xl font-bold mb-4 tracking-tight leading-tight">
                    Industry<br />Expertise
                  </h3>
                  <p className="text-white/50 text-[13px] leading-relaxed mb-8 pr-2">
                    Tailored IT solutions built to address the unique compliance, scale, and security challenges of your specific sector.
                  </p>
                  <Link href="/industries" onClick={() => setIndustryOpen(false)} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-white text-[13px] font-medium transition-all duration-300 border border-white/[0.05] hover:border-white/[0.15] group/btn">
                    View All
                    <ArrowRightIcon className="w-4 h-4 text-white/40 group-hover/btn:text-white transition-colors group-hover/btn:translate-x-0.5 duration-300" />
                  </Link>
                </div>
              </div>

              {/* Right Pane */}
              <div className="w-[68%] bg-slate-50 p-8">
                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {INDUSTRIES.map((ind, idx) => (
                    <motion.a 
                      key={ind.label} 
                      href={ind.href}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 + 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] } as any}
                      onClick={() => setIndustryOpen(false)}
                      className="group/ind flex flex-col justify-center p-4 rounded-xl hover:bg-white transition-all duration-300 hover:shadow-[0_12px_40px_rgba(224,16,48,0.08)] border border-transparent hover:border-[#e01030]/20 hover:-translate-y-1 relative overflow-hidden"
                    >
                      <span className="flex items-center justify-between text-slate-900 text-[14px] font-semibold tracking-tight transition-colors mb-1">
                        {ind.label}
                        <ArrowRightIcon className="w-4 h-4 text-slate-300 group-hover/ind:text-[#e01030] -translate-x-2 group-hover/ind:translate-x-0 transition-all duration-300 opacity-0 group-hover/ind:opacity-100" />
                      </span>
                      <span className="block text-slate-500 text-[12px] leading-snug transition-colors pr-2">
                        {ind.desc}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <nav className="fixed top-0 w-full z-[100] bg-[#060d1f]/95 backdrop-blur-xl border-b border-white/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
        <div className="max-w-[1920px] mx-auto px-8 md:px-12 flex items-center justify-between h-[76px]">

          {/* ── LEFT: Logo ── */}
          <Link href="/" className="flex items-center cursor-pointer lg:w-[300px] shrink-0">
            <span className="font-black text-[#e01030] text-[20px] tracking-wide">MU</span>
            <span className="font-medium text-white text-[20px] tracking-widest ml-1">TECHNOLOGIES</span>
          </Link>

          {/* ── CENTER: Nav Links ── */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-2">
            <div className="relative" onMouseEnter={openMega} onMouseLeave={closeMega}>
              <button onClick={() => setMegaOpen(!megaOpen)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-semibold tracking-wider uppercase transition-all duration-200
                  hover:bg-white/8 text-white/80 hover:text-white group
                  ${megaOpen ? 'text-white bg-white/8' : ''} 
                  ${pathname.startsWith('/services') ? 'text-[#e01030]' : ''}`}
              >
                Services
                <ChevronDownIcon className={`transition-transform duration-300 w-3.5 h-3.5 text-white/60 ${megaOpen ? 'rotate-180 text-white' : ''}`} />
              </button>
            </div>

            <div className="relative" onMouseEnter={openInd} onMouseLeave={closeInd}>
              <button 
                onClick={() => setIndustryOpen(!industryOpen)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-semibold tracking-wider uppercase transition-all duration-200 
                  hover:bg-white/8 text-white/80 hover:text-white group
                  ${industryOpen ? 'text-white bg-white/8' : ''}
                  ${pathname.startsWith('/industries') ? 'text-[#e01030]' : ''}`}
              >
                Industries
                <ChevronDownIcon className={`transition-transform duration-300 w-3.5 h-3.5 text-white/60 ${industryOpen ? 'rotate-180 text-white' : ''}`} />
              </button>
            </div>

            <Link href="/about" className={`px-4 py-2 rounded-lg text-[13px] font-semibold tracking-wider uppercase transition-all duration-200 hover:bg-white/8 ${pathname === '/about' ? 'text-[#e01030]' : 'text-white/80 hover:text-white'}`}>
              About Us
            </Link>
            <Link href="/insights" className={`px-4 py-2 rounded-lg text-[13px] font-semibold tracking-wider uppercase transition-all duration-200 hover:bg-white/8 ${pathname === '/insights' ? 'text-[#e01030]' : 'text-white/80 hover:text-white'}`}>
              Insights
            </Link>
          </div>

          {/* ── RIGHT: CTA & Mobile Toggle ── */}
          <div className="flex items-center justify-end lg:w-[300px] gap-4">
            <Link href="/contact" className="flex-shrink-0 relative overflow-hidden bg-gradient-to-br from-[#b40022] to-[#e01030] text-white px-5 py-2.5 rounded-lg text-[12px] font-black tracking-[0.15em] uppercase transition-all duration-200 hover:shadow-[0_0_24px_rgba(224,16,48,0.5)] hover:scale-[1.03] active:scale-[0.97]">
              <span className="relative z-10">CONTACT US</span>
            </Link>

            <button aria-label="Open menu" onClick={() => setMobileOpen(true)} className="lg:hidden text-white hover:text-[#e01030] transition-colors p-2 -mr-2">
              <MenuIcon />
            </button>
          </div>
        </div>
      </nav>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-[110] flex">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: -340 }}
              animate={{ x: 0 }}
              exit={{ x: -340 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="relative w-[340px] max-w-[85vw] bg-[#060d1f] h-full flex flex-col border-r border-white/[0.06] overflow-y-auto"
            >
              <div className="flex items-center justify-between p-6 pb-0 sticky top-0 bg-[#060d1f] z-10">
                <span className="font-black text-white text-lg">
                  <span className="text-[#e01030]">MU</span>
                  <span className="font-light text-white/80 ml-1 tracking-[0.2em]">TECHNOLOGIES</span>
                </span>
                <button onClick={() => setMobileOpen(false)} className="text-white/40 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                </button>
              </div>

              <div className="p-6 flex flex-col gap-1 flex-grow">
                {/* Services Accordion */}
                <button 
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)} 
                  className="flex items-center justify-between w-full text-white font-bold text-[13px] tracking-[0.1em] uppercase py-3.5 px-4 rounded-xl hover:bg-white/[0.04] transition-all"
                >
                  Services <ChevronDownIcon className={`transition-transform duration-300 text-white/40 ${mobileServicesOpen ? 'rotate-180 text-[#e01030]' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="ml-2 mb-2 border-l border-white/[0.06] pl-4 space-y-1">
                        {NAV_SERVICES.map(s => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="flex items-center gap-2.5 px-3 py-2 text-white/60 hover:text-white hover:bg-white/[0.04] transition-all"
                            onClick={() => setMobileOpen(false)}
                          >
                            <ServiceIcon icon={s.icon} className="w-4 h-4" />
                            <p className="text-[13px] font-semibold">{s.label}</p>
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          className="flex items-center gap-2 px-3 py-2.5 text-[#e01030] text-[11px] font-bold tracking-wider uppercase hover:bg-white/[0.04] rounded-lg transition-all"
                          onClick={() => setMobileOpen(false)}
                        >
                          All Services <ArrowRightIcon className="text-current" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Industries Accordion */}
                <button 
                  onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)} 
                  className="flex items-center justify-between w-full text-white font-bold text-[13px] tracking-[0.1em] uppercase py-3.5 px-4 rounded-xl hover:bg-white/[0.04] transition-all mt-2"
                >
                  Industries <ChevronDownIcon className={`transition-transform duration-300 text-white/40 ${mobileIndustriesOpen ? 'rotate-180 text-[#e01030]' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileIndustriesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="ml-2 mb-2 border-l border-white/[0.06] pl-4 space-y-0.5">
                        {INDUSTRIES.map(ind => (
                          <Link
                            key={ind.label}
                            href={ind.href}
                            className="block px-3 py-2.5 rounded-lg text-white/60 text-[13px] font-semibold hover:text-white hover:bg-white/[0.04] transition-all"
                            onClick={() => setMobileOpen(false)}
                          >
                            {ind.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="w-full h-px bg-white/[0.04] my-2"></div>
                <Link href="/about" onClick={() => setMobileOpen(false)} className="text-white font-bold text-[13px] tracking-[0.1em] uppercase py-3.5 px-4 rounded-xl hover:bg-white/[0.04] transition-all">About Us</Link>
                <Link href="/insights" onClick={() => setMobileOpen(false)} className="text-white font-bold text-[13px] tracking-[0.1em] uppercase py-3.5 px-4 rounded-xl hover:bg-white/[0.04] transition-all">Insights</Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-white font-bold text-[13px] tracking-[0.1em] uppercase py-3.5 px-4 rounded-xl hover:bg-white/[0.04] transition-all">Contact</Link>
              </div>

              {/* Mobile footer */}
              <div className="p-6 pt-2 mt-auto border-t border-white/[0.04]">
                <Link
                  href="/contact"
                  className="block w-full bg-gradient-to-br from-[#b40022] to-[#e01030] text-white py-4 rounded-xl font-black tracking-[0.15em] text-[12px] uppercase text-center hover:shadow-[0_0_24px_rgba(224,16,48,0.4)] transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  SCHEDULE A CONSULTATION
                </Link>
                <p className="text-white/20 text-[9px] font-bold tracking-[0.2em] uppercase text-center mt-3">Enterprise Solutions</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
