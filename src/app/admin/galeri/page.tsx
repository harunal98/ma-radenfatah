import React from 'react';
import { getGaleri, createGaleri, deleteGaleri } from '../../actions/cms';
import { Plus, Trash2 } from 'lucide-react';

export default async function GaleriAdmin() {
  const images = await getGaleri();

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '24px', alignItems: 'start' }}>
      
      {/* Form (Kiri) */}
      <div style={{ background: 'white', borderRadius: '24px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', position: 'sticky', top: '100px' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1E293B', marginBottom: '24px' }}>Tambah Foto</h2>
        
        <form action={createGaleri} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Judul Foto</label>
            <input type="text" name="title" required style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #E2E8F0', outline: 'none' }} />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Upload Gambar (Maks 10MB)</label>
            <input type="file" name="imageFile" accept="image/*" style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #E2E8F0', outline: 'none' }} />
            <p style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '4px' }}>Atau gunakan URL gambar:</p>
            <input type="url" name="imageUrl" placeholder="https://..." style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #E2E8F0', outline: 'none', marginTop: '4px' }} />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Kategori</label>
            <select name="category" style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #E2E8F0', outline: 'none', background: 'white' }}>
              <option value="Kegiatan">Kegiatan</option>
              <option value="Fasilitas">Fasilitas</option>
              <option value="Prestasi">Prestasi</option>
              <option value="Umum">Umum</option>
            </select>
          </div>
          
          <button type="submit" style={{ background: 'var(--primary)', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '8px' }}>
            <Plus size={18} /> Upload Foto
          </button>
        </form>
      </div>

      {/* List (Kanan) */}
      <div style={{ background: 'white', borderRadius: '24px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1E293B', marginBottom: '24px' }}>Daftar Foto Galeri</h2>
        
        {images.length === 0 ? (
          <div style={{ padding: '32px', textAlign: 'center', color: '#64748B', background: '#F8FAFC', borderRadius: '12px' }}>Belum ada foto.</div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '16px' }}>
            {images.map(img => (
              <div key={img.id} style={{ border: '1px solid #E2E8F0', borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ width: '100%', height: '120px', backgroundImage: `url(${img.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div style={{ padding: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ flex: 1, overflow: 'hidden' }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1E293B', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>{img.title}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{img.category}</div>
                  </div>
                  <form action={async () => {
                    "use server";
                    await deleteGaleri(img.id);
                  }}>
                    <button type="submit" style={{ background: 'transparent', color: '#EF4444', border: 'none', cursor: 'pointer', padding: '4px' }}>
                      <Trash2 size={16} />
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
