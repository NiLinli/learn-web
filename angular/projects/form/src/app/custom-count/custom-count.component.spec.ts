import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCountComponent } from './custom-count.component';

describe('CustomCountComponent', () => {
  let component: CustomCountComponent;
  let fixture: ComponentFixture<CustomCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
