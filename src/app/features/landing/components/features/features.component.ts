// features.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FeatureCard {
  title: string;
  description: string;
  icon: string; // Font Awesome class names
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  featureCards: FeatureCard[] = [
    {
      title: 'Smart Timetables',
      description: 'AI-powered scheduling that adapts to your learning patterns and optimizes your study sessions for maximum productivity.',
      icon: 'far fa-calendar-alt'
    },
    {
      title: 'Progress Tracking',
      description: 'Comprehensive analytics and insights to monitor your learning journey with detailed progress reports and performance metrics.',
      icon: 'far fa-chart-bar'
    },
    {
      title: 'Note Management',
      description: 'Organize, search, and sync your notes across all devices with smart categorization and quick access features.',
      icon: 'far fa-sticky-note'
    },
    {
      title: 'Streak Goals',
      description: 'Build consistent learning habits with gamified streak tracking and achievement rewards to keep you motivated.',
      icon: 'far fa-check-circle'
    },
    {
      title: 'Learning Roadmaps',
      description: 'Personalized learning paths with milestone tracking and adaptive content recommendations tailored to your goals.',
      icon: 'far fa-map'
    },
    {
      title: 'Smart Reminders',
      description: 'Intelligent notifications that adapt to your schedule and learning patterns to keep you on track without overwhelm.',
      icon: 'far fa-bell'
    }
  ];
}