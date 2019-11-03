import { Pipe, PipeTransform } from '@angular/core';
import { AdditionalVolume } from '../models/additional-volume';

@Pipe({
  name: 'totalAdditionalVolume',
  pure: true
})
export class TotalAdditionalVolumePipe implements PipeTransform {

  transform(value: AdditionalVolume[]): any {
    return value.map(x => x.volume)
      .reduce((sum, current) => sum + current, 0);
  }
}
