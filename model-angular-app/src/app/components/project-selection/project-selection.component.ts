import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/backend-services/project.service';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/project';
import { ProjectListItem } from 'src/app/models/project-list-item';

@Component({
  selector: 'app-project-selection',
  templateUrl: './project-selection.component.html',
  styleUrls: ['./project-selection.component.scss']
})
export class ProjectSelectionComponent implements OnInit {

  projects$: Observable<ProjectListItem[]> = this.projectService.getProjects();

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }
}
