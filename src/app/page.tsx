import React from 'react';
import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

import HeroSection from '../components/home/HeroSection';
import WhoWeAreSection from '../components/home/WhoWeAreSection';
import CoreCapabilitiesSection from '../components/home/CoreCapabilitiesSection';
import CaseStudiesSection from '../components/home/CaseStudiesSection';
import GlobalNetworkSection from '../components/home/GlobalNetworkSection';
import TrustComplianceSection from '../components/home/TrustComplianceSection';
import CTABannerSection from '../components/home/CTABannerSection';

export const metadata: Metadata = {
  title: 'MU Technologies | Engineering the Future of Enterprise IT',
  description: 'Enterprise IT infrastructure, cloud solutions, cybersecurity, and managed services. Designed for performance, built for compliance.',
  openGraph: {
    title: 'MU Technologies | Engineering the Future of Enterprise IT',
    description: 'Enterprise IT infrastructure, cloud solutions, and cybersecurity services.',
    url: 'https://mutechnologies.com/',
    siteName: 'MU Technologies',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'MU Technologies' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MU Technologies',
    description: 'Engineering the Future of Enterprise IT.',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#0f1a37] antialiased selection:bg-[#b40022] selection:text-white">
      {/* Interactive Scroll-Aware Header */}
      <Header />

      <main>
        {/* Sections Orchestration */}
        <HeroSection />
        <WhoWeAreSection />
        <CoreCapabilitiesSection />
        <CaseStudiesSection />
        <GlobalNetworkSection />
        <TrustComplianceSection />
        <CTABannerSection />
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}

