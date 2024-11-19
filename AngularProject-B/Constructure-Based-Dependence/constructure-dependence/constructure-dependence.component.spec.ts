import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructureDependenceComponent } from './constructure-dependence.component';

describe('ConstructureDependenceComponent', () => {
  let component: ConstructureDependenceComponent;
  let fixture: ComponentFixture<ConstructureDependenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstructureDependenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructureDependenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
