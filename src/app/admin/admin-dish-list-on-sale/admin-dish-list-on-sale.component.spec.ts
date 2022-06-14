import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDishListOnSaleComponent } from './admin-dish-list-on-sale.component';

describe('AdminDishListOnSaleComponent', () => {
  let component: AdminDishListOnSaleComponent;
  let fixture: ComponentFixture<AdminDishListOnSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDishListOnSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDishListOnSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
