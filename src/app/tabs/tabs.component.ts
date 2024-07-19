import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { GridComponent } from "../grid/grid.component";
import { StepperComponent } from '../stepper/stepper.component';
import { InputComponent } from '../input/input.component';
@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [MaterialModule, GridComponent,StepperComponent,InputComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {  

}
