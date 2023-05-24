import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipExamplesComponent } from './chip-examples.component';

describe('ChipExamplesComponent', () => {
  let component: ChipExamplesComponent;
  let fixture: ComponentFixture<ChipExamplesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ChipExamplesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
