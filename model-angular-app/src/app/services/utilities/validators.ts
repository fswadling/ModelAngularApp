import { AbstractControl, ValidationErrors, FormGroup, FormArray } from '@angular/forms';
import { ExposureListItem } from 'src/app/models/exposure-list-item';
import { ProjectFormData } from 'src/app/models/project-form-data';

export function ExposureVolumesGreaterThanOrEqualToMinimumVolume(control: AbstractControl): ValidationErrors | null {
  const formGroup = control as FormGroup;
  const projectFormData = control.value as ProjectFormData;
  const minimumVolume = projectFormData.minimumVolume;
  const exposuresControl = formGroup.controls.exposures as FormArray;
  const errors = {violatesMinimumVolume: true};

  let isExposureVolumeInvalid = false;

  exposuresControl.controls.forEach(exposure => {
    const exposureListItem: ExposureListItem = exposure.value;
    const exposureFormGroup = exposure as FormGroup;

    if (exposureListItem.volume < minimumVolume) {
      isExposureVolumeInvalid = true;
      const currentErrors = exposureFormGroup.controls.volume.errors;
      const allErrors = {...errors, ...currentErrors};
      exposureFormGroup.controls.volume.setErrors(allErrors);
    } else if (exposureFormGroup.controls.volume.hasError('violatesMinimumVolume')) {
      exposureFormGroup.controls.volume.setErrors({violatesMinimumVolume: null});
      exposureFormGroup.controls.volume.updateValueAndValidity();
    }
  });

  return isExposureVolumeInvalid
    ? {...errors}
    : null;
}
