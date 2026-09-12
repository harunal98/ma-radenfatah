import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  BookOpen, GraduationCap, Trophy, Users, PlayCircle, ArrowRight,
  Library, Monitor, MapPin, History, Star, Building, Heart,
  CheckCircle, Phone, Mail, Download, Map,
  Target, Award, Globe, Link as LinkIcon, Quote, Camera, MonitorPlay
} from 'lucide-react';
import { getSettings } from './actions/cms';
import Link from 'next/link';
import HeroCarousel from '../components/HeroCarousel';

export default async function Home() {
  const settings = await getSettings();

  const heroImg = '/assets/hero-img.jpg';

  const Hero = () => (
    <section id="home" className="container flex-col-mobile min-h-auto-mobile" style={{ display: 'flex', alignItems: 'center', paddingTop: '120px', paddingBottom: '40px', minHeight: '80vh', gap: '40px' }}>
      <div style={{ flex: 1 }} className="fade-in text-center-mobile">
        <div style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary)', padding: '8px 16px', borderRadius: '20px', display: 'inline-block', marginBottom: '24px', fontWeight: 600 }}>
          Pendaftaran PPDB Dibuka!
        </div>
        <h1 className="heading-primary" style={{ marginBottom: '24px' }} dangerouslySetInnerHTML={{ __html: settings.hero_title || 'MA Raden Fatah' }}></h1>
        <p style={{ fontSize: '1.125rem', color: 'var(--text-light)', marginBottom: '40px', maxWidth: '500px' }}>
          {settings.hero_subtitle}
        </p>

        <div className="flex-col-mobile align-center-mobile" style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <a href="https://nuist.id/ppdb/MA%20Raden%20Fatah" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.125rem', textDecoration: 'none', width: '100%', maxWidth: '300px', margin: '0 auto' }}>
            Daftar Sekarang
          </a>
          <button className="btn btn-outline" style={{ padding: '16px 32px', fontSize: '1.125rem', border: '2px solid var(--accent)', color: 'var(--accent-dark)', width: '100%', maxWidth: '300px', margin: '0 auto' }}>
            Cek Status
          </button>
        </div>
      </div>

      <div className="hide-on-mobile" style={{ flex: 1, position: 'relative', display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '500px', height: '500px', background: 'radial-gradient(circle, var(--primary-light) 0%, transparent 70%)', opacity: 0.2, borderRadius: '50%', zIndex: -1 }}></div>
        <HeroCarousel />
      </div>
    </section>
  );

  const SectionTitle = ({ icon, title, subtitle }: any) => (
    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
        {icon} {title}
      </h2>
      {subtitle && <p style={{ fontSize: '1.125rem', color: 'var(--text-light)', marginTop: '12px' }}>{subtitle}</p>}
    </div>
  );

  const Profile = () => (
    <section id="profile" className="container" style={{ padding: '80px 24px' }}>
      <SectionTitle icon={<History color="var(--accent)" size={40} />} title="Profile Sekolah" subtitle="Mengenal lebih dalam tentang sejarah dan profil MA Raden Fatah" />

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
              <div style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>Akreditasi</div>
              <div style={{ fontSize: '1.125rem', fontWeight: 700 }}>B</div>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>Nilai-Nilai</div>
              <div style={{ fontSize: '1.125rem', fontWeight: 700 }}>Iman Tangguh Mulia</div>
            </div>
            <div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>Tahun Berdiri</div>
              <div style={{ fontSize: '1.125rem', fontWeight: 700 }}>1978</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const VisiMisi = () => (
    <section id="about" className="container" style={{ padding: '80px 24px', background: 'linear-gradient(to right, rgba(16,185,129,0.05), transparent)' }}>
      <SectionTitle icon={<Target color="var(--primary)" size={40} />} title="Visi & Misi" subtitle="Tujuan dan arah perjuangan MA Raden Fatah" />
      <div className="flex-col-mobile" style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        <div className="glass" style={{ flex: '1 1 400px', padding: '40px', borderRadius: '24px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Target color="var(--accent)" size={28} /> Visi
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-dark)', lineHeight: 1.8, fontStyle: 'italic' }}>
            "{settings.visi_text}"
          </p>
        </div>
        <div className="glass" style={{ flex: '1 1 400px', padding: '40px', borderRadius: '24px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
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

  const KepalaSekolah = () => (
    <section id="kepala-sekolah" className="container" style={{ padding: '80px 24px' }}>
      <div className="flex-col-mobile" style={{ background: 'white', display: 'flex', gap: '48px', alignItems: 'flex-start', padding: '48px', borderRadius: '32px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ width: '280px', height: '360px', borderRadius: '24px', background: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
          <img src="/assets/kepsek.jpeg" alt="Kepala Sekolah" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ flex: 1, padding: '16px 0' }}>
          <h3 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '8px' }}>{settings.kepsek_name || "Yazid Shofwan, S.Pd.,M.Sc."}</h3>
          <p style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '1.125rem', marginBottom: '32px' }}>Kepala Madrasah</p>
          {settings.kepsek_message?.split('\n\n').map((m, i) => (
            <p key={i} style={{ fontSize: '1.125rem', color: 'var(--text-dark)', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '24px' }}>"{m}"</p>
          ))}
        </div>
      </div>
    </section>
  );

  // Remaining static sections
  const Jurusan = () => (
    <section id="jurusan" className="container" style={{ padding: '80px 24px' }}>
      <SectionTitle icon={<GraduationCap color="var(--primary)" size={40} />} title="Program Jurusan" subtitle="Pilih jalur pendidikan sesuai minat dan bakat Anda" />
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
      <section id="fasilitas" className="container" style={{ padding: '80px 24px' }}>
        <SectionTitle icon={<Building color="var(--accent)" size={40} />} title="Fasilitas Sekolah" subtitle="Sarana dan prasarana pendukung kegiatan belajar mengajar" />
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
      <section id="program" className="container" style={{ padding: '80px 24px' }}>
        <SectionTitle icon={<Star color="var(--primary)" size={40} />} title="Program & Ekstra" />
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
                <div style={{ fontSize: '0.875rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '8px' }}>{p.type}</div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 700 }}>{p.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const Prestasi = () => (
    <section id="prestasi" className="container" style={{ padding: '80px 24px' }}>
      <SectionTitle icon={<Trophy color="var(--accent)" size={40} />} title="Prestasi Sekolah" subtitle="Fasilitas dan program unggulan untuk masa depan" />
      <div className="glass flex-col-mobile" style={{ padding: '40px', borderRadius: '32px', display: 'flex', gap: '24px', alignItems: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ background: 'var(--accent)', color: 'white', width: '80px', height: '80px', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Award size={40} />
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-dark)', marginBottom: '8px' }}>Pendampingan Perguruan Tinggi & Bekerja</h3>
          <p style={{ color: 'var(--text-dark)', lineHeight: 1.6 }}>
            Siswa akan diberikan pendampingan untuk melanjutkan ke Perguruan Tinggi Negeri dan Swasta favorit serta disalurkan ke dunia usaha dan industri.
          </p>
        </div>
      </div>
    </section>
  );

  const KeunggulanSekolah = () => {
    const keunggulan = [
      { title: 'Program Tahfizul Qur\'an', icon: <BookOpen size={24} /> },
      { title: 'Fasilitas Berbasis IT', icon: <Monitor size={24} /> },
      { title: 'Pesantren & Asrama', icon: <Building size={24} /> },
      { title: 'Tenaga Pendidik Berdedikasi', icon: <Users size={24} /> },
      { title: 'Prestasi Akademik', icon: <Award size={24} /> },
      { title: 'Jaringan Alumni Luas', icon: <Globe size={24} /> },
    ];

    return (
      <section className="container" style={{ padding: '40px 24px' }}>
        <div style={{ background: '#FCF9F2', border: '1px solid rgba(245, 158, 11, 0.2)', padding: '48px', borderRadius: '24px', maxWidth: '1100px', margin: '0 auto' }}>
          <h3 style={{ textAlign: 'center', fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '40px' }}>Keunggulan Sekolah</h3>
          <div className="grid-mobile-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {keunggulan.map((k, i) => (
              <div key={i} style={{ background: 'white', display: 'flex', alignItems: 'center', gap: '16px', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                <div style={{ color: 'var(--accent)', flexShrink: 0 }}>
                  {k.icon}
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-dark)', margin: 0, lineHeight: 1.4 }}>{k.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const Kontak = () => (
    <section id="kontak" className="container" style={{ padding: '80px 24px' }}>
      <div className="flex-col-mobile" style={{ display: 'flex', gap: '40px', alignItems: 'stretch' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-dark)', marginBottom: '24px' }}>Hubungi Kami</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
            <div className="glass" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '16px', borderRadius: '16px', flex: 1 }}>
              <div style={{ color: 'white', background: 'var(--primary)', padding: '12px', borderRadius: '12px' }}><MapPin size={24} /></div>
              <div><strong style={{ display: 'block', color: 'var(--text-dark)' }}>Alamat</strong><span style={{ color: 'var(--text-light)' }}>Prambanan, Sleman, Yogyakarta</span></div>
            </div>
            <div className="glass" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '16px', borderRadius: '16px', flex: 1 }}>
              <div style={{ color: 'white', background: 'var(--primary)', padding: '12px', borderRadius: '12px' }}><Phone size={24} /></div>
              <div><strong style={{ display: 'block', color: 'var(--text-dark)' }}>Telepon</strong><span style={{ color: 'var(--text-light)' }}>+62 812 3456 7890</span></div>
            </div>
            <div className="glass" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '16px', borderRadius: '16px', flex: 1 }}>
              <div style={{ color: 'white', background: 'var(--primary)', padding: '12px', borderRadius: '12px' }}><Mail size={24} /></div>
              <div><strong style={{ display: 'block', color: 'var(--text-dark)' }}>Email</strong><span style={{ color: 'var(--text-light)' }}>info@ma-radenfatah.sch.id</span></div>
            </div>
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }} className="mt-0-mobile">
          <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', visibility: 'hidden' }} className="hide-on-mobile">Spacer</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
            <div style={{ position: 'relative', overflow: 'hidden', padding: '40px', borderRadius: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', boxShadow: '0 10px 30px rgba(16,185,129,0.2)', flex: 1 }}>
              <img src="https://img.youtube.com/vi/-iTLbBgWXWI/maxresdefault.jpg" alt="Video Profil Sekolah Thumbnail" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(rgba(16, 185, 129, 0.7), rgba(16, 185, 129, 0.95))', zIndex: 0 }}></div>
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
                <PlayCircle size={64} style={{ marginBottom: '16px' }} />
                <h4 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '24px' }}>Video Profil Sekolah</h4>
                <a href="https://youtu.be/-iTLbBgWXWI?si=pLF40d35IxIcbUG8" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', color: 'white', border: '1px solid rgba(255,255,255,0.5)', textDecoration: 'none', padding: '12px 32px', borderRadius: '100px', fontWeight: 'bold' }}>Tonton di YouTube</a>
              </div>
            </div>
            <div className="glass" style={{ padding: '32px', background: 'white', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', flexShrink: 0 }}>
              <div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '8px' }}>Brosur PPDB</h4>
                <p style={{ color: 'var(--text-light)', margin: 0 }}>Download informasi lengkap (PDF)</p>
              </div>
              <a href="#" className="btn" style={{ background: 'var(--primary)', color: 'white', textDecoration: 'none', padding: '12px 24px', borderRadius: '100px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Download size={20} /> Unduh
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const CTA = () => (
    <section className="container" style={{ padding: '0 24px 80px' }}>
      <div style={{ background: 'var(--primary)', borderRadius: '24px', padding: '80px 24px', textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-300px', left: '-200px', width: '600px', height: '600px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '-300px', right: '-200px', width: '600px', height: '600px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>

        <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '16px', position: 'relative', zIndex: 1, letterSpacing: '-0.02em' }}>Siap Bergabung dengan MA Raden Fatah?</h2>
        <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto 40px', position: 'relative', zIndex: 1 }}>
          Daftarkan diri Anda sekarang dan jadilah bagian dari generasi unggul kami.
        </p>
        <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
          <a href="https://nuist.id/ppdb/MA%20Raden%20Fatah" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'white', color: 'var(--primary)', padding: '16px 48px', fontSize: '1.125rem', textDecoration: 'none', borderRadius: '100px', fontWeight: 'bold' }}>
            Daftar PPDB Sekarang
          </a>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.6)', padding: '16px 48px', fontSize: '1.125rem', textDecoration: 'none', borderRadius: '100px', fontWeight: 'bold' }}>
            Hubungi Admin
          </a>
        </div>
      </div>
    </section>
  );

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-color)', overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <KepalaSekolah />
      <Profile />
      <Jurusan />
      <Fasilitas />
      <ProgramEkstra />
      <Prestasi />
      <VisiMisi />
      <KeunggulanSekolah />
      <Kontak />
      <CTA />
      <Footer />
    </div>
  );
}
