import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastExamplesComponent } from './toast-examples.component';

describe('ToastExamplesComponent', () => {
  let component: ToastExamplesComponent;
  let fixture: ComponentFixture<ToastExamplesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ToastExamplesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
