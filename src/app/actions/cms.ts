"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

const prisma = new PrismaClient();

async function uploadFile(file: File | null): Promise<string | null> {
  if (!file || file.size === 0) return null;
  if (file.size > 10 * 1024 * 1024) throw new Error("File size exceeds 10MB limit");

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
  
  const uploadDir = path.join(process.cwd(), 'public', 'uploads');
  await mkdir(uploadDir, { recursive: true });
  
  const filepath = path.join(uploadDir, filename);
  await writeFile(filepath, buffer);
  
  return `/uploads/${filename}`;
}

// ================= BERITA =================
export async function getBerita(options?: { category?: string; page?: number; limit?: number; skip?: number }) {
  const limit = options?.limit || undefined;
  const page = options?.page || 1;
  const skip = options?.skip !== undefined ? options.skip : (limit ? (page - 1) * limit : 0);

  const where = options?.category && options.category !== 'Semua' 
    ? { category: options.category } 
    : {};

  const posts = await prisma.post.findMany({ 
    where,
    orderBy: { createdAt: 'desc' },
    take: limit,
    skip: skip
  });

  const total = await prisma.post.count({ where });

  return { posts, total, page, totalPages: limit ? Math.ceil(total / limit) : 1 };
}

export async function getBeritaBySlug(slug: string) {
  return await prisma.post.findUnique({ where: { slug } });
}

export async function createBerita(formData: FormData) {
  const title = formData.get("title")?.toString() || "";
  const excerpt = formData.get("excerpt")?.toString() || "";
  const imageFile = formData.get("imageFile") as File | null;
  const category = formData.get("category")?.toString() || "Berita";
  const authorName = formData.get("authorName")?.toString() || "";
  
  let imageUrl = formData.get("imageUrl")?.toString() || "";
  if (imageFile && imageFile.size > 0) {
    const uploaded = await uploadFile(imageFile);
    if (uploaded) imageUrl = uploaded;
  }

  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  await prisma.post.create({
    data: {
      title,
      slug: slug + '-' + Date.now(),
      content: excerpt, // Using excerpt as content for now
      image: imageUrl,
      authorId: "admin",
      authorName,
      category
    }
  });

  revalidatePath("/admin/berita");
  revalidatePath("/berita");
}

export async function deleteBerita(id: string) {
  await prisma.post.delete({ where: { id } });
  revalidatePath("/admin/berita");
  revalidatePath("/berita");
}


// ================= PRESTASI =================
export async function createPrestasi(formData: FormData) {
  const title = formData.get("title")?.toString() || "";
  const excerpt = formData.get("excerpt")?.toString() || "";
  const imageFile = formData.get("imageFile") as File | null;
  const tingkat = formData.get("tingkat")?.toString() || "NASIONAL";
  const subCategory = formData.get("subCategory")?.toString() || "Siswa";
  
  let imageUrl = formData.get("imageUrl")?.toString() || "";
  if (imageFile && imageFile.size > 0) {
    const uploaded = await uploadFile(imageFile);
    if (uploaded) imageUrl = uploaded;
  }

  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  await prisma.post.create({
    data: {
      title,
      slug: slug + '-' + Date.now(),
      content: excerpt,
      image: imageUrl,
      authorId: tingkat, // Reusing authorId for tingkat
      authorName: subCategory, // Reusing authorName for subCategory
      category: "Prestasi"
    }
  });

  revalidatePath("/admin/prestasi");
  revalidatePath("/prestasi");
}

export async function deletePrestasi(id: string) {
  await prisma.post.delete({ where: { id } });
  revalidatePath("/admin/prestasi");
  revalidatePath("/prestasi");
}


// ================= PENGUMUMAN =================
export async function getPengumuman(options?: { query?: string; page?: number; limit?: number }) {
  const limit = options?.limit || undefined;
  const page = options?.page || 1;
  const skip = limit ? (page - 1) * limit : 0;

  const where = options?.query ? {
    title: { contains: options.query }
  } : {};

  const announcements = await prisma.announcement.findMany({ 
    where,
    orderBy: { createdAt: 'desc' },
    take: limit,
    skip: skip
  });

  const total = await prisma.announcement.count({ where });

  return { announcements, total, page, totalPages: limit ? Math.ceil(total / limit) : 1 };
}

export async function createPengumuman(formData: FormData) {
  const title = formData.get("title")?.toString() || "";
  const date = formData.get("date")?.toString() || "";
  const content = formData.get("content")?.toString() || "";

  await prisma.announcement.create({
    data: {
      title,
      date,
      content,
    }
  });

  revalidatePath("/admin/pengumuman");
  revalidatePath("/pengumuman");
}

export async function deletePengumuman(id: string) {
  await prisma.announcement.delete({ where: { id } });
  revalidatePath("/admin/pengumuman");
  revalidatePath("/berita");
}


// ================= GALERI =================
export async function getGaleri(options?: { page?: number; limit?: number }) {
  const limit = options?.limit || undefined;
  const page = options?.page || 1;
  const skip = limit ? (page - 1) * limit : 0;

  const photos = await prisma.gallery.findMany({ 
    orderBy: { createdAt: 'desc' },
    take: limit,
    skip: skip
  });

  const total = await prisma.gallery.count();

  return { photos, total, page, totalPages: limit ? Math.ceil(total / limit) : 1 };
}

export async function createGaleri(formData: FormData) {
  const title = formData.get("title")?.toString() || "";
  const category = formData.get("category")?.toString() || "Umum";
  const imageFile = formData.get("imageFile") as File | null;

  let imageUrl = formData.get("imageUrl")?.toString() || "";
  if (imageFile && imageFile.size > 0) {
    const uploaded = await uploadFile(imageFile);
    if (uploaded) imageUrl = uploaded;
  }

  await prisma.gallery.create({
    data: { title, imageUrl, category }
  });

  revalidatePath("/admin/galeri");
  revalidatePath("/galeri");
}

export async function deleteGaleri(id: string) {
  await prisma.gallery.delete({ where: { id } });
  revalidatePath("/admin/galeri");
  revalidatePath("/galeri");
}


// ================= AGENDA =================
export async function getAgenda(options?: { page?: number; limit?: number }) {
  const limit = options?.limit || undefined;
  const page = options?.page || 1;
  const skip = limit ? (page - 1) * limit : 0;

  const agendas = await prisma.agenda.findMany({ 
    orderBy: { date: 'asc' },
    take: limit,
    skip: skip
  });

  const total = await prisma.agenda.count();

  return { agendas, total, page, totalPages: limit ? Math.ceil(total / limit) : 1 };
}

export async function createAgenda(formData: FormData) {
  const title = formData.get("title")?.toString() || "";
  const dateStr = formData.get("date")?.toString() || "";
  const time = formData.get("time")?.toString() || "";
  const location = formData.get("location")?.toString() || "";
  const excerpt = formData.get("excerpt")?.toString() || "";

  await prisma.agenda.create({
    data: {
      title,
      date: new Date(dateStr),
      time,
      location,
      excerpt
    }
  });

  revalidatePath("/admin/agenda");
  revalidatePath("/agenda");
}

export async function deleteAgenda(id: string) {
  await prisma.agenda.delete({ where: { id } });
  revalidatePath("/admin/agenda");
  revalidatePath("/agenda");
}


// ================= SITE SETTINGS =================
export async function getSettings() {
  const settings = await prisma.siteSetting.findMany();
  const settingMap: Record<string, string> = {};
  settings.forEach(s => { settingMap[s.key] = s.value; });
  return settingMap;
}

export async function updateSettings(formData: FormData) {
  const keys = ['hero_title', 'hero_subtitle', 'profile_history', 'visi_text', 'misi_text', 'kepsek_name', 'kepsek_message'];

  for (const key of keys) {
    const value = formData.get(key)?.toString();
    if (value !== undefined) {
      await prisma.siteSetting.upsert({
        where: { key },
        update: { value },
        create: { key, value }
      });
    }
  }

  revalidatePath("/admin/landing-page");
  revalidatePath("/");
}
