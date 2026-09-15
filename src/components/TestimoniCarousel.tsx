'use client';
import React, { useState } from 'react';
import { GraduationCap, Quote, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function TestimoniCarousel() {
  const testimonials = [
    {
      id: 1,
      name: "Finda Alifa",
      year: "2025",
      status: "Kuliah",
      statusColor: "rgba(16, 185, 129, 0.15)",
      statusText: "var(--primary-dark)",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
      quote: "\"Menembus Batas dengan Literasi\" Bagi saya, UTBK bukan sekadar tes matematika atau logika, melainkan tes ketahanan mental. Saya sempat merasa kurang percaya diri di beberapa subtes kuantitatif, tetapi saya memutuskan untuk memaksimalkan potensi saya di bidang kebahasaan. Alhamdulillah, strategi itu membuahkan hasil luar biasa dengan skor 629,41 pada Literasi dalam Bahasa Indonesia! Jangan pernah meremehkan kekuatan fokus pada kelebihan diri sendiri.\n\nStrategi Sukses: Finda menerapkan teknik membaca cepat (skimming dan scanning) serta rajin menganalisis struktur teks, yang membuatnya sukses besar di kategori tes literasi.",
      imgBg: "linear-gradient(135deg, #EF4444 0%, #B91C1C 100%)"
    },
    {
      id: 2,
      name: "Budi Santoso",
      year: "2024",
      status: "Kerja",
      statusColor: "rgba(245, 158, 11, 0.15)",
      statusText: "var(--accent-dark)",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
      quote: "Pengalaman belajar di MA Raden Fatah sangat membentuk karakter saya. Tidak hanya akademis, tetapi juga nilai-nilai religius dan sosial yang sangat aplikatif di dunia kerja saat ini. Terima kasih kepada seluruh guru yang telah membimbing kami dengan sabar.",
      imgBg: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section style={{ padding: '80px 24px 20px', background: 'var(--bg-color)', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary)', padding: '6px 16px', borderRadius: '100px', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '16px' }}>
              <GraduationCap size={16} /> ALUMNI
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px', letterSpacing: '-0.02em' }}>
              Kata Mereka Tentang Kami
            </h2>
            <p style={{ color: 'var(--text-light)', fontSize: '1.125rem' }}>
              Cerita dan pengalaman alumni kami setelah menempuh pendidikan di sini.
            </p>
          </div>
          <Link href="/alumni" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary-dark)', fontWeight: 700, textDecoration: 'none', transition: 'all 0.3s' }} className="hover-link">
            Lihat Semua <ArrowRight size={20} />
          </Link>
        </div>

        {/* Carousel Card */}
        <div style={{ background: 'white', borderRadius: '32px', padding: 'clamp(24px, 4vw, 48px)', position: 'relative', boxShadow: '0 20px 40px rgba(0,0,0,0.04)' }}>
          {/* Huge Quote Watermark */}
          <div style={{ position: 'absolute', top: '40px', right: '40px', color: '#F1F5F9', opacity: 0.6 }}>
            <Quote size={120} fill="currentColor" strokeWidth={0} />
          </div>

          <div style={{ display: 'flex', gap: '40px', alignItems: 'center', position: 'relative', zIndex: 1 }} className="flex-col-mobile">
            {/* Image section */}
            <div style={{ flexShrink: 0 }}>
              <div style={{ width: '160px', height: '160px', borderRadius: '50%', background: current.imgBg, padding: '6px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                <img src={current.image} alt={current.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: '4px solid white' }} />
              </div>
            </div>

            {/* Content section */}
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-dark)', fontStyle: 'italic', lineHeight: 1.8, marginBottom: '32px' }}>
                {current.quote.split('\n').map((line, i) => (
                  <span key={i}>{line}<br/></span>
                ))}
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '4px' }}>{current.name}</h4>
                  <div style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Alumni {current.year}</div>
                </div>
                <div style={{ background: current.statusColor, color: current.statusText, padding: '4px 12px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 700 }}>
                  {current.status}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginTop: '32px' }}>
          <button onClick={prevSlide} style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #E2E8F0', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-light)' }} className="hover:scale-105">
            <ChevronLeft size={20} />
          </button>
          
          <div style={{ display: 'flex', gap: '8px' }}>
            {testimonials.map((_, idx) => (
              <div key={idx} style={{ width: idx === currentIndex ? '24px' : '8px', height: '8px', borderRadius: '4px', background: idx === currentIndex ? 'var(--primary-dark)' : '#E2E8F0', transition: 'all 0.3s ease' }} />
            ))}
          </div>

          <button onClick={nextSlide} style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #E2E8F0', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-light)' }} className="hover:scale-105">
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}
