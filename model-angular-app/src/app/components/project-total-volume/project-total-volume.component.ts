import { Component, OnInit } from '@angular/core';
import { ProjectUpdateService } from 'src/app/services/project-update.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-project-total-volume',
  templateUrl: './project-total-volume.component.html',
  styleUrls: ['./project-total-volume.component.scss']
})
export class ProjectTotalVolumeComponent {

  constructor(private projectUpdateService: ProjectUpdateService) { }

  totalVolume$ = this.projectUpdateService.projectFormData$.pipe(map(projectFormData => {
    return projectFormData.exposures
      .map(e => e.volume)
      .reduce((sum, current) => sum + current, 0);
  }));

}
