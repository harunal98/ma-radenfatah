import React from 'react';
import { BookOpen, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="kontak" style={{ background: 'var(--primary-dark)', color: 'white', padding: '80px 24px 40px', marginTop: '80px' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '64px' }}>
        <div style={{ flex: '1 1 300px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <BookOpen size={32} />
            <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>MA Raden Fatah</span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '24px' }}>
            Madrasah Aliyah Raden Fatah Prambanan Sleman merupakan sekolah menengah tingkat atas berbasis keagamaan Islam (madrasah) di bawah naungan Kementerian Agama.
          </p>
        </div>
        
        <div style={{ flex: '1 1 200px' }}>
          <h4 style={{ fontSize: '1.25rem', marginBottom: '24px', fontWeight: 600 }}>Tautan Cepat</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><a href="/#home" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Beranda</a></li>
            <li><a href="/#profile" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Profil</a></li>
            <li><a href="/#jurusan" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Jurusan</a></li>
            <li><a href="https://nuist.id/ppdb/MA%20Raden%20Fatah" target="_blank" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>PPDB</a></li>
          </ul>
        </div>
        
        <div style={{ flex: '1 1 300px' }}>
          <h4 style={{ fontSize: '1.25rem', marginBottom: '24px', fontWeight: 600 }}>Hubungi Kami</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <li style={{ display: 'flex', gap: '12px', color: 'rgba(255,255,255,0.8)' }}>
              <MapPin size={24} style={{ flexShrink: 0 }} />
              <span>Gayam, Bokoharjo, Kec. Prambanan, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55572</span>
            </li>
            <li style={{ display: 'flex', gap: '12px', color: 'rgba(255,255,255,0.8)' }}>
              <Phone size={24} style={{ flexShrink: 0 }} />
              <span>(0274) 496739</span>
            </li>
            <li style={{ display: 'flex', gap: '12px', color: 'rgba(255,255,255,0.8)' }}>
              <Mail size={24} style={{ flexShrink: 0 }} />
              <span>info@maradenfatah.sch.id</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px', textAlign: 'center', color: 'rgba(255,255,255,0.6)' }}>
        <p>&copy; 2026 MA Raden Fatah Prambanan. All rights reserved.</p>
      </div>
    </footer>
  );
}
