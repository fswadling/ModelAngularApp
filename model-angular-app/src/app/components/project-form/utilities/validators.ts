import { AbstractControl, ValidationErrors, FormGroup, FormArray } from '@angular/forms';
import { ProjectFormData } from './project-form-data';
import { ExposureListItem } from 'src/app/models/exposure-list-item';

export function ExposureVolumesGreaterThanOrEqualToMinimumVolume(control: AbstractControl): ValidationErrors | null {
  const formGroup = control as FormGroup;
  const projectFormData = control.value as ProjectFormData;
  const minimumVolume = projectFormData.minimumVolume;
  const exposuresControl = formGroup.controls.exposures as FormArray;
  const errors = {violatesMinimumVolume: true};

  let isExposureVolumeInvalid = false;

  exposuresControl.controls.forEach(exposure => {
    const exposureListItem: ExposureListItem = exposure.value;
    if (exposureListItem.volume < minimumVolume) {
      isExposureVolumeInvalid = true;
      exposure.setErrors({...errors}, { emitEvent: false });
    }
  });

  return isExposureVolumeInvalid
    ? {...errors}
    : null;
}
