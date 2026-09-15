import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="kontak" style={{ background: 'var(--primary-dark)', color: 'white', padding: '80px 24px 40px', marginTop: '80px' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', marginBottom: '40px', justifyContent: 'space-between' }}>
        <div style={{ flex: '1 1 280px', maxWidth: '320px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <img src="/assets/logo.png" alt="Logo MA Raden Fatah" style={{ height: '48px', width: 'auto' }} />
            <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>MA Raden Fatah</span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '24px', fontSize: '0.95rem' }}>
            Madrasah Aliyah Raden Fatah Prambanan Sleman merupakan sekolah menengah tingkat atas berbasis keagamaan Islam (madrasah) di bawah naungan Kementerian Agama.
          </p>
        </div>
        
        <div style={{ flex: '1 1 150px' }}>
          <h4 style={{ fontSize: '1.125rem', marginBottom: '20px', fontWeight: 600 }}>Tautan Cepat</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem' }}>
            <li><a href="/#home" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }} className="hover:text-primary">Beranda</a></li>
            <li><a href="/#kepala-sekolah" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }} className="hover:text-primary">Profil Lengkap</a></li>
            <li><a href="/berita" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }} className="hover:text-primary">Berita Sekolah</a></li>
            <li><a href="https://nuist.id/ppdb/MA%20Raden%20Fatah" target="_blank" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }} className="hover:text-primary">Pendaftaran PPDB</a></li>
          </ul>
        </div>
        
        <div style={{ flex: '1 1 250px' }}>
          <h4 style={{ fontSize: '1.125rem', marginBottom: '20px', fontWeight: 600 }}>Hubungi Kami</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.95rem' }}>
            <li style={{ display: 'flex', gap: '12px', color: 'rgba(255,255,255,0.8)', alignItems: 'flex-start' }}>
              <MapPin size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
              <a href="https://www.google.com/maps/place/MA+Raden+Fatah/@-7.7744754,110.4760132,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a5a8efce330b5:0x5c9ed6914fdd0870!8m2!3d-7.7744807!4d110.4785881!16s%2Fg%2F1pzsr2nyl?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }} className="hover:text-primary">Gayam, Bokoharjo, Kec. Prambanan, Kab. Sleman, DIY 55572</a>
            </li>
            <li style={{ display: 'flex', gap: '12px', color: 'rgba(255,255,255,0.8)', alignItems: 'center' }}>
              <Phone size={20} style={{ flexShrink: 0 }} />
              <span>(0274) 496739</span>
            </li>
            <li style={{ display: 'flex', gap: '12px', color: 'rgba(255,255,255,0.8)', alignItems: 'center' }}>
              <Mail size={20} style={{ flexShrink: 0 }} />
              <span>info@maradenfatah.sch.id</span>
            </li>
          </ul>
        </div>

        <div style={{ flex: '1 1 150px' }}>
          <h4 style={{ fontSize: '1.125rem', marginBottom: '20px', fontWeight: 600 }}>Ikuti Kami</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.95rem' }}>
            <li>
              <a href="https://www.youtube.com/@maradenfatah" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', transition: 'color 0.3s' }} className="hover:text-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                <span>YouTube</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/maradenfatah78/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', transition: 'color 0.3s' }} className="hover:text-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/maradenfatah78?locale=id_ID" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', transition: 'color 0.3s' }} className="hover:text-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@maradenfatah78" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', transition: 'color 0.3s' }} className="hover:text-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                <span>TikTok</span>
              </a>
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
