import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrDirectiveDemoComponent } from './attr-directive-demo.component';

describe('AttrDirectiveDemoComponent', () => {
  let component: AttrDirectiveDemoComponent;
  let fixture: ComponentFixture<AttrDirectiveDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttrDirectiveDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrDirectiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
