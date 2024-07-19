import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { FormBuilder,FormGroup,FormsModule,ReactiveFormsModule,Validator, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [MaterialModule,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  constructor(private fb:FormBuilder){}
  registrationForm!:FormGroup;
  ngOnInit()
  {
    this.registrationForm= this.fb.group({
      userName:['',Validators.required]
    })
  }
}
