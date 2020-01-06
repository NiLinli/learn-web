import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormsDemoComponent } from './template-driven-forms-demo.component';

describe('TemplateDrivenFormsDemoComponent', () => {
  let component: TemplateDrivenFormsDemoComponent;
  let fixture: ComponentFixture<TemplateDrivenFormsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
