import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InjectableServicesService {

  constructor() { 
  }
  servicesfunA()
  {
    return("this is a function present in service.ts file ");
  }
  servicesfunB()
  {
    return("i am function in a serice.ts file ");
  }
}
