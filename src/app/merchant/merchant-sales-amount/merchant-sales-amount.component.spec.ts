import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantSalesAmountComponent } from './merchant-sales-amount.component';

describe('MerchantSalesAmountComponent', () => {
  let component: MerchantSalesAmountComponent;
  let fixture: ComponentFixture<MerchantSalesAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantSalesAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantSalesAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
