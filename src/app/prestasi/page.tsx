import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Calendar, ChevronRight, Home, Star, Bookmark, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getBerita } from '../actions/cms';

export default async function PrestasiPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = props.searchParams ? await props.searchParams : {};
  const filter = typeof searchParams.filter === 'string' ? searchParams.filter : 'Semua Prestasi';

  // Fetch actual data
  const { posts: dbPosts } = await getBerita({ category: 'Prestasi', limit: 12 });

  // Dummy data if DB is empty
  const dummyPrestasi = [
    {
      id: "1",
      title: "Juara 1 Lomba Cerdas Cermat Nasional",
      content: "Tim siswa kami berhasil meraih juara 1 dalam lomba cerdas cermat tingkat nasional yang diadakan oleh Kementerian Pendidikan.",
      image: "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?q=80&w=800",
      createdAt: new Date("2026-06-30"),
      tingkat: "NASIONAL",
      subCategory: "Siswa",
      color: "bg-blue-500"
    },
    {
      id: "2",
      title: "Penghargaan Guru Inspiratif 2026",
      content: "Bapak Ahmad meraih penghargaan guru inspiratif tingkat provinsi atas dedikasinya dalam mengembangkan metode pembelajaran interaktif.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800",
      createdAt: new Date("2026-05-15"),
      tingkat: "PROVINSI",
      subCategory: "Guru & Staf",
      color: "bg-emerald-500"
    },
    {
      id: "3",
      title: "Sekolah Adiwiyata Tingkat Nasional",
      content: "MA Raden Fatah kembali dinobatkan sebagai Sekolah Adiwiyata berkat komitmen menjaga kelestarian lingkungan hidup.",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800",
      createdAt: new Date("2026-04-22"),
      tingkat: "NASIONAL",
      subCategory: "Institusi",
      color: "bg-purple-500"
    },
    {
      id: "4",
      title: "Medali Emas Olimpiade Matematika",
      content: "Siswa kelas 12 berhasil membawa pulang medali emas pada ajang Olimpiade Matematika tingkat Internasional.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800",
      createdAt: new Date("2026-08-10"),
      tingkat: "INTERNASIONAL",
      subCategory: "Siswa",
      color: "bg-blue-500"
    }
  ];

  const prestasi = dbPosts.length > 0 
    ? dbPosts.map(p => ({ 
        ...p, 
        tingkat: p.authorId || "NASIONAL", 
        subCategory: p.authorName || "Siswa", 
        color: "bg-blue-500" 
      })) 
    : dummyPrestasi;

  const filters = ["Semua Prestasi", "Siswa", "Guru & Staf", "Institusi"];

  const filteredPrestasi = filter === 'Semua Prestasi' 
    ? prestasi 
    : prestasi.filter(p => p.subCategory === filter);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-color)', overflowX: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      <main style={{ flex: 1 }}>
        
        {/* Header & Hero Section */}
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
              <span style={{ color: 'var(--text-dark)', fontWeight: 600 }}>Prestasi Siswa</span>
            </div>

            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-dark)', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              Prestasi Membanggakan
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-light)', maxWidth: '600px' }}>
              Apresiasi atas dedikasi dan kerja keras siswa-siswi, guru, serta institusi.
            </p>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="container" style={{ padding: '40px 24px', display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          {filters.map(f => (
            <Link 
              key={f}
              href={`/prestasi?filter=${f}`}
              style={{
                padding: '10px 24px',
                borderRadius: '100px',
                fontSize: '1rem',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                backgroundColor: filter === f ? 'var(--primary)' : 'rgba(16, 185, 129, 0.1)',
                color: filter === f ? 'white' : 'var(--primary-dark)',
                boxShadow: filter === f ? '0 10px 15px -3px rgba(16, 185, 129, 0.3)' : 'none',
                transform: filter === f ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              {f}
            </Link>
          ))}
        </section>

        {/* Card Grid Layout */}
        <section className="container" style={{ padding: '0 24px 80px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
            {filteredPrestasi.map((item: any) => (
              <a href={`/prestasi/${item.slug || item.id}`} key={item.id} className="group" style={{ 
                display: 'flex', flexDirection: 'column', background: 'white', borderRadius: '16px', overflow: 'hidden', 
                border: '1px solid var(--glass-border)', textDecoration: 'none', transition: 'all 0.4s ease',
                boxShadow: 'var(--glass-shadow)'
              }}>
                {/* Header / Cover Image */}
                <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                  {/* Badges */}
                  <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'var(--accent)', color: 'white', padding: '4px 12px', borderRadius: '100px', fontSize: '0.7rem', fontWeight: 700, zIndex: 10, letterSpacing: '0.05em' }}>
                    {item.tingkat}
                  </div>
                  <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'var(--primary-dark)', color: 'white', padding: '4px 12px', borderRadius: '100px', fontSize: '0.7rem', fontWeight: 700, zIndex: 10, letterSpacing: '0.05em' }}>
                    {item.subCategory}
                  </div>
                  
                  {/* Image */}
                  <div style={{ width: '100%', height: '100%', transition: 'transform 0.5s ease' }} className="group-hover:scale-105">
                    <img src={item.image || 'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?q=80&w=800'} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>

                  {/* Bottom Overlay inside image section */}
                  <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4), transparent)', padding: '40px 20px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', zIndex: 5 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.9)', fontSize: '1rem', marginBottom: '8px', fontWeight: 600 }}>
                      <Calendar size={12} />
                      {new Date(item.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </div>
                    <h3 style={{ color: 'white', fontSize: '1.125rem', fontWeight: 700, margin: 0, lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content Body */}
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <p style={{ color: 'var(--text-light)', fontSize: '1rem', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '24px' }}>
                    {item.content}
                  </p>
                  
                  {/* Footer Kartu */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                    <div style={{ display: 'flex', gap: '4px', color: 'var(--accent)' }}>
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary-dark)', fontSize: '1rem', fontWeight: 700 }}>
                      <Bookmark size={14} /> Detail Prestasi
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ padding: '40px 24px 100px', position: 'relative' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="glass-dark floating" style={{ padding: '50px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden', borderRadius: '32px', animation: 'float 8s ease-in-out infinite' }}>
              {/* Background accent circles */}
              <div style={{ position: 'absolute', top: '-50%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)', opacity: 0.2, filter: 'blur(40px)', zIndex: 0 }}></div>
              <div style={{ position: 'absolute', bottom: '-50%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, var(--primary-light) 0%, transparent 70%)', opacity: 0.2, filter: 'blur(40px)', zIndex: 0 }}></div>

              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 600, marginBottom: '20px', lineHeight: 1.3 }}>
                  Siap Bergabung dengan <span style={{ color: 'var(--accent)' }}>MA Raden Fatah?</span>
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.9)', maxWidth: '750px', margin: '0 auto 32px', lineHeight: 1.6, fontWeight: 300 }}>
                  Jadilah bagian dari generasi berprestasi dan berakhlak mulia. Mulailah perjalanan pendidikan Anda yang luar biasa bersama kami.
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/ppdb" className="btn hover-lift" style={{ padding: '14px 28px', fontSize: '1rem', backgroundColor: 'var(--accent)', color: 'white', border: 'none', boxShadow: '0 4px 14px rgba(245, 158, 11, 0.4)', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, textDecoration: 'none' }}>
                    Daftar Sekarang <ArrowRight size={18} />
                  </Link>
                  <Link href="/#kontak" className="btn hover-lift" style={{ padding: '14px 28px', fontSize: '1rem', color: 'white', border: '2px solid rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.1)', borderRadius: '100px', textDecoration: 'none', fontWeight: 500 }}>
                    Hubungi Kami
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      
      {/* Required CSS for group hover effect since inline styles don't support pseudo classes */}
      <style dangerouslySetInnerHTML={{__html: `
        .group:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04) !important;
        }
        .group:hover img {
          transform: scale(1.05);
        }
      `}} />
    </div>
  );
}
