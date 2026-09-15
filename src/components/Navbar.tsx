"use client";

import React, { useState } from 'react';
import { BookOpen, Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [infoDropdownOpen, setInfoDropdownOpen] = useState(false);
  const [galeriDropdownOpen, setGaleriDropdownOpen] = useState(false);

  return (
    <nav className="glass" style={{ margin: '16px auto', maxWidth: '1200px', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', top: 0, left: '16px', right: '16px', zIndex: 1000 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img src="/assets/logo.png" alt="Logo MA Raden Fatah" style={{ height: '45px', width: 'auto' }} />
        <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-dark)' }}>MA Raden Fatah</span>
      </div>
      
      <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <Link href="/" className="nav-link" onClick={() => setIsOpen(false)}>Beranda</Link>
        
        <div className="nav-dropdown" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
          <span className="nav-link" onClick={() => setDropdownOpen(!dropdownOpen)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
            Profil Lengkap <ChevronDown size={16} style={{ transition: 'transform 0.3s ease', transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
          </span>
          {dropdownOpen && (
            <div className="dropdown-content">
              <Link href="/profil#sekolah" onClick={() => setIsOpen(false)} className="nav-link" style={{ color: 'var(--text-dark)' }}>Profile Sekolah</Link>
              <Link href="/profil#visi-misi" onClick={() => setIsOpen(false)} className="nav-link" style={{ color: 'var(--text-dark)' }}>Visi & Misi</Link>
              <Link href="/profil#jurusan" onClick={() => setIsOpen(false)} className="nav-link" style={{ color: 'var(--text-dark)' }}>Jurusan</Link>
              <Link href="/profil#fasilitas" onClick={() => setIsOpen(false)} className="nav-link" style={{ color: 'var(--text-dark)' }}>Fasilitas</Link>
              <Link href="/profil#program" onClick={() => setIsOpen(false)} className="nav-link" style={{ color: 'var(--text-dark)' }}>Program & Ekstra</Link>
            </div>
          )}
        </div>

        <div className="nav-dropdown" onMouseEnter={() => setInfoDropdownOpen(true)} onMouseLeave={() => setInfoDropdownOpen(false)}>
          <span className="nav-link" onClick={() => setInfoDropdownOpen(!infoDropdownOpen)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
            Informasi <ChevronDown size={16} style={{ transition: 'transform 0.3s ease', transform: infoDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
          </span>
          {infoDropdownOpen && (
            <div className="dropdown-content">
              <Link href="/berita" onClick={() => setIsOpen(false)} className="nav-link" style={{ color: 'var(--text-dark)' }}>Berita</Link>
              <Link href="/pengumuman" onClick={() => setIsOpen(false)} className="nav-link" style={{ color: 'var(--text-dark)' }}>Pengumuman</Link>
              <Link href="/agenda" onClick={() => setIsOpen(false)} className="nav-link" style={{ color: 'var(--text-dark)' }}>Agenda</Link>
            </div>
          )}
        </div>

        <div className="nav-dropdown" onMouseEnter={() => setGaleriDropdownOpen(true)} onMouseLeave={() => setGaleriDropdownOpen(false)}>
          <span className="nav-link" onClick={() => setGaleriDropdownOpen(!galeriDropdownOpen)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
            Galeri <ChevronDown size={16} style={{ transition: 'transform 0.3s ease', transform: galeriDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
          </span>
          {galeriDropdownOpen && (
            <div className="dropdown-content">
              <Link href="/galeri" onClick={() => setIsOpen(false)} className="nav-link" style={{ color: 'var(--text-dark)' }}>Galeri</Link>
              <Link href="/prestasi" onClick={() => setIsOpen(false)} className="nav-link" style={{ color: 'var(--text-dark)' }}>Prestasi</Link>
              <Link href="/alumni" onClick={() => setIsOpen(false)} className="nav-link" style={{ color: 'var(--text-dark)' }}>Alumni</Link>
            </div>
          )}
        </div>

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
