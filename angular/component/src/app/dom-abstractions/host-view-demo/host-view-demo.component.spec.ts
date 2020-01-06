import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostViewDemoComponent } from './host-view-demo.component';

describe('HostViewDemoComponent', () => {
  let component: HostViewDemoComponent;
  let fixture: ComponentFixture<HostViewDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostViewDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostViewDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
