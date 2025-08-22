import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
   selector: 'app-home',
  standalone: true,              // <---- very important
  imports: [CommonModule],       // any modules it uses
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { 
    logoPath="assets/logo.png"
}