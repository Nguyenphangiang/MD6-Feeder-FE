import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDishListLoveComponent } from './admin-dish-list-love.component';

describe('AdminDishListLoveComponent', () => {
  let component: AdminDishListLoveComponent;
  let fixture: ComponentFixture<AdminDishListLoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDishListLoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDishListLoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
