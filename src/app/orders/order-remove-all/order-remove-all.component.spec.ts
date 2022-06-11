import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRemoveAllComponent } from './order-remove-all.component';

describe('OrderRemoveAllComponent', () => {
  let component: OrderRemoveAllComponent;
  let fixture: ComponentFixture<OrderRemoveAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderRemoveAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderRemoveAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
