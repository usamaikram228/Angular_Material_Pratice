import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data:any){}
}
