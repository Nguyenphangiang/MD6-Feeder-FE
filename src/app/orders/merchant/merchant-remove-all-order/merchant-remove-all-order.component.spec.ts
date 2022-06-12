import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantRemoveAllOrderComponent } from './merchant-remove-all-order.component';

describe('MerchantRemoveAllOrderComponent', () => {
  let component: MerchantRemoveAllOrderComponent;
  let fixture: ComponentFixture<MerchantRemoveAllOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantRemoveAllOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantRemoveAllOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
