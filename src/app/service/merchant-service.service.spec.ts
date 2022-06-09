import { TestBed } from '@angular/core/testing';

import { MerchantServiceService } from './merchant-service.service';

describe('MerchantServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MerchantServiceService = TestBed.get(MerchantServiceService);
    expect(service).toBeTruthy();
  });
});
