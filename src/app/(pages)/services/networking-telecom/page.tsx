'use client';

import React from 'react';
import { networkingTelecomData } from '@/lib/networking-telecom.data';
import NetTelecomHero from '@/components/services/networking-telecom/NetTelecomHero';
import NetTelecomTrustStats from '@/components/services/networking-telecom/NetTelecomTrustStats';
import NetTelecomOverview from '@/components/services/networking-telecom/NetTelecomOverview';
import NetTelecomServicesGrid from '@/components/services/networking-telecom/NetTelecomServicesGrid';
import NetTelecomProcess from '@/components/services/networking-telecom/NetTelecomProcess';
import NetTelecomDifferentiators from '@/components/services/networking-telecom/NetTelecomDifferentiators';
import NetTelecomCaseStudy from '@/components/services/networking-telecom/NetTelecomCaseStudy';
import NetTelecomTechStack from '@/components/services/networking-telecom/NetTelecomTechStack';
import NetTelecomWhyUs from '@/components/services/networking-telecom/NetTelecomWhyUs';
import NetTelecomTestimonial from '@/components/services/networking-telecom/NetTelecomTestimonial';
import NetTelecomFAQ from '@/components/services/networking-telecom/NetTelecomFAQ';
import NetTelecomCTABottom from '@/components/services/networking-telecom/NetTelecomCTABottom';

export default function NetworkingTelecomPage() {
  return (
    <div className="relative bg-white selection:bg-red-500/30">
      <main className="relative">
        {/* [1] Dark: Hero */}
        <NetTelecomHero
          headline={networkingTelecomData.hero.headline}
          subline={networkingTelecomData.hero.subline}
          imageSrc={networkingTelecomData.hero.imageSrc}
          imageAlt={networkingTelecomData.hero.imageAlt}
          badge={networkingTelecomData.hero.badge}
          cta={networkingTelecomData.hero.cta}
          socialProof={networkingTelecomData.hero.socialProof}
        />

        {/* [2] Dark: Trust Stats */}
        <NetTelecomTrustStats stats={networkingTelecomData.stats} />

        {/* [3] Light+Dark: Overview & Problem */}
        <NetTelecomOverview
          sectionLabel={networkingTelecomData.overview.sectionLabel}
          headline={networkingTelecomData.overview.headline}
          subline={networkingTelecomData.overview.subline}
          rows={networkingTelecomData.overview.rows}
          painPoints={networkingTelecomData.overview.painPoints}
        />

        {/* [4] Dark: Services Grid */}
        <NetTelecomServicesGrid services={networkingTelecomData.services} />

        {/* [5] Light: Process */}
        <NetTelecomProcess
          sectionLabel={networkingTelecomData.process.sectionLabel}
          headline={networkingTelecomData.process.headline}
          steps={networkingTelecomData.process.steps}
        />

        {/* [6] Dark: Differentiators */}
        <NetTelecomDifferentiators
          sectionLabel={networkingTelecomData.differentiators.sectionLabel}
          headline={networkingTelecomData.differentiators.headline}
          subline={networkingTelecomData.differentiators.subline}
          items={networkingTelecomData.differentiators.items}
        />

        {/* [7] Dark: Case Study */}
        <NetTelecomCaseStudy
          label={networkingTelecomData.caseStudy.label}
          headline={networkingTelecomData.caseStudy.headline}
          industry={networkingTelecomData.caseStudy.industry}
          challenge={networkingTelecomData.caseStudy.challenge}
          solution={networkingTelecomData.caseStudy.solution}
          outcome={networkingTelecomData.caseStudy.outcome}
          imageSrc={networkingTelecomData.caseStudy.imageSrc}
          testimonial={networkingTelecomData.caseStudy.testimonial}
        />

        {/* [8] Light: Tech Stack */}
        <NetTelecomTechStack techStack={networkingTelecomData.techStack} />

        {/* [9] Dark: Why Us */}
        <NetTelecomWhyUs
          sectionLabel={networkingTelecomData.whyUs.sectionLabel}
          headline={networkingTelecomData.whyUs.headline}
          differentiators={networkingTelecomData.whyUs.differentiators}
        />

        {/* [10] Light: Testimonial */}
        <NetTelecomTestimonial testimonial={networkingTelecomData.testimonial} />

        {/* [11] Light: FAQ */}
        <NetTelecomFAQ faqs={networkingTelecomData.faqs} />

        {/* [12] Dark: Bottom CTA */}
        <NetTelecomCTABottom cta={networkingTelecomData.ctaFooter} />
      </main>
    </div>
  );
}
