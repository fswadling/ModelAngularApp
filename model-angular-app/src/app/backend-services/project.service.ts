import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { Project } from '../models/project';
import { first, map } from 'rxjs/operators';
import { ProjectListItem } from '../models/project-list-item';
import { ProjectPageComponent } from '../components/project-page/project-page.component';

const testProjectListItems: ProjectListItem[] =
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

const testProjects: Project[] =
[
  {
    name: 'Project 1',
    id: 0,
    exposures: [
      {
        id: 0,
        maturityDate: new Date(2020, 1, 1),
        volume: 1000
      },
      {
        id: 1,
        maturityDate: new Date(2020, 6, 1),
        volume: 5000
      }
    ]
  },
  {
    name: 'Project 2',
    id: 1,
    exposures: [
      {
        id: 2,
        maturityDate: new Date(2020, 1, 1),
        volume: 1000
      },
      {
        id: 3,
        maturityDate: new Date(2020, 6, 1),
        volume: 5000
      }
    ]
  }
];

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Observable<ProjectListItem[]> {
    return timer(2000).pipe(
      first(),
      map(_ => testProjectListItems));
  }

  getProject(id: number): Observable<Project> {
    return timer(2000).pipe(
      first(),
      map(_ => testProjects.find(p => p.id === id))
    );
  }
}
