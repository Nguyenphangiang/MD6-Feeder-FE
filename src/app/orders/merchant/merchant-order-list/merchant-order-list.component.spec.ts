import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantOrderListComponent } from './merchant-order-list.component';

describe('MerchantOrderListComponent', () => {
  let component: MerchantOrderListComponent;
  let fixture: ComponentFixture<MerchantOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
