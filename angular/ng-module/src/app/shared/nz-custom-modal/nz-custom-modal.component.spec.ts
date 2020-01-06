import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzCustomModalComponent } from './nz-custom-modal.component';

describe('NzCustomModalComponent', () => {
  let component: NzCustomModalComponent;
  let fixture: ComponentFixture<NzCustomModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzCustomModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzCustomModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
