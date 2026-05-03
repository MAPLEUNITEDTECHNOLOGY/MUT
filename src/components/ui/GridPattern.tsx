'use client';

import React from 'react';

export const GridPattern = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 z-0 pointer-events-none ${className}`}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
    </div>
  );
};
