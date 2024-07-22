import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor(private router:Router){}
  navigateToTable()
  {
    this.router.navigate(['/table']);
  }
}
