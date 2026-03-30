import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../core/models/project.interface';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-backdrop" (click)="close.emit()">
      <div class="modal-content glass" (click)="$event.stopPropagation()">
        <button class="close-btn" (click)="close.emit()">×</button>
        
        <div class="modal-body">
          <div class="video-container">
            <video [src]="getSafeUrl(project()?.videoUrl)" 
                   controls 
                   autoplay 
                   class="main-video"></video>
          </div>
          
          <div class="project-details">
            <h2 class="gradient-text">{{ project()?.title }}</h2>
            <div class="tech-stack">
              @for (tech of project()?.techStack; track tech) {
                <span class="tech-tag">{{ tech }}</span>
              }
            </div>
            
            <p class="long-desc">{{ project()?.longDescription }}</p>
            
            <div class="modal-actions">
              @if (project()?.appStoreUrl) {
                <a [href]="project()?.appStoreUrl" target="_blank" class="store-btn apple">
                   App Store
                </a>
              }
              @if (project()?.playStoreUrl) {
                <a [href]="project()?.playStoreUrl" target="_blank" class="store-btn google">
                   Play Store
                </a>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(8px);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2000;
      padding: 2rem;
    }
    .modal-content {
      width: 100%;
      max-width: 900px;
      max-height: 90vh;
      overflow-y: auto;
      position: relative;
      border-radius: 24px;
      padding: 3rem;
    }
    .close-btn {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      background: none;
      border: none;
      color: var(--text-primary);
      font-size: 2rem;
      cursor: pointer;
      z-index: 10;
    }
    .video-container {
      width: 100%;
      aspect-ratio: 16/9;
      background: #000;
      border-radius: 12px;
      overflow: hidden;
      margin-bottom: 2rem;
    }
    .main-video {
      width: 100%;
      height: 100%;
    }
    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin: 1.5rem 0;
    }
    .tech-tag {
      padding: 0.4rem 1rem;
      background: var(--bg-secondary);
      color: var(--accent-primary);
      border-radius: 6px;
      font-size: 0.85rem;
      font-weight: 600;
    }
    .long-desc {
      color: var(--text-secondary);
      line-height: 1.8;
      font-size: 1.1rem;
      margin-bottom: 2.5rem;
    }
    .modal-actions {
      display: flex;
      gap: 1.5rem;
    }
    .store-btn {
      padding: 1rem 2rem;
      border-radius: 12px;
      text-decoration: none;
      font-weight: 700;
      transition: all 0.3s ease;
      background: var(--accent-primary);
      color: white;
    }
    .store-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
    }
    @media (max-width: 768px) {
      .modal-content { padding: 1.5rem; }
      .modal-actions { flex-direction: column; }
    }
  `]
})
export class ProjectModalComponent {
  // Using modern Input and Output
  project = input<Project | null>(null);
  close = output<void>();

  constructor(private sanitizer: DomSanitizer) {}

  getSafeUrl(url: string | undefined): SafeUrl {
    if (!url) return '';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
