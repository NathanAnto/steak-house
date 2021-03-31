import { TestBed } from '@angular/core/testing';

import { SteakService } from './steak.service';

describe('SteakService', () => {
  let service: SteakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SteakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
