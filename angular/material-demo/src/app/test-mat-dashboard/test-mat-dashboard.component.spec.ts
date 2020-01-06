
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMatDashboardComponent } from './test-mat-dashboard.component';

describe('TestMatDashboardComponent', () => {
  let component: TestMatDashboardComponent;
  let fixture: ComponentFixture<TestMatDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMatDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestMatDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
