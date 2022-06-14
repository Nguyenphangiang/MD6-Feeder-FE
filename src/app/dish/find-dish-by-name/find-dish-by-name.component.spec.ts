import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDishByNameComponent } from './find-dish-by-name.component';

describe('FindDishByNameComponent', () => {
  let component: FindDishByNameComponent;
  let fixture: ComponentFixture<FindDishByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindDishByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindDishByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
