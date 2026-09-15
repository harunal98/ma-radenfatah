import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Home, ChevronRight, Target, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { getSettings } from '../actions/cms';

export default async function VisiMisiPage() {
  const settings = await getSettings();

  return (
    <div style={{ background: 'var(--bg-color)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      <main style={{ flex: 1 }}>
        {/* Header Section */}
        <div style={{ 
          padding: '140px 24px 60px', 
          background: '#F8FAFC url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          position: 'relative',
          borderBottom: '1px solid var(--glass-border)',
          marginBottom: '60px'
        }}>
          <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ position: 'absolute', right: '15%', top: '50%', width: '12px', height: '12px', borderRadius: '50%', border: '2px solid #94A3B8', opacity: 0.5 }}></div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-light)', fontSize: '1rem', marginBottom: '32px' }}>
              <Link href="/" style={{ color: 'var(--text-light)', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <Home size={16} />
              </Link>
              <ChevronRight size={16} />
              <Link href="#" style={{ color: 'var(--text-light)', textDecoration: 'none' }}>Profil</Link>
              <ChevronRight size={16} />
              <span style={{ color: 'var(--primary-dark)', fontWeight: 600 }}>Visi & Misi</span>
            </div>

            <h1 className="heading-primary" style={{ marginBottom: '16px' }}>Visi & Misi</h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-light)', margin: 0 }}>Tujuan dan arah pendidikan MA Raden Fatah di masa depan.</p>
          </div>
        </div>

        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px 60px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            <div className="glass" style={{ padding: '40px', borderRadius: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Target size={32} />
                </div>
                <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary-dark)' }}>Visi</h2>
              </div>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-dark)', lineHeight: 1.8, fontWeight: 600 }}>
                {settings.profile_visi || `"Terwujudnya Generasi Muslim yang Beriman, Bertaqwa, Berakhlak Mulia, Cerdas, Terampil, dan Mandiri serta Berwawasan Lingkungan."`}
              </p>
            </div>

            <div className="glass" style={{ padding: '40px', borderRadius: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'var(--accent)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ShieldCheck size={32} />
                </div>
                <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary-dark)' }}>Misi</h2>
              </div>
              <div style={{ fontSize: '1.125rem', color: 'var(--text-dark)', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>
                {settings.profile_misi || `1. Menumbuhkembangkan penghayatan dan pengamalan ajaran Islam Ahlussunnah wal Jamaah.\n2. Melaksanakan pembelajaran dan bimbingan secara efektif sehingga setiap siswa dapat berkembang secara optimal.\n3. Mengembangkan potensi kecerdasan, bakat, dan minat siswa melalui kegiatan ekstrakurikuler.\n4. Menumbuhkan kesadaran dan kepedulian terhadap kelestarian lingkungan alam sekitar.\n5. Membekali lulusan dengan keterampilan abad 21 agar mampu beradaptasi dengan kemajuan teknologi.`}
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
