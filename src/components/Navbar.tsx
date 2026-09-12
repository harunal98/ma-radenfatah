"use client";

import React, { useState } from 'react';
import { BookOpen, Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [infoDropdownOpen, setInfoDropdownOpen] = useState(false);

  return (
    <nav className="glass" style={{ margin: '16px auto', maxWidth: '1200px', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', top: 0, left: '16px', right: '16px', zIndex: 1000 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ background: 'var(--primary)', width: '40px', height: '40px', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
          <BookOpen size={24} />
        </div>
        <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-dark)' }}>MA Raden Fatah</span>
      </div>
      
      <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <Link href="/" className="nav-link" onClick={() => setIsOpen(false)}>Beranda</Link>
        
        <div style={{ position: 'relative' }} onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
          <span className="nav-link" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
            Profil Lengkap <ChevronDown size={16} style={{ transition: 'transform 0.3s ease', transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
          </span>
          {dropdownOpen && (
            <div style={{ position: 'absolute', top: '100%', left: 0, background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '200px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', marginTop: '8px' }}>
              <Link href="/profil" onClick={() => setIsOpen(false)} className="nav-link" style={{ color: 'var(--text-dark)' }}>Profile Sekolah</Link>
              <Link href="/visi-misi" onClick={() => setIsOpen(false)} className="nav-link" style={{ color: 'var(--text-dark)' }}>Visi & Misi</Link>
              <Link href="/jurusan" onClick={() => setIsOpen(false)} className="nav-link" style={{ color: 'var(--text-dark)' }}>Jurusan</Link>
              <Link href="/fasilitas" onClick={() => setIsOpen(false)} className="nav-link" style={{ color: 'var(--text-dark)' }}>Fasilitas</Link>
              <Link href="/program" onClick={() => setIsOpen(false)} className="nav-link" style={{ color: 'var(--text-dark)' }}>Program & Ekstra</Link>
            </div>
          )}
        </div>

        <div style={{ position: 'relative' }} onMouseEnter={() => setInfoDropdownOpen(true)} onMouseLeave={() => setInfoDropdownOpen(false)}>
          <span className="nav-link" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
            Informasi <ChevronDown size={16} style={{ transition: 'transform 0.3s ease', transform: infoDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
          </span>
          {infoDropdownOpen && (
            <div style={{ position: 'absolute', top: '100%', left: 0, background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '180px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', marginTop: '8px' }}>
              <Link href="/berita" onClick={() => setIsOpen(false)} className="nav-link" style={{ color: 'var(--text-dark)' }}>Berita</Link>
              <Link href="/pengumuman" onClick={() => setIsOpen(false)} className="nav-link" style={{ color: 'var(--text-dark)' }}>Pengumuman</Link>
              <Link href="/agenda" onClick={() => setIsOpen(false)} className="nav-link" style={{ color: 'var(--text-dark)' }}>Agenda</Link>
            </div>
          )}
        </div>
        <Link href="/galeri" className="nav-link" onClick={() => setIsOpen(false)}>Galeri</Link>
        <a href="/#prestasi" className="nav-link" onClick={() => setIsOpen(false)}>Prestasi</a>
        <a href="/#kepala-sekolah" className="nav-link" onClick={() => setIsOpen(false)}>About</a>
        <a href="/#kontak" className="nav-link" onClick={() => setIsOpen(false)}>Kontak</a>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Link href="/login" className="btn btn-primary hide-on-mobile" style={{ textDecoration: 'none', padding: '8px 16px' }}>
          Login
        </Link>
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
}
