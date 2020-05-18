import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestParamsOptionalComponent } from './test-params-optional.component';

describe('TestParamsOptionalComponent', () => {
  let component: TestParamsOptionalComponent;
  let fixture: ComponentFixture<TestParamsOptionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestParamsOptionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestParamsOptionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
