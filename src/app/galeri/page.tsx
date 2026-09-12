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
        <div style={{ 
          padding: '140px 24px 60px', 
          background: '#F8FAFC url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          position: 'relative',
          borderBottom: '1px solid var(--glass-border)',
          marginBottom: '60px'
        }}>
          <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {/* Decorative background circle */}
            <div style={{ position: 'absolute', right: '15%', top: '50%', width: '12px', height: '12px', borderRadius: '50%', border: '2px solid #94A3B8', opacity: 0.5 }}></div>

            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-light)', fontSize: '0.875rem', marginBottom: '32px' }}>
              <Link href="/" style={{ color: 'var(--text-light)', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <Home size={16} />
              </Link>
              <ChevronRight size={16} />
              <Link href="#" style={{ color: 'var(--text-light)', textDecoration: 'none' }}>Informasi</Link>
              <ChevronRight size={16} />
              <span style={{ color: 'var(--primary-dark)', fontWeight: 600 }}>Galeri Kampus</span>
            </div>

            <h1 className="heading-primary" style={{ marginBottom: '16px' }}>Galeri Kampus</h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-light)', margin: 0 }}>Dokumentasi berbagai kegiatan akademik, ekstrakurikuler, dan fasilitas yang ada di MA Raden Fatah Prambanan.</p>
          </div>
        </div>

        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px 60px' }}>

        <GalleryGrid images={galleryImages} />

        </div>
      </main>

      <Footer />
    </div>
  );
}
