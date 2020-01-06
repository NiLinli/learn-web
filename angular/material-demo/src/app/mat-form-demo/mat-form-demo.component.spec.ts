import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormDemoComponent } from './mat-form-demo.component';

describe('MatFormDemoComponent', () => {
  let component: MatFormDemoComponent;
  let fixture: ComponentFixture<MatFormDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatFormDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatFormDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
