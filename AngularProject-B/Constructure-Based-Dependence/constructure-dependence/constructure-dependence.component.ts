import { Component } from '@angular/core';
import { AppComponent } from '../../src/app/app.component';

@Component({
  selector: 'app-constructure-dependence',
  standalone: true,
  imports: [],
  templateUrl: './constructure-dependence.component.html',
  styleUrl: './constructure-dependence.component.css'
})
export class ConstructureDependenceComponent {
   constructor( private constr:AppComponent)
   {
        this.fundata=this.funforcon();
   }
   fundata="";
   funforcon()
   {
    return this.constr.funforconstructure();
   }
}
