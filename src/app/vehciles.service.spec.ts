import { TestBed } from '@angular/core/testing';

import { VehcilesService } from './vehciles.service';

describe('VehcilesService', () => {
  let service: VehcilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehcilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
