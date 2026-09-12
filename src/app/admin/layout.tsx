import React from 'react';
import { BookOpen, Settings, Bell, User, LogOut } from 'lucide-react';
import { logoutAction } from '../actions/auth';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC', color: '#1E293B', fontFamily: 'var(--font-sans), sans-serif' }}>
      
      {/* Top Navbar */}
      <header style={{ background: 'white', padding: '16px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', position: 'sticky', top: 0, zIndex: 50 }}>
        
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ background: 'var(--primary)', width: '36px', height: '36px', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <BookOpen size={20} />
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.25rem', color: '#1E293B', lineHeight: 1.2 }}>MA Raden Fatah</div>
            <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 500 }}>Portal Admin Terpadu</div>
          </div>
        </div>

        {/* Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '24px', fontWeight: 600, fontSize: '0.95rem' }}>
          <Link href="/admin" style={{ background: 'var(--primary)', color: 'white', padding: '8px 20px', borderRadius: '100px', textDecoration: 'none', boxShadow: '0 4px 12px rgba(16,185,129,0.3)' }}>
            Dasbor
          </Link>
          <Link href="/admin/berita" style={{ color: '#475569', textDecoration: 'none' }}>Berita</Link>
          <Link href="/admin/pengumuman" style={{ color: '#475569', textDecoration: 'none' }}>Pengumuman</Link>
          <Link href="/admin/galeri" style={{ color: '#475569', textDecoration: 'none' }}>Galeri</Link>
          <Link href="/admin/landing-page" style={{ color: '#475569', textDecoration: 'none' }}>Landing Page</Link>
        </nav>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button style={{ background: 'transparent', border: '1px solid #E2E8F0', padding: '8px 16px', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: 500, color: '#475569' }}>
            <Settings size={18} /> Pengaturan
          </button>
          
          <div style={{ position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', border: '1px solid #E2E8F0', borderRadius: '50%' }}>
            <Bell size={18} color="#475569" />
            <div style={{ position: 'absolute', top: '-4px', right: '-4px', background: 'var(--primary)', color: 'white', fontSize: '0.65rem', fontWeight: 'bold', width: '18px', height: '18px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</div>
          </div>

          <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', border: '1px solid #E2E8F0', borderRadius: '50%', background: '#F1F5F9' }}>
            <User size={18} color="#475569" />
          </div>

          <form action={logoutAction}>
            <button type="submit" style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px', borderRadius: '50%' }}>
              <LogOut size={20} />
            </button>
          </form>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: '32px 40px', maxWidth: '1440px', margin: '0 auto' }}>
        {children}
      </main>

    </div>
  );
}
