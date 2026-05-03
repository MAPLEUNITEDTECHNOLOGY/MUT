import React from 'react';
import { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Video Surveillance & Monitoring | MU Technologies',
  description: 'Enterprise CCTV and IP camera systems with 24/7 intelligent monitoring, AI-powered analytics, and centralized command center operations.',
};

export default function VideoSurveillancePage() {
  return (
    <ServicePageTemplate 
      title="Video Surveillance & Monitoring"
      highlightWord="Monitoring"
      subtitle="Enterprise-grade CCTV infrastructure with AI-powered analytics and 24/7 centralized monitoring."
      stats={[
        { value: '10K+', label: 'Cameras Managed' },
        { value: '24/7', label: 'Live Monitoring' },
        { value: '99.9%', label: 'Uptime SLA' }
      ]}
      body="We design, deploy, and manage end-to-end video surveillance ecosystems — from high-resolution IP camera networks and edge-based analytics to centralized command centers with real-time alerting. Our solutions integrate with access control, intrusion detection, and incident management platforms to deliver holistic physical security for enterprise campuses, data centers, retail chains, and critical infrastructure."
      methodology={[
        "Site Survey & Risk Assessment",
        "Camera Placement & Network Design",
        "NVR/VMS Deployment & Integration",
        "AI Analytics & Real-Time Alerting",
        "24/7 Monitoring & Incident Response"
      ]}
    />
  );
}
