import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {
 
}




