'use client';
import React, { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';

interface GlobeProps {
  theme?: 'dark' | 'light';
  className?: string;
}

export default function GlobeVideo({ theme = 'light', className = '' }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  // 1. Observe container width to keep the Globe perfectly crisp and visible
  useEffect(() => {
    if (!containerRef.current) return;
    
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setWidth(entry.contentRect.width);
      }
    });
    
    resizeObserver.observe(containerRef.current);
    
    return () => resizeObserver.disconnect();
  }, []);

  // 2. Render the Cobe globe dynamically
  useEffect(() => {
    if (!canvasRef.current || width === 0) return;

    let phi = 0;
    const isDark = theme === 'dark';
    
    // The previous black circle error was caused by clashing baseColor calculations.
    // We now use pure configurations that guarantee exactly rendered map continents.
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: isDark ? 1 : 0, 
      diffuse: 1.2,
      mapSamples: 20000,
      // isDark: 6 ensures bright white dots. !isDark: 1.2 ensures standard dark grey dots.
      mapBrightness: isDark ? 6 : 1.2,
      // Pure black for Dark mode, pure white for Light mode
      baseColor: isDark ? [0, 0, 0] : [1, 1, 1], 
      // Bright red explicitly for office locations
      markerColor: [0.9, 0.1, 0.2], 
      // Glow dynamically matches the container BG (#0f1a37 for Hero, #f8fafc for slate-50)
      glowColor: isDark ? [15/255, 26/255, 55/255] : [248/255, 250/255, 252/255], 
      markers: [
        { location: [59.3293, 18.0686], size: 0.08 }, // Stockholm, SE
        { location: [30.2672, -97.7431], size: 0.08 }, // Austin, US
        { location: [1.3521, 103.8198], size: 0.08 }, // Singapore, SG
      ],
      onRender: (state) => {
        // Slowly auto-rotates the globe horizontally
        state.phi = phi;
        phi += 0.005;
      },
    } as any);

    return () => {
      globe.destroy();
    };
  }, [width, theme]);

  return (
    <div 
      ref={containerRef}
      className={`relative flex items-center justify-center w-full aspect-square mx-auto ${className}`}
    >
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", aspectRatio: 1 }}
        className="opacity-100 transition-opacity duration-1000"
      />
    </div>
  );
}
