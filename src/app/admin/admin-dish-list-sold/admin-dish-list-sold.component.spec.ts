import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDishListSoldComponent } from './admin-dish-list-sold.component';

describe('AdminDishListSoldComponent', () => {
  let component: AdminDishListSoldComponent;
  let fixture: ComponentFixture<AdminDishListSoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDishListSoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDishListSoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
