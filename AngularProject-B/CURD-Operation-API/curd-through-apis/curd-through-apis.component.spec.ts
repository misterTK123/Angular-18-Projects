import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CURDTHROUGHAPIsComponent } from './curd-through-apis.component';

describe('CURDTHROUGHAPIsComponent', () => {
  let component: CURDTHROUGHAPIsComponent;
  let fixture: ComponentFixture<CURDTHROUGHAPIsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CURDTHROUGHAPIsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CURDTHROUGHAPIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
