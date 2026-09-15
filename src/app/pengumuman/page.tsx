import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Home, ChevronRight, ArrowRight, Search, Calendar } from 'lucide-react';
import Link from 'next/link';
import { getPengumuman } from '../actions/cms';

export default async function PengumumanPage(props: { searchParams?: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchParams = props.searchParams ? await props.searchParams : {};
  const page = typeof searchParams.page === 'string' ? parseInt(searchParams.page, 10) : 1;
  const query = typeof searchParams.query === 'string' ? searchParams.query : '';
  const limit = 5;

  // Fetch from CMS with pagination and filter
  const data = await getPengumuman({ page, limit, query });

  // Helper to format date
  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) throw new Error('Invalid date');
      const months = ['JANUARI', 'FEBRUARI', 'MARET', 'APRIL', 'MEI', 'JUNI', 'JULI', 'AGUSTUS', 'SEPTEMBER', 'OKTOBER', 'NOVEMBER', 'DESEMBER'];
      return {
        month: months[date.getMonth()],
        day: date.getDate().toString().padStart(2, '0'),
        year: date.getFullYear()
      };
    } catch {
      return { month: 'INFO', day: '--', year: dateStr };
    }
  };

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

  const paginationArray = getPagination(page, data.totalPages);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-color)', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Inline styles for hover effects in server components */}
      <style>{`
        .announcement-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .announcement-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(16, 185, 129, 0.15) !important;
        }
        .page-link:hover {
          background-color: var(--primary-light) !important;
          color: white !important;
          border-color: var(--primary-light) !important;
        }
      `}</style>

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
            <span style={{ color: 'var(--text-dark)', fontWeight: 600 }}>Papan Pengumuman</span>
          </div>

          <h1 className="heading-primary" style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-dark)', marginBottom: '16px', letterSpacing: '-0.02em' }}>Papan Pengumuman</h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-light)', maxWidth: '600px' }}>Informasi resmi dan edaran penting madrasah.</p>
        </div>
      </section>

      {/* Content Section */}
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px', flex: 1 }}>
        
        {/* Filter / Search Bar */}
        <div style={{ marginBottom: '40px' }}>
          <form action="/pengumuman" method="GET" style={{ display: 'flex', gap: '16px' }} className="flex-col-mobile">
            <div style={{ flex: 1, position: 'relative' }}>
              <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
              <input 
                type="text" 
                name="query" 
                defaultValue={query} 
                placeholder="Cari pengumuman..." 
                style={{ width: '100%', padding: '16px 16px 16px 48px', borderRadius: '16px', border: '1px solid var(--glass-border)', fontSize: '1rem', background: 'white', outline: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Cari
            </button>
          </form>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {data.announcements.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 24px', background: 'white', borderRadius: '24px', border: '1px dashed var(--glass-border)' }}>
              <Calendar size={48} style={{ color: 'var(--text-light)', margin: '0 auto 16px', opacity: 0.5 }} />
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: '8px' }}>Tidak ada pengumuman</h3>
              <p style={{ color: 'var(--text-light)' }}>{query ? 'Pencarian tidak ditemukan.' : 'Belum ada pengumuman yang diterbitkan.'}</p>
              {query && (
                <Link href="/pengumuman" className="btn btn-outline" style={{ marginTop: '16px' }}>Reset Pencarian</Link>
              )}
            </div>
          ) : (
            data.announcements.map((item, i) => {
              const dateObj = formatDate(item.date);
              return (
                <div key={item.id} className="glass flex-col-mobile announcement-card" style={{ display: 'flex', padding: 0, overflow: 'hidden', minHeight: '220px' }}>
                  {/* Left Date Block */}
                  <div style={{ background: 'var(--primary)', color: 'white', width: '240px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px', flexShrink: 0 }} className="w-full-mobile p-mobile">
                    <div style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '0.1em', opacity: 0.9 }}>{dateObj.month}</div>
                    <div style={{ fontSize: '4rem', fontWeight: 700, lineHeight: 1, margin: '8px 0' }}>{dateObj.day}</div>
                    <div style={{ fontSize: '1.125rem', fontWeight: 600, opacity: 0.9 }}>{dateObj.year}</div>
                  </div>
                  
                  {/* Right Content Block */}
                  <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
                    <div style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'var(--accent)', fontSize: '1rem', fontWeight: 700, padding: '6px 16px', borderRadius: '100px', display: 'inline-block', width: 'fit-content', marginBottom: '16px' }}>
                      PENGUMUMAN {i === 0 && page === 1 ? 'TERBARU' : 'RESMI'}
                    </div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '16px', lineHeight: 1.3 }}>
                      {item.title}
                    </h2>
                    <p style={{ color: 'var(--text-dark)', lineHeight: 1.6, marginBottom: '24px', fontSize: '1rem', opacity: 0.8, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {item.content || 'Silakan klik baca selengkapnya untuk melihat rincian informasi dan dokumen lampiran dari pengumuman ini.'}
                    </p>
                    <Link href={`/pengumuman/${item.id}`} style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Baca Selengkapnya <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })
          )}

          {/* Pagination */}
          {data.totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '40px' }}>
              {paginationArray.map((item, idx) => (
                item === '...' ? (
                  <span key={`ellipsis-${idx}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', color: 'var(--text-light)', fontWeight: 'bold' }}>...</span>
                ) : (
                  <Link 
                    key={item} 
                    href={`/pengumuman?page=${item}${query ? `&query=${encodeURIComponent(query)}` : ''}`}
                    className="page-link"
                    style={{ 
                      width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                      borderRadius: '12px', fontWeight: 700, textDecoration: 'none',
                      background: page === item ? 'var(--primary)' : 'white',
                      color: page === item ? 'white' : 'var(--text-dark)',
                      border: page === item ? 'none' : '1px solid var(--glass-border)',
                      boxShadow: page === item ? '0 4px 12px rgba(16,185,129,0.3)' : 'none',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {item}
                  </Link>
                )
              ))}
            </div>
          )}

        </div>
      </div>
      <Footer />
    </div>
  );
}
