import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDishFavoriteComponent } from './list-dish-favorite.component';

describe('ListDishFavoriteComponent', () => {
  let component: ListDishFavoriteComponent;
  let fixture: ComponentFixture<ListDishFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDishFavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDishFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
