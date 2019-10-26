import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/backend-services/project.service';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-project-selection',
  templateUrl: './project-selection.component.html',
  styleUrls: ['./project-selection.component.scss']
})
export class ProjectSelectionComponent implements OnInit {

  projects$: Observable<Project[]> = this.projectService.getProjects();

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }
}
