import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFormRowComponent } from './project-form-row.component';

describe('ProjectFormRowComponent', () => {
  let component: ProjectFormRowComponent;
  let fixture: ComponentFixture<ProjectFormRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectFormRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFormRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
