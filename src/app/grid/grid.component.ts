import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [MaterialModule,CardComponent,CommonModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  tiles=[1,2,3,4];
}

