import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRemoveComponent } from './order-remove.component';

describe('OrderRemoveComponent', () => {
  let component: OrderRemoveComponent;
  let fixture: ComponentFixture<OrderRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
