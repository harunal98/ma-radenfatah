import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { Home, ChevronRight, Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';

const prisma = new PrismaClient();

export default async function PengumumanDetail(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  const pengumuman = await prisma.announcement.findUnique({
    where: { id }
  });

  if (!pengumuman) {
    notFound();
  }

  // Format date safely
  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) return dateStr;
      return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    } catch {
      return dateStr;
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-color)', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Header Section */}
      <section style={{ 
        background: 'radial-gradient(circle at 10% 20%, rgba(16,185,129,0.1) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(245,158,11,0.1) 0%, transparent 40%)',
        padding: '120px 24px 60px',
        textAlign: 'left',
        borderBottom: '1px solid var(--glass-border)',
        position: 'relative'
      }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '8px', color: 'var(--text-light)', fontSize: '1rem', marginBottom: '24px' }}>
            <Link href="/" style={{ color: 'var(--text-light)', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <Home size={16} style={{ marginRight: '4px' }} />
            </Link>
            <ChevronRight size={16} />
            <Link href="/pengumuman" style={{ color: 'var(--text-light)', textDecoration: 'none' }}>Pengumuman</Link>
            <ChevronRight size={16} />
            <span style={{ color: 'var(--text-dark)', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '150px' }}>{pengumuman.title}</span>
          </div>

          <div style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'var(--accent)', fontSize: '1rem', fontWeight: 700, padding: '6px 16px', borderRadius: '100px', display: 'inline-block', marginBottom: '16px' }}>
            PENGUMUMAN RESMI
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-dark)', marginBottom: '24px', letterSpacing: '-0.02em', lineHeight: 1.3 }}>
            {pengumuman.title}
          </h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-light)', fontSize: '1rem', fontWeight: 500 }}>
            <Calendar size={18} />
            <span>Diterbitkan: {formatDate(pengumuman.date)}</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 24px', flex: 1 }}>
        <div style={{ background: 'white', padding: '40px', borderRadius: '24px', boxShadow: 'var(--glass-shadow)', border: '1px solid var(--glass-border)' }}>
          <div 
            style={{ fontSize: '1.1rem', color: 'var(--text-dark)', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}
            dangerouslySetInnerHTML={{ __html: pengumuman.content || 'Isi pengumuman belum tersedia.' }}
          />
        </div>

        <div style={{ marginTop: '40px' }}>
          <Link href="/pengumuman" className="hover-lift" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 600, textDecoration: 'none', padding: '12px 24px', borderRadius: '12px', background: 'rgba(16,185,129,0.1)' }}>
            <ArrowLeft size={18} /> Kembali ke Daftar Pengumuman
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
