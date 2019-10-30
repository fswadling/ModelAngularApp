import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { RouterLoadingService } from 'src/app/services/router-loading.service';
import { ProjectUpdateService } from 'src/app/services/project-update.service';
import { Exposure } from 'src/app/models/exposure';
import { map, switchMap } from 'rxjs/operators';
import { Project } from 'src/app/models/project';
import { ExposureListItem } from 'src/app/models/exposure-list-item';

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

  private exposures$: Observable<ExposureListItem[]> = this.projectUpdateService.exposures$;

  private project$: Observable<Project> = this.actr.data.pipe(map(data => data.project as Project));

  private combined$ = combineLatest([
    this.project$,
    this.exposures$
  ]);

  data$ = this.actr.data.pipe(
    switchMap(data => {
      this.projectUpdateService.update(data.exposures);
      return this.combined$;
    })
  );
}
