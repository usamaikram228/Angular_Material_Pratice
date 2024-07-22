import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { FormBuilder,FormGroup,FormsModule,ReactiveFormsModule,Validator, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable, map, startWith } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [MaterialModule,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  options : string[]= ['abc',"def","ghi"];
  filteredOptions : Observable<string[]> | undefined;
  constructor(private fb:FormBuilder,private SnackBar:MatSnackBar,public dialog:MatDialog){}
  // registrationForm!:FormGroup;
  registrationForm= this.fb.group({
    userName:['',Validators.required],
    topic:[[]],
    option:[''],
    date:[null]
  })
  ngOnInit()
  {
    this.filteredOptions= this.registrationForm.get('option')?.valueChanges.pipe(
      startWith(''),
      map(value=>this._filter(value as string))
    )|| new Observable<string[]>();
  }
  private _filter(value:string):string[]{
    const filterValue= value.toLowerCase();
    return this.options.filter(option=>option.toLowerCase().includes(filterValue))
  }
 
  dateFilter= (date:Date|null):boolean=>{
    if(!date) return false;
    const day = date.getDay();
    return day !== 0 && day!==6;
  }
  openSnackBar(value:string,action:string)
  {
    let ref = this.SnackBar.open(value,action);
    ref.afterDismissed().subscribe(()=>{
      console.log("After dismission")
    })
  }

  openDialog()
  {
    let ref=this.dialog.open(DialogComponent,{data:{name:'Usama'}});
    ref.afterClosed().subscribe(result=>{
      console.log(`result is ${result}`);
    })
  }
}
