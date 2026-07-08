export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  url?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    tagline: string;
    bio: string;
    email: string;
    github: string;
    linkedin: string;
    profileImage?: string;
  };
  education: Education[];
  skills: SkillCategory[];
  projects: Project[];
  certificates: Certificate[];
}
