import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { getSettings } from '../actions/cms';
import {
  History, Target, CheckCircle, BookOpen, GraduationCap, Building, Monitor, Users, Map, Star, Trophy
} from 'lucide-react';

const SectionTitle = ({ icon, badgeText, title, subtitle }: any) => (
  <div style={{ textAlign: 'left', marginBottom: '24px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary-dark)', padding: '8px 20px', borderRadius: '100px', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '16px' }}>
      {icon} {badgeText}
    </div>
    <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '12px', letterSpacing: '-0.01em' }}>
      {title}
    </h2>
    {subtitle && <p style={{ fontSize: '1.125rem', color: 'var(--text-light)', maxWidth: '800px', lineHeight: 1.6 }}>{subtitle}</p>}
  </div>
);

export default async function ProfilPage() {
  const settings = await getSettings();

  const Profile = () => (
    <section id="sekolah" className="container" style={{ padding: '120px 24px 40px' }}>
      <SectionTitle icon={<History size={20} />} badgeText="Profil Lengkap" title="Sejarah MA Raden Fatah" subtitle="Mengenal lebih dalam tentang sejarah dan profil MA Raden Fatah" />

      <div className="flex-col-mobile" style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 500px' }}>
          <div className="glass p-mobile" style={{ padding: '40px', borderLeft: '4px solid var(--accent)', height: '100%' }}>
            <h3 style={{ color: 'var(--accent-dark)', marginBottom: '16px', fontSize: '1.5rem' }}>Perjalanan Sejarah</h3>
            {settings.profile_history?.split('\n\n').map((p, i) => (
              <p key={i} style={{ color: 'var(--text-dark)', lineHeight: 1.8, marginBottom: '16px' }} dangerouslySetInnerHTML={{ __html: p }}></p>
            ))}
          </div>
        </div>
        <div style={{ flex: '1 1 300px' }}>
          <div className="glass-accent p-mobile" style={{ padding: '40px', height: '100%' }}>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '24px', color: 'var(--primary-dark)' }}>Informasi Sekolah</h4>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '1rem', color: 'var(--text-light)' }}>Akreditasi</div>
              <div style={{ fontSize: '1.125rem', fontWeight: 700 }}>B</div>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '1rem', color: 'var(--text-light)' }}>Nilai-Nilai</div>
              <div style={{ fontSize: '1.125rem', fontWeight: 700 }}>Iman Tangguh Mulia</div>
            </div>
            <div>
              <div style={{ fontSize: '1rem', color: 'var(--text-light)' }}>Tahun Berdiri</div>
              <div style={{ fontSize: '1.125rem', fontWeight: 700 }}>1978</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const VisiMisi = () => (
    <section id="visi-misi" className="container" style={{ padding: '40px 24px' }}>
      <SectionTitle icon={<Target size={20} />} badgeText="Visi & Misi" title="Arah Perjuangan Kami" subtitle="Tujuan dan pedoman utama dalam mendidik serta membina siswa-siswi di MA Raden Fatah." />
      <div className="flex-col-mobile" style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        <div className="glass" style={{ flex: '1 1 400px', padding: '40px', borderRadius: '24px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Target color="var(--accent)" size={28} /> Visi
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-dark)', lineHeight: 1.8, fontStyle: 'italic' }}>
            "{settings.visi_text}"
          </p>
        </div>
        <div className="glass" style={{ flex: '1 1 400px', padding: '40px', borderRadius: '24px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <CheckCircle color="var(--accent)" size={28} /> Misi
          </h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {settings.misi_text?.split('\n').map((m, i) => m && (
              <li key={i} style={{ display: 'flex', gap: '16px', marginBottom: '16px', alignItems: 'flex-start' }}>
                <CheckCircle color="var(--accent)" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '1.125rem', color: 'var(--text-dark)', lineHeight: 1.6 }}>{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );

  const Jurusan = () => (
    <section id="jurusan" className="container" style={{ padding: '40px 24px' }}>
      <SectionTitle icon={<GraduationCap size={20} />} badgeText="Program Keahlian" title="Program Keahlian Kami" subtitle="Berbagai program keahlian yang dirancang untuk membekali siswa dengan kompetensi profesional dan siap menghadapi dunia kerja." />
      <div className="glass" style={{ padding: '40px', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <BookOpen size={32} />
        </div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--primary-dark)' }}>Kurikulum Merdeka</h3>
        <p style={{ color: 'var(--text-light)', lineHeight: 1.6 }}>
          Pembelajaran Mendalam dan Kurikulum Berbasis Cinta yang membentuk karakter siswa berakhlak mulia dan berwawasan luas.
        </p>
      </div>
    </section>
  );

  const Fasilitas = () => {
    const fasilitas = [
      { title: 'Ruang Kelas', icon: <Building size={32} /> },
      { title: 'Lab Komputer', icon: <Monitor size={32} /> },
      { title: 'Aula', icon: <Users size={32} /> },
      { title: 'Lapangan', icon: <Map size={32} /> }
    ];

    return (
      <section id="fasilitas" className="container" style={{ padding: '40px 24px' }}>
        <SectionTitle icon={<Building size={20} />} badgeText="Fasilitas" title="Fasilitas Unggulan" subtitle="Sarana dan prasarana lengkap pendukung kegiatan belajar mengajar secara optimal." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
          {fasilitas.map((f, i) => (
            <div key={i} className="glass" style={{ padding: '32px', textAlign: 'center', transition: 'transform 0.3s ease' }}>
              <div style={{ background: 'var(--primary-light)', color: 'white', width: '80px', height: '80px', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                {f.icon}
              </div>
              <h4 style={{ fontWeight: 600, color: 'var(--text-dark)' }}>{f.title}</h4>
            </div>
          ))}
        </div>
      </section>
    );
  };

  const ProgramEkstra = () => {
    const programs = [
      { title: 'Pramuka', type: 'Ekstrakurikuler' },
      { title: 'Badminton', type: 'Olahraga' },
      { title: 'Hadroh', type: 'Kesenian Islami' },
      { title: 'Pagar Nusa', type: 'Bela Diri' }
    ];

    return (
      <section id="program" className="container" style={{ padding: '40px 24px 80px' }}>
        <SectionTitle icon={<Star size={20} />} badgeText="Program & Ekstra" title="Ekstrakurikuler" subtitle="Wadah untuk mengembangkan bakat, minat, dan potensi peserta didik di luar kegiatan akademis." />
        <div className="flex-col-mobile" style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <div className="glass-dark p-mobile" style={{ padding: '40px', flex: '1 1 300px' }}>
            <div style={{ background: 'var(--accent)', color: 'white', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              <Trophy size={24} />
            </div>
            <h3 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '16px' }}>Program Unggulan</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
              Juara Lomba Tingkat Kabupaten merupakan salah satu keunggulan sekolah kami dalam membina siswa berprestasi di berbagai bidang.
            </p>
          </div>
          <div className="grid-mobile-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', flex: '1 1 300px' }}>
            {programs.map((p, i) => (
              <div key={i} className="glass" style={{ padding: '24px' }}>
                <div style={{ fontSize: '1rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '8px' }}>{p.type}</div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 700 }}>{p.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-color)', overflowX: 'hidden' }}>
      <Navbar />
      <Profile />
      <VisiMisi />
      <Jurusan />
      <Fasilitas />
      <ProgramEkstra />
      <Footer />
    </div>
  );
}
