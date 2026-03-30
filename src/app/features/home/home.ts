import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ProjectService } from '../../core/services/project.service';
import { Project } from '../../core/models/project.interface';
import { ProjectModalComponent } from '../../shared/components/project-modal/project-modal';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProjectModalComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  private fb = inject(FormBuilder);

  // EmailJS Configuration - Replace these with your real keys from the dashboard
  private readonly SERVICE_ID = 'service_npx03s9';
  private readonly TEMPLATE_ID = 'template_d75a2uf';
  private readonly PUBLIC_KEY = 'UfNGtywor37a9d0Xg';

  // Contact Form Setup
  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  isSubmitting = signal(false);
  submitSuccess = signal(false);

  // Injecting our core services
  private projectService = inject(ProjectService);
  private sanitizer = inject(DomSanitizer);

  // Exposing the projects from our service
  projects = this.projectService.projects;

  // Modal State Management
  selectedProject = signal<Project | null>(null);

  stats = signal([
    { label: ' - Job Success', value: '100%', color: '#10b981' },
    { label: ' - Client Satisfaction', value: '100%', color: '#3b82f6' },
    { label: ' - Experience', value: '5+ Yrs', color: '#8b5cf6' }
  ]);

  // Handle Form Submission
  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting.set(true);

      try {
        const templateParams = {
          from_name: this.contactForm.value.name,
          from_email: this.contactForm.value.email,
          message: this.contactForm.value.message
        };

        await emailjs.send(
          this.SERVICE_ID,
          this.TEMPLATE_ID,
          templateParams,
          this.PUBLIC_KEY
        );

        this.submitSuccess.set(true);
        this.contactForm.reset();

        // Auto-hide success message after 5 seconds
        setTimeout(() => this.submitSuccess.set(false), 5000);
      } catch (error: any) {
        console.error('EmailJS Error:', error);
        alert(`Failed to send message: ${error?.text || 'Unknown Error'}. \n\nTip: Double-check that your EmailJS Template uses {{from_name}}, {{from_email}}, and {{message}} exactly.`);
      } finally {
        this.isSubmitting.set(false);
      }
    }
  }

  // Handle Video / Safe Links
  getSafeUrl(url: string | undefined): SafeUrl {
    if (!url) return '';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  // Logic for Hover Video
  playPreview(videoElement: HTMLVideoElement) {
    videoElement.play().catch(e => console.log('Autoplay blocked or video missing', e));
  }

  pausePreview(videoElement: HTMLVideoElement) {
    videoElement.pause();
    videoElement.currentTime = 0;
  }
}
