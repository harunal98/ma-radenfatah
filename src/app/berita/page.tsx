import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Calendar, ArrowRight, BookOpen, Bell, Home, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { getBerita } from '../actions/cms';
import Link from 'next/link';

export default async function BeritaPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // Await searchParams in Next.js 15+
  const searchParams = props.searchParams ? await props.searchParams : {};
  const page = typeof searchParams.page === 'string' ? parseInt(searchParams.page, 10) : 1;
  const category = typeof searchParams.category === 'string' ? searchParams.category : 'Semua';
  const fetchLimit = page === 1 ? 7 : 6;
  const skip = page === 1 ? 0 : 7 + (page - 2) * 6;
  
  const { posts: dbBerita, total } = await getBerita({ category, page, limit: fetchLimit, skip });
  const calculatedTotalPages = total <= 7 ? 1 : 1 + Math.ceil((total - 7) / 6);


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
  const displayTotalPages = dbBerita.length > 0 ? calculatedTotalPages : 1;

  const categories = ["Semua", "Berita", "Artikel"];

  const getPagination = (current: number, total: number) => {
    if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
    let start = Math.max(1, current - 2);
    let end = Math.min(total, current + 2);
    if (start === 1) end = 5;
    if (end === total) start = total - 4;
    
    const pages: (number | string)[] = [];
    if (start > 1) pages.push('...');
    for (let i = start; i <= end; i++) pages.push(i);
    if (end < total) pages.push('...');
    return pages;
  };

  const paginationArray = getPagination(page, displayTotalPages);

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
              <span style={{ color: 'var(--text-dark)', fontWeight: 600 }}>Berita & Artikel</span>
            </div>

            <h1 className="heading-primary" style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-dark)', marginBottom: '16px', letterSpacing: '-0.02em' }}>Berita & Artikel Terbaru</h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-light)', maxWidth: '600px' }}>Ikuti informasi terkini mengenai kegiatan, prestasi, dan Pengumuman Madrasah.</p>
          </div>
        </section>

        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 60px' }}>

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
                      fontSize: '1rem', 
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
            
            {/* Featured Post (only on page 1) */}
            {page === 1 && berita.length > 0 && (
              <div style={{ marginBottom: '16px' }}>
                <article style={{ display: 'flex', flexDirection: 'row', borderRadius: '24px', overflow: 'hidden', background: 'white', flexWrap: 'wrap', border: '1px solid var(--glass-border)', boxShadow: 'var(--glass-shadow)' }}>
                  <div style={{ flex: '1 1 350px', position: 'relative', minHeight: '350px', backgroundColor: '#F3E8F0' }}>
                    <div style={{ position: 'absolute', top: '24px', left: '24px', background: 'var(--accent)', color: 'white', padding: '6px 16px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 800, zIndex: 10, letterSpacing: '0.05em' }}>
                      TERBARU
                    </div>
                    <img src={berita[0].image || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800'} alt={berita[0].title} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }} />
                  </div>
                  <div style={{ flex: '1 1 350px', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-light)', fontSize: '1rem', marginBottom: '16px', fontWeight: 600 }}>
                      <Calendar size={16} />
                      {new Date(berita[0].createdAt).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase()}
                    </div>
                    <h2 style={{ fontSize: '2rem', color: 'var(--text-dark)', marginBottom: '16px', lineHeight: 1.3, fontWeight: 700 }}>{berita[0].title}</h2>
                    <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', marginBottom: '32px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: 1.6 }}>
                      {berita[0].content}
                    </p>
                    <div>
                      <Link href={`/berita/${berita[0].slug || berita[0].id}`} className="btn btn-primary" style={{ padding: '12px 24px', borderRadius: '100px', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        Baca Selengkapnya <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            )}

            <div className="grid-mobile-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
              {(page === 1 ? berita.slice(1) : berita).map((item: any) => (
                <article key={item.id} className="group" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform 0.4s ease', cursor: 'pointer', borderRadius: '20px', background: 'white', border: '1px solid var(--glass-border)', boxShadow: 'var(--glass-shadow)' }}>
                  <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'var(--primary)', color: 'white', padding: '4px 16px', borderRadius: '100px', fontSize: '1rem', fontWeight: 700, zIndex: 10 }}>
                      {item.category ? item.category.toUpperCase() : 'BERITA'}
                    </div>
                    <img src={item.image || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800'} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="group-hover:scale-110" />
                  </div>
                  <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-light)', fontSize: '0.85rem', marginBottom: '12px', fontWeight: 600 }}>
                      <Calendar size={14} />
                      {new Date(item.createdAt).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase()}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: '12px', lineHeight: 1.4, fontWeight: 700 }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '24px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: 1.5 }}>
                      {item.content}
                    </p>
                    <Link href={`/berita/${item.slug || item.id}`} style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', marginTop: 'auto', fontSize: '0.9rem', transition: 'color 0.3s' }} className="group-hover:text-var(--accent)">
                      Baca Selengkapnya <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {displayTotalPages > 1 && (
              <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '16px' }}>
                {/* First Page Button */}
                <Link
                  href={`/berita?category=${category}&page=1`}
                  style={{
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    background: 'rgba(16,185,129,0.1)',
                    color: 'var(--primary-dark)',
                    opacity: page === 1 ? 0.5 : 1,
                    pointerEvents: page === 1 ? 'none' : 'auto',
                  }}
                  className="hover-lift"
                >
                  <ChevronsLeft size={20} />
                </Link>

                {paginationArray.map((item, idx) => (
                  item === '...' ? (
                    <span key={`ellipsis-${idx}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', color: 'var(--text-light)', fontWeight: 'bold' }}>...</span>
                  ) : (
                    <Link
                      key={item}
                      href={`/berita?category=${category}&page=${item}`}
                      style={{
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        background: page === item ? 'var(--primary)' : 'rgba(16,185,129,0.1)',
                        color: page === item ? 'white' : 'var(--primary-dark)',
                      }}
                      className="hover-lift"
                    >
                      {item}
                    </Link>
                  )
                ))}

                {/* Last Page Button */}
                <Link
                  href={`/berita?category=${category}&page=${displayTotalPages}`}
                  style={{
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    background: 'rgba(16,185,129,0.1)',
                    color: 'var(--primary-dark)',
                    opacity: page === displayTotalPages ? 0.5 : 1,
                    pointerEvents: page === displayTotalPages ? 'none' : 'auto',
                  }}
                  className="hover-lift"
                >
                  <ChevronsRight size={20} />
                </Link>
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
