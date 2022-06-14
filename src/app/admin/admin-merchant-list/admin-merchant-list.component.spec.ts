import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMerchantListComponent } from './admin-merchant-list.component';

describe('AdminMerchantListComponent', () => {
  let component: AdminMerchantListComponent;
  let fixture: ComponentFixture<AdminMerchantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMerchantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMerchantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
