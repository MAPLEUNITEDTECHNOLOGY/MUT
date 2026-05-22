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

// â•â•â• PAGE ASSEMBLY â•â•â•
export default function CloudInfrastructurePage() {
  return (
    <div className="relative bg-white selection:bg-red-600/30">
      <main className="relative">
        {/* â”€â”€ Dark: Hero â”€â”€ */}
        <CloudHero
          headline={cloudInfrastructureData.hero.headline}
          subline={cloudInfrastructureData.hero.subline}
          imageSrc={cloudInfrastructureData.hero.imageSrc}
          imageAlt={cloudInfrastructureData.hero.imageAlt}
          badge={cloudInfrastructureData.hero.badge}
          cta={cloudInfrastructureData.hero.cta}
          socialProof={cloudInfrastructureData.hero.socialProof}
        />

        {/* â”€â”€ Light: Trust Stats â”€â”€ */}
        <CloudTrustStats stats={cloudInfrastructureData.stats} />

        {/* â”€â”€ Dark: Pain Points â”€â”€ */}
        <CloudPainPoints
          sectionLabel={cloudInfrastructureData.painPoints.sectionLabel}
          headline={cloudInfrastructureData.painPoints.headline}
          subline={cloudInfrastructureData.painPoints.subline}
          points={cloudInfrastructureData.painPoints.points}
        />

        {/* â”€â”€ Dark: Services Grid â”€â”€ */}
        <CloudServicesGrid services={cloudInfrastructureData.services} />

        {/* â”€â”€ Light: Process Timeline â”€â”€ */}
        <CloudProcess
          sectionLabel={cloudInfrastructureData.process.sectionLabel}
          headline={cloudInfrastructureData.process.headline}
          steps={cloudInfrastructureData.process.steps}
        />

        {/* â”€â”€ Dark: Case Study â”€â”€ */}
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

        {/* â”€â”€ Light: Tech Stack â”€â”€ */}
        <CloudTechStack techStack={cloudInfrastructureData.techStack} />

        {/* â”€â”€ Dark: Why Us â”€â”€ */}
        <CloudWhyUs
          sectionLabel={cloudInfrastructureData.whyUs.sectionLabel}
          headline={cloudInfrastructureData.whyUs.headline}
          differentiators={cloudInfrastructureData.whyUs.differentiators}
        />

        {/* â”€â”€ Light: Testimonial â”€â”€ */}
        <CloudTestimonial testimonial={cloudInfrastructureData.testimonial} />

        {/* â”€â”€ Light: FAQ â”€â”€ */}
        <CloudFAQ faqs={cloudInfrastructureData.faqs} />

        {/* â”€â”€ Dark: CTA Footer â”€â”€ */}
        <CloudCTABottom cta={cloudInfrastructureData.ctaFooter} />
      </main>
    </div>
  );
}

