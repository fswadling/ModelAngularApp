import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Exposure } from '../models/exposure';
import { Observable } from 'rxjs';
import { ExposureService } from '../backend-services/exposure.service';

@Injectable({
  providedIn: 'root'
})
export class ExposureResolver implements Resolve<Exposure> {

  constructor(private exposureService: ExposureService) { }

  resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): Observable<Exposure> {
    const projectId: number = Number(route.parent.params.projectId);
    const exposureId: number = Number(route.params.exposureId);
    return this.exposureService.getExposure(projectId, exposureId);
  }
}
