import React from 'react';
import { getAgenda, createAgenda, deleteAgenda } from '../../actions/cms';
import { Plus, Trash2, ChevronsLeft, ChevronsRight } from 'lucide-react';
import Link from 'next/link';

export default async function AgendaAdmin(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = props.searchParams ? await props.searchParams : {};
  const page = typeof searchParams.page === 'string' ? parseInt(searchParams.page, 10) : 1;
  
  const { agendas, totalPages } = await getAgenda({ page, limit: 4 });

  const getPagination = (current: number, total: number) => {
    if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
    let start = Math.max(1, current - 2);
    let end = Math.min(total, current + 2);
    if (start === 1) end = 5;
    if (end === total) start = total - 4;
    
    const pages: (number | string)[] = [];
    if (start > 1) pages.push('...');
    for (let i = start; i <= end; i++) pages.push(i);
    if (end < total) pages.push('...');
    return pages;
  };

  const paginationArray = getPagination(page, totalPages);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '24px', alignItems: 'start' }}>
      
      {/* Form (kiri) */}
      <div style={{ background: 'white', borderRadius: '24px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', position: 'sticky', top: '100px' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1E293B', marginBottom: '24px' }}>Tambah Agenda Baru</h2>
        
        <form action={createAgenda} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '1rem', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Judul Agenda / Acara</label>
            <input type="text" name="title" required style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #E2E8F0', outline: 'none' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '1rem', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Tanggal</label>
              <input type="date" name="date" required style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #E2E8F0', outline: 'none', background: 'white' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '1rem', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Waktu (Cth: 08.00 - 12.00)</label>
              <input type="text" name="time" required style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #E2E8F0', outline: 'none', background: 'white' }} />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '1rem', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Lokasi</label>
            <input type="text" name="location" required style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #E2E8F0', outline: 'none' }} />
          </div>
          
          <div>
            <label style={{ display: 'block', fontSize: '1rem', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Keterangan Singkat</label>
            <textarea name="excerpt" rows={4} required style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #E2E8F0', outline: 'none', resize: 'vertical' }}></textarea>
          </div>
          
          <button type="submit" style={{ background: 'var(--primary)', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '8px' }}>
            <Plus size={18} /> Simpan Agenda
          </button>
        </form>
      </div>

      {/* List (kanan) */}
      <div style={{ background: 'white', borderRadius: '24px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1E293B', marginBottom: '24px' }}>Daftar Agenda</h2>
        
        {agendas.length === 0 ? (
          <div style={{ padding: '32px', textAlign: 'center', color: '#64748B', background: '#F8FAFC', borderRadius: '12px' }}>Belum ada data agenda.</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {agendas.map(agenda => (
              <div key={agenda.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', border: '1px solid #E2E8F0', borderRadius: '12px' }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1E293B', marginBottom: '4px' }}>{agenda.title}</h3>
                  <div style={{ fontSize: '0.85rem', color: '#64748B', display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ background: 'var(--primary)', color: 'white', padding: '2px 8px', borderRadius: '100px', fontSize: '0.7rem', fontWeight: 'bold' }}>{new Date(agenda.date).toLocaleDateString('id-ID')}</span>
                    <span>{agenda.time}</span>
                  </div>
                </div>
                <form action={async () => {
                  "use server";
                  await deleteAgenda(agenda.id);
                }}>
                  <button type="submit" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#EF4444', border: 'none', padding: '8px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Trash2 size={18} />
                  </button>
                </form>
              </div>
            ))}
          </div>
        )}

        {/* Pagination UI */}
        {totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
            <Link
              href={`/admin/agenda?page=1`}
              style={{
                width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold',
                background: 'rgba(16,185,129,0.1)', color: 'var(--primary-dark)',
                opacity: page === 1 ? 0.5 : 1, pointerEvents: page === 1 ? 'none' : 'auto'
              }}
              className="hover-lift"
            >
              <ChevronsLeft size={18} />
            </Link>

            {paginationArray.map((item, idx) => (
              item === '...' ? (
                <span key={`ellipsis-${idx}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', color: '#94A3B8', fontWeight: 'bold' }}>...</span>
              ) : (
                <Link
                  key={item}
                  href={`/admin/agenda?page=${item}`}
                  style={{
                    width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold',
                    background: page === item ? 'var(--primary)' : 'rgba(16,185,129,0.1)',
                    color: page === item ? 'white' : 'var(--primary-dark)',
                  }}
                  className="hover-lift"
                >
                  {item}
                </Link>
              )
            ))}

            <Link
              href={`/admin/agenda?page=${totalPages}`}
              style={{
                width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold',
                background: 'rgba(16,185,129,0.1)', color: 'var(--primary-dark)',
                opacity: page === totalPages ? 0.5 : 1, pointerEvents: page === totalPages ? 'none' : 'auto'
              }}
              className="hover-lift"
            >
              <ChevronsRight size={18} />
            </Link>
          </div>
        )}
      </div>

    </div>
  );
}
