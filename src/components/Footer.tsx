'use client';
import React, { useState } from 'react';
import Link from 'next/link';

/* ─── Service Data ─── */
const services = [
  { label: 'Cloud & Infrastructure', href: '/services#cloud' },
  { label: 'Cybersecurity', href: '/services#cybersecurity' },
  { label: 'AI & Intelligent Automation', href: '/services#ai' },
  { label: 'Managed IT Services', href: '/services#managed-it' },
  { label: 'Network Architecture', href: '/services#network' },
  { label: 'CCTV & Physical Security', href: '/services#cctv' },
  { label: 'Digital Marketing & Growth', href: '/services#marketing' }
];

const company = [
  { label: 'About MU Technologies', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Careers', href: '/careers' },
  { label: 'Partners & Alliances', href: '/partners' },
  { label: 'Newsroom', href: '/insights' },
];

const resources = [
  { label: 'Documentation', href: '/docs' },
  { label: 'System Status', href: '/status' },
  { label: 'SLA Guarantee', href: '/sla' },
  { label: 'Compliance Hub', href: '/compliance' },
  { label: 'Support Center', href: '/support' },
];

const certifications = [
  { name: 'ISO 27001', desc: 'Information Security' },
  { name: 'SOC 2 Type II', desc: 'Service Org Controls' },
  { name: 'NIST CSF', desc: 'Cybersecurity Framework' },
  { name: 'HIPAA', desc: 'Healthcare Compliance' },
  { name: 'GDPR', desc: 'Data Protection' },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

/* ─── Component ─── */
export default function Footer() {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#070e1f] overflow-hidden">
      {/* ── Subtle Scan-Line Texture ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.012) 1px, rgba(255,255,255,0.012) 2px)',
        }}
      />

      {/* ── Pre-Footer CTA Band ── */}
      <div className="relative z-10 border-b border-white/[0.06]">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 py-14 md:py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Left */}
            <div className="max-w-xl">
              <p className="text-[10px] font-black tracking-[0.25em] uppercase text-[#e01030] mb-3">
                Ready to Scale?
              </p>
              <h3 className="text-[22px] md:text-[28px] font-light text-white tracking-tight leading-tight">
                Transform your infrastructure with
                <span className="font-semibold"> enterprise-grade</span> precision.
              </h3>
            </div>
            {/* Right: Email CTA */}
            <div className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="CTO/CIO work email"
                className="bg-white/[0.04] border border-white/[0.08] text-white px-5 py-4 text-[13px] font-medium outline-none w-full sm:w-72 placeholder:text-white/25 focus:border-[#e01030]/40 transition-colors"
              />
              <button className="bg-[#e01030] hover:bg-[#c00d28] text-white px-8 py-4 font-black text-[10px] tracking-[0.2em] uppercase transition-all duration-300 whitespace-nowrap hover:shadow-[0_0_30px_rgba(224,16,48,0.25)]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="relative z-10">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

            {/* Col 1: Brand — spans 3 */}
            <div className="lg:col-span-3 sm:col-span-2 lg:pr-8">
              <div className="flex items-center gap-1.5 mb-6">
                <span className="text-[22px] font-black text-[#e01030] tracking-wide">MU</span>
                <span className="text-[22px] font-black text-white tracking-tight">Technologies</span>
              </div>
              <p className="text-white/40 text-[13px] leading-[1.9] font-medium max-w-xs mb-8">
                Enterprise IT infrastructure, cloud solutions, and cybersecurity services. Engineered for performance, built for compliance.
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className="group relative w-9 h-9 flex items-center justify-center rounded-md bg-white/[0.04] border border-white/[0.06] text-white/40 hover:text-white hover:bg-[#e01030]/20 hover:border-[#e01030]/30 transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2: Services — spans 2 */}
            <div className="lg:col-span-2">
              <h5 className="text-white text-[10px] font-black tracking-[0.2em] uppercase mb-7 flex items-center gap-2">
                <span className="w-3 h-px bg-[#e01030]" />
                Services
              </h5>
              <ul className="space-y-[14px]">
                {services.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-white/40 text-[13px] font-medium hover:text-white hover:pl-1 transition-all duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Company — spans 2 */}
            <div className="lg:col-span-2">
              <h5 className="text-white text-[10px] font-black tracking-[0.2em] uppercase mb-7 flex items-center gap-2">
                <span className="w-3 h-px bg-[#e01030]" />
                Company
              </h5>
              <ul className="space-y-[14px]">
                {company.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-white/40 text-[13px] font-medium hover:text-white hover:pl-1 transition-all duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Resources — spans 2 */}
            <div className="lg:col-span-2">
              <h5 className="text-white text-[10px] font-black tracking-[0.2em] uppercase mb-7 flex items-center gap-2">
                <span className="w-3 h-px bg-[#e01030]" />
                Resources
              </h5>
              <ul className="space-y-[14px]">
                {resources.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-white/40 text-[13px] font-medium hover:text-white hover:pl-1 transition-all duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 5: Contact — spans 3 */}
            <div className="lg:col-span-3">
              <h5 className="text-white text-[10px] font-black tracking-[0.2em] uppercase mb-7 flex items-center gap-2">
                <span className="w-3 h-px bg-[#e01030]" />
                Headquarters
              </h5>
              <div className="space-y-5 text-[13px]">
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#e01030] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-white/60 font-medium leading-relaxed">
                      Sveavägen 21, 4th Floor<br />
                      111 34 Stockholm, Sweden
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#e01030] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+4681234567" className="text-white/60 font-medium hover:text-white transition-colors">
                    +46 8 123 456 78
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#e01030] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:noc@mutechnologies.com" className="text-[#e01030] font-semibold hover:text-white transition-colors">
                    noc@mutechnologies.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#e01030] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-white/40 font-medium">
                    24/7 NOC — <span className="text-emerald-400 text-[11px] font-bold">● ONLINE</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Certifications Trust Bar ── */}
      <div className="relative z-10 border-t border-white/[0.06]">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/20 text-[9px] font-black tracking-[0.3em] uppercase">
              Certified & Compliant
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {certifications.map((cert) => (
                <div key={cert.name} className="group flex items-center gap-2 cursor-default">
                  {/* Shield icon */}
                  <svg className="w-4 h-4 text-white/15 group-hover:text-[#e01030]/60 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-white/50 text-[11px] font-bold tracking-wide group-hover:text-white/80 transition-colors duration-300">
                      {cert.name}
                    </span>
                    <span className="text-white/15 text-[8px] font-bold tracking-wider uppercase hidden md:block">
                      {cert.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Legal Bar ── */}
      <div className="relative z-10 border-t border-white/[0.04]">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 py-7">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-white/25 text-[10px] font-bold tracking-[0.15em] uppercase">
              © {currentYear} MU Technologies AB. All Rights Reserved.
            </p>
            {/* Legal links */}
            <div className="flex items-center gap-6">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
                { label: 'Cookie Policy', href: '/cookies' },
                { label: 'Security Disclosures', href: '/security' },
              ].map((link, i, arr) => (
                <React.Fragment key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/25 text-[10px] font-bold tracking-[0.1em] uppercase hover:text-white/60 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                  {i < arr.length - 1 && (
                    <span className="text-white/10 text-[8px]">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Edge Glow ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#e01030]/30 to-transparent" />
    </footer>
  );
}
