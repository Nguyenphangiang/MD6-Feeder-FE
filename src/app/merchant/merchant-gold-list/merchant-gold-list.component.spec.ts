import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantGoldListComponent } from './merchant-gold-list.component';

describe('MerchantGoldListComponent', () => {
  let component: MerchantGoldListComponent;
  let fixture: ComponentFixture<MerchantGoldListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantGoldListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantGoldListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
