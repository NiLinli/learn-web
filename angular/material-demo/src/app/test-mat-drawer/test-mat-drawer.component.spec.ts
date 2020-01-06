import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMatDrawerComponent } from './test-mat-drawer.component';

describe('TestMatDrawerComponent', () => {
  let component: TestMatDrawerComponent;
  let fixture: ComponentFixture<TestMatDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMatDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMatDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
