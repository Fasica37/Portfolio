import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer glass">
      <div class="footer-container">
        <div class="footer-info">
          <span class="logo gradient-text">PORTFOLIO</span>
          <p>© 2026 Crafted with Passion by a Senior Developer</p>
        </div>
        <div class="footer-links">
          <a href="https://www.linkedin.com/in/fasicaz/" target="_blank">LinkedIn</a>
          <a href="https://github.com/Fasica37" target="_blank">GitHub</a>
          <a href="https://www.upwork.com/freelancers/~01a0d5c26fa1e7b168" target="_blank">Upwork</a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      margin-top: 4rem;
      padding: 3rem 2rem;
      border-radius: 0;
      border-bottom: none;
      border-left: none;
      border-right: none;
    }
    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
    }
    .logo {
      font-size: 1.25rem;
      font-weight: 800;
      letter-spacing: 0.1em;
      margin-bottom: 0.5rem;
      display: block;
    }
    .footer-info p {
      color: var(--text-secondary);
      font-size: 0.9rem;
    }
    .footer-links {
      display: flex;
      gap: 2rem;
    }
    .footer-links a {
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s ease;
    }
    .footer-links a:hover {
      color: var(--accent-primary);
    }
    @media (max-width: 640px) {
      .footer-container {
        flex-direction: column;
        text-align: center;
      }
    }
  `]
})
export class FooterComponent { }
