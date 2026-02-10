import type {
  Experience,
  Education,
  Achievement,
  Project,
  Profile,
} from "../types/api.types";
import type {
  CareerItem,
  ProjectItem,
  AchievementItem,
  ProfileItem,
} from "../types/ui.types";

// Helper: Format Tanggal (2024-01-01 -> Jan 2024)
const formatDate = (dateString: string) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(date);
};

export const transformExperiences = (data: Experience[]): CareerItem[] => {
  if (!data) return [];

  return data.map((item) => ({
    id: item.id,
    logo: item.logo_url || "",

    role: item.position, // Contoh: Backend Developer
    organization: item.company, // Contoh: Tokopedia
    organizationUrl: item.company_url,
    location: item.location || "",

    // Format: "Jan 2023 - Present"
    period: `${formatDate(item.start_date)} - ${
      item.is_current ? "Present" : formatDate(item.end_date || "")
    }`,

    type: item.employment_type || "Full-time", // Contoh: Full-time
    mode: item.location_type || "On-site", // Contoh: Remote

    // Pecah deskripsi (paragraf) jadi List (array)
    // Dipisah berdasarkan titik (.) atau enter (\n)
    responsibilities: item.description
      ? item.description.split(/(?:\. |\n)/).filter((t) => t.length > 5)
      : [],

    category: "work", // Penanda
  }));
};

export const transformEducations = (data: Education[]): CareerItem[] => {
  if (!data) return [];

  return data.map((item) => ({
    id: item.id,
    logo: item.logo_url || "",

    role: item.degree || "Student", // Contoh: Sarjana Komputer
    organization: item.institution, // Contoh: Universitas Terbuka
    organizationUrl: "",
    location: item.location || "",

    // Format: "Sep 2020 - Dec 2024"
    period: `${formatDate(item.start_date)} - ${
      item.is_current ? "Present" : formatDate(item.end_date || "")
    }`,

    type: item.grade ? `GPA: ${item.grade}` : "Education",
    mode: item.field_of_study || "", // Contoh: Sistem Informasi

    responsibilities: item.description
      ? item.description.split(/(?:\. |\n)/).filter((t) => t.length > 5)
      : [],

    category: "education", // Penanda
  }));
};

export const transformProjects = (data: Project[]): ProjectItem[] => {
  if (!data) return [];

  return data.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    image: item.image,

    repoUrl: item.github_url,
    demoUrl: item.live_url,
    isFeatured: item.featured,

    challenges: item.challenges,
    solution: item.solution,

    tags: item.tags || [],

    skill:
      item.tech_stack?.map((t) => ({
        name: t.name,
        icon: t.icon,
        color: t.color,
      })) || [],

    gallery: item.gallery || [],
    features: item.features || [],
  }));
};

export const transformAchievements = (
  data: Achievement[],
): AchievementItem[] => {
  if (!data) return [];

  return data.map((item) => ({
    id: item.id || Math.random().toString(),
    title: item.title,
    organization: item.organization,

    // Format: "Feb 2024"
    date: formatDate(item.issued_date),

    image: item.image_url,
    link: item.credential_url,
    credentialId: item.credential_id,
  }));
};

export const transformProfile = (data: Profile): ProfileItem => {
  if (!data) return {} as ProfileItem;

  return {
    id: data.id || Math.random().toString(),
    username: data.username,
    fullName: data.full_name,
    avatar: data.url_profile,
    address: data.address,
    about: data.about,
    bio: data.bio || "",
  };
};
