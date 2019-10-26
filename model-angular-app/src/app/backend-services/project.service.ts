import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { Project } from '../models/project';
import { first, map } from 'rxjs/operators';

const testProjects: Project[] =
[
  {
    name: 'Project 1',
    id: 0
  },
  {
    name: 'Project 2',
    id: 1
  }
];

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Observable<Project[]> {
    return timer(3000).pipe(
      first(),
      map(_ => testProjects));
  }
}
