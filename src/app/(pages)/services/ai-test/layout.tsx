import React from 'react';
import { Instrument_Serif, Barlow } from 'next/font/google';
import '@/styles/ai-test.css';

const instrumentSerif = Instrument_Serif({ 
  weight: '400',
  subsets: ['latin'],
  style: 'italic',
  variable: '--font-instrument-serif'
});

const barlow = Barlow({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-barlow'
});

export default function AITestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`min-h-screen bg-black ${instrumentSerif.variable} ${barlow.variable}`}>
      {children}
    </div>
  );
}
