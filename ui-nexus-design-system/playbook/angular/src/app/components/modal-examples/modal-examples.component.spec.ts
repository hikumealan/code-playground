import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExamplesComponent } from './modal-examples.component';

describe('ModalExamplesComponent', () => {
  let component: ModalExamplesComponent;
  let fixture: ComponentFixture<ModalExamplesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ModalExamplesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
