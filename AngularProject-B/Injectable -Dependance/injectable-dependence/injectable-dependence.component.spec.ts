import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectableDependenceComponent } from './injectable-dependence.component';

describe('InjectableDependenceComponent', () => {
  let component: InjectableDependenceComponent;
  let fixture: ComponentFixture<InjectableDependenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InjectableDependenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InjectableDependenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
