export interface SkillItem {
  name: string;
  status: 'ACTIVE' | 'EXPLORING' | 'LEARNING';
}

export interface SkillCategory {
  title: string;
  code: string;
  subtitle: string;
  items: SkillItem[];
}

export interface InterestArea {
  id: string;
  title: string;
  description: string;
}

export interface Certificate {
  id: string;
  recordId: string;
  title: string;
  issuer: string;
  credentialId: string;
  verificationDetails: string;
  date: string;
  skills: string[];
}

export interface Project {
  id: string;
  code: string;
  tags: string;
  title: string;
  description: string;
  githubUrl: string;
  details: {
    overview: string;
    highlights: string[];
    technologies: string[];
  };
}

export interface TimelineEvent {
  step: string;
  title: string;
  description: string;
  status?: 'active' | 'completed';
}
