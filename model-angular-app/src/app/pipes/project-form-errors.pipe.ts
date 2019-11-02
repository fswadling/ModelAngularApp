import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { getAllErrors } from '../utilities/reactive-forms';

const stringMap = new Map<string, string>([
  ['violatesMinimumVolume', 'Minimum volume has been violated'],
  ['required', 'Required field is missing']
]);

@Pipe({
  name: 'projectFormErrors',
  pure: false
})
export class ProjectFormErrorsPipe implements PipeTransform {

  transform(value: FormGroup): string[] {
    debugger;
    let errors: string[] = getAllErrors(value);
    errors = errors.map(error => stringMap.get(error));
    return errors;
  }
}
