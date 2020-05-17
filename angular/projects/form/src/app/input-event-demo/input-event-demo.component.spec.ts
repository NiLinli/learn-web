import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEventDemoComponent } from './input-event-demo.component';

describe('InputEventDemoComponent', () => {
  let component: InputEventDemoComponent;
  let fixture: ComponentFixture<InputEventDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputEventDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputEventDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
