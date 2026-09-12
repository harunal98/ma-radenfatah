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
      
      <main style={{ flex: 1, paddingBottom: '0', paddingTop: '100px' }}>
        {/* Breadcrumb */}
        <div className="container" style={{ padding: '0 24px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-light)', fontSize: '0.875rem' }}>
            <Link href="/" style={{ color: 'var(--text-light)', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <Home size={16} />
            </Link>
            <ChevronRight size={16} />
            <span>Informasi</span>
            <ChevronRight size={16} />
            <Link href="/berita" style={{ color: 'var(--text-light)', textDecoration: 'none' }}>Berita</Link>
            <ChevronRight size={16} />
            <span style={{ color: 'var(--primary)', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '200px' }}>
              {post.title}
            </span>
          </div>
        </div>

        {/* Banner Area */}
        <div style={{ position: 'relative', width: '100%', height: '55vh', minHeight: '400px', maxHeight: '600px', backgroundColor: '#1E293B' }}>
          <img src={post.image || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200'} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.9) 100%)' }}></div>
          
          <div className="container" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', padding: '0 24px 60px', width: '100%' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <Link href="/berita" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', marginBottom: '24px', fontSize: '0.9rem', fontWeight: 600 }}>
                <ArrowLeft size={16} /> Kembali ke Berita
              </Link>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{ background: 'var(--primary)', color: 'white', padding: '4px 12px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                  {post.category}
                </span>
              </div>
              
              <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: '24px' }}>
                {post.title}
              </h1>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <User size={16} /> {post.authorName || 'Admin'}
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
              <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '1px' }}>Share</span>
              <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'white', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1877F2', cursor: 'pointer', transition: 'all 0.2s ease' }} className="hover:bg-gray-50">
                <Share2 size={18} />
              </button>
              <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'white', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25D366', cursor: 'pointer', transition: 'all 0.2s ease' }} className="hover:bg-gray-50">
                <MessageCircle size={18} />
              </button>
              <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'white', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-light)', cursor: 'pointer', transition: 'all 0.2s ease' }} className="hover:bg-gray-50">
                <LinkIcon size={18} />
              </button>
            </div>

            {/* Main Text */}
            <article style={{ flex: '1 1 0', minWidth: 0 }}>
              <div 
                style={{ 
                  fontSize: '1.2rem', 
                  lineHeight: 1.8, 
                  color: '#334155',
                  whiteSpace: 'pre-wrap'
                }}
              >
                {post.content}
              </div>
            </article>

          </div>
        </div>

        {/* Related News */}
        <div style={{ background: 'white', padding: '80px 0', borderTop: '1px solid #E2E8F0' }}>
          <div className="container" style={{ padding: '0 24px', maxWidth: '1000px' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '32px', color: 'var(--primary-dark)' }}>Berita Terkait</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
              {related.map((item: any) => (
                <Link key={item.id} href={`/berita/${item.slug}`} style={{ textDecoration: 'none' }}>
                  <div className="glass" style={{ borderRadius: '16px', overflow: 'hidden', height: '100%', transition: 'transform 0.3s ease', border: '1px solid #E2E8F0' }}>
                    <div style={{ height: '180px', width: '100%' }}>
                      <img src={item.image || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=400'} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '20px', background: 'white' }}>
                      <div style={{ color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 700, marginBottom: '8px' }}>
                        {item.category || 'Berita'}
                      </div>
                      <h4 style={{ fontSize: '1.1rem', color: 'var(--text-dark)', fontWeight: 700, lineHeight: 1.4, marginBottom: '12px' }}>
                        {item.title}
                      </h4>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-light)', fontSize: '0.8rem' }}>
                        <Calendar size={12} /> {new Date(item.createdAt).toLocaleDateString('id-ID')}
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
