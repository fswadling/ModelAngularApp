import { Pipe, PipeTransform } from '@angular/core';

const stringMap = new Map<string, string>([
  ['violatesMinimumVolume', 'Minimum volume has been violated']
]);

@Pipe({
  name: 'projectFormErrors',
  pure: true
})
export class ProjectFormErrorsPipe implements PipeTransform {
  transform(value: any): string[] {
    if (!value) {
      return [];
    }
    const result = Object.entries(value)
      .filter(error => (stringMap.has(error[0]) && error[1]))
      .map(error => stringMap.get(error[0]));

    return result;
  }
}
