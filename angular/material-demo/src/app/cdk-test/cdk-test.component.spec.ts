import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkTestDemoComponent } from './cdk-test-demo.component';

describe('CdkTestComponent', () => {
  let component: CdkTestDemoComponent;
  let fixture: ComponentFixture<CdkTestDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CdkTestDemoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkTestDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
