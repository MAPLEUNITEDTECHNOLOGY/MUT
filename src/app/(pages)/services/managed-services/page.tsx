import React from 'react';
import { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Managed Services | MU Technologies',
  description: '50,000+ endpoints monitored. Sub-15-min MTTR. Your operations never sleep with our global NOC coverage.',
};

export default function ManagedServicesPage() {
  return (
    <ServicePageTemplate 
      title="Managed Services"
      highlightWord="Managed"
      subtitle="50,000+ endpoints monitored. Sub-15-min MTTR. Your ops never sleep."
      stats={[
        { value: '50k+', label: 'Endpoints Monitored' },
        { value: '<15m', label: 'MTTR Incident Time' },
        { value: '24/7', label: 'NOC Coverage' }
      ]}
      body="Our 24/7 NOC team monitors 50,000+ endpoints across client environments. With sub-15-minute MTTR on P1 incidents and dedicated account engineers, your operations never sleep."
      methodology={[
        "Environment Onboarding",
        "Baseline & Alerting",
        "Incident Response",
        "Continuous Improvement"
      ]}
    />
  );
}
