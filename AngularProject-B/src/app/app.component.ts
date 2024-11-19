import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormValidatorComponent } from '../../FormValidation/form-validator/form-validator.component';
import { InjectableDependenceComponent } from '../../Injectable -Dependance/injectable-dependence/injectable-dependence.component';
import { ConstructureDependenceComponent } from '../../Constructure-Based-Dependence/constructure-dependence/constructure-dependence.component';
import { InjectableServicesService } from '../../Injectable-Services/injectable-services.service';
import { AngularPipesComponent } from '../../Angular-Pipes/angular-pipes/angular-pipes.component';
import { ImageOptomizationComponent } from "../../NgImageOptomization/image-optomization/image-optomization.component";
import { DeferableviewComponent } from "../../DeferableViews/deferableview/deferableview.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ImageOptomizationComponent, AngularPipesComponent, FormValidatorComponent, InjectableDependenceComponent, ConstructureDependenceComponent, ImageOptomizationComponent, DeferableviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularProject-B';
  somedata=" inject base dependence used the function  of different class";
  funforinject()
  {
    return this.somedata;
  }

  funcondata="constructure based dependence used the function of different classes";
  funforconstructure()
  {
    return this.funcondata;
  }

  serviceobj=inject(InjectableServicesService);
  
  varforservice:string=this.serviceobj.servicesfunA();
  varforservices:string=this.serviceobj.servicesfunB();
}
