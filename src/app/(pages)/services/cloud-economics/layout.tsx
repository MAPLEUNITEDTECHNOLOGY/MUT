import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud Infrastructure & Strategic Economics | MU Technologies',
  description:
    'Enterprise cloud infrastructure engineered for scale, speed, and security. From migration to optimization — 60% avg cost reduction, 99.99% uptime SLA, 500+ migrations delivered.',
  keywords: [
    'Cloud Infrastructure',
    'Cloud Migration',
    'Enterprise Cloud',
    'Multi-Cloud Orchestration',
    'Cloud Cost Optimization',
    'FinOps',
    'Hybrid Cloud',
    'Cloud Security',
    'DevOps Automation',
    'MU Technologies',
  ],
  openGraph: {
    title: 'Cloud Infrastructure & Strategic Economics | MU Technologies',
    description:
      'Enterprise cloud infrastructure engineered for scale, speed, and security. 60% avg cost reduction, 99.99% uptime SLA.',
    url: 'https://mutechnologies.com/services/cloud-economics',
    siteName: 'MU Technologies',
    images: [
      {
        url: '/images/services/cloud/hero_bg_cloud.png',
        width: 1200,
        height: 630,
        alt: 'Enterprise data center with blue server rack lighting',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud Infrastructure & Strategic Economics | MU Technologies',
    description:
      'Enterprise cloud infrastructure engineered for scale, speed, and security. 60% avg cost reduction, 99.99% uptime SLA.',
    images: ['/images/services/cloud/hero_bg_cloud.png'],
  },
  alternates: {
    canonical: 'https://mutechnologies.com/services/cloud-economics',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
};

export default function CloudEconomicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'MU Technologies',
        url: 'https://mutechnologies.com',
        description:
          'Enterprise IT infrastructure and cloud solutions provider.',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-800-555-0147',
          contactType: 'sales',
          areaServed: ['US', 'EU', 'APAC'],
        },
      },
      {
        '@type': 'WebSite',
        name: 'MU Technologies',
        url: 'https://mutechnologies.com',
      },
      {
        '@type': 'Service',
        name: 'Cloud Infrastructure & Strategic Economics',
        provider: { '@type': 'Organization', name: 'MU Technologies' },
        serviceType: 'Cloud Infrastructure',
        description:
          'Enterprise cloud infrastructure engineered for scale, speed, and security. From migration to optimization with 60% avg cost reduction and 99.99% uptime SLA.',
        areaServed: ['US', 'EU', 'APAC'],
        offers: {
          '@type': 'Offer',
          name: 'Free Cloud Assessment',
          price: '0',
          priceCurrency: 'USD',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
