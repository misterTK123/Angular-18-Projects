import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageOptomizationComponent } from './image-optomization.component';

describe('ImageOptomizationComponent', () => {
  let component: ImageOptomizationComponent;
  let fixture: ComponentFixture<ImageOptomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageOptomizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageOptomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
