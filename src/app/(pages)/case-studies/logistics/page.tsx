import React from 'react';
import { Metadata } from 'next';
import { CaseStudyTemplate } from '@/components/case-studies/CaseStudyTemplate';

export const metadata: Metadata = {
  title: 'Logistics Case Study | MU Technologies',
  description: 'Real-Time Network Visibility for a 200-Location Logistics Fleet. Read the full case study on our enterprise deployment.',
};

export default function LogisticsCaseStudyPage() {
  return (
    <CaseStudyTemplate 
      title="Real-Time Network Visibility for a 200-Location Logistics Fleet"
      highlightWord="Network Visibility"
      industrySlug="logistics"
      industryName="Logistics"
      imageSrc="cs_logistics.png"
      results={[
        { value: '200', label: 'Sites Connected' },
        { value: '<2ms', label: 'Latency' },
        { value: '30%', label: 'Fuel Savings (AI)' }
      ]}
    />
  );
}
