import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-image-optomization',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './image-optomization.component.html',
  styleUrl: './image-optomization.component.css'
})
export class ImageOptomizationComponent {
imageurl="C:/Users/KarachiComputers/Desktop/AP-first/AngularProject-B/NgImageOptomization/image-optomization/IMG20211103212415.jpg";
imagealt="May be url is wrong or some thing else"
}
