import { AbstractControl, FormControl, FormArray, FormGroup } from '@angular/forms';

export function setChangedControlsAsDirty(control: AbstractControl, oldValue) {
  if (control instanceof FormControl) {
    if (oldValue !== control.value) {
      control.markAsDirty();
    }
    return;
  }
  if (control instanceof FormGroup) {
    Object.entries(control.controls).forEach(([key, subControl]) => {
      const oldSubValue = oldValue[key];
      setChangedControlsAsDirty(subControl, oldSubValue);
    });
    return;
  }
  if (control instanceof FormArray) {
    control.controls.forEach((subControl, index) => {
      const oldSubValue = oldValue[index];
      setChangedControlsAsDirty(subControl, oldSubValue);
    });
  }
  return;
}

export function patchSettingChangedPropertiesDirty(control: AbstractControl, newValue, options?: Object) {
  const oldValue = control.value;
  control.patchValue(newValue, options);
  setChangedControlsAsDirty(control, oldValue);
}
