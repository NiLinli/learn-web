import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1ChildComponent } from './tab1-child.component';

describe('Tab1ChildComponent', () => {
  let component: Tab1ChildComponent;
  let fixture: ComponentFixture<Tab1ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab1ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
