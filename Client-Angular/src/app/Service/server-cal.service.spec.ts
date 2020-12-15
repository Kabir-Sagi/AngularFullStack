import { TestBed } from '@angular/core/testing';

import { ServerCalService } from './server-cal.service';

describe('ServerCalService', () => {
  let service: ServerCalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerCalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
