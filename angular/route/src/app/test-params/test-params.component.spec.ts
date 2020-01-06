import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestParamsComponent } from './test-params.component';

describe('TestParamsComponent', () => {
  let component: TestParamsComponent;
  let fixture: ComponentFixture<TestParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
