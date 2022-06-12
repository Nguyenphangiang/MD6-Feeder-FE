import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantOrderDetailsComponent } from './merchant-order-details.component';

describe('MerchantOrderDetailsComponent', () => {
  let component: MerchantOrderDetailsComponent;
  let fixture: ComponentFixture<MerchantOrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantOrderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
