export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  techStack?: string[];
  link?: string;
  linkType?: 'github' | 'gitlab' | 'devpost' | 'itch' | 'other';
  status?: string; // e.g., "Coming Soon"
}

export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  period: string;
  details?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}