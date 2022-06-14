import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantRemoveOrderComponent } from './merchant-remove-order.component';

describe('MerchantRemoveOrderComponent', () => {
  let component: MerchantRemoveOrderComponent;
  let fixture: ComponentFixture<MerchantRemoveOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantRemoveOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantRemoveOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
