import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Home, ChevronRight, GraduationCap, BookOpen, Calculator, Globe, Code } from 'lucide-react';
import Link from 'next/link';

export default function JurusanPage() {
  const jurusanData = [
    {
      title: "MIPA (Matematika dan Ilmu Pengetahuan Alam)",
      icon: <Calculator size={40} />,
      desc: "Mempelajari lebih dalam ilmu eksakta seperti Fisika, Kimia, Biologi, dan Matematika Tingkat Lanjut. Cocok untuk siswa yang ingin melanjutkan studi ke kedokteran, teknik, atau sains murni."
    },
    {
      title: "IPS (Ilmu Pengetahuan Sosial)",
      icon: <Globe size={40} />,
      desc: "Berfokus pada ilmu-ilmu sosial seperti Sosiologi, Geografi, Ekonomi, dan Sejarah. Mempersiapkan siswa untuk bidang sosial, hukum, politik, dan manajemen ekonomi."
    },
    {
      title: "Keagamaan (MAK)",
      icon: <BookOpen size={40} />,
      desc: "Pendalaman materi agama Islam seperti Ilmu Tafsir, Ilmu Hadis, Fikih, dan Bahasa Arab. Dipersiapkan untuk menjadi ahli agama dan cendekiawan muslim."
    },
    {
      title: "Multimedia & Teknologi",
      icon: <Code size={40} />,
      desc: "Program khusus pengembangan keahlian teknologi informasi, desain grafis, dan rekayasa perangkat lunak sebagai bekal soft-skill abad 21."
    }
  ];

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
              <span style={{ color: 'var(--primary-dark)', fontWeight: 600 }}>Program Jurusan</span>
            </div>

            <h1 className="heading-primary" style={{ marginBottom: '16px' }}>Program Jurusan</h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-light)', margin: 0 }}>Pilih jalur pendidikan sesuai minat dan bakat Anda untuk masa depan cerah.</p>
          </div>
        </div>

        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px 60px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {jurusanData.map((j, i) => (
              <div key={i} className="glass card-hover flex-col-mobile" style={{ padding: '40px', borderRadius: '24px', display: 'flex', gap: '32px', alignItems: 'center' }}>
                <div style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary)', width: '80px', height: '80px', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {j.icon}
                </div>
                <div>
                  <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary-dark)', marginBottom: '16px' }}>{j.title}</h2>
                  <p style={{ fontSize: '1.125rem', color: 'var(--text-dark)', lineHeight: 1.6 }}>{j.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
