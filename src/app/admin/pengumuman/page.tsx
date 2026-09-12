import React from 'react';
import { getPengumuman, createPengumuman, deletePengumuman } from '../../actions/cms';
import { Plus, Trash2 } from 'lucide-react';

export default async function PengumumanAdmin() {
  const announcements = await getPengumuman();

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '24px', alignItems: 'start' }}>
      
      {/* Form (Kiri) */}
      <div style={{ background: 'white', borderRadius: '24px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', position: 'sticky', top: '100px' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1E293B', marginBottom: '24px' }}>Buat Pengumuman</h2>
        
        <form action={createPengumuman} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Judul Pengumuman</label>
            <input type="text" name="title" required style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #E2E8F0', outline: 'none' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Tanggal (Teks)</label>
            <input type="text" name="date" placeholder="Contoh: 15 Juli 2026" required style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #E2E8F0', outline: 'none' }} />
          </div>
          
          <button type="submit" style={{ background: 'var(--primary)', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '8px' }}>
            <Plus size={18} /> Simpan Pengumuman
          </button>
        </form>
      </div>

      {/* List (Kanan) */}
      <div style={{ background: 'white', borderRadius: '24px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1E293B', marginBottom: '24px' }}>Daftar Pengumuman</h2>
        
        {announcements.length === 0 ? (
          <div style={{ padding: '32px', textAlign: 'center', color: '#64748B', background: '#F8FAFC', borderRadius: '12px' }}>Belum ada pengumuman.</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {announcements.map(ann => (
              <div key={ann.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', border: '1px solid #E2E8F0', borderRadius: '12px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ background: 'var(--primary-light)', color: 'white', padding: '2px 8px', borderRadius: '100px', fontSize: '0.7rem', fontWeight: 'bold' }}>PENGUMUMAN</span>
                    <span style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 500 }}>{ann.date}</span>
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#1E293B' }}>{ann.title}</h3>
                </div>
                <form action={async () => {
                  "use server";
                  await deletePengumuman(ann.id);
                }}>
                  <button type="submit" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#EF4444', border: 'none', padding: '8px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Trash2 size={18} />
                  </button>
                </form>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
