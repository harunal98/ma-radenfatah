import React from 'react';
import { getSettings, updateSettings } from '../../actions/cms';
import { Save } from 'lucide-react';

export default async function LandingPageSettings() {
  const settings = await getSettings();

  return (
    <div style={{ background: 'white', borderRadius: '24px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1E293B', marginBottom: '24px' }}>Pengaturan Landing Page</h2>
      
      <form action={updateSettings} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        <div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--primary-dark)', marginBottom: '16px', borderBottom: '1px solid #F1F5F9', paddingBottom: '8px' }}>Bagian Hero</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Judul Hero (Bisa pakai HTML)</label>
              <input type="text" name="hero_title" defaultValue={settings.hero_title} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E2E8F0', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Sub-judul Hero</label>
              <textarea name="hero_subtitle" defaultValue={settings.hero_subtitle} rows={3} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E2E8F0', outline: 'none', resize: 'vertical' }}></textarea>
            </div>
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--primary-dark)', marginBottom: '16px', borderBottom: '1px solid #F1F5F9', paddingBottom: '8px' }}>Sejarah & Visi Misi</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Sejarah Sekolah</label>
              <textarea name="profile_history" defaultValue={settings.profile_history} rows={5} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E2E8F0', outline: 'none', resize: 'vertical' }}></textarea>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Visi Sekolah</label>
              <textarea name="visi_text" defaultValue={settings.visi_text} rows={3} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E2E8F0', outline: 'none', resize: 'vertical' }}></textarea>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Misi Sekolah (Pisahkan dengan baris baru)</label>
              <textarea name="misi_text" defaultValue={settings.misi_text} rows={5} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E2E8F0', outline: 'none', resize: 'vertical' }}></textarea>
            </div>
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--primary-dark)', marginBottom: '16px', borderBottom: '1px solid #F1F5F9', paddingBottom: '8px' }}>Sambutan Kepala Sekolah</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Nama Kepala Sekolah</label>
              <input type="text" name="kepsek_name" defaultValue={settings.kepsek_name} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E2E8F0', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Isi Sambutan</label>
              <textarea name="kepsek_message" defaultValue={settings.kepsek_message} rows={5} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E2E8F0', outline: 'none', resize: 'vertical' }}></textarea>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
          <button type="submit" style={{ background: 'var(--primary)', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Save size={18} /> Simpan Perubahan
          </button>
        </div>

      </form>
    </div>
  );
}
