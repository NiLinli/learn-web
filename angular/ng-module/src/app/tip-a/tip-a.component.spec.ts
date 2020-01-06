import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipAComponent } from './tip-a.component';

describe('TipAComponent', () => {
  let component: TipAComponent;
  let fixture: ComponentFixture<TipAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
