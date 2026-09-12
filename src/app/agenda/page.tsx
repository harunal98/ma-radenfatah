import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Home, ChevronRight, ArrowRight, Clock, MapPin, Search } from 'lucide-react';
import Link from 'next/link';

export default function AgendaPage() {
  // Dummy data based on the requested screenshot
  const agendaData = [
    {
      id: 1,
      title: "MAULID NABI MUHAMMAD SAW",
      date: { month: "AGUSTUS", day: "22", year: "2026" },
      time: "08.00 - 12.00",
      location: "Halaman Madrasah",
      excerpt: "Peringatan Maulid Nabi Muhammad SAW 1448 H / 2026 M Madrasah Aliyah Raden Fatah kembali menggelar peringatan Maulid Nabi Muhammad SAW dengan tema \"Meneladan..."
    },
    {
      id: 2,
      title: "HARI KEMERDEKAAN REPUBLIK INDONESIA",
      date: { month: "AGUSTUS", day: "17", year: "2026" },
      time: "07.00 - 15.00",
      location: "Halaman Madrasah",
      excerpt: "Peringatan Hari Ulang Tahun ke-81 Kemerdekaan Republik Indonesia Madrasah Aliyah Raden Fatah dengan bangga memperingati detik-detik Proklamasi Kemerdekaan Republ..."
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-color)', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Inline styles for hover effects */}
      <style>{`
        .agenda-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .agenda-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(16, 185, 129, 0.15) !important;
        }
      `}</style>

      {/* Header Section */}
      <div style={{ 
        padding: '140px 24px 60px', 
        background: '#F8FAFC url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        position: 'relative',
        borderBottom: '1px solid var(--glass-border)',
        marginBottom: '60px'
      }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Decorative background circle */}
          <div style={{ position: 'absolute', right: '15%', top: '50%', width: '12px', height: '12px', borderRadius: '50%', border: '2px solid #94A3B8', opacity: 0.5 }}></div>

          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-light)', fontSize: '0.875rem', marginBottom: '32px' }}>
            <Link href="/" style={{ color: 'var(--text-light)', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <Home size={16} />
            </Link>
            <ChevronRight size={16} />
            <Link href="#" style={{ color: 'var(--text-light)', textDecoration: 'none' }}>Informasi</Link>
            <ChevronRight size={16} />
            <span style={{ color: 'var(--primary-dark)', fontWeight: 600 }}>Agenda & Acara</span>
          </div>

          <h1 className="heading-primary" style={{ marginBottom: '16px' }}>Agenda Madrasah</h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-light)', margin: 0 }}>Jadwal kegiatan akademik dan non-akademik di waktu mendatang.</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 24px', flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          {agendaData.map((item) => (
            <div key={item.id} className="glass flex-col-mobile agenda-card" style={{ display: 'flex', padding: 0, overflow: 'hidden', minHeight: '240px', borderRadius: '24px' }}>
              {/* Left Date Block */}
              <div style={{ background: 'var(--primary)', color: 'white', width: '260px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px', flexShrink: 0 }} className="w-full-mobile p-mobile">
                <div style={{ fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.15em', opacity: 0.9 }}>{item.date.month}</div>
                <div style={{ fontSize: '4.5rem', fontWeight: 900, lineHeight: 1, margin: '8px 0' }}>{item.date.day}</div>
                <div style={{ fontSize: '1.125rem', fontWeight: 700, opacity: 0.9 }}>{item.date.year}</div>
              </div>
              
              {/* Right Content Block */}
              <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1, background: 'white' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-dark)', marginBottom: '16px', lineHeight: 1.3 }}>
                  {item.title}
                </h2>
                
                {/* Time & Location Pills */}
                <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(16,185,129,0.08)', color: 'var(--text-dark)', padding: '8px 16px', borderRadius: '100px', fontSize: '0.9rem', fontWeight: 600 }}>
                    <Clock size={16} color="var(--primary)" />
                    {item.time}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(16,185,129,0.08)', color: 'var(--text-dark)', padding: '8px 16px', borderRadius: '100px', fontSize: '0.9rem', fontWeight: 600 }}>
                    <MapPin size={16} color="var(--primary)" />
                    {item.location}
                  </div>
                </div>

                <p style={{ color: 'var(--text-light)', lineHeight: 1.6, marginBottom: '24px', fontSize: '1rem' }}>
                  {item.excerpt}
                </p>
                
                <Link href="#" style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Lihat Detail <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}

        </div>
      </div>
      <Footer />
    </div>
  );
}
