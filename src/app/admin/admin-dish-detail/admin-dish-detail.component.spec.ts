import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDishDetailComponent } from './admin-dish-detail.component';

describe('AdminDishDetailComponent', () => {
  let component: AdminDishDetailComponent;
  let fixture: ComponentFixture<AdminDishDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDishDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDishDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
