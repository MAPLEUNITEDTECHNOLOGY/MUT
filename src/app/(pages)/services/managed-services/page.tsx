'use client';

import React from 'react';
import { managedServicesData } from '@/lib/managed-services.data';
import ManagedHero from '@/components/services/managed/ManagedHero';
import ManagedTrustStats from '@/components/services/managed/ManagedTrustStats';
import ManagedOverview from '@/components/services/managed/ManagedOverview';
import ManagedServicesGrid from '@/components/services/managed/ManagedServicesGrid';
import ManagedProcess from '@/components/services/managed/ManagedProcess';
import ManagedDifferentiators from '@/components/services/managed/ManagedDifferentiators';
import ManagedCaseStudy from '@/components/services/managed/ManagedCaseStudy';
import ManagedTechStack from '@/components/services/managed/ManagedTechStack';
import ManagedWhyUs from '@/components/services/managed/ManagedWhyUs';
import ManagedTestimonial from '@/components/services/managed/ManagedTestimonial';
import ManagedFAQ from '@/components/services/managed/ManagedFAQ';
import ManagedCTABottom from '@/components/services/managed/ManagedCTABottom';

// â•â•â• PAGE ASSEMBLY â•â•â•
export default function ManagedServicesPage() {
  return (
    <div className="relative bg-white selection:bg-red-600/30">
      <main className="relative">
        {/* [1] Dark: Hero */}
        <ManagedHero
          headline={managedServicesData.hero.headline}
          subline={managedServicesData.hero.subline}
          imageSrc={managedServicesData.hero.imageSrc}
          imageAlt={managedServicesData.hero.imageAlt}
          badge={managedServicesData.hero.badge}
          cta={managedServicesData.hero.cta}
          socialProof={managedServicesData.hero.socialProof}
        />

        {/* [2] Dark: Trust Stats */}
        <ManagedTrustStats stats={managedServicesData.stats} />

        {/* [3] Light+Dark: Overview & Problem */}
        <ManagedOverview
          sectionLabel={managedServicesData.overview.sectionLabel}
          headline={managedServicesData.overview.headline}
          subline={managedServicesData.overview.subline}
          rows={managedServicesData.overview.rows}
          painPoints={managedServicesData.overview.painPoints}
        />

        {/* [4] Dark: Services Grid */}
        <ManagedServicesGrid services={managedServicesData.services} />

        {/* [5] Light: Process */}
        <ManagedProcess
          sectionLabel={managedServicesData.process.sectionLabel}
          headline={managedServicesData.process.headline}
          steps={managedServicesData.process.steps}
        />

        {/* [6] Dark: Differentiators */}
        <ManagedDifferentiators
          sectionLabel={managedServicesData.differentiators.sectionLabel}
          headline={managedServicesData.differentiators.headline}
          subline={managedServicesData.differentiators.subline}
          items={managedServicesData.differentiators.items}
        />

        {/* [7] Dark: Case Study */}
        <ManagedCaseStudy
          label={managedServicesData.caseStudy.label}
          headline={managedServicesData.caseStudy.headline}
          industry={managedServicesData.caseStudy.industry}
          challenge={managedServicesData.caseStudy.challenge}
          solution={managedServicesData.caseStudy.solution}
          outcome={managedServicesData.caseStudy.outcome}
          imageSrc={managedServicesData.caseStudy.imageSrc}
          testimonial={managedServicesData.caseStudy.testimonial}
        />

        {/* [8] Light: Tech Stack */}
        <ManagedTechStack techStack={managedServicesData.techStack} />

        {/* [9] Dark: Why Us */}
        <ManagedWhyUs
          sectionLabel={managedServicesData.whyUs.sectionLabel}
          headline={managedServicesData.whyUs.headline}
          differentiators={managedServicesData.whyUs.differentiators}
        />

        {/* [10] Light: Testimonial */}
        <ManagedTestimonial testimonial={managedServicesData.testimonial} />

        {/* [11] Light: FAQ */}
        <ManagedFAQ faqs={managedServicesData.faqs} />

        {/* [12] Dark: Bottom CTA */}
        <ManagedCTABottom cta={managedServicesData.ctaFooter} />
      </main>
    </div>
  );
}

