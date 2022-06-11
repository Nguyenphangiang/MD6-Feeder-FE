import { TestBed } from '@angular/core/testing';

import { DishStatusService } from './dish-status.service';

describe('DishStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DishStatusService = TestBed.get(DishStatusService);
    expect(service).toBeTruthy();
  });
});
