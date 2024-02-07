import { TestBed } from '@angular/core/testing';

import { NetworkIncServiceService } from './network-inc-service.service';

describe('NetworkIncServiceService', () => {
  let service: NetworkIncServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetworkIncServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
