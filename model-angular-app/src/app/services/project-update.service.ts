import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { map, first, switchMap } from 'rxjs/operators';
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

  update(projectFormData: ProjectFormData): Observable<ProjectFormData> {
    this.subject.next(JSON.parse(JSON.stringify(projectFormData)));
    return this.projectFormData$;
  }

  mutate(mutator: (projectUpdateServiceData: ProjectFormData) => ProjectFormData)
  : Observable<ProjectFormData> {
    return this.projectFormData$.pipe(
      first(),
      switchMap(data => {
        const newData = mutator(data);
        return this.update(newData);
      })
    );
  }
}
