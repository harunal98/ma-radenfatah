import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Image as ImageIcon, Home, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import GalleryGrid from '../../components/GalleryGrid';
import { getGaleri } from '../actions/cms';

export default async function GaleriPage() {
  const dbGaleri = await getGaleri();

  const dummyGallery = [
    { id: "1", url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop", title: "Kegiatan Belajar Mengajar", category: "Akademik" },
    { id: "2", url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop", title: "Fasilitas Lab Komputer", category: "Fasilitas" },
    { id: "3", url: "https://images.unsplash.com/photo-1427504494785-319ce8322bf8?q=80&w=800&auto=format&fit=crop", title: "Kegiatan Pramuka", category: "Ekstrakurikuler" }
  ];

  const galleryImages = dbGaleri.length > 0 ? dbGaleri : dummyGallery;

  return (
    <div style={{ background: 'var(--bg-color)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      <main style={{ flex: 1 }}>
        {/* Header Section */}
        <section style={{ 
          background: 'radial-gradient(circle at 10% 20%, rgba(16,185,129,0.1) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(245,158,11,0.1) 0%, transparent 40%)',
          padding: '120px 24px 60px',
          textAlign: 'left',
          borderBottom: '1px solid var(--glass-border)',
          position: 'relative',
          marginBottom: '60px'
        }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '8px', color: 'var(--text-light)', fontSize: '1rem', marginBottom: '24px' }}>
              <Link href="/" style={{ color: 'var(--text-light)', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <Home size={16} style={{ marginRight: '4px' }} />
              </Link>
              <ChevronRight size={16} />
              <Link href="#" style={{ color: 'var(--text-light)', textDecoration: 'none' }}>Informasi</Link>
              <ChevronRight size={16} />
              <span style={{ color: 'var(--text-dark)', fontWeight: 600 }}>Galeri Kampus</span>
            </div>

            <h1 className="heading-primary" style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-dark)', marginBottom: '16px', letterSpacing: '-0.02em' }}>Galeri Kampus</h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-light)', maxWidth: '600px' }}>Dokumentasi berbagai kegiatan akademik, ekstrakurikuler, dan fasilitas yang ada di MA Raden Fatah Prambanan.</p>
          </div>
        </section>

        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 60px' }}>

        <GalleryGrid images={galleryImages} />

        </div>
      </main>

      <Footer />
    </div>
  );
}
