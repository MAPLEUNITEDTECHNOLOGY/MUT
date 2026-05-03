'use client';

import React from 'react';
import { motion } from 'motion/react';
import { cloudInfrastructureData } from '@/lib/cloud-infrastructure.data';
import CloudHero from '@/components/services/cloud/CloudHero';
import CloudTrustStats from '@/components/services/cloud/CloudTrustStats';
import CloudPainPoints from '@/components/services/cloud/CloudPainPoints';
import CloudServicesGrid from '@/components/services/cloud/CloudServicesGrid';
import CloudCaseStudy from '@/components/services/cloud/CloudCaseStudy';
import CloudTechStack from '@/components/services/cloud/CloudTechStack';
import CloudWhyUs from '@/components/services/cloud/CloudWhyUs';
import CloudTestimonial from '@/components/services/cloud/CloudTestimonial';
import CloudProcess from '@/components/services/cloud/CloudProcess';
import CloudFAQ from '@/components/services/cloud/CloudFAQ';
import CloudCTABottom from '@/components/services/cloud/CloudCTABottom';

// ═══ PAGE ASSEMBLY ═══
export default function CloudInfrastructurePage() {
  return (
    <div className="relative bg-white selection:bg-cyan-500/30">
      <main className="relative">
        {/* ── Dark: Hero ── */}
        <CloudHero
          headline={cloudInfrastructureData.hero.headline}
          subline={cloudInfrastructureData.hero.subline}
          imageSrc={cloudInfrastructureData.hero.imageSrc}
          imageAlt={cloudInfrastructureData.hero.imageAlt}
          badge={cloudInfrastructureData.hero.badge}
          cta={cloudInfrastructureData.hero.cta}
          socialProof={cloudInfrastructureData.hero.socialProof}
        />

        {/* ── Light: Trust Stats ── */}
        <CloudTrustStats stats={cloudInfrastructureData.stats} />

        {/* ── Dark: Pain Points ── */}
        <CloudPainPoints
          sectionLabel={cloudInfrastructureData.painPoints.sectionLabel}
          headline={cloudInfrastructureData.painPoints.headline}
          subline={cloudInfrastructureData.painPoints.subline}
          points={cloudInfrastructureData.painPoints.points}
        />

        {/* ── Dark: Services Grid ── */}
        <CloudServicesGrid services={cloudInfrastructureData.services} />

        {/* ── Light: Process Timeline ── */}
        <CloudProcess
          sectionLabel={cloudInfrastructureData.process.sectionLabel}
          headline={cloudInfrastructureData.process.headline}
          steps={cloudInfrastructureData.process.steps}
        />

        {/* ── Dark: Case Study ── */}
        <CloudCaseStudy
          label={cloudInfrastructureData.caseStudy.label}
          headline={cloudInfrastructureData.caseStudy.headline}
          industry={cloudInfrastructureData.caseStudy.industry}
          challenge={cloudInfrastructureData.caseStudy.challenge}
          solution={cloudInfrastructureData.caseStudy.solution}
          outcome={cloudInfrastructureData.caseStudy.outcome}
          imageSrc={cloudInfrastructureData.caseStudy.imageSrc}
          testimonial={cloudInfrastructureData.caseStudy.testimonial}
        />

        {/* ── Light: Tech Stack ── */}
        <CloudTechStack techStack={cloudInfrastructureData.techStack} />

        {/* ── Dark: Why Us ── */}
        <CloudWhyUs
          sectionLabel={cloudInfrastructureData.whyUs.sectionLabel}
          headline={cloudInfrastructureData.whyUs.headline}
          differentiators={cloudInfrastructureData.whyUs.differentiators}
        />

        {/* ── Light: Testimonial ── */}
        <CloudTestimonial testimonial={cloudInfrastructureData.testimonial} />

        {/* ── Light: FAQ ── */}
        <CloudFAQ faqs={cloudInfrastructureData.faqs} />

        {/* ── Dark: CTA Footer ── */}
        <CloudCTABottom cta={cloudInfrastructureData.ctaFooter} />
      </main>
    </div>
  );
}
