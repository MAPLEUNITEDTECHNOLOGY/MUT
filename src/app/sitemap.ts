import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mutechnologies.com';
  
  const routes = [
    '',
    '/about',
    '/contact',
    '/industries',
    '/insights',
    '/heritage',
    '/services',
    '/services/ai-transformation',
    '/services/cloud-economics',
    '/services/managed-services',
    '/services/network-architecture',
    '/services/video-surveillance',
    '/services/zero-trust',
    '/services/disaster-recovery',
    '/services/digital-marketing',
    '/case-studies/finance',
    '/case-studies/healthcare',
    '/case-studies/logistics',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
