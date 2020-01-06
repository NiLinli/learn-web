import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandpaComponent } from './grandpa.component';

describe('GrandpaComponent', () => {
  let component: GrandpaComponent;
  let fixture: ComponentFixture<GrandpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
