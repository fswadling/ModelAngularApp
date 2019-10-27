import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

const stringMap = new Map<string, string>([
  ['violatesMinimumVolume', 'Minimum volume has been violated'],
  ['required', 'Required field is missing']
]);

@Pipe({
  name: 'projectFormErrors',
  pure: false
})
export class ProjectFormErrorsPipe implements PipeTransform {

  private unpackAllErrors(errors): string[] {
    if (!errors) {
      return [];
    }
    return Object.entries(errors)
      .filter(error => (stringMap.has(error[0]) && error[1]))
      .map(error => stringMap.get(error[0]));
  }

  private removeDuplicates(strings: string[]) {
    return strings.filter((elem, index, self) =>
      index === self.indexOf(elem)
    );
  }

  transform(value: FormGroup): string[] {
    let errors: string[] = [];

    errors.push(...this.unpackAllErrors(value.errors));

    errors.push(...this.unpackAllErrors(value.controls.minimumVolume.errors));

    errors.push(...this.unpackAllErrors(value.controls.name.errors));

    const exposures = value.controls.exposures as FormArray;

    exposures.controls.forEach(element => {
      const expFormGroup = element as FormGroup;
      errors.push(...this.unpackAllErrors(expFormGroup.controls.volume.errors));
    });

    errors = this.removeDuplicates(errors);

    return errors;
  }
}
