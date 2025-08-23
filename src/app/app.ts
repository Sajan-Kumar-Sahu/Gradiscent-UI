import { Component, signal } from '@angular/core';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HeroComponent } from './features/landing/components/hero/hero.component';
import { ChoosePathComponent } from './features/landing/components/choose-path/choose-path.component';
import { FeaturesComponent } from './features/landing/components/features/features.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [MainLayoutComponent, HeroComponent, ChoosePathComponent, FeaturesComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Gradiscent_UI');
}
