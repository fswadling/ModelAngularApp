import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Exposure } from 'src/app/models/exposure';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectUpdateService {
  private subject = new ReplaySubject<Exposure[]>();

  constructor() { }

  exposures$ = this.subject.pipe(
    map(exps => JSON.parse(JSON.stringify(exps)) as Exposure[]),
  );

  update(exposures: Exposure[]) {
    this.subject.next(JSON.parse(JSON.stringify(exposures)));
  }
}
