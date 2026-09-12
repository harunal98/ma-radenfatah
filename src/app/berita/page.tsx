import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Calendar, ArrowRight, BookOpen, Bell, Home, ChevronRight } from 'lucide-react';
import { getBerita } from '../actions/cms';
import Link from 'next/link';

export default async function BeritaPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // Await searchParams in Next.js 15+
  const searchParams = props.searchParams ? await props.searchParams : {};
  const page = typeof searchParams.page === 'string' ? parseInt(searchParams.page, 10) : 1;
  const category = typeof searchParams.category === 'string' ? searchParams.category : 'Semua';

  const { posts: dbBerita, totalPages } = await getBerita({ category, page, limit: 6 });


  // If DB is empty, use dummy data for preview purposes
  const dummyBerita = [
    {
      id: "1",
      slug: "dummy-news-1",
      title: "Penerimaan Siswa Baru Tahun Ajaran 2026/2027 Telah Dibuka",
      content: "Segera daftarkan putra-putri Anda. Kuota terbatas untuk gelombang pertama dengan potongan biaya khusus. Pendaftaran dapat dilakukan secara online melalui website PPDB.",
      createdAt: new Date(),
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
      category: "Berita"
    }
  ];

  const berita = dbBerita.length > 0 ? dbBerita : dummyBerita;
  const displayTotalPages = dbBerita.length > 0 ? totalPages : 1;

  const categories = ["Semua", "Berita", "Artikel", "Prestasi"];

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
              <span style={{ color: 'var(--primary-dark)', fontWeight: 600 }}>Berita & Artikel</span>
            </div>

            <h1 className="heading-primary" style={{ marginBottom: '16px' }}>Berita & Artikel Terbaru</h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-light)', margin: 0 }}>Ikuti informasi terkini mengenai kegiatan, prestasi, dan Pengumuman Madrasah.</p>
          </div>
        </div>

        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px 60px' }}>

        <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          
          {/* Main News List */}
          <div style={{ flex: '1 1 600px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid var(--primary-light)', paddingBottom: '12px', flexWrap: 'wrap', gap: '16px' }}>
              <h2 style={{ fontSize: '1.75rem', color: 'var(--primary-dark)', margin: 0 }}>Daftar Berita</h2>
              
              {/* Filters */}
              <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
                {categories.map(c => (
                  <Link 
                    key={c}
                    href={`/berita?category=${c}&page=1`}
                    style={{ 
                      padding: '6px 16px', 
                      borderRadius: '100px', 
                      fontSize: '0.875rem', 
                      fontWeight: 600,
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                      background: category === c ? 'var(--primary)' : 'rgba(16, 185, 129, 0.1)',
                      color: category === c ? 'white' : 'var(--primary)'
                    }}
                  >
                    {c}
                  </Link>
                ))}
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
              {berita.map((item: any) => (
                <article key={item.id} className="glass" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease', cursor: 'pointer' }}>
                  <div style={{ position: 'relative', height: '200px' }}>
                    <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(255,255,255,0.9)', color: 'var(--primary-dark)', padding: '4px 12px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 'bold', zIndex: 10 }}>
                      {item.category || 'Berita'}
                    </div>
                    <img src={item.image || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800'} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-light)', fontSize: '0.875rem', marginBottom: '12px' }}>
                      <Calendar size={14} />
                      {new Date(item.createdAt).toLocaleDateString('id-ID')}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: '12px', lineHeight: 1.4 }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '24px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {item.content}
                    </p>
                    <Link href={`/berita/${item.slug || item.id}`} style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', marginTop: 'auto' }}>
                      Baca Selengkapnya <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {displayTotalPages > 1 && (
              <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '16px' }}>
                {Array.from({ length: displayTotalPages }, (_, i) => i + 1).map(pageNum => (
                  <Link
                    key={pageNum}
                    href={`/berita?category=${category}&page=${pageNum}`}
                    style={{
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      background: page === pageNum ? 'var(--primary)' : 'rgba(16,185,129,0.1)',
                      color: page === pageNum ? 'white' : 'var(--primary-dark)',
                    }}
                  >
                    {pageNum}
                  </Link>
                ))}
              </div>
            )}
          </div>


        </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
