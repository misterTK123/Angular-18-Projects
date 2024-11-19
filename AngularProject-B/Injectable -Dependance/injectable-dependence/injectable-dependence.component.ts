import { Component, inject } from '@angular/core';
import { AppComponent } from '../../src/app/app.component';
@Component({
  selector: 'app-injectable-dependence',
  standalone: true,
  imports: [],
  templateUrl: './injectable-dependence.component.html',
  styleUrl: './injectable-dependence.component.css'
})
export class InjectableDependenceComponent {
objappcomonant=inject(AppComponent);
chk="";
constructor()
{ this.chk=this.check();
}
check()
{
 return this.objappcomonant.funforinject();
}
}
