
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  image: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'soft';
}

export interface CreativeItem {
  type: 'image' | 'video' | 'audio';
  title: string;
  thumbnail: string;
}
