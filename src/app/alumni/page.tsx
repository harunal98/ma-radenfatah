"use client";

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ChevronRight, Home, MessageSquare, Star, Send, X, Camera, GraduationCap, MapPin, Link as LinkIcon, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AlumniPage() {
  const [showModal, setShowModal] = useState(false);

  // Dummy Testimonials Data
  const testimonials = [
    {
      id: "1",
      name: "ROUDLOH QUEEN BILQIYS",
      year: "2026",
      status: "KULIAH",
      institution: "Universitas Islam Negeri (UIN) Syarif Hidayatullah Jakarta",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400",
      storySections: [
        { title: "Awal Perjalanan: Menyeimbangkan Dua Dunia", content: "Belajar di MA Raden Fatah mengajarkan saya tentang pentingnya menyeimbangkan ilmu akademik dan agama. Guru-guru di sini sangat suportif dalam membimbing bakat siswanya." },
        { title: "Detik-Detik Kelulusan UM-PTKIN 2026", content: "Momen yang paling tak terlupakan adalah ketika saya dinyatakan lolos UM-PTKIN. Bimbingan intensif dari sekolah benar-benar membuahkan hasil." },
        { title: "Pesan Roudloh untuk Adik-Adik Kelas:", content: "Jangan pernah takut bermimpi besar. Teruslah berusaha dan berdoa, karena proses tidak akan pernah mengkhianati hasil." }
      ]
    },
    {
      id: "2",
      name: "MUHAMMAD RAFLI",
      year: "2024",
      status: "BEKERJA",
      institution: "PT. Teknologi Maju Bersama",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
      storySections: [
        { title: "Bekal Keterampilan Abad 21", content: "Program unggulan sekolah membekali saya dengan keterampilan dasar teknologi yang sangat berguna ketika saya terjun ke dunia kerja." },
        { title: "Pesan untuk Adik-Adik Kelas:", content: "Manfaatkan setiap fasilitas yang ada di sekolah. Jangan hanya fokus pada nilai, tapi bangunlah relasi dan soft skill." }
      ]
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-color)', overflowX: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      <main style={{ flex: 1 }}>
        
        {/* 1. Header & Hero Section */}
        <section style={{ 
          background: 'radial-gradient(circle at 10% 20%, rgba(16,185,129,0.1) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(245,158,11,0.1) 0%, transparent 40%)',
          padding: '120px 24px 60px',
          textAlign: 'left',
          borderBottom: '1px solid var(--glass-border)',
          position: 'relative',
          marginBottom: '60px'
        }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.05, backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', backgroundSize: '30px 30px', zIndex: -1 }}></div>

            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '8px', color: 'var(--text-light)', fontSize: '1rem', marginBottom: '24px' }}>
              <Link href="/" style={{ color: 'var(--text-light)', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <Home size={14} style={{ marginRight: '4px' }} />
              </Link>
              <ChevronRight size={14} />
              <Link href="/galeri" style={{ color: 'var(--text-light)', textDecoration: 'none' }}>Galeri</Link>
              <ChevronRight size={14} />
              <span style={{ color: 'var(--text-dark)', fontWeight: 600 }}>Alumni Success</span>
            </div>

            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-dark)', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              Jejak Alumni
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-light)', maxWidth: '600px' }}>
              Kisah inspiratif para lulusan yang telah berkiprah di masyarakat.
            </p>
          </div>
        </section>

        {/* 2. Testimonial Header */}
        <section className="container" style={{ padding: '40px 24px 0', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ background: 'var(--primary-dark)', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', transform: 'rotate(-5deg)', boxShadow: '0 10px 25px -5px rgba(5, 150, 105, 0.4)' }}>
              <MessageSquare size={30} fill="currentColor" />
            </div>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '12px' }}>Apa Kata Mereka?</h2>
            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '32px' }}>Testimoni tulus dari para alumni tentang perjalanan mereka.</p>
            
            <button onClick={() => setShowModal(true)} style={{ background: 'white', color: 'var(--primary)', border: 'none', padding: '16px 32px', borderRadius: '100px', fontSize: '1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', boxShadow: '0 10px 30px -10px rgba(16, 185, 129, 0.3)', transition: 'all 0.3s ease' }} className="hover:scale-105">
              <MessageSquare size={20} /> Kirim Testimoni Anda
            </button>
          </div>
        </section>

        {/* 4. Alumni Testimonial Cards */}
        <section className="container" style={{ padding: '0 24px 80px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {testimonials.map((testi) => (
              <div key={testi.id} style={{ background: 'white', borderRadius: '32px', padding: '40px', border: '1px solid var(--glass-border)', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-16px', left: '-16px', background: 'var(--accent)', color: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(245, 158, 11, 0.3)' }}>
                  <Star size={20} fill="currentColor" />
                </div>

                {/* Card Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '32px', flexWrap: 'wrap' }}>
                  <img src={testi.image} alt={testi.name} style={{ width: '100px', height: '100px', borderRadius: '24px', objectFit: 'cover' }} />
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px' }}>{testi.name}</h3>
                    <div style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '8px' }}>Lulusan Tahun {testi.year}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-light)', fontSize: '0.9rem', fontWeight: 600 }}>
                      <GraduationCap size={16} /> {testi.status} di {testi.institution}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {testi.storySections.map((section, idx) => (
                    <div key={idx}>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '8px' }}>"{section.title}"</h4>
                      <p style={{ color: 'var(--text-dark)', lineHeight: 1.7, margin: 0 }}>{section.content}</p>
                    </div>
                  ))}
                </div>

                {/* Card Footer */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f1f5f9', paddingTop: '24px', marginTop: '32px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ display: 'flex', gap: '4px', color: 'var(--accent)' }}>
                      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-light)', letterSpacing: '1px' }}>VERIFIED ALUMNI</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. CTA Section */}
        <section style={{ padding: '40px 24px 100px', position: 'relative' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="glass-dark floating" style={{ padding: '50px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden', borderRadius: '32px', animation: 'float 8s ease-in-out infinite' }}>
              {/* Background accent circles */}
              <div style={{ position: 'absolute', top: '-50%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)', opacity: 0.2, filter: 'blur(40px)', zIndex: 0 }}></div>
              <div style={{ position: 'absolute', bottom: '-50%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, var(--primary-light) 0%, transparent 70%)', opacity: 0.2, filter: 'blur(40px)', zIndex: 0 }}></div>

              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 600, marginBottom: '20px', lineHeight: 1.3 }}>
                  Siap Bergabung dengan <span style={{ color: 'var(--accent)' }}>MA Raden Fatah?</span>
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.9)', maxWidth: '750px', margin: '0 auto 32px', lineHeight: 1.6, fontWeight: 300 }}>
                  Jadilah bagian dari generasi berprestasi dan berakhlak mulia. Mulailah perjalanan pendidikan Anda yang luar biasa bersama kami.
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/ppdb" className="btn hover-lift" style={{ padding: '14px 28px', fontSize: '1rem', backgroundColor: 'var(--accent)', color: 'white', border: 'none', boxShadow: '0 4px 14px rgba(245, 158, 11, 0.4)', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, textDecoration: 'none' }}>
                    Daftar Sekarang <ArrowRight size={18} />
                  </Link>
                  <Link href="/#kontak" className="btn hover-lift" style={{ padding: '14px 28px', fontSize: '1rem', color: 'white', border: '2px solid rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.1)', borderRadius: '100px', textDecoration: 'none', fontWeight: 500 }}>
                    Hubungi Kami
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* 3. Modal Form Testimoni */}
      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(8px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
          <div style={{ background: 'white', width: '100%', maxWidth: '700px', maxHeight: '90vh', borderRadius: '24px', overflowY: 'auto', position: 'relative', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
            
            <button onClick={() => setShowModal(false)} style={{ position: 'absolute', top: '24px', right: '24px', background: '#f1f5f9', border: 'none', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-light)', zIndex: 10 }}>
              <X size={20} />
            </button>

            <div style={{ padding: '40px' }}>
              <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '8px' }}>Bagikan Cerita Anda</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Testimoni Anda akan sangat menginspirasi adik-adik kelas. (Perlu persetujuan admin sebelum tampil).</p>
              </div>

              <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                
                {/* Upload Foto */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-light)', cursor: 'pointer', border: '2px dashed #cbd5e1' }}>
                    <Camera size={32} />
                  </div>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 600 }}>Foto Profil (Opsional)</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px' }}>Nama Lengkap *</label>
                    <input type="text" placeholder="Contoh: Muhammad Rafli, S.Kom" style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', background: '#f8fafc' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px' }}>Tahun Lulus *</label>
                    <input type="number" defaultValue="2026" style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', background: '#f8fafc' }} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px' }}>Status Saat Ini</label>
                    <select style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', background: '#f8fafc' }}>
                      <option>Kuliah</option>
                      <option>Bekerja</option>
                      <option>Wirausaha</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px' }}>Instansi / Kampus</label>
                    <input type="text" placeholder="Misal: Universitas Indonesia" style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', background: '#f8fafc' }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px' }}>Testimoni / Kisah Sukses *</label>
                  <textarea placeholder="Ceritakan pengalaman belajar di sekolah atau kesuksesan yang diraih..." rows={5} style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', background: '#f8fafc', resize: 'vertical' }}></textarea>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '16px' }}>Sosial Media (Opsional)</label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '0 16px' }}>
                      <Globe size={18} color="var(--text-light)" />
                      <input type="text" placeholder="URL/Username Sosial Media 1" style={{ width: '100%', padding: '14px 12px', border: 'none', outline: 'none', background: 'transparent' }} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '0 16px' }}>
                      <LinkIcon size={18} color="var(--text-light)" />
                      <input type="text" placeholder="URL Profil Lainnya" style={{ width: '100%', padding: '14px 12px', border: 'none', outline: 'none', background: 'transparent' }} />
                    </div>
                  </div>
                </div>

                {/* Math Captcha */}
                <div style={{ background: '#f1f5f9', padding: '24px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)' }}>Verifikasi Keamanan</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Berapa hasil dari 4 + 4?</div>
                  </div>
                  <input type="number" placeholder="Jawaban" style={{ width: '120px', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', marginTop: '16px' }}>
                  <button type="button" onClick={() => setShowModal(false)} style={{ padding: '14px 24px', background: 'transparent', border: 'none', color: 'var(--text-light)', fontWeight: 700, cursor: 'pointer', borderRadius: '12px' }}>
                    Batal
                  </button>
                  <button type="button" onClick={() => setShowModal(false)} style={{ padding: '14px 32px', background: 'var(--primary)', border: 'none', color: 'white', fontWeight: 700, cursor: 'pointer', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 10px 15px -3px rgba(16, 185, 129, 0.3)' }}>
                    Kirim Testimoni <Send size={16} />
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      )}

      {/* Global styles for hover effects */}
      <style dangerouslySetInnerHTML={{__html: `
        .hover\\:scale-105:hover { transform: scale(1.05); }
        .hover\\:shadow-lg:hover { box-shadow: 0 10px 25px rgba(0,0,0,0.2); }
        .hover\\:bg-white\\/20:hover { background: rgba(255,255,255,0.2) !important; }
      `}} />
    </div>
  );
}
