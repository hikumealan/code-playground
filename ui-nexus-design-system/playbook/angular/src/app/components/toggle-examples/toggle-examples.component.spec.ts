import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleExamplesComponent } from './toggle-examples.component';

describe('ToggleExamplesComponent', () => {
  let component: ToggleExamplesComponent;
  let fixture: ComponentFixture<ToggleExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToggleExamplesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
