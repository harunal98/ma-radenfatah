import React, { useState } from 'react';
import { 
  BookOpen, GraduationCap, Trophy, Users, PlayCircle, ArrowRight, 
  Library, Monitor, MapPin, History, Star, Building, Heart, 
  CheckCircle, Phone, Mail, Download, Map,
  Target, Award, Globe, Link, Menu, X
} from 'lucide-react';
import './index.css';
import heroImg from './assets/hero-img.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass" style={{ margin: '16px', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: '16px', zIndex: 100 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ background: 'var(--primary)', width: '40px', height: '40px', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
          <BookOpen size={24} />
        </div>
        <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-dark)' }}>MA Raden Fatah</span>
      </div>
      
      <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <a href="#home" className="nav-link" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#profile" className="nav-link" onClick={() => setIsOpen(false)}>Profile</a>
        <a href="#jurusan" className="nav-link" onClick={() => setIsOpen(false)}>Jurusan</a>
        <a href="#fasilitas" className="nav-link" onClick={() => setIsOpen(false)}>Fasilitas</a>
        <a href="#program" className="nav-link" onClick={() => setIsOpen(false)}>Program & Ekstra</a>
        <a href="#prestasi" className="nav-link" onClick={() => setIsOpen(false)}>Prestasi</a>
        <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About</a>
        <a href="#kontak" className="nav-link" onClick={() => setIsOpen(false)}>Kontak</a>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <a href="https://nuist.id/ppdb/MA%20Raden%20Fatah" target="_blank" rel="noopener noreferrer" className="btn btn-primary hide-on-mobile" style={{ textDecoration: 'none' }}>
          Daftar PPDB
        </a>
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="container flex-col-mobile min-h-auto-mobile" style={{ display: 'flex', alignItems: 'center', paddingTop: '80px', paddingBottom: '40px', minHeight: '80vh', gap: '40px' }}>
    <div style={{ flex: 1 }} className="fade-in text-center-mobile">
      <div style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary)', padding: '8px 16px', borderRadius: '20px', display: 'inline-block', marginBottom: '24px', fontWeight: 600 }}>
        Pendaftaran PPDB Dibuka!
      </div>
      <h1 className="heading-primary" style={{ marginBottom: '24px' }}>
        MA Raden Fatah <br/><span className="text-gradient">Ngaji Ngoding Ngelaba</span>
      </h1>
      <p style={{ fontSize: '1.125rem', color: 'var(--text-light)', marginBottom: '40px', maxWidth: '500px' }}>
        Madrasah berbasis pondok pesantren. Mendidik dengan hati, membentuk karakter Islami, dan mempersiapkan pemimpin masa depan.
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

    <div className="floating hide-on-mobile" style={{ flex: 1, position: 'relative' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '500px', height: '500px', background: 'radial-gradient(circle, var(--primary-light) 0%, transparent 70%)', opacity: 0.2, borderRadius: '50%', zIndex: -1 }}></div>
      <img src={heroImg} alt="MA Raden Fatah" style={{ width: '100%', maxWidth: '600px', borderRadius: '32px', filter: 'drop-shadow(0 20px 40px rgba(16,185,129,0.2))' }} />
    </div>
  </section>
);

const SectionTitle = ({ icon, title, subtitle }) => (
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
          <p style={{ color: 'var(--text-dark)', lineHeight: 1.8, marginBottom: '16px' }}>
            Awal mula madrasah ini adalah lembaga Pendidikan Guru Agama (PGA) pada tahun 1962. Pada tahun 1978, sesuai dengan Peraturan Pendidikan, PGA disesuaikan dengan program pendidikan menjadi Madrasah Tsanawiyah dan Madrasah Aliyah Raden Fatah.
          </p>
          <p style={{ color: 'var(--text-dark)', lineHeight: 1.8 }}>
            Pada tahun 2018, Madrasah Aliyah Raden Fatah resmi berbasis pesantren dengan nama <strong>PONDOK PESANTREN FATHUL HUDA</strong>.
          </p>
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
            <div style={{ background: 'var(--primary-light)', color: 'var(--primary-dark)', width: '80px', height: '80px', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
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
            <div key={i} className="glass" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h4 style={{ color: 'var(--primary-dark)', marginBottom: '8px', fontSize: '1.25rem' }}>{p.title}</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>{p.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Prestasi = () => (
  <section id="prestasi" className="container" style={{ padding: '80px 24px' }}>
    <SectionTitle icon={<Award color="var(--accent)" size={40} />} title="Prestasi Sekolah" subtitle="Pencapaian dan penghargaan yang telah diraih" />
    <div className="glass flex-col-mobile p-mobile text-center-mobile" style={{ padding: '40px', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05))', display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
      <div style={{ background: 'var(--accent)', color: 'white', padding: '32px', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
        <Trophy size={64} />
      </div>
      <div style={{ flex: 1, minWidth: '250px' }}>
        <h3 style={{ fontSize: '1.75rem', color: 'var(--primary-dark)', marginBottom: '16px' }}>Pembinaan ke Perguruan Tinggi & Bekerja</h3>
        <p style={{ fontSize: '1.125rem', color: 'var(--text-dark)', lineHeight: 1.6 }}>
          Kami membimbing setiap siswa tidak hanya untuk lulus, tetapi siap melangkah ke perguruan tinggi impian atau dunia kerja dengan bekal akhlak dan keterampilan mumpuni.
        </p>
      </div>
    </div>
  </section>
);

const About = () => {
  const misi = [
    "Menumbuhkan pengamalan nilai-nilai Islam Ahlussunnah wal Jama'ah.",
    "Membangun sinergi pendidik, peserta didik, orang tua, dan masyarakat.",
    "Menyelenggarakan pembelajaran aktif, inovatif, berorientasi prestasi.",
    "Mengembangkan potensi akademik dan nonakademik optimal.",
    "Membentuk karakter disiplin, berakhlak mulia, mandiri."
  ];

  const keunggulan = [
    "Pendidikan Berbasis Nilai Keislaman", "Sinergi Warga Madrasah yang Kuat", 
    "Prestasi Akademik dan Nonakademik", "Tenaga Pendidik Profesional", 
    "Pembinaan Karakter dan Disiplin", "Lingkungan Belajar Kondusif"
  ];

  return (
    <section id="about" className="container" style={{ padding: '80px 24px' }}>
      <SectionTitle icon={<Target color="var(--primary)" size={40} />} title="Visi & Misi" subtitle="Tujuan dan arah perjuangan MA Raden Fatah" />
      
      <div className="grid-mobile-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px', marginBottom: '40px' }}>
        <div className="glass" style={{ padding: '40px' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-dark)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Target color="var(--accent)" /> Visi
          </h3>
          <p style={{ fontStyle: 'italic', fontSize: '1.125rem', color: 'var(--text-dark)', lineHeight: 1.8 }}>
            "Terwujudnya MA Raden Fatah Prambanan sebagai madrasah unggul dalam iman dan takwa, berprestasi dalam akademik dan nonakademik, serta berkarakter melalui sinergi seluruh warga madrasah."
          </p>
        </div>
        <div className="glass" style={{ padding: '40px' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-dark)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <CheckCircle color="var(--accent)" /> Misi
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {misi.map((m, i) => (
              <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ color: 'var(--text-dark)', lineHeight: 1.6 }}>{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="glass-accent" style={{ padding: '40px' }}>
        <h3 style={{ textAlign: 'center', fontSize: '1.5rem', color: 'var(--primary-dark)', marginBottom: '32px' }}>Keunggulan Sekolah</h3>
        <div className="grid-mobile-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {keunggulan.map((k, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.8)', padding: '24px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Star color="var(--accent)" />
              <span style={{ fontWeight: 600, color: 'var(--text-dark)' }}>{k}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const KepalaSekolah = () => (
  <section className="container" style={{ padding: '80px 24px' }}>
    <div className="glass flex-col-mobile p-mobile text-center-mobile" style={{ padding: '60px', display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ width: '200px', height: '260px', background: 'var(--primary-light)', borderRadius: '24px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
        <Users size={64} color="var(--primary)" />
      </div>
      <div style={{ flex: 1, minWidth: '250px' }}>
        <h3 style={{ fontSize: '2rem', color: 'var(--primary-dark)', marginBottom: '8px' }}>Yazid Shofwan, S.Pd.,M.Sc.</h3>
        <p style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '24px' }}>Kepala Madrasah</p>
        <p style={{ color: 'var(--text-dark)', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '16px' }}>
          "Assalamu'alaikum warahmatullahi wabarakatuh. MA Raden Fatah Prambanan hadir sebagai lembaga pendidikan Islam yang berkomitmen membentuk peserta didik beriman, bertakwa, berakhlak mulia, serta berprestasi."
        </p>
        <p style={{ color: 'var(--text-dark)', lineHeight: 1.8, fontStyle: 'italic' }}>
          "Dengan mengusung semangat 'Bangun Sinergi, Lejitkan Prestasi', kami percaya kolaborasi seluruh warga madrasah merupakan kunci utama pendidikan berkualitas."
        </p>
      </div>
    </div>
  </section>
);

const KontakGaleri = () => (
  <section id="kontak" className="container" style={{ padding: '80px 24px' }}>
    <div className="grid-mobile-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
      
      {/* Kontak */}
      <div>
        <h3 style={{ fontSize: '2rem', color: 'var(--primary-dark)', marginBottom: '32px' }}>Hubungi Kami</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="glass" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ background: 'var(--primary-light)', color: 'var(--primary)', padding: '16px', borderRadius: '16px' }}><Phone size={24} /></div>
            <div>
              <div style={{ fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>Telepon / WhatsApp</div>
              <div style={{ fontSize: '1.125rem' }}>083116467040</div>
            </div>
          </div>
          <div className="glass" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ background: 'var(--primary-light)', color: 'var(--primary)', padding: '16px', borderRadius: '16px' }}><Mail size={24} /></div>
            <div>
              <div style={{ fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>Email</div>
              <div style={{ fontSize: '1.125rem' }}>admin@ma-radenfatah.sch.id</div>
            </div>
          </div>
          <div className="glass" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ background: 'var(--primary-light)', color: 'var(--primary)', padding: '16px', borderRadius: '16px' }}><MapPin size={24} /></div>
            <div>
              <div style={{ fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>Alamat</div>
              <div style={{ lineHeight: 1.5 }}>Jl. Opak No. 8 Pelemsari Bokoharjo<br/>Prambanan Sleman 55571</div>
            </div>
          </div>
        </div>
      </div>

      {/* Galeri & Brosur */}
      <div>
        <h3 style={{ fontSize: '2rem', color: 'var(--primary-dark)', marginBottom: '32px' }}>Media Sekolah</h3>
        <div className="glass-dark" style={{ padding: '40px', borderRadius: '24px', marginBottom: '24px', textAlign: 'center' }}>
          <Globe size={48} color="white" style={{ margin: '0 auto 16px', display: 'block' }} />
          <h4 style={{ color: 'white', marginBottom: '16px' }}>Video Profil Sekolah</h4>
          <button className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>Tonton di YouTube</button>
        </div>
        <div className="glass" style={{ padding: '32px', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h4 style={{ color: 'var(--primary-dark)', marginBottom: '8px' }}>Brosur PPDB</h4>
            <p style={{ color: 'var(--text-light)', fontSize: '0.875rem' }}>Download informasi lengkap (PDF)</p>
          </div>
          <button className="btn btn-primary" style={{ padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Download size={18} /> Unduh
          </button>
        </div>
      </div>

    </div>
  </section>
);

const CTA = () => (
  <section className="container" style={{ padding: '40px 24px 80px' }}>
    <div className="p-mobile" style={{ background: 'var(--primary)', borderRadius: '32px', padding: '60px 40px', textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden' }}>
      <div className="hide-on-mobile" style={{ position: 'absolute', top: '-50%', left: '-10%', width: '300px', height: '300px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>
      <div className="hide-on-mobile" style={{ position: 'absolute', bottom: '-50%', right: '-10%', width: '400px', height: '400px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>
      
      <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '24px', position: 'relative', zIndex: 1 }}>Siap Bergabung dengan MA Raden Fatah?</h2>
      <p style={{ fontSize: '1.25rem', marginBottom: '40px', opacity: 0.9, position: 'relative', zIndex: 1 }}>Daftarkan diri Anda sekarang dan jadilah bagian dari generasi unggul kami.</p>
      
      <div className="flex-col-mobile" style={{ display: 'flex', justifyContent: 'center', gap: '24px', position: 'relative', zIndex: 1, flexWrap: 'wrap' }}>
        <a href="https://nuist.id/ppdb/MA%20Raden%20Fatah" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'white', color: 'var(--primary-dark)', padding: '16px 40px', fontSize: '1.125rem', textDecoration: 'none', width: '100%', maxWidth: '350px', margin: '0 auto' }}>Daftar PPDB Sekarang</a>
        <a href="https://wa.me/083116467040" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white', padding: '16px 40px', fontSize: '1.125rem', textDecoration: 'none', width: '100%', maxWidth: '350px', margin: '0 auto' }}>Hubungi Admin</a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ background: '#0F172A', color: 'white', padding: '80px 0 40px' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '60px' }}>
        <div style={{ flex: '1 1 300px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <BookOpen size={32} color="var(--primary-light)" />
            <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>MA Raden Fatah</span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '24px', maxWidth: '300px' }}>
            Madrasah berbasis pondok pesantren. Mendidik dengan hati, membentuk karakter Islami.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Link size={20} /></div>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Link size={20} /></div>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Globe size={20} /></div>
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '24px' }}>Link Cepat</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', color: 'rgba(255,255,255,0.6)' }}>
            <li><a href="#home" style={{ color: 'inherit', textDecoration: 'none' }}>Beranda PPDB</a></li>
            <li><a href="#jurusan" style={{ color: 'inherit', textDecoration: 'none' }}>Jurusan</a></li>
            <li><a href="#fasilitas" style={{ color: 'inherit', textDecoration: 'none' }}>Fasilitas</a></li>
            <li><a href="#program" style={{ color: 'inherit', textDecoration: 'none' }}>Program & Ekstra</a></li>
            <li><a href="https://ma-radenfatah.sch.id/absen/QR%20Absen.html" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>QR Absen</a></li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '24px' }}>Tentang</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', color: 'rgba(255,255,255,0.6)' }}>
            <li><a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>Visi & Misi</a></li>
            <li><a href="#profile" style={{ color: 'inherit', textDecoration: 'none' }}>Sejarah</a></li>
            <li><a href="#prestasi" style={{ color: 'inherit', textDecoration: 'none' }}>Prestasi</a></li>
            <li><a href="#kontak" style={{ color: 'inherit', textDecoration: 'none' }}>Galeri</a></li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '24px' }}>Bantuan</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', color: 'rgba(255,255,255,0.6)' }}>
            <li><a href="#kontak" style={{ color: 'inherit', textDecoration: 'none' }}>Kontak Kami</a></li>
            <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Download Brosur</a></li>
            <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>FAQ PPDB</a></li>
            <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Alur Pendaftaran</a></li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem' }}>
        <div>&copy; 2026 MA Raden Fatah. All rights reserved.</div>
        <div>Powered by PPDB Sistem</div>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div style={{ background: 'var(--bg-color)' }}>
      <Navbar />
      <Hero />
      <Profile />
      <Jurusan />
      <Fasilitas />
      <ProgramEkstra />
      <Prestasi />
      <About />
      <KepalaSekolah />
      <KontakGaleri />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
