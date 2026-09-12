"use client";

import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';

export default function GalleryGrid({ images }: { images: any[] }) {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <>
      <div style={{ columnWidth: '300px', columnGap: '24px' }}>
        {images.map((img) => (
          <div 
            key={img.id} 
            className="glass"
            style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', borderRadius: '16px', breakInside: 'avoid', marginBottom: '24px' }}
            onClick={() => setSelectedImg(img.imageUrl || img.url)}
            onMouseEnter={(e) => {
              const overlay = e.currentTarget.querySelector('.overlay') as HTMLElement;
              const image = e.currentTarget.querySelector('.img-zoom') as HTMLElement;
              if (overlay) overlay.style.opacity = '1';
              if (image) image.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              const overlay = e.currentTarget.querySelector('.overlay') as HTMLElement;
              const image = e.currentTarget.querySelector('.img-zoom') as HTMLElement;
              if (overlay) overlay.style.opacity = '0';
              if (image) image.style.transform = 'scale(1)';
            }}
          >
            <img 
              src={img.imageUrl || img.url} 
              alt={img.title} 
              className="img-zoom"
              style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.5s ease' }} 
            />
            <div 
              className="overlay"
              style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.9), rgba(15,23,42,0.2))', opacity: 0, transition: 'opacity 0.3s ease', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '24px' }}
            >
              <span style={{ background: 'var(--primary)', color: 'white', padding: '4px 10px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 'bold', alignSelf: 'flex-start', marginBottom: '8px' }}>
                {img.category}
              </span>
              <h3 style={{ color: 'white', fontSize: '1.25rem', margin: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {img.title}
                <Maximize2 size={20} color="rgba(255,255,255,0.7)" />
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div 
          style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(15,23,42,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)' }}
          onClick={() => setSelectedImg(null)}
        >
          <button 
            style={{ position: 'absolute', top: '24px', right: '24px', background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', padding: '12px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => setSelectedImg(null)}
          >
            <X size={24} />
          </button>
          <img 
            src={selectedImg} 
            alt="Enlarged" 
            style={{ maxWidth: '90%', maxHeight: '90vh', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }} 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
