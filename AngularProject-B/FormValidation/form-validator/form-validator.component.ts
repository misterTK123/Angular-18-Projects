import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-form-validator',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './form-validator.component.html',
  styleUrl: './form-validator.component.css'
})
export class FormValidatorComponent {
 frm:FormGroup= new FormGroup({});
   Name="";
   Genders="";
 constructor()
 {
  this.save();
 }
   save()
 {
  this.frm= new FormGroup({
   name :new FormControl(this.Name,Validators.required),
   gender:new FormControl(this.Genders,[Validators.required,Validators.minLength(3),Validators.maxLength(40)])
  })
 }




}
