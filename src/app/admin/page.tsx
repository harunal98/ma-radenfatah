import React from 'react';
import { 
  Users, Building, FileText, ChevronDown, Monitor, FileBarChart, Shield, 
  Play, Pause, CheckCircle2, Circle, MoreVertical, Calendar, ArrowUpRight,
  Megaphone, Trophy, Image as ImageIcon, MessageSquare, PlusCircle, Edit3, Trash2, Settings, ExternalLink, Mail, ArrowRight, BarChart2, Eye
} from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#1E293B', marginBottom: '4px', letterSpacing: '-0.02em' }}>
            Dashboard <span style={{ color: 'var(--primary)' }}>Admin</span>
          </h1>
          <p style={{ color: '#64748B', margin: 0 }}>Ringkasan pengelolaan konten MA Raden Fatah.</p>
        </div>
        <Link href="/" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: 'white', border: '1px solid #E2E8F0', borderRadius: '12px', color: '#1E293B', textDecoration: 'none', fontWeight: 600, transition: 'all 0.2s' }} className="hover-lift">
          Lihat Website <ExternalLink size={16} />
        </Link>
      </div>

      {/* STATS ROW (CMS Content) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
        
        {/* Berita Stat */}
        <div style={{ background: 'white', borderRadius: '20px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(16,185,129,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
            <FileText size={28} />
          </div>
          <div>
            <div style={{ fontSize: '0.9rem', color: '#64748B', fontWeight: 600, marginBottom: '4px' }}>Total Berita</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#1E293B', lineHeight: 1 }}>84</div>
          </div>
        </div>

        {/* Pengumuman Stat */}
        <div style={{ background: 'white', borderRadius: '20px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(245,158,11,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D97706' }}>
            <Megaphone size={28} />
          </div>
          <div>
            <div style={{ fontSize: '0.9rem', color: '#64748B', fontWeight: 600, marginBottom: '4px' }}>Pengumuman</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#1E293B', lineHeight: 1 }}>12</div>
          </div>
        </div>

        {/* Prestasi Stat */}
        <div style={{ background: 'white', borderRadius: '20px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(59,130,246,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563EB' }}>
            <Trophy size={28} />
          </div>
          <div>
            <div style={{ fontSize: '0.9rem', color: '#64748B', fontWeight: 600, marginBottom: '4px' }}>Prestasi Siswa</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#1E293B', lineHeight: 1 }}>38</div>
          </div>
        </div>

        {/* Galeri Stat */}
        <div style={{ background: 'white', borderRadius: '20px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(236,72,153,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#DB2777' }}>
            <ImageIcon size={28} />
          </div>
          <div>
            <div style={{ fontSize: '0.9rem', color: '#64748B', fontWeight: 600, marginBottom: '4px' }}>Foto Galeri</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#1E293B', lineHeight: 1 }}>156</div>
          </div>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1E293B', marginBottom: '16px' }}>Jalan Pintas</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          
          <Link href="/admin/berita" style={{ background: 'var(--primary)', color: 'white', borderRadius: '16px', padding: '20px', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '12px', transition: 'all 0.3s' }} className="hover-lift">
            <div style={{ background: 'rgba(255,255,255,0.2)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <PlusCircle size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Tulis Berita</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.9, marginTop: '4px' }}>Buat artikel/berita baru.</div>
            </div>
          </Link>

          <Link href="/admin/pengumuman" style={{ background: '#F59E0B', color: 'white', borderRadius: '16px', padding: '20px', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '12px', transition: 'all 0.3s' }} className="hover-lift">
            <div style={{ background: 'rgba(255,255,255,0.2)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Megaphone size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Pengumuman</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.9, marginTop: '4px' }}>Beri info penting terbaru.</div>
            </div>
          </Link>

          <Link href="/admin/prestasi" style={{ background: '#3B82F6', color: 'white', borderRadius: '16px', padding: '20px', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '12px', transition: 'all 0.3s' }} className="hover-lift">
            <div style={{ background: 'rgba(255,255,255,0.2)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Trophy size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Input Prestasi</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.9, marginTop: '4px' }}>Catat pencapaian siswa.</div>
            </div>
          </Link>

          <Link href="/admin/galeri" style={{ background: '#EC4899', color: 'white', borderRadius: '16px', padding: '20px', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '12px', transition: 'all 0.3s' }} className="hover-lift">
            <div style={{ background: 'rgba(255,255,255,0.2)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ImageIcon size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Unggah Galeri</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.9, marginTop: '4px' }}>Tambah foto kegiatan.</div>
            </div>
          </Link>

        </div>
      </div>

      {/* Main 2-Column Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
        
        {/* LEFT COLUMN: Recent Updates & Traffic */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Recent Updates */}
          <div style={{ background: 'white', borderRadius: '24px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1E293B' }}>Konten Terbaru</h3>
              <Link href="/admin/berita" style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }} className="hover:underline">
                Lihat Semua <ArrowRight size={14} />
              </Link>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Item 1 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', border: '1px solid #F1F5F9', borderRadius: '12px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: '#F1F5F9', overflow: 'hidden' }}>
                  <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=200" alt="News" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ background: 'rgba(16,185,129,0.1)', color: 'var(--primary)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700 }}>Berita</span>
                    <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Hari ini, 10:30 WIB</span>
                  </div>
                  <div style={{ fontWeight: 600, color: '#1E293B', fontSize: '1rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    Penerimaan Siswa Baru Tahun Ajaran 2026/2027 Telah Dibuka
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button style={{ background: 'transparent', border: 'none', color: '#64748B', cursor: 'pointer', padding: '6px' }} className="hover:text-primary"><Edit3 size={18} /></button>
                </div>
              </div>

              {/* Item 2 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', border: '1px solid #F1F5F9', borderRadius: '12px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D97706' }}>
                  <Megaphone size={20} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ background: 'rgba(245,158,11,0.1)', color: '#D97706', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700 }}>Pengumuman</span>
                    <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Kemarin, 14:15 WIB</span>
                  </div>
                  <div style={{ fontWeight: 600, color: '#1E293B', fontSize: '1rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    Jadwal Ujian Semester Ganjil 2026
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button style={{ background: 'transparent', border: 'none', color: '#64748B', cursor: 'pointer', padding: '6px' }} className="hover:text-primary"><Edit3 size={18} /></button>
                </div>
              </div>

              {/* Item 3 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', border: '1px solid #F1F5F9', borderRadius: '12px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: '#F1F5F9', overflow: 'hidden' }}>
                  <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=200" alt="Prestasi" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ background: 'rgba(59,130,246,0.1)', color: '#2563EB', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700 }}>Prestasi</span>
                    <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>2 Hari yang lalu</span>
                  </div>
                  <div style={{ fontWeight: 600, color: '#1E293B', fontSize: '1rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    Juara Umum Olimpiade Sains Nasional 2026
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button style={{ background: 'transparent', border: 'none', color: '#64748B', cursor: 'pointer', padding: '6px' }} className="hover:text-primary"><Edit3 size={18} /></button>
                </div>
              </div>

            </div>
          </div>

          {/* Web Traffic / Visitor Stats */}
          <div style={{ background: 'white', borderRadius: '24px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1E293B', marginBottom: '8px' }}>Statistik Pengunjung (September)</h3>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: '#1E293B', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  8.420 <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#64748B' }}>Kunjungan</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                  <ArrowUpRight size={14} /> 12.5% meningkat dibanding bulan lalu
                </div>
              </div>
              <div style={{ background: 'rgba(16,185,129,0.1)', color: 'var(--primary-dark)', padding: '8px 12px', borderRadius: '12px', fontSize: '0.9rem', display: 'flex', gap: '8px', alignItems: 'center', cursor: 'pointer', fontWeight: 600 }}>
                <BarChart2 size={16} /> 30 Hari
              </div>
            </div>

            {/* Faux Area Chart */}
            <div style={{ position: 'relative', height: '150px', width: '100%', overflow: 'hidden', paddingBottom: '24px', display: 'flex', alignItems: 'flex-end', gap: '2px' }}>
              {/* Very simple visual mockup for a chart */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, background: 'linear-gradient(to bottom, var(--primary) 0%, transparent 100%)', clipPath: 'polygon(0% 100%, 0% 70%, 10% 80%, 20% 60%, 30% 65%, 40% 40%, 50% 50%, 60% 30%, 70% 45%, 80% 20%, 90% 30%, 100% 10%, 100% 100%)' }}></div>
              <svg viewBox="0 0 1000 150" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'visible', zIndex: 1 }} preserveAspectRatio="none">
                <polyline fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="0,105 100,120 200,90 300,97.5 400,60 500,75 600,45 700,67.5 800,30 900,45 1000,15" />
              </svg>
              {/* X Axis Labels */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 500 }}>
                <span>1 Sep</span><span>7 Sep</span><span>14 Sep</span><span>21 Sep</span><span>30 Sep</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Inbox & User Profile */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Inbox Preview */}
          <div style={{ background: 'white', borderRadius: '24px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1E293B' }}>Pesan Masuk (Inbox)</h3>
                <span style={{ background: '#EF4444', color: 'white', fontSize: '0.75rem', fontWeight: 'bold', padding: '2px 8px', borderRadius: '100px' }}>3 Baru</span>
              </div>
              <Link href="#" style={{ color: 'var(--primary)', textDecoration: 'none' }}><ArrowRight size={18} /></Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              <div style={{ padding: '16px', background: '#F8FAFC', borderRadius: '12px', borderLeft: '4px solid var(--primary)', cursor: 'pointer' }} className="hover:bg-gray-100">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#1E293B' }}>Budi Santoso</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>1 Jam lalu</div>
                </div>
                <div style={{ fontSize: '0.9rem', color: '#334155', fontWeight: 600, marginBottom: '4px' }}>Tanya Pendaftaran Jalur Prestasi</div>
                <div style={{ fontSize: '0.85rem', color: '#64748B', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: 1.5 }}>
                  Selamat pagi admin, saya ingin bertanya apakah jalur prestasi untuk tahun ini menggunakan nilai rapor atau piagam penghargaan ya? Terima kasih.
                </div>
              </div>

              <div style={{ padding: '16px', background: '#F8FAFC', borderRadius: '12px', borderLeft: '4px solid var(--primary)', cursor: 'pointer' }} className="hover:bg-gray-100">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#1E293B' }}>Siti Aminah</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>3 Jam lalu</div>
                </div>
                <div style={{ fontSize: '0.9rem', color: '#334155', fontWeight: 600, marginBottom: '4px' }}>Biaya Asrama Lengkap</div>
                <div style={{ fontSize: '0.85rem', color: '#64748B', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: 1.5 }}>
                  Berapa rincian biaya untuk asrama putri per bulannya? Apakah sudah termasuk biaya makan 3 kali sehari dan fasilitas cuci?
                </div>
              </div>

              <div style={{ padding: '16px', background: 'white', borderRadius: '12px', border: '1px solid #E2E8F0', cursor: 'pointer' }} className="hover:bg-gray-50">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#1E293B' }}>Rahmat Hidayat</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Kemarin</div>
                </div>
                <div style={{ fontSize: '0.9rem', color: '#334155', fontWeight: 600, marginBottom: '4px' }}>Donasi Pembangunan Masjid</div>
                <div style={{ fontSize: '0.85rem', color: '#64748B', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: 1.5 }}>
                  Assalamualaikum, mohon info rekening resmi madrasah untuk donasi pembangunan masjid sekolah. Saya alumni tahun 2010.
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
