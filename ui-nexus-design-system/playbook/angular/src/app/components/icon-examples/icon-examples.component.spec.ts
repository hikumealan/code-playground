import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconExamplesComponent } from './icon-examples.component';

describe('IconExamplesComponent', () => {
  let component: IconExamplesComponent;
  let fixture: ComponentFixture<IconExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconExamplesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
