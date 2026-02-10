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

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;

  repoUrl?: string;
  demoUrl?: string;

  isFeatured: boolean;

  challenges: string;
  solution: string;

  tags: string[];
  skill: {
    name: string;
    icon: string;
    color: string;
  }[];

  gallery: { url: string; caption: string }[];
  features: { title: string; items: string[] }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  date: string; // issued_date yang sudah diformat ("Feb 2024")
  image: string;
  link: string; // credential_url
  credentialId: string;
}

export interface ProfileItem {
  id: string;
  username: string;
  fullName: string;
  avatar: string;
  address: string;
  about: string;
  bio: string;
}
