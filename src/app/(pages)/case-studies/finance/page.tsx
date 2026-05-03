import React from 'react';
import { Metadata } from 'next';
import { CaseStudyTemplate } from '@/components/case-studies/CaseStudyTemplate';

export const metadata: Metadata = {
  title: 'Finance Case Study | MU Technologies',
  description: 'How a Regional Bank Eliminated 94% of Security Incidents in 12 Months. Read the full case study on our enterprise deployment.',
};

export default function FinanceCaseStudyPage() {
  return (
    <CaseStudyTemplate 
      title="How a Regional Bank Eliminated 94% of Security Incidents in 12 Months"
      highlightWord="94%"
      industrySlug="finance"
      industryName="Finance"
      imageSrc="cs_finance.png"
      results={[
        { value: '94%', label: 'Incident Reduction' },
        { value: '$1.2M', label: 'Annual Savings' },
        { value: 'Zero', label: 'Breach Events' }
      ]}
    />
  );
}
