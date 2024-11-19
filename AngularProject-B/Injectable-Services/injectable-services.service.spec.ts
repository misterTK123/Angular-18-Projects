import { TestBed } from '@angular/core/testing';

import { InjectableServicesService } from './injectable-services.service';

describe('InjectableServicesService', () => {
  let service: InjectableServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InjectableServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
