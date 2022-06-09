import { TestBed } from '@angular/core/testing';

import { AppUserServiceService } from './app-user-service.service';

describe('AppUserServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppUserServiceService = TestBed.get(AppUserServiceService);
    expect(service).toBeTruthy();
  });
});
