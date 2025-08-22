import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HeroComponent } from './features/landing/components/hero/hero.component';

@Component({
  selector: 'app-root',
  imports: [MainLayoutComponent, HeroComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Gradiscent_UI');
}
