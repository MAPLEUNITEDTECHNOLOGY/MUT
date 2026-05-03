'use client';

import React from 'react';
import { motion } from 'motion/react';

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
}

export default function BlurText({ 
  text, 
  delay = 0, 
  className = "",
  animateBy = 'words'
}: BlurTextProps) {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');

  return (
    <div className={`inline-flex flex-wrap ${className}`}>
      {elements.map((el, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: 'blur(20px)', y: 20 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: (delay / 1000) + (i * 0.05),
            ease: [0.22, 1, 0.36, 1]
          }}
          className="inline-block"
          style={{ marginRight: animateBy === 'words' ? '0.25em' : '0' }}
        >
          {el === ' ' ? '\u00A0' : el}
        </motion.span>
      ))}
    </div>
  );
}
