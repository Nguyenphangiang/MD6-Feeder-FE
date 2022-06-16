import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceThankComponent } from './invoice-thank.component';

describe('InvoiceThankComponent', () => {
  let component: InvoiceThankComponent;
  let fixture: ComponentFixture<InvoiceThankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceThankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceThankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
