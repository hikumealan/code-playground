import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldExamplesComponent } from './form-field-examples.component';

describe('FormFieldExamplesComponent', () => {
  let component: FormFieldExamplesComponent;
  let fixture: ComponentFixture<FormFieldExamplesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FormFieldExamplesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
