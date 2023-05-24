import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinEntryExamplesComponent } from './pin-entry-examples.component';

describe('PinEntryExamplesComponent', () => {
  let component: PinEntryExamplesComponent;
  let fixture: ComponentFixture<PinEntryExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PinEntryExamplesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinEntryExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
