import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchRegisterComponent } from './switch-register.component';

describe('SwitchRegisterComponent', () => {
  let component: SwitchRegisterComponent;
  let fixture: ComponentFixture<SwitchRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
