import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Popular1Component } from './popular1.component';

describe('Popular1Component', () => {
  let component: Popular1Component;
  let fixture: ComponentFixture<Popular1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Popular1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Popular1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
