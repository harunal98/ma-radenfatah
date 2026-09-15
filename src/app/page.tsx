import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  BookOpen, GraduationCap, Trophy, Users, PlayCircle, ArrowRight,
  Library, Monitor, MapPin, History, Star, Building, Heart,
  CheckCircle, Phone, Mail, Download, Map,
  Target, Award, Globe, Link as LinkIcon, Quote, Camera, MonitorPlay,
  Calendar, User
} from 'lucide-react';
import { getSettings, getBerita } from './actions/cms';
import Link from 'next/link';
import HeroCarousel from '../components/HeroCarousel';
import TestimoniCarousel from '../components/TestimoniCarousel';

export default async function Home() {
  const settings = await getSettings();
  const { posts: latestPosts } = await getBerita({ limit: 3 });
  const { posts: latestPrestasi } = await getBerita({ category: 'Prestasi', limit: 3 });

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
          <a href="/#kontak" className="btn btn-outline-accent" style={{ padding: '16px 32px', fontSize: '1.125rem', width: '100%', maxWidth: '300px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', textDecoration: 'none' }}>
            Hubungi Kami <ArrowRight size={20} />
          </a>
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
      <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
        {icon} {title}
      </h2>
      {subtitle && <p style={{ fontSize: '1.125rem', color: 'var(--text-light)', marginTop: '12px' }}>{subtitle}</p>}
    </div>
  );

  const KepalaSekolah = () => (
    <section id="kepala-sekolah" className="container" style={{ padding: '80px 24px' }}>
      <div className="flex-col-mobile" style={{ background: 'white', display: 'flex', gap: '48px', alignItems: 'flex-start', padding: 'clamp(24px, 4vw, 48px)', borderRadius: '32px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', maxWidth: '1100px', margin: '0 auto' }}>
        <div className="w-full-mobile" style={{ width: '280px', aspectRatio: '3/4', borderRadius: '24px', background: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
          <img src="/assets/kepsek.jpeg" alt="Kepala Sekolah" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
        </div>
        <div style={{ flex: 1, padding: '16px 0' }}>
          <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '8px' }}>{settings.kepsek_name || "Yazid Shofwan, S.Pd.,M.Sc."}</h3>
          <p style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '1.125rem', marginBottom: '32px' }}>Kepala Madrasah</p>
          {settings.kepsek_message?.split('\n\n').map((m, i) => (
            <p key={i} style={{ fontSize: '1.125rem', color: 'var(--text-dark)', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '24px' }}>"{m}"</p>
          ))}
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
        <div style={{ background: '#FCF9F2', border: '1px solid rgba(245, 158, 11, 0.2)', padding: 'clamp(24px, 4vw, 48px)', borderRadius: '24px', maxWidth: '1100px', margin: '0 auto' }}>
          <h3 style={{ textAlign: 'center', fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '40px' }}>Keunggulan Sekolah</h3>
          <div className="grid-mobile-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
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
    <section id="kontak" className="container" style={{ padding: '20px 24px 80px' }}>
      <div className="flex-col-mobile" style={{ display: 'flex', gap: '40px', alignItems: 'stretch' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-dark)', marginBottom: '24px' }}>Hubungi Kami</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
            <div className="glass" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '16px', borderRadius: '16px', flex: 1 }}>
              <div style={{ color: 'white', background: 'var(--primary)', padding: '12px', borderRadius: '12px' }}><MapPin size={24} /></div>
              <div>
                <strong style={{ display: 'block', color: 'var(--text-dark)' }}>Alamat</strong>
                <a href="https://www.google.com/maps/place/MA+Raden+Fatah/@-7.7744754,110.4760132,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a5a8efce330b5:0x5c9ed6914fdd0870!8m2!3d-7.7744807!4d110.4785881!16s%2Fg%2F1pzsr2nyl?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-light)', textDecoration: 'none', transition: 'color 0.3s' }} className="hover:text-primary">Prambanan, Sleman, Yogyakarta</a>
              </div>
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

        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '16px', position: 'relative', zIndex: 1, letterSpacing: '-0.02em' }}>Siap Bergabung dengan MA Raden Fatah?</h2>
        <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto 40px', position: 'relative', zIndex: 1 }}>
          Daftarkan diri Anda sekarang dan jadilah bagian dari generasi unggul kami.
        </p>
        <div className="flex-col-mobile" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
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

  const BeritaTerbaru = () => {
    // Dummy posts if no posts found
    const dummyPosts = [
      {
        id: '1', slug: 'dummy-1', title: 'Indahnya alam test demo',
        content: 'Paragraf 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolor...',
        category: 'Sosial', authorName: 'ADMINISTRATOR',
        createdAt: new Date('2026-07-10'), image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800'
      },
      {
        id: '2', slug: 'dummy-2', title: 'Test Berita Demo',
        content: 'Paragraf 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolor...',
        category: 'Olah Raga', authorName: 'ADMINISTRATOR',
        createdAt: new Date('2026-07-10'), image: 'https://images.unsplash.com/photo-1540324155974-7523202daa3f?q=80&w=800'
      },
      {
        id: '3', slug: 'dummy-3', title: 'Kegiatan Alam Dalam Rangka Memperingati Hari Pramuka',
        content: 'Kegiatan Alam Dalam Rangka Memperingati Hari PramukaKegiatan Alam Dalam Rangka Memperingati Hari PramukaKegiatan Alam D...',
        category: 'Sosial', authorName: 'SISTEM',
        createdAt: new Date('2026-04-28'), image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=800'
      }
    ];

    const displayPosts = latestPosts.length >= 3 ? latestPosts.slice(0, 3) : (latestPosts.length > 0 ? latestPosts : dummyPosts);

    return (
      <section style={{ padding: '100px 24px', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: 'var(--text-light)', fontSize: '1rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
              <span style={{ color: 'var(--primary)' }}>✦</span> KABAR SEKOLAH
            </div>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-dark)', margin: 0, lineHeight: 1.2 }}>
              Kabar dan <span style={{ color: 'var(--primary)' }}>Berita Terbaru</span> dari<br />Sekolah.
            </h2>
          </div>

          <div className="grid-mobile-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '48px' }}>
            {displayPosts.map((post: any) => (
              <div key={post.id} style={{ display: 'flex', flexDirection: 'column', background: 'white', borderRadius: '16px', overflow: 'hidden' }}>
                <div style={{ position: 'relative', height: '220px', borderRadius: '16px', overflow: 'hidden' }}>
                  <img src={post.image || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800'} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'var(--primary)', color: 'white', padding: '6px 16px', borderRadius: '100px', fontSize: '1rem', fontWeight: 700, zIndex: 10 }}>
                    {post.category || 'Berita'}
                  </div>
                </div>
                <div style={{ padding: '24px 0', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'var(--text-light)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '16px', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Calendar size={14} color="var(--primary)" />
                      {new Date(post.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <User size={14} color="var(--primary)" />
                      {post.authorName || 'ADMINISTRATOR'}
                    </div>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '16px', lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {post.title}
                  </h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {post.content}
                  </p>
                  <div style={{ marginTop: 'auto' }}>
                    <Link href={`/berita/${post.slug || post.id}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--primary)', fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }} className="hover-link">
                      Baca Selengkapnya <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/berita" className="btn btn-primary" style={{ padding: '12px 32px', fontSize: '0.9rem', borderRadius: '100px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              Semua Berita <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    );
  };

  const PrestasiTerbaru = () => {
    // Dummy prestasi if DB is empty
    const dummyPrestasi = [
      {
        id: "1",
        title: "Juara 1 Lomba Cerdas Cermat Nasional",
        content: "Tim siswa kami berhasil meraih juara 1 dalam lomba cerdas cermat tingkat nasional yang diadakan oleh Kementerian Pendidikan.",
        image: "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?q=80&w=800",
        createdAt: new Date("2026-06-30"),
        tingkat: "NASIONAL",
        subCategory: "Siswa",
        color: "bg-blue-500"
      },
      {
        id: "2",
        title: "Penghargaan Guru Inspiratif 2026",
        content: "Bapak Ahmad meraih penghargaan guru inspiratif tingkat provinsi atas dedikasinya dalam mengembangkan metode pembelajaran interaktif.",
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800",
        createdAt: new Date("2026-05-15"),
        tingkat: "PROVINSI",
        subCategory: "Guru & Staf",
        color: "bg-emerald-500"
      },
      {
        id: "3",
        title: "Sekolah Adiwiyata Tingkat Kabupaten",
        content: "MA Raden Fatah resmi dinobatkan sebagai Sekolah Adiwiyata atas komitmen warga sekolah dalam menjaga kelestarian lingkungan.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800",
        createdAt: new Date("2026-03-20"),
        tingkat: "KABUPATEN",
        subCategory: "Institusi",
        color: "bg-orange-500"
      }
    ];

    const displayPrestasi = latestPrestasi.length >= 3 ? latestPrestasi.slice(0, 3) : (latestPrestasi.length > 0 ? latestPrestasi : dummyPrestasi);

    return (
      <section style={{ padding: '0 24px 100px', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: 'var(--text-light)', fontSize: '1rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
              <span style={{ color: 'var(--accent)' }}>✦</span> PRESTASI SEKOLAH
            </div>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-dark)', margin: 0, lineHeight: 1.2 }}>
              Prestasi <span style={{ color: 'var(--primary)' }}>Membanggakan</span> dari<br />Siswa & Guru Kami.
            </h2>
          </div>

          <div className="grid-mobile-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '48px' }}>
            {displayPrestasi.map((item: any) => (
              <a href={`/prestasi/${item.slug || item.id}`} key={item.id} className="group" style={{ 
                display: 'flex', flexDirection: 'column', background: 'white', borderRadius: '16px', overflow: 'hidden', 
                border: '1px solid var(--glass-border)', textDecoration: 'none', transition: 'all 0.4s ease',
                boxShadow: 'var(--glass-shadow)'
              }}>
                <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'var(--accent)', color: 'white', padding: '4px 12px', borderRadius: '100px', fontSize: '0.875rem', fontWeight: 700, zIndex: 10, letterSpacing: '0.05em' }}>
                    {item.tingkat || "LOKAL"}
                  </div>
                  <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(255,255,255,0.9)', color: 'var(--text-dark)', padding: '4px 12px', borderRadius: '100px', fontSize: '0.875rem', fontWeight: 700, zIndex: 10, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Star size={12} color="var(--accent)" fill="var(--accent)" />
                    {item.subCategory || "Siswa"}
                  </div>
                  
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="group-hover:scale-110" />
                  
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)', opacity: 0.8 }}></div>
                  
                  <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', lineHeight: 1.4, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <p style={{ color: 'var(--text-light)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '20px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', flex: 1 }}>
                    {item.content}
                  </p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid var(--glass-border)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-light)', fontSize: '0.875rem', fontWeight: 600 }}>
                      <Calendar size={14} />
                      {new Date(item.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </div>
                    <div style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '1rem', fontWeight: 700 }} className="group-hover:text-var(--accent) transition-colors">
                      Detail <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/prestasi" className="btn btn-outline-primary" style={{ padding: '12px 32px', fontSize: '1rem', borderRadius: '100px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              Lihat Semua Prestasi <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-color)', overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <KepalaSekolah />
      <BeritaTerbaru />
      <PrestasiTerbaru />
      <TestimoniCarousel />
      <Kontak />
      <CTA />
      <Footer />
    </div>
  );
}
