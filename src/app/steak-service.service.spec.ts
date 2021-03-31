import { TestBed } from '@angular/core/testing';

import { SteakServiceService } from './steak-service.service';

describe('SteakServiceService', () => {
  let service: SteakServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SteakServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
