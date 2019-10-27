import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExposureFormComponent } from './exposure-form.component';

describe('ExposureFormComponent', () => {
  let component: ExposureFormComponent;
  let fixture: ComponentFixture<ExposureFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExposureFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExposureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
