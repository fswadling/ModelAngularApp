import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProjectFormData } from '../models/project-form-data';
import { ExposureVolumesGreaterThanOrEqualToMinimumVolume } from './utilities/validators';

@Injectable({
  providedIn: 'root'
})
export class CreateProjectFormService {

  constructor(private formBuilder: FormBuilder) { }

  createFormGroup(projectFormData: ProjectFormData) {
    return this.formBuilder.group({
      name: [projectFormData.name, Validators.required],
      minimumVolume: [projectFormData.minimumVolume, Validators.required],
      exposures: this.formBuilder.array(projectFormData.exposures.map(e => this.formBuilder.group({
        id: e.id,
        volume: [e.volume, Validators.required]
      })))
    },
    {
      validators: [
        ExposureVolumesGreaterThanOrEqualToMinimumVolume
      ]
    });
  }
}
