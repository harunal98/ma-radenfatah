const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@sekolah.com';
  const plainPassword = 'admin123';
  
  // Admin
  const existingAdmin = await prisma.user.findUnique({
    where: { email }
  });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash(plainPassword, 10);
    await prisma.user.create({
      data: {
        name: 'Admin Utama',
        email: email,
        password: hashedPassword,
        role: 'ADMIN'
      }
    });
    console.log(`Created admin user: ${email}`);
  }

  // Site Settings
  const settings = [
    { key: 'hero_title', value: 'MA Raden Fatah <br/><span class="text-gradient">Ngaji Ngoding Ngelaba</span>' },
    { key: 'hero_subtitle', value: 'Madrasah berbasis pondok pesantren. Mendidik dengan hati, membentuk karakter Islami, dan mempersiapkan pemimpin masa depan.' },
    { key: 'profile_history', value: 'Awal mula madrasah ini adalah lembaga Pendidikan Guru Agama (PGA) pada tahun 1962. Pada tahun 1978, sesuai dengan Peraturan Pendidikan, PGA disesuaikan dengan program pendidikan menjadi Madrasah Tsanawiyah dan Madrasah Aliyah Raden Fatah.\n\nPada tahun 2018, Madrasah Aliyah Raden Fatah resmi berbasis pesantren dengan nama PONDOK PESANTREN FATHUL HUDA.' },
    { key: 'visi_text', value: '"Terwujudnya MA Raden Fatah Prambanan sebagai madrasah unggul dalam iman dan takwa, berprestasi dalam akademik dan nonakademik, serta berkarakter melalui sinergi seluruh warga madrasah."' },
    { key: 'misi_text', value: 'Menumbuhkan pengamalan nilai-nilai Islam Ahlussunnah wal Jama\'ah.\nMembangun sinergi pendidik, peserta didik, orang tua, dan masyarakat.\nMenyelenggarakan pembelajaran aktif, inovatif, berorientasi prestasi.\nMengembangkan potensi akademik dan nonakademik optimal.\nMembentuk karakter disiplin, berakhlak mulia, mandiri.' },
    { key: 'kepsek_name', value: 'Yazid Shofwan, S.Pd.,M.Sc.' },
    { key: 'kepsek_message', value: '"Assalamu\'alaikum warahmatullahi wabarakatuh. MA Raden Fatah Prambanan hadir sebagai lembaga pendidikan Islam yang berkomitmen membentuk peserta didik beriman, bertakwa, berakhlak mulia, serta berprestasi."\n\n"Dengan mengusung semangat \'Bangun Sinergi, Lejitkan Prestasi\', kami percaya kolaborasi seluruh warga madrasah merupakan kunci utama pendidikan berkualitas."' },
  ];

  for (const setting of settings) {
    await prisma.siteSetting.upsert({
      where: { key: setting.key },
      update: {},
      create: setting,
    });
  }
  console.log('Seeded site settings.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
