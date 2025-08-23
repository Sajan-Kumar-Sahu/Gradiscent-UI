// header.component.ts (or wherever your header is)
import { Component, HostListener, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component'; // Update this path

@Component({
  selector: 'app-header',
  standalone: true, // Add this if using standalone components
  imports: [ButtonComponent], // Add ButtonComponent to imports
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isHeaderVisible = true;
  lastScrollTop = 0;
  scrollThreshold = 100; // Minimum scroll distance before hiding

  ngOnInit() {
    // Optional: You can also use this instead of @HostListener
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Don't hide header at the very top of the page
    if (currentScrollTop <= this.scrollThreshold) {
      this.isHeaderVisible = true;
      return;
    }

    // Hide on scroll down, show on scroll up
    if (currentScrollTop > this.lastScrollTop) {
      // Scrolling down
      this.isHeaderVisible = false;
    } else {
      // Scrolling up
      this.isHeaderVisible = true;
    }

    this.lastScrollTop = currentScrollTop;
  }

  onLoginClick() {
    // Your login logic
    console.log('Login clicked');
  }

  onSignUpClick() {
    // Your signup logic
    console.log('Sign up clicked');
  }
}