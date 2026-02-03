// src/types/ui.types.ts

export interface CareerItem {
  id: string;
  logo: string; // Contoh: URL Logo (Sudah dipastikan tidak null)

  role: string; // Contoh: Jabatan (Backend Dev) ATAU Gelar (S1)
  organization: string; // Contoh: Nama PT (Tokopedia) ATAU Kampus (UT)

  organizationUrl?: string; // Contoh: Link Website
  location: string; // Contoh: Kota

  period: string; // Contoh: "Jan 2023 - Present"
  duration?: string; // Contoh: "1 yr 2 mos"

  type: string; // Contoh: Badge Kiri (Full-time / IPK 3.85)
  mode: string; // Contoh: Badge Kanan (Remote / Jurusan SI)

  responsibilities: string[]; // Contoh: List bullet points (Array)

  category: "work" | "education"; // Contoh: Penanda buat ganti icon/warna
}
