import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzDemoModalServiceComponent } from './nz-demo-modal-service.component';

describe('NzDemoModalServiceComponent', () => {
  let component: NzDemoModalServiceComponent;
  let fixture: ComponentFixture<NzDemoModalServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzDemoModalServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzDemoModalServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
