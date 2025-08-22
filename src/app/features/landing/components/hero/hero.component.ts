import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  private slideInterval: any;

  // Add your background images here
  backgroundImages = [
    'assets/images/hero-bg-1.jpg',
    'assets/images/hero-bg-2.jpg', 
    'assets/images/hero-bg-3.jpg'
  ];

  ngOnInit(): void {
    this.startSlideShow();
  }

  ngOnDestroy(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  startSlideShow(): void {
    this.slideInterval = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.backgroundImages.length;
    }, 5000); // Change slide every 5 seconds
  }

  onGetStartedClick(): void {
    console.log('Get Started clicked');
    // Add your navigation logic here
    // For example: this.router.navigate(['/signup']);
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }
}