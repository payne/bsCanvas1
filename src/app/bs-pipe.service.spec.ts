import { TestBed } from '@angular/core/testing';

import { BsPipeService } from './bs-pipe.service';

describe('BsPipeService', () => {
  let service: BsPipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BsPipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
