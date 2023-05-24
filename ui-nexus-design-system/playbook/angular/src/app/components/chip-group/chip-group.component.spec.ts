import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipGroupComponent } from './chip-group.component';

describe('ChipGroupComponent', () => {
  let component: ChipGroupComponent;
  let fixture: ComponentFixture<ChipGroupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ChipGroupComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
