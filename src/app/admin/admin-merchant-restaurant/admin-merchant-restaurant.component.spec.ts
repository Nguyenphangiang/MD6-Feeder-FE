import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMerchantRestaurantComponent } from './admin-merchant-restaurant.component';

describe('AdminMerchantRestaurantComponent', () => {
  let component: AdminMerchantRestaurantComponent;
  let fixture: ComponentFixture<AdminMerchantRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMerchantRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMerchantRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
