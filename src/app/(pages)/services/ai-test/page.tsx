'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AITestHeroNew from '@/components/services/ai/test/AITestHeroNew';
import AITestSolutionsGrid from '@/components/services/ai/test/AITestSolutionsGrid';
import AITestROINew from '@/components/services/ai/test/AITestROINew';
import AITestCTANew from '@/components/services/ai/test/AITestCTANew';
import '@/styles/ai-test.css';

export default function AITestPage() {
  return (
    <main className="min-h-screen bg-[#020617]">
      <Header />
      <AITestHeroNew />
      <AITestSolutionsGrid />
      <AITestROINew />
      <AITestCTANew />
      <Footer />
    </main>
  );
}
