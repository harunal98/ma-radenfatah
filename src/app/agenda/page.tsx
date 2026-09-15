import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Home, ChevronRight, ArrowRight, Clock, MapPin, Search } from 'lucide-react';
import Link from 'next/link';
import { getAgenda } from '../actions/cms';

export default async function AgendaPage() {
  const { agendas: dbAgendas } = await getAgenda({ limit: 10 });
  
  // Format the agenda data from the DB to match the component's UI
  const monthNames = ["JANUARI", "FEBRUARI", "MARET", "APRIL", "MEI", "JUNI", "JULI", "AGUSTUS", "SEPTEMBER", "OKTOBER", "NOVEMBER", "DESEMBER"];
  
  const agendaData = dbAgendas.length > 0 ? dbAgendas.map(a => {
    const d = new Date(a.date);
    return {
      id: a.id,
      title: a.title,
      date: {
        month: monthNames[d.getMonth()],
        day: String(d.getDate()).padStart(2, '0'),
        year: String(d.getFullYear())
      },
      time: a.time,
      location: a.location,
      excerpt: a.excerpt
    };
  }) : [
    {
      id: "1",
      title: "MAULID NABI MUHAMMAD SAW",
      date: { month: "AGUSTUS", day: "22", year: "2026" },
      time: "08.00 - 12.00",
      location: "Halaman Madrasah",
      excerpt: "Peringatan Maulid Nabi Muhammad SAW 1448 H / 2026 M Madrasah Aliyah Raden Fatah kembali menggelar peringatan Maulid Nabi Muhammad SAW dengan tema \"Meneladan..."
    },
    {
      id: "2",
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
      <section style={{ 
        background: 'radial-gradient(circle at 10% 20%, rgba(16,185,129,0.1) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(245,158,11,0.1) 0%, transparent 40%)',
        padding: '120px 24px 60px',
        textAlign: 'left',
        borderBottom: '1px solid var(--glass-border)',
        position: 'relative',
        marginBottom: '60px'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '8px', color: 'var(--text-light)', fontSize: '1rem', marginBottom: '24px' }}>
            <Link href="/" style={{ color: 'var(--text-light)', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <Home size={16} style={{ marginRight: '4px' }} />
            </Link>
            <ChevronRight size={16} />
            <Link href="#" style={{ color: 'var(--text-light)', textDecoration: 'none' }}>Informasi</Link>
            <ChevronRight size={16} />
            <span style={{ color: 'var(--text-dark)', fontWeight: 600 }}>Agenda & Acara</span>
          </div>

          <h1 className="heading-primary" style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-dark)', marginBottom: '16px', letterSpacing: '-0.02em' }}>Agenda Madrasah</h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-light)', maxWidth: '600px' }}>Jadwal kegiatan akademik dan non-akademik di waktu mendatang.</p>
        </div>
      </section>

      {/* Content Section */}
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px', flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          {agendaData.map((item) => (
            <div key={item.id} className="glass flex-col-mobile agenda-card" style={{ display: 'flex', padding: 0, overflow: 'hidden', minHeight: '240px', borderRadius: '24px' }}>
              {/* Left Date Block */}
              <div style={{ background: 'var(--primary)', color: 'white', width: '260px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px', flexShrink: 0 }} className="w-full-mobile p-mobile">
                <div style={{ fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.15em', opacity: 0.9 }}>{item.date.month}</div>
                <div style={{ fontSize: '4.5rem', fontWeight: 700, lineHeight: 1, margin: '8px 0' }}>{item.date.day}</div>
                <div style={{ fontSize: '1.125rem', fontWeight: 700, opacity: 0.9 }}>{item.date.year}</div>
              </div>
              
              {/* Right Content Block */}
              <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1, background: 'white' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '16px', lineHeight: 1.3 }}>
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
                
                <Link href="#" style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
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
