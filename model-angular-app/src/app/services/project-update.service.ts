import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { map, first, switchMap } from 'rxjs/operators';
import { ProjectFormData } from '../models/project-form-data';

@Injectable({
  providedIn: 'root'
})
export class ProjectUpdateService {
  private subject = new ReplaySubject<ProjectFormData>(1);

  constructor() { }

  projectFormData$ = this.subject.pipe(
    map(exps => JSON.parse(JSON.stringify(exps)) as ProjectFormData),
  );

  update(projectFormData: ProjectFormData): void {
    this.subject.next(JSON.parse(JSON.stringify(projectFormData)));
  }

  value() {
    let currentValue: ProjectFormData;
    const subscription = this.subject.subscribe(value => {
      currentValue = value;
    });
    subscription.unsubscribe();
    return currentValue;
  }

  mutate(mutator: (data: ProjectFormData) => ProjectFormData) {
    const value = this.value();
    const newValue = mutator(value);
    this.update(newValue);
  }
}
