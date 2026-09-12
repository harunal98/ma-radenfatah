import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Home, ChevronRight, History } from 'lucide-react';
import Link from 'next/link';
import { getSettings } from '../actions/cms';

export default async function ProfilPage() {
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

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-light)', fontSize: '0.875rem', marginBottom: '32px' }}>
              <Link href="/" style={{ color: 'var(--text-light)', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <Home size={16} />
              </Link>
              <ChevronRight size={16} />
              <Link href="#" style={{ color: 'var(--text-light)', textDecoration: 'none' }}>Profil</Link>
              <ChevronRight size={16} />
              <span style={{ color: 'var(--primary-dark)', fontWeight: 600 }}>Profil Sekolah</span>
            </div>

            <h1 className="heading-primary" style={{ marginBottom: '16px' }}>Profil Sekolah</h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-light)', margin: 0 }}>Mengenal lebih dalam tentang sejarah dan profil MA Raden Fatah.</p>
          </div>
        </div>

        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px 60px' }}>
          <div className="glass" style={{ padding: '40px', borderRadius: '24px' }}>
            <div style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'var(--accent)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              <History size={32} />
            </div>
            <div style={{ fontSize: '1.125rem', color: 'var(--text-dark)', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>
              {settings.profile_history || `Sejarah MA Raden Fatah Prambanan didirikan dengan semangat untuk mencetak generasi muslim yang berakhlakul karimah, unggul dalam prestasi akademik maupun non-akademik, serta memiliki daya saing global.
              
Berdiri sejak puluhan tahun yang lalu, madrasah ini terus berinovasi dalam mengadaptasi kurikulum modern dengan tetap mempertahankan nilai-nilai luhur pesantren dan ajaran Ahlussunnah wal Jamaah.`}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
