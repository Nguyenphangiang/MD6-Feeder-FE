import { TestBed } from '@angular/core/testing';

import { CartElementService } from './cart-element.service';

describe('CartElementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartElementService = TestBed.get(CartElementService);
    expect(service).toBeTruthy();
  });
});
