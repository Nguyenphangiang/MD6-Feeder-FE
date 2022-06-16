import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantDetailByUserComponent } from './merchant-detail-by-user.component';

describe('MerchantDetailByUserComponent', () => {
  let component: MerchantDetailByUserComponent;
  let fixture: ComponentFixture<MerchantDetailByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantDetailByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantDetailByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
