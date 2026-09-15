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
        <Link href="/admin" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div style={{ background: 'var(--primary)', width: '36px', height: '36px', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <BookOpen size={20} />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '1.25rem', color: '#1E293B', lineHeight: 1.2 }}>MA Raden Fatah</div>
            <div style={{ fontSize: '1rem', color: '#64748B', fontWeight: 500 }}>Portal Admin Terpadu</div>
          </div>
        </Link>

        {/* Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '24px', fontWeight: 600, fontSize: '0.95rem' }}>
          <Link href="/admin" style={{ background: 'var(--primary)', color: 'white', padding: '8px 20px', borderRadius: '100px', textDecoration: 'none', boxShadow: '0 4px 12px rgba(16,185,129,0.3)' }} className="hover-lift">
            Dashboard
          </Link>
          <Link href="/admin/berita" className="admin-nav-link">Berita</Link>
          <Link href="/admin/pengumuman" className="admin-nav-link">Pengumuman</Link>
          <Link href="/admin/prestasi" className="admin-nav-link">Prestasi</Link>
          <Link href="/admin/agenda" className="admin-nav-link">Agenda</Link>
          <Link href="/admin/galeri" className="admin-nav-link">Galeri</Link>
          <Link href="/admin/landing-page" className="admin-nav-link">Landing Page</Link>
        </nav>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link href="/admin/settings" style={{ border: '1px solid #E2E8F0', padding: '8px 16px', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: 500, textDecoration: 'none' }} className="admin-icon-btn">
            <Settings size={18} /> Pengaturan
          </Link>
          
          <Link href="/admin/notifications" style={{ position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', border: '1px solid #E2E8F0', borderRadius: '50%', textDecoration: 'none' }} className="admin-icon-btn">
            <Bell size={18} color="currentColor" />
            <div style={{ position: 'absolute', top: '-4px', right: '-4px', background: 'var(--primary)', color: 'white', fontSize: '0.65rem', fontWeight: 'bold', width: '18px', height: '18px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</div>
          </Link>

          <Link href="/admin/profile" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', border: '1px solid #E2E8F0', borderRadius: '50%', textDecoration: 'none' }} className="admin-icon-bg">
            <User size={18} color="currentColor" />
          </Link>

          <form action={logoutAction}>
            <button type="submit" style={{ border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px', borderRadius: '50%' }} className="admin-logout">
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
