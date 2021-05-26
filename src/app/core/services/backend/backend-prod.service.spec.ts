import { TestBed } from '@angular/core/testing';

import { BackendProdService } from './backend-prod.service';

describe('BackendProdService', () => {
  let service: BackendProdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendProdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
