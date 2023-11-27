import { TestBed } from '@angular/core/testing';

import { VademecumService } from './vademecum.service';

describe('VademecumService', () => {
  let service: VademecumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VademecumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
