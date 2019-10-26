import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Project } from '../models/project';
import { Observable } from 'rxjs';
import { ProjectService } from '../backend-services/project.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectResolver implements Resolve<Project> {

  constructor(private projectService: ProjectService) { }

  resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): Observable<Project> {
    const projectId: number = Number(route.params.projectId);
    return this.projectService.getProject(projectId);
  }
}
