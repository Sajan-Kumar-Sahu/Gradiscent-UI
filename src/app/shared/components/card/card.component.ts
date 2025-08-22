import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports:[CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  standalone: true  // Add this line
})
export class CardComponent {
  @Input() shadow: 'none' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() padding: 'none' | 'sm' | 'md' | 'lg' = 'md';
  @Input() rounded: 'none' | 'sm' | 'md' | 'lg' | 'xl' = 'lg';
  @Input() border: boolean = false;

  get cardClasses(): string {
    const baseClasses = 'bg-white';
    
    const shadowClasses = {
      none: '',
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl'
    };

    const paddingClasses = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8'
    };

    const roundedClasses = {
      none: '',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl'
    };

    const borderClass = this.border ? 'border border-gray-200' : '';
    
    return `${baseClasses} ${shadowClasses[this.shadow]} ${paddingClasses[this.padding]} ${roundedClasses[this.rounded]} ${borderClass}`.trim();
  }
}