import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioExamplesComponent } from './radio-examples.component';

describe('RadioExamplesComponent', () => {
  let component: RadioExamplesComponent;
  let fixture: ComponentFixture<RadioExamplesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RadioExamplesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
