import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderExamplesComponent } from './slider-examples.component';

describe('SliderExamplesComponent', () => {
  let component: SliderExamplesComponent;
  let fixture: ComponentFixture<SliderExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderExamplesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
