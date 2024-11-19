import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CustompipePipe } from '../custompipe.pipe';
@Component({
  selector: 'app-angular-pipes',
  standalone: true,
  imports: [UpperCasePipe,LowerCasePipe,DatePipe,DecimalPipe,CurrencyPipe],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.css'
})
export class AngularPipesComponent {
message="i am a teacher ";
dateofbirth=new Date(2024,11,15);
rupee=0.30;
number=4.5;
transformdata="";
//constructor(private obj:CustompipePipe)
//{
 // this.transformdata = obj.transform('12');
//}
}
