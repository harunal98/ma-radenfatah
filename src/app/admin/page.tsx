import React from 'react';
import { 
  Users, Building, FileText, ChevronDown, Monitor, FileBarChart, Shield, 
  Play, Pause, CheckCircle2, Circle, MoreVertical, Calendar, ArrowUpRight
} from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* Top Header & Stats Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '24px' }}>
        
        {/* Welcome & Progress */}
        <div style={{ flex: '1 1 500px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1E293B', marginBottom: '24px', letterSpacing: '-0.02em' }}>
            Selamat Datang, <span style={{ color: 'var(--primary)' }}>Admin</span>
          </h1>
          
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1E293B', marginBottom: '8px' }}>Target PPDB</div>
              <div style={{ background: 'var(--primary-dark)', color: 'white', padding: '4px 16px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                45%
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1E293B', marginBottom: '8px' }}>Pendaftar Aktif</div>
              <div style={{ background: 'var(--primary)', color: 'white', padding: '4px 16px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                78%
              </div>
            </div>
            <div style={{ flex: 1, minWidth: '150px' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1E293B', marginBottom: '8px' }}>Kuota Terpenuhi</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1E293B' }}>65%</span>
                <div style={{ height: '8px', flex: 1, background: '#F1F5F9', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '65%', background: 'var(--primary-light)', borderRadius: '4px' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Stat Cards */}
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center', minWidth: '100px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '4px', color: 'var(--primary-dark)' }}>
              <Users size={20} /> <span style={{ fontSize: '2rem', fontWeight: 800, color: '#1E293B' }}>428</span>
            </div>
            <div style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 500 }}>Total Siswa</div>
          </div>
          
          <div style={{ textAlign: 'center', minWidth: '100px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '4px', color: 'var(--primary-dark)' }}>
              <Building size={20} /> <span style={{ fontSize: '2rem', fontWeight: 800, color: '#1E293B' }}>124</span>
            </div>
            <div style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 500 }}>Pendaftar PPDB</div>
          </div>
          
          <div style={{ textAlign: 'center', minWidth: '100px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '4px', color: 'var(--primary-dark)' }}>
              <FileText size={20} /> <span style={{ fontSize: '2rem', fontWeight: 800, color: '#1E293B' }}>84</span>
            </div>
            <div style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 500 }}>Total Berita</div>
          </div>
        </div>

      </div>

      {/* Main 3-Column Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr 380px', gap: '24px' }}>
        
        {/* LEFT COLUMN */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Profile Card */}
          <div style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(5,150,105,0.2) 100%)', borderRadius: '24px', padding: '24px', position: 'relative', overflow: 'hidden', height: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', border: '1px solid rgba(16,185,129,0.2)' }}>
            <img src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=400&auto=format&fit=crop" alt="Admin" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(16,185,129,0.9), transparent)', zIndex: 1 }}></div>
            
            <div style={{ position: 'relative', zIndex: 2, color: 'white' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '4px' }}>Yazid Shofwan</h2>
              <div style={{ fontSize: '0.9rem', opacity: 0.9, marginBottom: '16px' }}>Kepala Madrasah / Admin</div>
              <div style={{ display: 'inline-block', border: '1px solid rgba(255,255,255,0.4)', padding: '6px 12px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600, backdropFilter: 'blur(10px)' }}>
                Status Aktif
              </div>
            </div>
          </div>

          {/* Accordions */}
          <div style={{ background: 'white', borderRadius: '24px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', fontWeight: 600, color: '#1E293B', cursor: 'pointer' }}>
              Manajemen Hak Akses <ChevronDown size={18} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '0 16px 16px' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1E293B', marginBottom: '8px' }}>Perangkat Login</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#F8FAFC', padding: '12px', borderRadius: '12px' }}>
                <Monitor size={24} color="var(--primary)" />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#1E293B' }}>Windows PC</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>IP: 192.168.1.5</div>
                </div>
                <MoreVertical size={18} color="#64748B" />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', fontWeight: 600, color: '#1E293B', cursor: 'pointer', borderTop: '1px solid #F1F5F9' }}>
              Ringkasan Data Sekolah <ChevronDown size={18} />
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', fontWeight: 600, color: '#1E293B', cursor: 'pointer', borderTop: '1px solid #F1F5F9' }}>
              Keamanan Akun <ChevronDown size={18} />
            </div>
          </div>
        </div>

        {/* MIDDLE COLUMN */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Bar Chart (Statistik PPDB) */}
          <div style={{ background: 'white', borderRadius: '24px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1E293B', marginBottom: '8px' }}>Tren Pendaftaran PPDB</h3>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#1E293B', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  124 <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#64748B' }}>Pendaftar bulan ini</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                  <ArrowUpRight size={14} /> 20% dibanding bulan lalu
                </div>
              </div>
              <div style={{ background: 'var(--primary-light)', color: 'white', padding: '6px 12px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 700 }}>
                124 Pendaftar
              </div>
            </div>

            {/* Faux Bar Chart */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', height: '150px', paddingBottom: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', fontSize: '0.75rem', color: '#94A3B8', paddingRight: '8px' }}>
                <span>40</span><span>30</span><span>20</span><span>10</span><span>0</span>
              </div>
              {[30, 45, 60, 50, 80, 65, 100].map((height, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '100%', height: `${height}%`, background: 'var(--primary)', borderRadius: '6px' }}></div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>
                    {['S', 'S', 'R', 'K', 'J', 'S', 'M'][i]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Calendar / Agenda */}
          <div style={{ background: 'white', borderRadius: '24px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <button style={{ border: 'none', background: 'transparent', color: '#64748B', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer' }}>&lt; Agustus</button>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1E293B' }}>September 2026</h3>
              <button style={{ border: 'none', background: 'transparent', color: '#64748B', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer' }}>Oktober &gt;</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', textAlign: 'center', marginBottom: '24px' }}>
              {['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'].map((d, i) => (
                <div key={i}>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginBottom: '8px', fontWeight: 600 }}>{d}</div>
                  <div style={{ 
                    width: '32px', height: '32px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', 
                    background: i === 2 ? 'var(--primary)' : 'transparent',
                    color: i === 2 ? 'white' : '#1E293B',
                    fontWeight: i === 2 ? 700 : 500
                  }}>
                    {22 + i}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ position: 'relative', paddingLeft: '60px', minHeight: '120px' }}>
              {/* Timeline Lines */}
              <div style={{ position: 'absolute', left: '40px', top: 0, bottom: 0, width: '1px', background: '#E2E8F0', zIndex: 0 }}></div>
              
              {/* Times */}
              <div style={{ position: 'absolute', left: 0, top: '0px', fontSize: '0.75rem', color: '#94A3B8', fontWeight: 500 }}>09:00</div>
              <div style={{ position: 'absolute', left: 0, top: '40px', fontSize: '0.75rem', color: '#94A3B8', fontWeight: 500 }}>10:00</div>
              <div style={{ position: 'absolute', left: 0, top: '80px', fontSize: '0.75rem', color: '#94A3B8', fontWeight: 500 }}>11:00</div>
              
              {/* Event Blocks */}
              <div style={{ background: 'rgba(16,185,129,0.1)', padding: '12px 16px', borderRadius: '12px', marginBottom: '24px', position: 'relative', zIndex: 1, border: '1px solid rgba(16,185,129,0.2)' }}>
                <div style={{ fontWeight: 600, color: 'var(--primary-dark)', fontSize: '0.9rem', marginBottom: '4px' }}>Rapat Kordinasi PPDB</div>
                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Membahas target penerimaan siswa.</div>
              </div>

              <div style={{ background: 'rgba(245,158,11,0.1)', padding: '12px 16px', borderRadius: '12px', position: 'relative', zIndex: 1, border: '1px solid rgba(245,158,11,0.2)', marginLeft: '100px' }}>
                <div style={{ fontWeight: 600, color: '#D97706', fontSize: '0.9rem', marginBottom: '4px' }}>Sosialisasi Kurikulum</div>
                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Pengenalan ke guru.</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Time Tracker */}
          <div style={{ background: 'white', borderRadius: '24px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1E293B' }}>Waktu Aktif Admin</h3>
              <ArrowUpRight size={18} color="#94A3B8" />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px', position: 'relative' }}>
              <div style={{ width: '160px', height: '160px', borderRadius: '50%', border: '12px solid #F1F5F9', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                {/* SVG Progress Circle Mockup */}
                <svg width="160" height="160" style={{ position: 'absolute', top: '-12px', left: '-12px', transform: 'rotate(-90deg)' }}>
                  <circle cx="80" cy="80" r="74" fill="none" stroke="var(--primary)" strokeWidth="12" strokeDasharray="465" strokeDashoffset="120" strokeLinecap="round" />
                </svg>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#1E293B', lineHeight: 1 }}>02:35</div>
                <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 500, marginTop: '4px' }}>Jam Aktif Hari Ini</div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
              <button style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #E2E8F0', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#1E293B' }}><Play size={16} fill="currentColor" /></button>
              <button style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #E2E8F0', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#1E293B' }}><Pause size={16} fill="currentColor" /></button>
              <button style={{ width: '40px', height: '40px', borderRadius: '50%', border: 'none', background: '#1E293B', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'white' }}><Calendar size={16} /></button>
            </div>
          </div>

          {/* Dark Tasks Card */}
          <div style={{ background: '#1E293B', borderRadius: '24px', padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'white' }}>Tugas Harian</h3>
              <div style={{ fontSize: '1.25rem', color: 'white', fontWeight: 700 }}>2/8</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ background: 'var(--primary)', padding: '10px', borderRadius: '12px', color: 'white' }}><CheckCircle2 size={18} /></div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: 'white', fontWeight: 600, fontSize: '0.95rem', marginBottom: '4px', textDecoration: 'line-through', opacity: 0.7 }}>Validasi Data Pendaftar</div>
                  <div style={{ color: '#94A3B8', fontSize: '0.8rem' }}>10 Sep, 09:30</div>
                </div>
                <CheckCircle2 size={20} color="var(--primary)" />
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ background: 'var(--primary)', padding: '10px', borderRadius: '12px', color: 'white' }}><CheckCircle2 size={18} /></div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: 'white', fontWeight: 600, fontSize: '0.95rem', marginBottom: '4px', textDecoration: 'line-through', opacity: 0.7 }}>Unggah Foto Galeri</div>
                  <div style={{ color: '#94A3B8', fontSize: '0.8rem' }}>10 Sep, 10:30</div>
                </div>
                <CheckCircle2 size={20} color="var(--primary)" />
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '12px', color: 'white' }}><FileText size={18} /></div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: 'white', fontWeight: 600, fontSize: '0.95rem', marginBottom: '4px' }}>Publikasi Berita Prestasi</div>
                  <div style={{ color: '#94A3B8', fontSize: '0.8rem' }}>10 Sep, 12:00</div>
                </div>
                <Circle size={20} color="#64748B" />
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '12px', color: 'white' }}><Users size={18} /></div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: 'white', fontWeight: 600, fontSize: '0.95rem', marginBottom: '4px' }}>Update Status Kelulusan</div>
                  <div style={{ color: '#94A3B8', fontSize: '0.8rem' }}>10 Sep, 14:45</div>
                </div>
                <Circle size={20} color="#64748B" />
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '12px', color: 'white' }}><Shield size={18} /></div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: 'white', fontWeight: 600, fontSize: '0.95rem', marginBottom: '4px' }}>Backup Database Mingguan</div>
                  <div style={{ color: '#94A3B8', fontSize: '0.8rem' }}>10 Sep, 16:00</div>
                </div>
                <Circle size={20} color="#64748B" />
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
