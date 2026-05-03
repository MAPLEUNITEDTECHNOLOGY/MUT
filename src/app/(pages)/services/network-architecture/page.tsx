import React from 'react';
import { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Network Architecture | MU Technologies',
  description: '10Gbps+ throughput. Sub-5ms edge latency. Zero-downtime maintenance for enterprise-grade networking.',
};

export default function NetworkArchitecturePage() {
  return (
    <ServicePageTemplate 
      title="Network Architecture"
      highlightWord="Architecture"
      subtitle="10Gbps+ throughput. Sub-5ms edge latency. Zero-downtime maintenance."
      stats={[
        { value: '10G+', label: 'Throughput Speed' },
        { value: '<5ms', label: 'Edge Latency' },
        { value: 'Zero', label: 'Downtime Fabric' }
      ]}
      body="We design SD-WAN and hyper-converged networks that handle 10Gbps+ throughput with sub-5ms latency at the edge. Our network fabric is built for zero-downtime maintenance windows."
      methodology={[
        "Network Discovery",
        "Architecture Design",
        "Phased Deployment",
        "Performance Validation"
      ]}
    />
  );
}
