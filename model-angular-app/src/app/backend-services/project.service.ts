import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { Project } from '../models/project';
import { first, map } from 'rxjs/operators';
import { ProjectListItem } from '../models/project-list-item';

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
    minimumVolume: 0
  },
  {
    name: 'Project 2',
    id: 1,
    minimumVolume: 0
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
