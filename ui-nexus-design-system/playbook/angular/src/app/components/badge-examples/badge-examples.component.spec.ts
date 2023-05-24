import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeExamplesComponent } from './badge-examples.component';

describe('BadgeExamplesComponent', () => {
  let component: BadgeExamplesComponent;
  let fixture: ComponentFixture<BadgeExamplesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BadgeExamplesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
