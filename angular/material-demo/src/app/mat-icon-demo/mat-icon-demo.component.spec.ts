import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatIconDemoComponent } from './mat-icon-demo.component';

describe('MatIconDemoComponent', () => {
  let component: MatIconDemoComponent;
  let fixture: ComponentFixture<MatIconDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatIconDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatIconDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
