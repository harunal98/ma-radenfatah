"use client";

import React, { useState, useEffect } from 'react';

const slides = [
  { id: 1, src: '/assets/slide1.jpg', alt: 'Fasilitas Utama 1' },
  { id: 2, src: '/assets/slide2.jpg', alt: 'Fasilitas Utama 2' },
  { id: 3, src: '/assets/slide3.jpg', alt: 'Kegiatan Siswa 1' },
  { id: 4, src: '/assets/slide4.jpg', alt: 'Kegiatan Siswa 2' },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const getCardStyle = (index: number) => {
    let diff = index - currentIndex;

    if (diff === 0) {
      // Center (Active)
      return {
        transform: 'translateX(0) scale(1)',
        zIndex: 10,
        opacity: 1,
        boxShadow: '0 20px 50px rgba(16, 185, 129, 0.35)',
      };
    } else if (diff === 1 || diff === -3) {
      // Right
      return {
        transform: 'translateX(50%) scale(0.75)',
        zIndex: 5,
        opacity: 0.6,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
      };
    } else if (diff === -1 || diff === 3) {
      // Left
      return {
        transform: 'translateX(-50%) scale(0.75)',
        zIndex: 5,
        opacity: 0.6,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
      };
    } else {
      // Hidden / Background
      return {
        transform: 'translateX(0) scale(0.5)',
        zIndex: 1,
        opacity: 0,
        boxShadow: 'none',
      };
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '650px', height: '550px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* Cards Container */}
      <div style={{ position: 'relative', width: '100%', height: '420px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {slides.map((slide, index) => {
          const style = getCardStyle(index);
          const isActive = index === currentIndex;
          return (
            <div 
              key={slide.id}
              onClick={() => setCurrentIndex(index)}
              style={{
                position: 'absolute',
                width: '55%',
                height: '100%',
                borderRadius: '32px',
                overflow: 'hidden',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                ...style
              }}
            >
              <img src={slide.src} alt={slide.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              {/* Overlay for inactive cards to make center card pop */}
              <div 
                style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'black', 
                  opacity: isActive ? 0 : 0.3, 
                  transition: 'opacity 0.6s',
                  pointerEvents: 'none'
                }}
              />
              {/* Subtle green tint overlay on all images to match theme */}
              <div 
                style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'linear-gradient(to top, rgba(16, 185, 129, 0.2), transparent)', 
                  pointerEvents: 'none'
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div style={{ display: 'flex', gap: '16px', marginTop: '40px', alignItems: 'center' }}>
        {slides.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: isActive ? '36px' : '12px',
                height: '12px',
                borderRadius: '6px',
                background: isActive ? 'var(--accent)' : 'rgba(16, 185, 129, 0.2)',
                border: 'none',
                boxShadow: isActive ? '0 0 0 4px rgba(245, 158, 11, 0.2)' : 'none',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer'
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          );
        })}
      </div>
      
    </div>
  );
}
