
export interface Experience {
  role: string;
  company: string;
  period: string;
  points: string[];
  metrics?: { label: string; value: string }[];
}

export interface Project {
  title: string;
  description: string;
  impact: string[];
  tags: string[];
  icon: string;
  link: string;
  imageUrl: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}
