import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

interface PathCard {
  title: string;
  description: string;
  bulletPoints: string[];
  icon: string; // We'll use text icons for now, you can replace with actual icons
}

@Component({
  selector: 'app-choose-path',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './choose-path.component.html',
  styleUrl: './choose-path.component.css'
})
export class ChoosePathComponent {
  
  pathCards: PathCard[] = [
    {
      title: 'Student',
      description: 'Organize your academic life with smart scheduling and progress tracking designed for learners.',
      bulletPoints: [
        'Personalized study timetables',
        'Progress tracking and analytics',
        'Note management system'
      ],
      icon: 'fas fa-graduation-cap'
    },
    {
      title: 'Educators',
      description: 'Streamline your teaching workflow with tools built for academic professionals.',
      bulletPoints: [
        'Class schedule management',
        'Student progress monitoring',
        'Resource organization tools'
      ],
      icon: 'fas fa-book-open'
    },
    {
      title: 'Professional',
      description: 'Boost your career growth with professional development tools and productivity features.',
      bulletPoints: [
        'Goal tracking and milestones',
        'Skill development planning',
        'Professional networking tools'
      ],
      icon: 'fas fa-briefcase'
    },
    {
      title: 'Organization',
      description: 'Empower your team with enterprise-grade planning and collaboration solutions.',
      bulletPoints: [
        'Team collaboration features',
        'Multi-user management',
        'Advanced analytics dashboard'
      ],
      icon: 'far fa-building'
    }
  ];

  onGetStarted(cardTitle: string): void {
    console.log(`Get Started clicked for: ${cardTitle}`);
    // Add your role-based navigation logic here
    // For example: this.router.navigate(['/signup'], { queryParams: { role: cardTitle.toLowerCase() } });
  }
}