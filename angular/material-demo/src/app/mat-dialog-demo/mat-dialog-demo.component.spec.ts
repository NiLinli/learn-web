import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogDemoComponent } from './mat-dialog-demo.component';

describe('MatDialogDemoComponent', () => {
  let component: MatDialogDemoComponent;
  let fixture: ComponentFixture<MatDialogDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDialogDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDialogDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
