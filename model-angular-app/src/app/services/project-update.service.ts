import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Exposure } from 'src/app/models/exposure';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectUpdateService {
  private subject = new BehaviorSubject<Exposure[]>([]);

  constructor() { }

  public exposures$ = this.subject.asObservable().pipe(
    map(exps => JSON.parse(JSON.stringify(exps)))
  );

  public update(exposures: Exposure[]) {
    this.subject.next(JSON.parse(JSON.stringify(exposures)));
  }
}
