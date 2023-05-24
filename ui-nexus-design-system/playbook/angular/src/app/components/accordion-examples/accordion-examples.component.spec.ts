import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionExamplesComponent } from './accordion-examples.component';

describe('AccordionComponent', () => {
  let component: AccordionExamplesComponent;
  let fixture: ComponentFixture<AccordionExamplesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionExamplesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
