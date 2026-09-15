import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { getBeritaBySlug, getBerita } from '../../actions/cms';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Share2, MessageCircle, Link as LinkIcon, Home, ChevronRight, Trophy, Star } from 'lucide-react';
import { notFound } from 'next/navigation';

export default async function PrestasiDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const slug = params.slug;

  let post = await getBeritaBySlug(slug);

  // Fallback for dummy preview
  if (!post) {
    const dummyPrestasi = [
      {
        id: "1",
        title: "Juara 1 Lomba Cerdas Cermat Nasional",
        slug: "dummy-news-1",
        content: "Tim siswa kami berhasil meraih juara 1 dalam lomba cerdas cermat tingkat nasional yang diadakan oleh Kementerian Pendidikan.\n\nKeberhasilan ini merupakan hasil dari persiapan matang dan kerja keras siswa selama berbulan-bulan di bawah bimbingan guru-guru terbaik MA Raden Fatah.\n\nPrestasi ini membuktikan bahwa madrasah mampu bersaing dan unggul di tingkat nasional.",
        image: "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?q=80&w=800",
        createdAt: new Date("2026-06-30"),
        authorName: "Humas MA Raden Fatah",
        category: "Prestasi",
        tingkat: "NASIONAL",
        subCategory: "Siswa"
      },
      {
        id: "2",
        title: "Penghargaan Guru Inspiratif 2026",
        slug: "dummy-news-2",
        content: "Bapak Ahmad meraih penghargaan guru inspiratif tingkat provinsi atas dedikasinya dalam mengembangkan metode pembelajaran interaktif.",
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800",
        createdAt: new Date("2026-05-15"),
        authorName: "Admin",
        category: "Prestasi",
        tingkat: "PROVINSI",
        subCategory: "Guru & Staf"
      },
      {
        id: "3",
        title: "Sekolah Adiwiyata Tingkat Nasional",
        slug: "dummy-news-3",
        content: "MA Raden Fatah kembali dinobatkan sebagai Sekolah Adiwiyata berkat komitmen menjaga kelestarian lingkungan hidup.",
        image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800",
        createdAt: new Date("2026-04-22"),
        authorName: "Admin",
        category: "Prestasi",
        tingkat: "NASIONAL",
        subCategory: "Institusi"
      },
      {
        id: "4",
        title: "Medali Emas Olimpiade Matematika",
        slug: "dummy-news-4",
        content: "Siswa kelas 12 berhasil membawa pulang medali emas pada ajang Olimpiade Matematika tingkat Internasional.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800",
        createdAt: new Date("2026-08-10"),
        authorName: "Admin",
        category: "Prestasi",
        tingkat: "INTERNASIONAL",
        subCategory: "Siswa"
      }
    ];
    post = dummyPrestasi.find(p => p.slug === slug || p.id === slug) as any;
  }

  if (!post) {
    notFound();
  }

  const tingkat = (post as any).tingkat || "NASIONAL";
  const subCategory = (post as any).subCategory || "Siswa";

  // Fetch related news (excluding current)
  const { posts: allPosts } = await getBerita({ category: 'Prestasi', limit: 4 });
  const relatedPosts = allPosts.filter(p => p.id !== post?.id).slice(0, 3);
  
  // Dummy related if db empty
  const dummyRelated = [
    {
      id: "3", title: "Sekolah Adiwiyata Tingkat Nasional", slug: "dummy-news-3",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=400&auto=format&fit=crop",
      createdAt: new Date("2026-04-22"), category: "Prestasi", tingkat: "NASIONAL"
    },
    {
      id: "4", title: "Medali Emas Olimpiade Matematika", slug: "dummy-news-4",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400&auto=format&fit=crop",
      createdAt: new Date("2026-08-10"), category: "Prestasi", tingkat: "INTERNASIONAL"
    }
  ];
  
  const related = relatedPosts.length > 0 ? relatedPosts : dummyRelated;

  return (
    <div style={{ background: 'var(--bg-color)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      <main style={{ flex: 1, paddingBottom: '0', paddingTop: '100px' }}>
        {/* Breadcrumb */}
        <div className="container" style={{ padding: '0 24px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-light)', fontSize: '1rem' }}>
            <Link href="/" style={{ color: 'var(--text-light)', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <Home size={16} />
            </Link>
            <ChevronRight size={16} />
            <Link href="/prestasi" style={{ color: 'var(--text-light)', textDecoration: 'none' }}>Prestasi</Link>
            <ChevronRight size={16} />
            <span style={{ color: 'var(--primary)', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '200px' }}>
              {post.title}
            </span>
          </div>
        </div>

        {/* Banner Area */}
        <div style={{ position: 'relative', width: '100%', height: '55vh', minHeight: '400px', maxHeight: '600px', backgroundColor: 'var(--primary-dark)' }}>
          <img src={post.image || 'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?q=80&w=1200'} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }} />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, rgba(5, 150, 105, 0.4) 0%, rgba(5, 150, 105, 0.95) 100%)' }}></div>
          
          <div className="container" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', padding: '0 24px 60px', width: '100%' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <Link href="/prestasi" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.9)', textDecoration: 'none', marginBottom: '24px', fontSize: '0.9rem', fontWeight: 600 }}>
                <ArrowLeft size={16} /> Kembali ke Daftar Prestasi
              </Link>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{ background: 'var(--accent)', color: 'white', padding: '4px 12px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px', letterSpacing: '0.05em' }}>
                  <Trophy size={14} /> {tingkat}
                </span>
                <span style={{ background: 'rgba(255,255,255,0.2)', color: 'white', padding: '4px 12px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                  {subCategory}
                </span>
              </div>
              
              <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'white', lineHeight: 1.2, marginBottom: '24px', textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
                {post.title}
              </h1>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', fontWeight: 500 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <User size={16} /> Oleh {post.authorName || 'Admin Sekolah'}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Calendar size={16} /> {new Date(post.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="container" style={{ padding: '60px 24px 80px' }}>
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* Social Share (Desktop Sidebar) */}
            <div style={{ flex: '0 0 50px', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', position: 'sticky', top: '120px', height: 'fit-content' }} className="hide-on-mobile">
              <span style={{ fontSize: '1rem', color: 'var(--text-light)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '1px' }}>Bagikan</span>
              <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'white', border: '1px solid var(--glass-border)', boxShadow: 'var(--glass-shadow)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1877F2', cursor: 'pointer', transition: 'all 0.2s ease' }} className="hover:scale-110">
                <Share2 size={18} />
              </button>
              <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'white', border: '1px solid var(--glass-border)', boxShadow: 'var(--glass-shadow)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25D366', cursor: 'pointer', transition: 'all 0.2s ease' }} className="hover:scale-110">
                <MessageCircle size={18} />
              </button>
              <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'white', border: '1px solid var(--glass-border)', boxShadow: 'var(--glass-shadow)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-light)', cursor: 'pointer', transition: 'all 0.2s ease' }} className="hover:scale-110">
                <LinkIcon size={18} />
              </button>
            </div>

            {/* Main Text */}
            <article style={{ flex: '1 1 0', minWidth: 0 }}>
              <div 
                style={{ 
                  fontSize: '1.25rem', 
                  lineHeight: 1.8, 
                  color: 'var(--text-dark)',
                  whiteSpace: 'pre-wrap'
                }}
              >
                {post.content}
              </div>
              
              <div style={{ marginTop: '60px', padding: '32px', background: 'rgba(245, 158, 11, 0.1)', borderLeft: '4px solid var(--accent)', borderRadius: '0 16px 16px 0' }}>
                <h4 style={{ color: 'var(--primary-dark)', fontSize: '1.2rem', marginBottom: '12px', fontWeight: 700 }}>Apresiasi Sekolah</h4>
                <p style={{ color: 'var(--text-dark)', fontStyle: 'italic', margin: 0, lineHeight: 1.6 }}>
                  &quot;Segenap keluarga besar MA Raden Fatah mengucapkan selamat dan sukses atas prestasi yang telah diraih. Semoga menjadi inspirasi bagi siswa-siswi lainnya untuk terus berinovasi dan berkarya demi masa depan yang gemilang.&quot;
                </p>
              </div>
            </article>

          </div>
        </div>

        {/* Related News */}
        <div style={{ background: 'white', padding: '80px 0', borderTop: '1px solid var(--glass-border)' }}>
          <div className="container" style={{ padding: '0 24px', maxWidth: '1000px' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '32px', color: 'var(--primary-dark)' }}>Prestasi Lainnya</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
              {related.map((item: any) => (
                <Link key={item.id} href={`/prestasi/${item.slug || item.id}`} style={{ textDecoration: 'none' }} className="group">
                  <div className="glass" style={{ borderRadius: '16px', overflow: 'hidden', height: '100%', transition: 'all 0.3s ease', border: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ height: '180px', width: '100%', position: 'relative', overflow: 'hidden' }}>
                       <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'var(--accent)', color: 'white', padding: '4px 10px', borderRadius: '100px', fontSize: '0.65rem', fontWeight: 700, zIndex: 10, letterSpacing: '0.05em' }}>
                         {item.tingkat || "NASIONAL"}
                       </div>
                      <img src={item.image || 'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?q=80&w=400'} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="group-hover:scale-105" />
                    </div>
                    <div style={{ padding: '24px', background: 'white', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <h4 style={{ fontSize: '1.1rem', color: 'var(--text-dark)', fontWeight: 700, lineHeight: 1.4, marginBottom: '12px', flex: 1 }}>
                        {item.title}
                      </h4>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                        <div style={{ display: 'flex', gap: '2px', color: 'var(--accent)' }}>
                          <Star size={14} fill="currentColor" />
                          <Star size={14} fill="currentColor" />
                          <Star size={14} fill="currentColor" />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-light)', fontSize: '0.9rem' }}>
                          <Calendar size={12} /> {new Date(item.createdAt).toLocaleDateString('id-ID', { month: 'short', year: 'numeric' })}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        
      </main>

      <Footer />
    </div>
  );
}
