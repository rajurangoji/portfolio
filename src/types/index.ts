export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
}

export interface ProfileData {
  name: string;
  title: string;
  shortTitle: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  instagram: string;
  githubHandle: string;
  linkedinHandle: string;
  instagramHandle: string;
  freelanceAvailable: boolean;
  availabilityText: string;
  education: EducationEntry[];
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface ProjectEntry {
  id: string;
  name: string;
  type: string;
  bullets: string[];
  tech: string[];
}

export interface SkillCategory {
  id: string;
  category: string;
  items: string[];
}

export interface ServiceEntry {
  id: string;
  title: string;
  description: string;
  tech: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  tags: string[];
  image?: string;
}

export interface NavItem {
  label: string;
  path: string;
}
