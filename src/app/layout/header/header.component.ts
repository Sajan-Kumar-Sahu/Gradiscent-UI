import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  onLoginClick(): void {
    console.log('Login clicked');
    // Add your login logic here
  }

  onSignUpClick(): void {
    console.log('Sign Up clicked');
    // Add your sign up logic here
  }
}