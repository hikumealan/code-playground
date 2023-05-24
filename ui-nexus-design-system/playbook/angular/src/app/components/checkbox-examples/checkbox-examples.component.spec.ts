import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxExamplesComponent } from './checkbox-examples.component';

describe('CheckboxExamplesComponent', () => {
  let component: CheckboxExamplesComponent;
  let fixture: ComponentFixture<CheckboxExamplesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxExamplesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
