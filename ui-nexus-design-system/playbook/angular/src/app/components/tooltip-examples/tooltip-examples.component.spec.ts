import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipExamplesComponent } from './tooltip-examples.component';

describe('TooltipExamplesComponent', () => {
  let component: TooltipExamplesComponent;
  let fixture: ComponentFixture<TooltipExamplesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipExamplesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
