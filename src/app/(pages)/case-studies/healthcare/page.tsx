import React from 'react';
import { Metadata } from 'next';
import { CaseStudyTemplate } from '@/components/case-studies/CaseStudyTemplate';

export const metadata: Metadata = {
  title: 'Healthcare Case Study | MU Technologies',
  description: 'HIPAA-Compliant Cloud Migration for a 3,000-Bed Hospital Network. Read the full case study on our enterprise deployment.',
};

export default function HealthcareCaseStudyPage() {
  return (
    <CaseStudyTemplate 
      title="HIPAA-Compliant Cloud Migration for a 3,000-Bed Hospital Network"
      highlightWord="Cloud Migration"
      industrySlug="healthcare"
      industryName="Healthcare"
      imageSrc="cs_healthcare.png"
      results={[
        { value: '100%', label: 'HIPAA Compliance' },
        { value: '40%', label: 'Infra Cost Reduction' },
        { value: '99.99%', label: 'Uptime' }
      ]}
    />
  );
}
