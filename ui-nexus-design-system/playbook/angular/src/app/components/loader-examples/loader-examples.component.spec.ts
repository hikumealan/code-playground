import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderExamplesComponent } from './loader-examples.component';

describe('LoaderExamplesComponent', () => {
  let component: LoaderExamplesComponent;
  let fixture: ComponentFixture<LoaderExamplesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderExamplesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
