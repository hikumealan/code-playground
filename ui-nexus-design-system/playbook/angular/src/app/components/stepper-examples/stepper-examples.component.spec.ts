import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperExamplesComponent } from './stepper-examples.component';

describe('StepperComponent', () => {
  let component: StepperExamplesComponent;
  let fixture: ComponentFixture<StepperExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepperExamplesComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
