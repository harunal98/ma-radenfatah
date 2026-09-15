import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { getBeritaBySlug, getBerita } from '../../actions/cms';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Share2, MessageCircle, Link as LinkIcon, Home, ChevronRight } from 'lucide-react';
import { notFound } from 'next/navigation';

export default async function BeritaDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const slug = params.slug;

  let post = await getBeritaBySlug(slug);

  // Fallback for dummy preview
  if (!post && slug === 'dummy-news-1') {
    post = {
      id: "1",
      title: "Penerimaan Siswa Baru Tahun Ajaran 2026/2027 Telah Dibuka",
      slug: "dummy-news-1",
      content: "Segera daftarkan putra-putri Anda. Kuota terbatas untuk gelombang pertama dengan potongan biaya khusus. Pendaftaran dapat dilakukan secara online melalui website PPDB.\n\nFasilitas yang kami tawarkan sangat lengkap mulai dari laboratorium komputer, perpustakaan digital, hingga lapangan olahraga standar internasional. Mari bergabung menjadi bagian dari generasi unggul masa depan.\n\nPendidikan berkualitas adalah kunci menuju masa depan yang cerah. Di MA Raden Fatah, kami berkomitmen untuk mencetak generasi yang tidak hanya cerdas secara intelektual, tetapi juga memiliki akhlak mulia dan keterampilan abad 21.\n\nJangan lewatkan kesempatan berharga ini. Segera hubungi panitia PPDB kami untuk informasi lebih lanjut mengenai syarat, biaya, dan alur pendaftaran. Kami tunggu kehadiran putra-putri terbaik Anda di MA Raden Fatah!",
      createdAt: new Date(),
      updatedAt: new Date(),
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
      authorName: "Humas MA Raden Fatah",
      authorId: "admin",
      category: "Berita",
      published: true
    };
  }

  if (!post) {
    notFound();
  }

  // Fetch related news (excluding current)
  const { posts: allPosts } = await getBerita({ limit: 4 });
  const relatedPosts = allPosts.filter(p => p.id !== post?.id).slice(0, 3);
  
  // Dummy related if db empty
  const dummyRelated = [
    {
      id: "2", title: "Juara Umum Olimpiade Sains Nasional 2026", slug: "dummy-news-2",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=400&auto=format&fit=crop",
      createdAt: new Date(), category: "Prestasi"
    },
    {
      id: "3", title: "Peringatan Hari Guru Nasional", slug: "dummy-news-3",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=400&auto=format&fit=crop",
      createdAt: new Date(), category: "Kegiatan"
    }
  ];
  
  const related = relatedPosts.length > 0 ? relatedPosts : dummyRelated;

  return (
    <div style={{ background: 'var(--bg-color)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      <main style={{ flex: 1, paddingBottom: '0', paddingTop: '120px' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px 60px' }}>
          
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '24px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'var(--text-light)', textDecoration: 'none', display: 'flex', alignItems: 'center' }} className="hover:text-primary">
              <Home size={16} />
            </Link>
            <ChevronRight size={16} />
            <Link href="/berita" style={{ color: 'var(--text-light)', textDecoration: 'none' }} className="hover:text-primary">Berita & Artikel</Link>
            <ChevronRight size={16} />
            <span style={{ color: 'var(--primary)', fontWeight: 600 }}>
              {post.category || 'Berita'}
            </span>
          </div>

          {/* Title */}
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--primary-dark)', lineHeight: 1.2, marginBottom: '24px', letterSpacing: '-0.02em' }}>
            {post.title}
          </h1>

          {/* Meta Info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', paddingBottom: '24px', borderBottom: '1px solid var(--glass-border)', marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-light)', fontSize: '0.95rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                <User size={16} />
              </div>
              <span style={{ fontWeight: 600, color: 'var(--text-dark)' }}>{post.authorName || 'Admin'}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-light)', fontSize: '0.95rem' }}>
              <Calendar size={16} style={{ color: 'var(--primary)' }} />
              {new Date(post.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
            </div>
          </div>

          {/* Featured Image */}
          <div style={{ width: '100%', borderRadius: '24px', overflow: 'hidden', marginBottom: '40px', boxShadow: 'var(--glass-shadow)', position: 'relative' }}>
            <img src={post.image || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200'} alt={post.title} style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover' }} />
          </div>

          {/* Content & Share */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <article style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#334155', whiteSpace: 'pre-wrap' }}>
              {post.content}
            </article>

            {/* Share Section */}
            <div style={{ padding: '24px', background: 'rgba(16,185,129,0.05)', borderRadius: '16px', border: '1px solid var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-dark)' }}>Bagikan Artikel Ini:</span>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'white', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1877F2', cursor: 'pointer' }} className="hover-lift">
                  <Share2 size={18} />
                </button>
                <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'white', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25D366', cursor: 'pointer' }} className="hover-lift">
                  <MessageCircle size={18} />
                </button>
                <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'white', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-light)', cursor: 'pointer' }} className="hover-lift">
                  <LinkIcon size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related News */}
        <div style={{ background: 'var(--bg-color)', padding: '60px 0', borderTop: '1px solid var(--glass-border)' }}>
          <div className="container" style={{ padding: '0 24px', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary-dark)', margin: 0 }}>Berita Terkait</h3>
              <Link href="/berita" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }} className="hover:text-accent hover-lift">
                Lihat Semua <ChevronRight size={18} />
              </Link>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
              {related.map((item: any) => (
                <Link key={item.id} href={`/berita/${item.slug}`} style={{ textDecoration: 'none' }}>
                  <article className="group hover-lift" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform 0.4s ease', cursor: 'pointer', borderRadius: '20px', background: 'white', border: '1px solid var(--glass-border)', boxShadow: 'var(--glass-shadow)', height: '100%' }}>
                    <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                      <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'var(--primary)', color: 'white', padding: '4px 16px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 700, zIndex: 10 }}>
                        {item.category || 'BERITA'}
                      </div>
                      <img src={item.image || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=400'} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="group-hover:scale-110" />
                    </div>
                    <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <h4 style={{ fontSize: '1.15rem', color: 'var(--text-dark)', marginBottom: '12px', lineHeight: 1.4, fontWeight: 700 }}>{item.title}</h4>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-light)', fontSize: '0.85rem', marginTop: 'auto', fontWeight: 600 }}>
                        <Calendar size={14} />
                        {new Date(item.createdAt).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase()}
                      </div>
                    </div>
                  </article>
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
