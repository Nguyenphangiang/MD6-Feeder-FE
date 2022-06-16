import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMerchantGoldListComponent } from './admin-merchant-gold-list.component';

describe('AdminMerchantGoldListComponent', () => {
  let component: AdminMerchantGoldListComponent;
  let fixture: ComponentFixture<AdminMerchantGoldListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMerchantGoldListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMerchantGoldListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
