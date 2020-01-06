
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMatTableComponent } from './test-mat-table.component';

describe('TestMatTableComponent', () => {
  let component: TestMatTableComponent;
  let fixture: ComponentFixture<TestMatTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMatTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
