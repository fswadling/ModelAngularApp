import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLoadingService } from 'src/app/services/router-loading.service';
import { ProjectUpdateService } from 'src/app/services/project-update.service';
import { switchMap } from 'rxjs/operators';
import { Project } from 'src/app/models/project';
import { ExposureListItem } from 'src/app/models/exposure-list-item';
import { ProjectFormData } from 'src/app/models/project-form-data';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent {
  constructor(
    private actr: ActivatedRoute,
    private routerLoadingService: RouterLoadingService,
    private projectUpdateService: ProjectUpdateService) { }

  isRouting$ = this.routerLoadingService.isRouting$;

  projectFormData$ = this.actr.data.pipe(
    switchMap(data => {
      const formData = this.convertToProjectFormData(data.project, data.exposures);
      this.projectUpdateService.update(formData);
      return this.projectUpdateService.projectFormData$;
    })
  );

  private convertToProjectFormData(project: Project, exposures: ExposureListItem[]): ProjectFormData {
    const formData: ProjectFormData = {
      exposures,
      minimumVolume: project.minimumVolume,
      name: project.name
    };
    return formData;
  }
}
