import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferableviewComponent } from './deferableview.component';

describe('DeferableviewComponent', () => {
  let component: DeferableviewComponent;
  let fixture: ComponentFixture<DeferableviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferableviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferableviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
