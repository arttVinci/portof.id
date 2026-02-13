export interface Experience {
  id: string;
  position: string; // Contoh: Jabatan (Backend Developer)
  company: string; // Contoh: Nama Perusahaan (Tokopedia / Gojek)
  company_url?: string; // Contoh: Link Company Profile (https://tokopedia.com)
  logo_url?: string; // Contoh: URL gambar logo
  location?: string; // Contoh: Kota (Jakarta, Indonesia)
  employment_type?: string; // Contoh: Status (Full-time / Freelance)
  location_type?: string; // Contoh: Tipe Kerja (Remote / On-site)
  start_date: string; // Contoh: "2023-01-01" (Data mentah)
  end_date?: string | null; // Contoh: "2024-01-01" (Null jika masih kerja)
  is_current: boolean; // Contoh: True jika masih aktif
  description: string; // Contoh: Paragraf panjang deskripsi tugas
}

export interface Education {
  id: string;
  institution: string; // Contoh: Nama Kampus (Universitas Terbuka)
  degree?: string; // Contoh: Gelar (Sarjana / S1)
  field_of_study?: string; // Contoh: Jurusan (Sistem Informasi)
  grade?: string; // Contoh: Nilai (IPK 3.85)
  logo_url?: string; // Contoh: URL Logo Kampus
  location?: string; // Contoh: Kota Kampus
  start_date: string; // Contoh: Tanggal Masuk
  end_date?: string | null; // Contoh: Tanggal Lulus
  is_current: boolean; // Contoh: True jika masih kuliah
  description: string; // Contoh: Paragraf aktivitas/organisasi
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  github_url?: string;
  live_url?: string;
  featured: boolean;
  challenges: string;
  solution: string;

  tags: string[];
  tech_stack: TechItem[];
  gallery: ProjectGallery[];
  features: ProjectFeature[];
}

export interface ProjectFeature {
  title: string;
  items: string[];
}

export interface ProjectGallery {
  url: string;
  caption: string;
}

export interface TechItem {
  name: string;
  icon: string;
  color: string;
}

export interface Achievement {
  id: string;
  title: string;
  image_url: string;
  organization: string;
  issued_date: string;
  credential_url: string;
  credential_id: string;
}

export interface Profile {
  id: string;
  username: string;
  full_name: string;
  url_profile: string;
  address: string;
  about: string;
  bio?: string;
}
