import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMerchantByNameComponent } from './find-merchant-by-name.component';

describe('FindMerchantByNameComponent', () => {
  let component: FindMerchantByNameComponent;
  let fixture: ComponentFixture<FindMerchantByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindMerchantByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindMerchantByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
