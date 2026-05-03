import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI & Automation Transformation | MU Technologies',
  description: 'Enterprise-grade AI systems engineered for scale. Deploy autonomous intelligence, predictive analytics, and custom LLMs in 90 days. Drive measurable ROI with MU Technologies.',
  keywords: ['Enterprise AI Strategy', 'Intelligent Automation', 'IPA', 'Predictive Analytics', 'Autonomous Workflows', 'MU Technologies']
};

export default function AITransformationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
