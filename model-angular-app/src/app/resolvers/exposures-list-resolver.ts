import { Injectable } from '@angular/core';
import { ExposureService } from '../backend-services/exposure.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ExposureListItem } from '../models/exposure-list-item';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExposuresListResolver {

  constructor(private exposuresService: ExposureService) { }

  resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): Observable<ExposureListItem[]> {
    const projectId: number = Number(route.params.projectId);
    return this.exposuresService.getExposures(projectId).pipe(
      shareReplay(1)
    );
  }
}
