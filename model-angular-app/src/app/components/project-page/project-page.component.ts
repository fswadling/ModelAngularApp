import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { RouterLoadingService } from 'src/app/services/router-loading.service';
import { ProjectUpdateService } from 'src/app/services/project-update.service';
import { Exposure } from 'src/app/models/exposure';
import { map } from 'rxjs/operators';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {

  constructor(
    private actr: ActivatedRoute,
    private routerLoadingService: RouterLoadingService,
    private projectUpdateService: ProjectUpdateService) { }

  isRouting$ = this.routerLoadingService.isRouting$;

  exposures$: Observable<Exposure[]> = this.projectUpdateService.exposures$;

  project$: Observable<Project> = this.actr.data.pipe(map(data => data.project as Project));

  data$ = combineLatest([
    this.project$,
    this.exposures$
  ]);

  ngOnInit() {
    this.actr.data.subscribe(data => {
      this.projectUpdateService.update(data.exposures);
    });
  }
}
