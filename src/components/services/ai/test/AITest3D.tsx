'use client';
import React from 'react';
import { motion } from 'motion/react';

export default function AITest3D() {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.15),transparent_70%)]" />
      
      <svg width="600" height="600" viewBox="0 0 600 600" className="relative z-10 filter drop-shadow-[0_0_30px_rgba(0,229,255,0.3)]">
        {/* Core sphere */}
        <motion.circle
          cx="300"
          cy="300"
          r="80"
          fill="none"
          stroke="#00E5FF"
          strokeWidth="0.5"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />

        {/* Neural Nodes & Paths */}
        {[...Array(12)].map((_, i) => (
          <React.Fragment key={i}>
            <motion.line
              x1="300"
              y1="300"
              x2={300 + 200 * Math.cos((i * 30 * Math.PI) / 180)}
              y2={300 + 200 * Math.sin((i * 30 * Math.PI) / 180)}
              stroke="#00E5FF"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
            />
            <motion.circle
              cx={300 + 200 * Math.cos((i * 30 * Math.PI) / 180)}
              cy={300 + 200 * Math.sin((i * 30 * Math.PI) / 180)}
              r="4"
              fill="#00E5FF"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.5, 1] }}
              transition={{ duration: 1, delay: i * 0.1 + 1, repeat: Infinity, repeatDelay: 3 }}
            />
          </React.Fragment>
        ))}

        {/* Orbiting Rings */}
        <motion.ellipse
          cx="300"
          cy="300"
          rx="250"
          ry="100"
          fill="none"
          stroke="#00E5FF"
          strokeWidth="0.5"
          strokeOpacity="0.2"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.ellipse
          cx="300"
          cy="300"
          rx="100"
          ry="250"
          fill="none"
          stroke="#00E5FF"
          strokeWidth="0.5"
          strokeOpacity="0.2"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating Data Points */}
        {[...Array(20)].map((_, i) => (
          <motion.circle
            key={`point-${i}`}
            cx={Math.random() * 600}
            cy={Math.random() * 600}
            r="1.5"
            fill="#00E5FF"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 5,
              repeat: Infinity,
            }}
          />
        ))}
      </svg>

      {/* Floating Labels */}
      <motion.div 
        className="absolute top-1/4 left-10 glass-card-dark px-4 py-2 text-[10px] font-black tracking-[0.2em] text-cyan-400"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        NEURAL PROCESSING UNIT
      </motion.div>
      <motion.div 
        className="absolute bottom-1/4 right-10 glass-card-dark px-4 py-2 text-[10px] font-black tracking-[0.2em] text-cyan-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        LATENCY: 0.04ms
      </motion.div>
    </div>
  );
}
