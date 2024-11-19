import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe',
  standalone: true
})
export class CustompipePipe implements PipeTransform {
   count='';
  transform(value:string ): string {
    for (let i =value.length+1;i>=0; i++) {
      this.count+=value[i];
      
    }
    return this.count;
  }
  element='';
  alfaarray:string []=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
   shaowalphabates(charcter:string):string{
    for (let index = 0; index < this.alfaarray.length; index++) {
      this.element = this.alfaarray[index];
    }
    return this.element;
   }
}
