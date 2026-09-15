import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Home, ChevronRight, Activity, Trophy, Music, PenTool } from 'lucide-react';
import Link from 'next/link';

export default function ProgramPage() {
  const programs = [
    {
      title: "Pramuka",
      icon: <Activity size={32} />,
      desc: "Ekstrakurikuler wajib untuk melatih kedisiplinan, kemandirian, dan kepemimpinan siswa."
    },
    {
      title: "Klub Olahraga",
      icon: <Trophy size={32} />,
      desc: "Berbagai cabang olahraga seperti Futsal, Basket, Voli, dan Bulutangkis untuk mencetak atlet berprestasi."
    },
    {
      title: "Seni Islami",
      icon: <Music size={32} />,
      desc: "Pengembangan bakat seni melalui Hadroh, Tilawah Qur'an, dan Kaligrafi."
    },
    {
      title: "Jurnalistik & Sastra",
      icon: <PenTool size={32} />,
      desc: "Melatih kemampuan menulis, public speaking, dan pengelolaan majalah madrasah."
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

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-light)', fontSize: '1rem', marginBottom: '32px' }}>
              <Link href="/" style={{ color: 'var(--text-light)', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <Home size={16} />
              </Link>
              <ChevronRight size={16} />
              <Link href="#" style={{ color: 'var(--text-light)', textDecoration: 'none' }}>Profil</Link>
              <ChevronRight size={16} />
              <span style={{ color: 'var(--primary-dark)', fontWeight: 600 }}>Program & Ekstra</span>
            </div>

            <h1 className="heading-primary" style={{ marginBottom: '16px' }}>Program & Ekstra</h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-light)', margin: 0 }}>Pengembangan minat, bakat, dan karakter siswa di luar jam pelajaran kelas.</p>
          </div>
        </div>

        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px 60px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {programs.map((prog, idx) => (
              <div key={idx} className="glass card-hover" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'var(--accent)', width: '64px', height: '64px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {prog.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-dark)' }}>{prog.title}</h3>
                <p style={{ color: 'var(--text-light)', lineHeight: 1.6 }}>{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
