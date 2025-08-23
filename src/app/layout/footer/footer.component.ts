// footer.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  email: string = '';

  // Newsletter subscription
  subscribeNewsletter() {
    if (this.email && this.isValidEmail(this.email)) {
      // Handle newsletter subscription
      console.log('Subscribing email:', this.email);
      // Show success message or handle API call
      this.email = '';
      // You can add success toast here
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Footer links data
  footerLinks = {
    product: [
      { name: 'Features', link: '#features' },
      { name: 'Pricing', link: '#pricing' },
      { name: 'Roadmap', link: '#roadmap' },
      { name: 'Integrations', link: '#integrations' }
    ],
    resources: [
      { name: 'Blog', link: '/blog' },
      { name: 'Study Guides', link: '/guides' },
      { name: 'Help Center', link: '/help' },
      { name: 'API Docs', link: '/docs' }
    ],
    company: [
      { name: 'About Us', link: '/about' },
      { name: 'Careers', link: '/careers' },
      { name: 'Contact', link: '/contact' },
      { name: 'Press Kit', link: '/press' }
    ],
    legal: [
      { name: 'Privacy Policy', link: '/privacy' },
      { name: 'Terms of Service', link: '/terms' },
      { name: 'Cookie Policy', link: '/cookies' },
      { name: 'GDPR', link: '/gdpr' }
    ]
  };

  // Social media links
  socialLinks = [
    { name: 'Twitter', icon: 'fab fa-twitter', link: '#', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin', link: '#', color: 'hover:text-blue-600' },
    { name: 'Discord', icon: 'fab fa-discord', link: '#', color: 'hover:text-indigo-400' },
    { name: 'GitHub', icon: 'fab fa-github', link: '#', color: 'hover:text-gray-300' },
    { name: 'YouTube', icon: 'fab fa-youtube', link: '#', color: 'hover:text-red-500' }
  ];

  currentYear = new Date().getFullYear();
}