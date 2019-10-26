import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/backend-services/project.service';
import { Observable } from 'rxjs';
import { ProjectListItem } from 'src/app/models/project-list-item';
import { RouterLoadingService } from 'src/app/services/router-loading.service';

@Component({
  selector: 'app-project-selection',
  templateUrl: './project-selection.component.html',
  styleUrls: ['./project-selection.component.scss']
})
export class ProjectSelectionComponent implements OnInit {

  constructor(
    private projectService: ProjectService,
    private routerLoadingService: RouterLoadingService
    ) { }

  projects$: Observable<ProjectListItem[]> = this.projectService.getProjects();

  isRouting$: Observable<boolean> = this.routerLoadingService.isRouting$;

  ngOnInit() {
  }
}
