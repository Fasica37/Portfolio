import { Injectable, signal } from '@angular/core';
import { Project } from '../models/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  // We use signals to hold the state of our projects.
  // This can easily be updated later from a Firebase or Supabase call.
  private projectsState = signal<Project[]>([
    {
      id: 'travel-tribe',
      title: 'Travel Tribe',
      description: 'A complex, published application featuring deep API integration and persistent state management.',
      longDescription: 'Built with a .NET Core backend and Flutter frontend, Travel Tribe is a full-stack solution for modern travelers. It handles complex social data, real-time updates, and cross-platform synchronization.',
      thumbnailUrl: 'assets/images/travel-tribe-thumb.jpg',
      videoUrl: 'assets/videos/travel_tribe_demo.mp4', // Premium hover demo
      appStoreUrl: 'https://apps.apple.com/ke/app/travel-tribe/id6746623152',
      techStack: ['Flutter', '.NET Core', 'REST API', 'PostgreSQL'],
      isFeatured: true
    },
    {
      id: 'zgulit',
      title: 'ZGulit',
      description: 'Lead Developer for a high-traffic application with over 50k downloads.',
      longDescription: 'Ensured full-stack stability and managed complex data structures under heavy load. Specialized in performance optimization and SQL query tuning for high user concurrency.',
      thumbnailUrl: 'assets/images/zegulit-thumb.jpg',
      videoUrl: 'assets/videos/zegulit_demo.mp4',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ethioclicks.zegulit',
      appStoreUrl: 'https://apps.apple.com/ke/app/zegulit/id6449540249',
      techStack: ['Flutter', 'Firebase', 'Data Structures', 'Heavy Load Management'],
      isFeatured: true
    },
    {
      id: 'kine-tbeb',
      title: 'Kine Tbeb Lehtsanat',
      description: 'A published application showcasing fast, high-quality UI design and REST API consumption.',
      longDescription: 'Developed a rich, interactive educational platform with a focus on smooth animations and robust API integration.',
      thumbnailUrl: 'assets/images/kine-tbeb-thumb.jpg',
      videoUrl: 'assets/videos/kine_tbeb_demo.mp4',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.oriyares.kine_tbeb_lehtsanat',
      techStack: ['Flutter', 'REST API', 'UI/UX Design'],
      isFeatured: false
    }
  ]);

  // Read-only access to our projects
  projects = this.projectsState.asReadonly();

  constructor() { }

  // Function to filter featured projects for the hero section
  getFeaturedProjects() {
    return this.projects().filter(p => p.isFeatured);
  }
}
