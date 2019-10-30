import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTotalVolumeComponent } from './project-total-volume.component';

describe('ProjectTotalVolumeComponent', () => {
  let component: ProjectTotalVolumeComponent;
  let fixture: ComponentFixture<ProjectTotalVolumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTotalVolumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTotalVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
