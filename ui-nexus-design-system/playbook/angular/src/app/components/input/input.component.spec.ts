import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NexusInputComponent } from './input.component';

describe('NexusInputComponent', () => {
  let component: NexusInputComponent;
  let fixture: ComponentFixture<NexusInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NexusInputComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NexusInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
