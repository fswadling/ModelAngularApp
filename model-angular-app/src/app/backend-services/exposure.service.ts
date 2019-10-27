import { Injectable } from '@angular/core';
import { ExposureListItem } from '../models/exposure-list-item';
import { timer, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Exposure } from '../models/exposure';

@Injectable({
  providedIn: 'root'
})
export class ExposureService {
  getExposures(projectId: number): Observable<ExposureListItem[]> {
    return timer(2000).pipe(map(_ => {
      return [
        {
          id: 0,
          volume: 2000
        },
        {
          id: 1,
          volume: 5000
        }
      ];
    }));
  }

  getExposure(projectId: number, exposureId: number): Observable<Exposure> {
    return this.getExposures(projectId).pipe(
      map(li => ({
        volume: li.find(x => x.id === exposureId).volume,
        additionalVolumes: [
        {
          volume: 100
        },
        {
          volume: 500
        },
        {
          volume: 600
        }]
      }))
    );
  }

  constructor() { }
}
