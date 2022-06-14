import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishDetailNonCartComponent } from './dish-detail-non-cart.component';

describe('DishDetailNonCartComponent', () => {
  let component: DishDetailNonCartComponent;
  let fixture: ComponentFixture<DishDetailNonCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishDetailNonCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishDetailNonCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
