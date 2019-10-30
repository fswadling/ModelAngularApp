import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Exposure } from 'src/app/models/exposure';
import { map } from 'rxjs/operators';
import { ExposureListItem } from '../models/exposure-list-item';

@Injectable({
  providedIn: 'root'
})
export class ProjectUpdateService {
  private subject = new ReplaySubject<ExposureListItem[]>();

  constructor() { }

  exposures$ = this.subject.pipe(
    map(exps => JSON.parse(JSON.stringify(exps)) as ExposureListItem[]),
  );

  update(exposures: ExposureListItem[]) {
    this.subject.next(JSON.parse(JSON.stringify(exposures)));
  }
}
