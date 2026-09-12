import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Home, ChevronRight, ArrowRight, Search, Calendar } from 'lucide-react';
import Link from 'next/link';
import { getPengumuman } from '../actions/cms';

export default async function PengumumanPage({ searchParams }: { searchParams: { page?: string, query?: string } }) {
  const page = parseInt(searchParams.page || '1', 10);
  const query = searchParams.query || '';
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
            <span style={{ color: 'var(--primary-dark)', fontWeight: 600 }}>Papan Pengumuman</span>
          </div>

          <h1 className="heading-primary" style={{ marginBottom: '16px' }}>Papan Pengumuman</h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-light)', margin: 0 }}>Informasi resmi dan edaran penting madrasah.</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 24px', flex: 1 }}>
        
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
                    <div style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.1em', opacity: 0.9 }}>{dateObj.month}</div>
                    <div style={{ fontSize: '4rem', fontWeight: 800, lineHeight: 1, margin: '8px 0' }}>{dateObj.day}</div>
                    <div style={{ fontSize: '1.125rem', fontWeight: 600, opacity: 0.9 }}>{dateObj.year}</div>
                  </div>
                  
                  {/* Right Content Block */}
                  <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
                    <div style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 800, padding: '6px 16px', borderRadius: '100px', display: 'inline-block', width: 'fit-content', marginBottom: '16px' }}>
                      PENGUMUMAN {i === 0 && page === 1 ? 'TERBARU' : 'RESMI'}
                    </div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-dark)', marginBottom: '16px', lineHeight: 1.3 }}>
                      {item.title}
                    </h2>
                    <p style={{ color: 'var(--text-dark)', lineHeight: 1.6, marginBottom: '24px', fontSize: '1rem', opacity: 0.8 }}>
                      Silakan klik baca selengkapnya untuk melihat rincian informasi dan dokumen lampiran dari pengumuman ini.
                    </p>
                    <Link href="#" style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
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
              {Array.from({ length: data.totalPages }).map((_, i) => (
                <Link 
                  key={i} 
                  href={`/pengumuman?page=${i + 1}${query ? `&query=${encodeURIComponent(query)}` : ''}`}
                  className="page-link"
                  style={{ 
                    width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                    borderRadius: '12px', fontWeight: 700, textDecoration: 'none',
                    background: page === i + 1 ? 'var(--primary)' : 'white',
                    color: page === i + 1 ? 'white' : 'var(--text-dark)',
                    border: page === i + 1 ? 'none' : '1px solid var(--glass-border)',
                    boxShadow: page === i + 1 ? '0 4px 12px rgba(16,185,129,0.3)' : 'none',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {i + 1}
                </Link>
              ))}
            </div>
          )}

        </div>
      </div>
      <Footer />
    </div>
  );
}
