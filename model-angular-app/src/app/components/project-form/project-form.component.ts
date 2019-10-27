import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Project } from 'src/app/models/project';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExposureListItem } from 'src/app/models/exposure-list-item';
import { ExposureVolumesGreaterThanOrEqualToMinimumVolume } from './utilities/validators';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnChanges {

  @Input() project: Project;
  @Input() exposures: ExposureListItem[];

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnChanges() {
    this.formGroup = this.createFormGroup(this.project, this.exposures);
  }

  createFormGroup(project: Project, exposures: ExposureListItem[]) {
    return this.formBuilder.group(({
      name: [project.name, Validators.required],
      minimumVolume: [project.minimumVolume, Validators.required],
      exposures: this.formBuilder.array(exposures.map(e => this.formBuilder.group(e)))
    }),
    {
      validators: [
        ExposureVolumesGreaterThanOrEqualToMinimumVolume
      ]
    });
  }
}
