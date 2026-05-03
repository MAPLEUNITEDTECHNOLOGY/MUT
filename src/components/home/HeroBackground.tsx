'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const IMAGES = [
  '/images/hero_minimal_infra.png',
  '/images/hero-cinematic.jpg',
  '/images/hero_fiber_optics.png',
  '/images/hero_server_aisle.png',
]

export default function HeroBackground() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute inset-0 z-0">
      {IMAGES.map((src, index) => (
        <div 
          key={src}
          className={`absolute inset-0 w-full h-full transition-opacity duration-[1500ms] ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={src}
            alt={`Hero background ${index + 1}`}
            fill
            quality={100}
            priority={index === 0}
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* Lighter gradient overlays — preserves image vibrancy */}
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#0f1a37]/80 via-[#0f1a37]/50 to-[#0f1a37]/10" />
      <div className="absolute inset-x-0 bottom-0 h-40 z-20 bg-gradient-to-t from-[#0f1a37]/70 to-transparent" />
    </div>
  )
}
