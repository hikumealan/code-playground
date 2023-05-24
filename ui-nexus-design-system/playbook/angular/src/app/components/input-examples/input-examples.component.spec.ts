import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputExamplesComponent } from './input-examples.component';

describe('NexusInputExamplesComponent', () => {
  let component: InputExamplesComponent;
  let fixture: ComponentFixture<InputExamplesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [InputExamplesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
