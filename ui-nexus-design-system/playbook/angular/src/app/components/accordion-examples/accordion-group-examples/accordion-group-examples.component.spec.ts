import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionGroupExamplesComponent } from './accordion-group-examples.component';

describe('AccordionComponent', () => {
  let component: AccordionGroupExamplesComponent;
  let fixture: ComponentFixture<AccordionGroupExamplesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionGroupExamplesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionGroupExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
