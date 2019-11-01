import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProjectFormData } from '../models/project-form-data';

@Injectable({
  providedIn: 'root'
})
export class ProjectUpdateService {
  private subject = new ReplaySubject<ProjectFormData>();

  constructor() { }

  projectFormData$ = this.subject.pipe(
    map(exps => JSON.parse(JSON.stringify(exps)) as ProjectFormData),
  );

  update(exposures: ProjectFormData): Observable<ProjectFormData> {
    this.subject.next(JSON.parse(JSON.stringify(exposures)));
    return this.projectFormData$;
  }
}
