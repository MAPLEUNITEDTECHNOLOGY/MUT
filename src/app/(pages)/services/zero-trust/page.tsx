import React from 'react';
import { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Zero-Trust Security | MU Technologies',
  description: 'Identity is the new perimeter. Trust nothing. Verify everything. We implement ZTNA frameworks that reduce breach blast radius by 94%.',
};

export default function ZeroTrustPage() {
  return (
    <ServicePageTemplate 
      title="Zero-Trust Security"
      highlightWord="Security"
      subtitle="Identity is the new perimeter. Trust nothing. Verify everything."
      stats={[
        { value: '94%', label: 'Blast Radius Reduction' },
        { value: 'Zero', label: 'Implicit Trust' },
        { value: 'ZTNA', label: 'Native Architecture' }
      ]}
      body="We implement ZTNA frameworks that authenticate every user, device, and workload — eliminating lateral movement and reducing breach blast radius by 94%."
      methodology={[
        "Identity Mapping",
        "Policy Design",
        "Phased ZTNA Rollout",
        "Continuous Verification"
      ]}
    />
  );
}
