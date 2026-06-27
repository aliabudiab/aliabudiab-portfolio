export type SocialPlatform = "github" | "linkedin" | "email";

export interface SocialLink {
  platform: SocialPlatform;
  href: string;
  label: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  email: string;
  url: string;
  tagline: string;
  bio: string;
  bioHighlights: string[];
  resumeUrl: string;
  socialLinks: SocialLink[];
  navLinks: NavLink[];
  typewriterRoles: string[];
  heroStats: Array<{ label: string; value: string }>;
  location: string;
  education: string;
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  href?: string;
  featured?: boolean;
}

export interface HighlightSegment {
  text: string;
  highlighted: boolean;
}
