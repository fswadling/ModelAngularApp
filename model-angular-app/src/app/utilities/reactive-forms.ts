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

function removeDuplicates(strings: string[]) {
  return strings.filter((elem, index, self) =>
    index === self.indexOf(elem)
  );
}

function _getAllErrors(control: AbstractControl): string[] {
  if (control instanceof FormControl) {
    if (!control.errors) {
      return [];
    }
    return Object.entries(control.errors)
      .filter(([key, hasError]) => hasError)
      .map(([key, _]) => key);
  }
  if (control instanceof FormGroup) {
    return Object.entries(control.controls)
      .map(([_, subControl]) => _getAllErrors(subControl))
      .reduce((a, b) => a.concat(b));
  }
  if (control instanceof FormArray) {
    return control.controls
      .map(subControl => _getAllErrors(subControl))
      .reduce((a, b) => a.concat(b));
  }
  return [];
}

export function getAllErrors(control: AbstractControl): string[] {
  let errors = _getAllErrors(control);
  errors = removeDuplicates(errors);
  return errors;
}
