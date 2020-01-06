
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TestMatNavComponent } from './test-mat-nav.component';

describe('TestMatNavComponent', () => {
  let component: TestMatNavComponent;
  let fixture: ComponentFixture<TestMatNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [TestMatNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestMatNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
