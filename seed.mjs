import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Menghapus data lama...');
  // Optional: If you want to keep existing data, comment these out. But let's just append for now.
  // await prisma.post.deleteMany();
  // await prisma.announcement.deleteMany();
  // await prisma.gallery.deleteMany();

  console.log('Membuat 50 Berita dummy...');
  for (let i = 1; i <= 50; i++) {
    await prisma.post.create({
      data: {
        title: `Berita Dummy ${i}`,
        slug: `berita-dummy-${i}-${Date.now()}`,
        content: `Ini adalah isi singkat dari berita dummy ke-${i}. Berita ini dibuat secara otomatis untuk keperluan testing pagination dan tampilan daftar berita di halaman website sekolah.`,
        image: `https://picsum.photos/seed/berita${i}/800/600`,
        authorId: 'admin',
        authorName: i % 2 === 0 ? 'John Doe' : 'Jane Smith',
        category: i % 3 === 0 ? 'Artikel' : 'Berita',
        published: true,
      }
    });
  }

  console.log('Membuat 50 Pengumuman dummy...');
  for (let i = 1; i <= 50; i++) {
    await prisma.announcement.create({
      data: {
        title: `Pengumuman Penting ${i}`,
        date: `${i} Agustus 2026`,
      }
    });
  }

  console.log('Membuat 50 Galeri dummy...');
  for (let i = 1; i <= 50; i++) {
    const categories = ['Kegiatan', 'Fasilitas', 'Prestasi', 'Umum'];
    await prisma.gallery.create({
      data: {
        title: `Foto Galeri ${i}`,
        imageUrl: `https://picsum.photos/seed/galeri${i}/800/600`,
        category: categories[i % categories.length],
      }
    });
  }

  console.log('Seeding selesai!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
