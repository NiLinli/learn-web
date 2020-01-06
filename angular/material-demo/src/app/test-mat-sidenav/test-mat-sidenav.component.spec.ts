import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMatSidenavComponent } from './test-mat-sidenav.component';

describe('TestMatSidenavComponent', () => {
  let component: TestMatSidenavComponent;
  let fixture: ComponentFixture<TestMatSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMatSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMatSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
