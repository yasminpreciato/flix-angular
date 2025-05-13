import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'flix';
  navbg: any;

  @HostListener('document:scroll') scrollover() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      this.navbg = { 'background-color': '#000' }
    } else {
      this.navbg = {}
    }
  }
}

