export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  thumbnailUrl: string;
  videoUrl?: string; // Local path or external link
  playStoreUrl?: string;
  appStoreUrl?: string;
  githubUrl?: string;
  techStack: string[];
  isFeatured: boolean;
}
